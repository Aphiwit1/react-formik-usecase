// TextInput.tsx
import React from "react";
import { useField } from "formik";

type Props = {
    label: string;
    name: string;
    type?: string;
};

export function TextInput({ label, name, type = "text" }: Props) {
    const [field, meta] = useField(name);

    return (
        <div style={{ marginBottom: "1rem" }}>
            <label>
                {label}
                <input  {...field} type={type} placeholder={label} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5' />
            </label>
            {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
        </div>
    );
}
