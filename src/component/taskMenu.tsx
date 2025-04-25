import { Link } from "react-router-dom";
const TaskMenu: React.FC = () => {
  return (
    <div className="border border-solid border-gray-600 rounded-xl bg-green-600 flex justify-center w-full lg:w-64">
      <div className="flex-1 py-2 text-center hover:bg-green-400 rounded-l-xl cursor-pointer">
        <Link to="/">Today</Link>
      </div>
      <div className="flex-1 py-2 text-center border-x border-gray-3 hover:bg-green-400 cursor-pointer">
        <Link to="/completed">Completed</Link>
      </div>
      <div className="flex-1 py-2 text-center hover:bg-green-400 cursor-pointer rounded-r-xl">
        <Link to="/add">Add</Link>
      </div>
    </div>
  );
};
export default TaskMenu;
