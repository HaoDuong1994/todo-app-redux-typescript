import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const TaskCompleted: React.FC = () => {
  const { todoList } = useSelector((state: RootState) => {
    return state.todos;
  });
  console.log(todoList);
  return (
    <div className="mt-4 w-full flex flex-col">
      <div className="flex">
        <div>Header</div>
        <div>Completed</div>
      </div>
      <div>
        <div>title</div>
        <div>
          <IoCheckmarkDoneCircle />
        </div>
      </div>
    </div>
  );
};
export default TaskCompleted;
