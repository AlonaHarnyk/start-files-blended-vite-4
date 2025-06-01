import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import { nanoid } from '@reduxjs/toolkit';

import style from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements['search'].value;
    const todo = {
      text: inputValue,
      id: nanoid(),
    };
    dispatch(addTodo(todo));
    event.target.reset()
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
