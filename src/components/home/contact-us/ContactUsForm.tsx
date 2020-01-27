import React from "react";

import { Formik, Form, Field, FieldProps } from "formik";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

type FormValues = {
  lastname: string;
  firstname: string;
  email: string;
  message: string;
};

export const ContactUsForm: React.FC = () => {
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
      render={formikBag => (
        <Form>
          <Field
            name={"firstname"}
            render={({ field, form, meta }: FieldProps) => (
              <div>
                <TextField variant="filled" type="text" label={"Prénom"} {...field} />
              </div>
            )}
          />
          <Field
            name={"lastname"}
            render={({ field, form, meta }: FieldProps) => (
              <div>
                <TextField variant="filled" type="text" label={"Nom"} {...field} />
              </div>
            )}
          />
          <Field
            name={"email"}
            render={({ field, form, meta }: FieldProps) => (
              <div>
                <TextField variant="filled" type="text" label={"Email"} {...field} />
              </div>
            )}
          />
          <Field
            name={"message"}
            render={({ field, form, meta }: FieldProps) => (
              <div>
                <TextareaAutosize rowsMin={10} rowsMax={100} placeholder={"Votre message..."} />
              </div>
            )}
          />
        </Form>
      )}
    />
  );
};
