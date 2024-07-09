import { FunctionComponent } from "react";
import { Edit, EditProps, SimpleForm, TextInput, required } from "react-admin";


    export const RecipesEdit: FunctionComponent<EditProps> = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" validate={required()} />
    </SimpleForm>
  </Edit>
);
