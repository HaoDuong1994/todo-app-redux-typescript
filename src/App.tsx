import "./App.css";
import TaskMenu from "./component/taskMenu";
import Router from "./router";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col items-center p-5">
      <TaskMenu />
      <Routes>
        {Router.map((route) => {
          return <Route path={route.path} element={route.element}></Route>;
        })}
      </Routes>
    </div>
  );
}
export default App;
