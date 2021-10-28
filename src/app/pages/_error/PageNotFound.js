import { useHistory } from "react-router-dom";

const PageNotFound = ({ fallbackurl }) => {
  const history = useHistory();
  return (
    <div>
      <span>404</span>
      <br />
      <button onClick={() => history.push(fallbackurl)}>Back Home</button>
    </div>
  );
};

export default PageNotFound;
