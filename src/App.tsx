import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Counter from "./components/Counter";
import Library from "./components/Library";
import Sandwich from "./components/Sandwich";

function App() {
  return (
    <div className="imgContainer ">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sandwich" element={<Sandwich />} />
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
