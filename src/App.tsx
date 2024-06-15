import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Counter from "./components/Counter";
import Library from "./components/Library";
import Sandwich from "./components/Sandwich";

function App() {
  return (
    <div className="imgContainer ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Counter />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sandwich" element={<Sandwich />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
