import "./App.css";
import "@fontsource/metropolis"; // Defaults to weight 400
import "@fontsource/metropolis/400.css"; // Specify weight
import "@fontsource/metropolis/400-italic.css"; // Specify weight and style
import { Outlet} from "react-router-dom";

function App() {

  return (
   
      <Outlet />
      

  );
}

export default App;
