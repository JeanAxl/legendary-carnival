import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

type FormValues = {
  lastname: string;
  firstname: string;
};

export const JoinUsForm: React.FC = () => {
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
  };
  return (
    <div>
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
                  <TextField type="text" label={"Prénom"} {...field} />
                </div>
              )}
            />{" "}
            <Field
              name={"lastname"}
              render={({ field, form, meta }: FieldProps) => (
                <div>
                  <TextField type="text" label={"Nom"} {...field} />
                </div>
              )}
            />
            <Field
              name={"gender"}
              render={({ field, form, meta }: FieldProps) => (
                <div>
                  <FormControl>
                    <InputLabel id={"gender-select-label"}>Gender </InputLabel>
                    <Select labelId={"gender-select-label"} {...field} fullWidth>
                      <MenuItem value={"homme"}>Homme</MenuItem>
                      <MenuItem value={"femme"}>Femme</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            />
            <Field
              name={"motivation"}
              render={({ field, form, meta }: FieldProps) => (
                <div>
                  <TextareaAutosize rowsMin={10} rowsMax={100} />
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
};
