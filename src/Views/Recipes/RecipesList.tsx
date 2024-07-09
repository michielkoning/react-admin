import { FunctionComponent } from "react";
import { List, Datagrid, TextField, ListProps } from "react-admin";
import type { Recipe } from "../../Types";

export const RecipesList: FunctionComponent<ListProps> = () => (
  <List>
    <Datagrid>
      <TextField<Recipe> source="title" />
    </Datagrid>
  </List>
);
