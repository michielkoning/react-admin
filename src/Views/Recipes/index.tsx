import { RecipesList } from './RecipesList';
import { RecipesShow } from './RecipesShow';
import DescriptionIcon from '@mui/icons-material/Description';
import { ResourceProps } from 'react-admin';

const RecipeRecourse: ResourceProps = {
  name: "recipes",
  list: RecipesList,
  show: RecipesShow,
  icon: DescriptionIcon
};

export default RecipeRecourse