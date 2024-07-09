import { ResourceProps } from "react-admin";
import DescriptionIcon from "@mui/icons-material/Description";
import { RecipesEdit } from "./RecipesEdit";
import { RecipesList } from "./RecipesList";
import { RecipesShow } from "./RecipesShow";

export const RecipeRecourses: ResourceProps = {
  name: "recipes",
  list: RecipesList,
  show: RecipesShow,
  edit: RecipesEdit,
  icon: DescriptionIcon,
};
