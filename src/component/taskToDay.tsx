import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { TiPencil } from "react-icons/ti";
import { completedTodo } from "../redux/Slice/todoSlice";
import moment from "moment";
const TaskMenu: React.FC = () => {
  const { todoList } = useSelector((state: RootState) => {
    return state.todos;
  });
  const dispatch = useDispatch<AppDispatch>();
  //Handle Completed
  const completedTask = (id: string): void => {
    dispatch(completedTodo(id));
  };
  return (
    <div className="mt-3 w-full flex flex-col items-center gap-8">
      <div className="text-2xl font-medium">You have 2 task today</div>
      {todoList
        .filter((todoItem) => {
          return todoItem.isCompleted == false;
        })
        .map((todoItem) => {
          return (
            <div
              className={
                todoItem.isCompleted
                  ? "mt-3 w-[80%] grid grid-cols-5 line-through items-start"
                  : "mt-3 w-[80%] grid grid-cols-5 items-start"
              }>
              <TiPencil />
              <div className="break-words whitespace-normal w-[160px]">
                {todoItem.title}
              </div>
              <div>Pending</div>
              <div>{moment(todoItem.createDate).format("LLL")}</div>
              <button
                onClick={() => {
                  completedTask(todoItem.id);
                }}
                className="bg-green-500 text-white w-[120px] px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
                Completed
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default TaskMenu;
