import { mergeTranslations } from "ra-core";
import dutchMessages from "ra-language-dutch";
import { raSupabaseEnglishMessages } from "ra-supabase-language-english";
import { RecipesTranslations } from "./RecipesTranslations";

export default mergeTranslations(
  dutchMessages,
  raSupabaseEnglishMessages,
  RecipesTranslations,
);
