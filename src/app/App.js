import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RenderRoutes from "./router/route.util";
import routes from "./router/routes";
import AppLayout from "./AppLayout";

const Main = () => {
  return (
      <AppLayout>
        <RenderRoutes routes={routes} />
      </AppLayout>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
};

export default App;
