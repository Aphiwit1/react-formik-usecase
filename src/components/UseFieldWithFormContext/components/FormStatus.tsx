
import { useFormikContext } from "formik";

export function FormStatus() {
    const { values, isSubmitting, errors } = useFormikContext<any>();

    return (
        <div className="flex" style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
            <h4>📊 Form Debug</h4>
            <pre>{JSON.stringify({ values, errors, isSubmitting }, null, 2)}</pre>
        </div>
    );
}