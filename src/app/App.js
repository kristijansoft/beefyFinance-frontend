import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <Main />
    </Router>
  );
};

export default App;
