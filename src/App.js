import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <div className="main">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.element;

          let Layout = DefaultLayout;

          return (
            <Route
              path={route.path}
              key={route.id}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
