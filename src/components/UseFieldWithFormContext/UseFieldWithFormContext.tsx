import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./components/TextInput";
import { SubmitButton } from "./components/SubmitButton";
import { FormStatus } from "./components/FormStatus";

export function UseFieldWithFormContext() {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Required"),
                password: Yup.string().min(6, "อย่างน้อย 6 ตัวอักษร").required("Required"),
            })}
            onSubmit={(values) => new Promise((res) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    res(null);
                }, 1500);
            })}
        >
            <Form className='flex flex-col gap-y-5'>
                <TextInput name="email" label="Email" />
                <TextInput name="password" label="Password" type="password" />

                {/* ใช้ร่วมกัน */}
                <SubmitButton />
                <FormStatus />
            </Form>
        </Formik>
    );
}