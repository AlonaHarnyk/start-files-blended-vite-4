import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList'
import Form from './components/Form/Form'

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form/>
          <Text textAlign="center">Create your first todo😉</Text>
          <TodoList/>
        </Container>
      </Section>
    </>
  );
};
