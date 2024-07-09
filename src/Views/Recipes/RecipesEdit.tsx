import { FunctionComponent } from "react";
import {
  Edit,
  EditProps,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
} from "react-admin";
import { Recipe } from "../../Types";

const RecipeEditTitle: FunctionComponent = () => {
  const record = useRecordContext<Recipe>();
  if (!record) return null;
  return <>{record.title}</>;
};

export const RecipesEdit: FunctionComponent<EditProps> = () => (
  <Edit title={<RecipeEditTitle />}>
    <SimpleForm>
      <TextInput source="title" validate={required()} />
    </SimpleForm>
  </Edit>
);
