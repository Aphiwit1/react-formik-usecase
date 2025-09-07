import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

export function NestedObject() {
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required.").min(3, "Username must be at least 3 characters"),
        friends: Yup.array().of(
            Yup.string().required("Friend's name is required.")
        ),
    });

    return (
        <Formik
            initialValues={{
                username: "",
                friends: [""]
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log("declarative value:::", values);
                // Simulate an API call
                setTimeout(() => {
                    setSubmitting(false); // Make sure to set isSubmitting back to false
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col gap-y-5'>
                    <Field name="username" type="text" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    <ErrorMessage name="username">
                        {(msg) => <div className="text-red-500 text-left">{msg}</div>}
                    </ErrorMessage>

                    <FieldArray
                        name="friends"
                        render={(arrayHelpers) => (
                            <div>
                                {arrayHelpers.form.values.friends.map((_, index: number) => (
                                    <div key={index} className='flex flex-col mb-10'>
                                        <label className='text-left text-xs w-fit border rounded-sm border-blue-300 p-1 bg-blue-700 mb-1'>{`Friend-${index + 1}`}</label>
                                        <div className="flex gap-2">
                                            <Field name={`friends[${index}]`} className="bg-gray-100 border border-blue-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                                            <button type="button" onClick={() => arrayHelpers.remove(index)} className="p-2 border rounded-full bg-red-500 text-white cursor-pointer">-</button>
                                        </div>
                                        <ErrorMessage name={`friends[${index}]`}>
                                            {(msg) => <div className="text-red-500 text-left">{msg}</div>}
                                        </ErrorMessage>
                                    </div>
                                ))}
                                <div className="flex flex-start">
                                    <button type="button" onClick={() => arrayHelpers.push("")} className="p-2 rounded-sm bg-green-200 text-white mt-2 cursor-pointer">+add friend</button>
                                </div>
                            </div>
                        )}
                    />

                    <button type="submit" disabled={isSubmitting} className="text-white cursor-pointer bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}