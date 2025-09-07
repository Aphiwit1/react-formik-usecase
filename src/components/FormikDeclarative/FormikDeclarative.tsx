import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import * as Yup from "yup";


export function FormikDeclarative() {


    const validationSchema = Yup.object({
        username: Yup.string().required("username is required.").min(3, "Username must be at least 3 characters")

    });

    return (
        <Formik initialValues={{
            username: ""
        }} validationSchema={validationSchema} onSubmit={(values) => {
            console.log("declarative value:::", values)
        }}>
            <Form className='flex flex-col gap-y-5' >
                <Field name="username" type="text" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                <ErrorMessage name="username">
                    {(msg) => (
                        <div className="text-red-500 text-left">{msg}</div>
                    )}
                </ErrorMessage>

                <button type="submit" className="text-white cursor-pointer bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
            </Form>
        </Formik>
    )
}