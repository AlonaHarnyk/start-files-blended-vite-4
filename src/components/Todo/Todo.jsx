import Text from '../Text/Text';
import GridItem from '../GridItem/GridItem';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { deleteTodo, setCurrentTodo } from '../../redux/todosSlice';
import { useDispatch } from 'react-redux';

const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(setCurrentTodo({ id, text }));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button" onClick={handleEdit}>
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
