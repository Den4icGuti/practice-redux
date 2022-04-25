import { useDispatch } from "react-redux";
import { removeTodo } from "Redux/todoSlice";

const ListItem = ({ id, text}) => { 
  const dispatch = useDispatch();
 
  return (
    <li>
      <span>{text}</span>
      <button className="del" onClick={() => dispatch(removeTodo({ id }))}>Delete</button>
    </li>
  )
}

export default ListItem;
