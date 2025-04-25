import TaskToDay from "./component/taskToDay";
import TaskCompleted from "./component/TaskCompleted";
import AddTaskPage from "./component/addTaskPage";
import { ReactElement } from "react"; // Import ReactElement
interface IRoute {
  path: string;
  element: ReactElement;
}
const route: IRoute[] = [
  {
    path: "/",
    element: <TaskToDay />,
  },
  {
    path: "/completed",
    element: <TaskCompleted />,
  },
  {
    path: "/add",
    element: <AddTaskPage />,
  },
];
export default route;
