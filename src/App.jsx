import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList'
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm'
import {useSelector} from 'react-redux'

export const App = () => {
  const isEdit = !!useSelector(state => state.todos.currentTodo);
 
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Text textAlign="center">Create your first todo😉</Text>
          <TodoList/>
        </Container>
      </Section>
    </>
  );
};
