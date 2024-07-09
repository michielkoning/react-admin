import { FunctionComponent } from 'react';
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, ShowProps } from 'react-admin';
import { Recipe } from '../../Types';


const RecipeTitle: FunctionComponent = () => {
  const record = useRecordContext<Recipe>();
  if (!record) return null;
  return <>{record.title}</>;
};

export const RecipesShow: FunctionComponent<ShowProps> = () => (
  <Show title={<RecipeTitle />}>
    <SimpleShowLayout>
      <TextField<Recipe> source="title" />
      <RichTextField<Recipe> source="content" />
      <DateField<Recipe> source="inserted_at" />
    </SimpleShowLayout>
  </Show>
);
