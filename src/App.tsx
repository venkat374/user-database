import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { dataProvider } from "./refineFirebase/dataProvider";
import { authProvider } from "./refineFirebase/authProvider";
import { UserList } from "./pages/UserList";
import { UserCreate } from "./pages/UserCreate";
import { UserEdit } from "./pages/UserEdit";
import { UserShow } from "./pages/UserShow";


function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            routerProvider={routerProvider}
            authProvider={authProvider}
            dataProvider={{
              default: dataProvider,
            }}
            resources={[
              {
                name: "users",
                list: "/users",
                create: "/users/create",
                edit: "/users/edit/:id",
                show: "/users/show/:id",
              },
            ]}           
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "EAHcBS-YkA0Mw-0QhN8v",
            }}
          >
            <Routes>
              <Route path="/users">
                <Route index element={<UserList />} />
                <Route path="create" element={<UserCreate />} />
                <Route path="edit/:id" element={<UserEdit />} />
                <Route path="show/:id" element={<UserShow />} />
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
