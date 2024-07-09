import { List, Datagrid, TextField } from "react-admin";
import type { Recipe } from "../../Types";

export const RecipesList = () => (
  <List>
    <Datagrid>
      <TextField<Recipe> source="title" />
    </Datagrid>
  </List>
);
