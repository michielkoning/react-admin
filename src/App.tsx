import {
  Admin,
  CustomRoutes,
  Resource,
} from "react-admin";
import { dataProvider } from "./DataProviders/SupabaseDataProvider";
import { authProvider } from "./AuthProvider/SupabaseAuthProvider";
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { Route } from 'react-router-dom';
import { i18nProvider } from "./I18n/I18nProdvider";
import Recipes from "./Views/Recipes";

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
    <Resource {...Recipes} />
  </Admin>
);
