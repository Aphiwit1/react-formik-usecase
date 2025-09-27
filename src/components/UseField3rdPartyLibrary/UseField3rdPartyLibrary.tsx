import { Form, Formik } from "formik";
import * as Yup from "yup";
import { SelectField } from "./component/SelectField";

const countryOptions = [
  { value: "TH", label: "Thailand" },
  { value: "JP", label: "Japan" },
  { value: "US", label: "USA" },
];

export function UseField3rdPartyLibrary() {
  return (
    <Formik
      initialValues={{ country: "" }}
      validationSchema={Yup.object({
        country: Yup.string().required("Please select a country"),
      })}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <Form className="flex flex-col gap-y-5">
        <SelectField name="country" label="Country" options={countryOptions} />
        <button
          className="text-white cursor-pointer bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
