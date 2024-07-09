import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext } from 'react-admin';
import { Recipe } from '../../Types';


const RecipeTitle = () => {
  const record = useRecordContext<Recipe>();
  if (!record) return null;
  return <>{record.title}</>;
};

export const RecipesShow = () => (
  <Show title={<RecipeTitle />}>
    <SimpleShowLayout>
      <TextField<Recipe> source="title" />
      <RichTextField<Recipe> source="content" />
      <DateField<Recipe> label="Publication date" source="inserted_at" />
    </SimpleShowLayout>
  </Show>
);
