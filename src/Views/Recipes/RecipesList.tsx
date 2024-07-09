import { List, Datagrid, TextField, ListProps } from "react-admin";
import type { Recipe } from "../../Types";
import { FunctionComponent } from "react";

export const RecipesList: FunctionComponent<ListProps> = () => (
  <List>
    <Datagrid>
      <TextField<Recipe> source="title" />
    </Datagrid>
  </List>
);
