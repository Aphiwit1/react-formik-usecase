// SelectField.tsx

import { useField, useFormikContext } from "formik";
import Select from "react-select";

type Option = { value: string; label: string };

type Props = {
    name: string;
    options: Option[];
    label: string;
};

export function SelectField({ name, options, label }: Props) {
    const [field, meta] = useField(name); //จัดการ touch, error
    const { setFieldValue } = useFormikContext<any>(); // ใช้ update ค่าเอง

    return (
        <div className="flex flex-col" style={{ marginBottom: "1rem" }}>
            <label className='text-left'>{label}</label>
            <Select
                name={name}
                options={options}
                value={options.find((o) => o.value === field.value) || null}
                onChange={(option) => setFieldValue(name, (option as Option)?.value)}
                onBlur={field.onBlur}
            />
            {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
        </div>
    );
}
