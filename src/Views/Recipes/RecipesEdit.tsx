import { Edit, SimpleForm, TextInput } from "react-admin";
import type { Recipe } from "../../Types";

export const RecipesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput<Recipe> source="title" />
    </SimpleForm>
  </Edit>
);
