import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { FormValues } from "./interface";

const initialValues: FormValues = {
  orders: [
    {
      productName: "Product A",
      type: "normal",
      options: [{ name: "size", value: "L" }],
    },
    {
      productName: "Special Project B",
      type: "special",
      options: [{ name: "phase", value: "1", country: "" }],
    },
  ],
};

const validationSchema = Yup.object().shape({
  orders: Yup.array().of(
    Yup.object().shape({
      productName: Yup.string().required("Product name is required"),
      type: Yup.string().oneOf(["normal", "special"]).required(),
      options: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required("Option name is required"),
          value: Yup.string().required("Option value is required"),
          country: Yup.string().when("..type", {
            is: "special",
            then: (schema) =>
              schema.required("Country is required for special product"),
          }),
        })
      ),
    })
  ),
});

export default function OrderForm() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form className="space-y-6">
            <FieldArray name="orders">
              {({ push, remove }) => (
                <div className="space-y-6">
                  {values.orders.map((order, orderIndex) => (
                    <div
                      key={orderIndex}
                      className="p-4 border rounded-lg space-y-4"
                    >
                      <div>
                        <Field
                          name={`orders[${orderIndex}].productName`}
                          placeholder="Product Name"
                          className="w-full px-3 py-2 border rounded-md"
                        />
                        <ErrorMessage
                          name={`orders[${orderIndex}].productName`}
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        {/* <Field
                          as="select"
                          name={`orders[${orderIndex}].type`}
                          className="px-3 py-2 border rounded-md"
                        >
                          <option value="normal">Normal Product</option>
                          <option value="special">Special Product</option>
                        </Field> */}
                        <ErrorMessage
                          name={`orders[${orderIndex}].type`}
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <FieldArray name={`orders[${orderIndex}].options`}>
                        {({ push: pushOption, remove: removeOption }) => (
                          <div className="space-y-4">
                            {order.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
                              >
                                <div>
                                  <Field
                                    name={`orders[${orderIndex}].options[${optionIndex}].name`}
                                    placeholder="Option Name"
                                    className="w-full px-3 py-2 border rounded-md"
                                  />
                                  <ErrorMessage
                                    name={`orders[${orderIndex}].options[${optionIndex}].name`}
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>

                                <div>
                                  <Field
                                    name={`orders[${orderIndex}].options[${optionIndex}].value`}
                                    placeholder="Option Value"
                                    className="w-full px-3 py-2 border rounded-md"
                                  />
                                  <ErrorMessage
                                    name={`orders[${orderIndex}].options[${optionIndex}].value`}
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>

                                {order.type === "special" && (
                                  <div>
                                    <Field
                                      as="select"
                                      name={`orders[${orderIndex}].options[${optionIndex}].country`}
                                      className="w-full px-3 py-2 border rounded-md"
                                    >
                                      <option value="">Select Country</option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Japan">Japan</option>
                                      <option value="USA">USA</option>
                                    </Field>
                                    <ErrorMessage
                                      name={`orders[${orderIndex}].options[${optionIndex}].country`}
                                      component="div"
                                      className="text-red-500 text-xs mt-1"
                                    />
                                  </div>
                                )}

                                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row   mt-1">
                                  <button
                                    type="button"
                                    onClick={() => removeOption(optionIndex)}
                                    className="bg-red-500 text-white px-1 py-1 rounded-md text-xs"
                                  >
                                    Remove Option
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      pushOption({
                                        name: "",
                                        value: "",
                                        country: "",
                                      })
                                    }
                                    className="bg-green-500 text-white px-1 py-1 rounded-md text-xs"
                                  >
                                    Add Option
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </FieldArray>

                      <button
                        type="button"
                        onClick={() => remove(orderIndex)}
                        className="text-red-500 border border-red-500 px-3 py-1 rounded-md"
                      >
                        Remove Product
                      </button>
                    </div>
                  ))}

                  <div className="space-x-4">
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          productName: "",
                          type: "normal",
                          options: [{ name: "", value: "" }],
                        })
                      }
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Add Product
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          productName: "",
                          type: "special",
                          options: [{ name: "", value: "", country: "" }],
                        })
                      }
                      className="px-4 py-2 bg-purple-500 text-white rounded-md"
                    >
                      Add Special Project
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
