import { RecipesEdit } from './RecipesEdit';
import { RecipesList } from './RecipesList';
import { RecipesShow } from './RecipesShow';
import DescriptionIcon from '@mui/icons-material/Description';
import { ResourceProps } from 'react-admin';

const RecipeRecourse: ResourceProps = {
  name: "recipes",
  list: RecipesList,
  show: RecipesShow,
  edit: RecipesEdit,
  icon: DescriptionIcon
};

export default RecipeRecourse