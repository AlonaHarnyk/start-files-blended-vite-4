import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTodo, editTodo } from '../../redux/todosSlice';

import style from './EditForm.module.css';

const EditForm = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setCurrentTodo(null));
  };

  const handleSave = event => {
    event.preventDefault();
    const inputValue = event.target.elements['text'].value;
    const todo = {
      text: inputValue,
      id: currentTodo.id,
    };
    dispatch(editTodo(todo));
    dispatch(setCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSave}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
