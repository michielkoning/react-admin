import { mergeTranslations } from 'ra-core';
import englishMessages from 'ra-language-english';
import { raSupabaseEnglishMessages } from 'ra-supabase-language-english';

export default mergeTranslations(
  englishMessages,
  raSupabaseEnglishMessages
);