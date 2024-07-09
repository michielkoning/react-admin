import {
  Admin,
  CustomRoutes,
  Resource,
} from "react-admin";
import { dataProvider } from "./DataProviders/Supabase";
import { RecipesList } from './Views/Recipes/RecipesList'
import { authProvider } from "./AuthProvider/Supabase";
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { Route } from 'react-router-dom';
import { i18nProvider } from "./I18n/I18nProdvider";

export const App = () => (

  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage} i18nProvider={i18nProvider}>
    <CustomRoutes noLayout>
      <Route
        path={SetPasswordPage.path}
        element={<SetPasswordPage />}
      />
      <Route
        path={ForgotPasswordPage.path}
        element={<ForgotPasswordPage />}
      />
    </CustomRoutes>
    <Resource name="recipes" list={RecipesList} />
  </Admin>
);
