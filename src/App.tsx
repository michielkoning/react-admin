import { FunctionComponent } from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from "ra-supabase";
import { Route, BrowserRouter } from "react-router-dom";
import { authProvider } from "./AuthProvider/SupabaseAuthProvider";
import { dataProvider } from "./DataProviders/SupabaseDataProvider";
import { i18nProvider } from "./I18n/I18nProvider";
import Recipes from "./Views/Recipes";

export const App: FunctionComponent = () => (
  <BrowserRouter>
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      i18nProvider={i18nProvider}
      disableTelemetry
    >
      <CustomRoutes noLayout>
        <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
        <Route
          path={ForgotPasswordPage.path}
          element={<ForgotPasswordPage />}
        />
      </CustomRoutes>
      <Resource {...Recipes} />
    </Admin>
  </BrowserRouter>
);
