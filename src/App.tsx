// project imports
import Display from "./display";
import Details from "./display/details";

// 3rd party
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/gallery/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
