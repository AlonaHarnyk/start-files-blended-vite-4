import Text from '../Text/Text';
import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);

  return (
    <>
      {!todos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {todos.map((todo, idx) => (
            <Todo
              key={todo.id}
              id={todo.id}
              counter={idx + 1}
              text={todo.text}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default TodoList;
