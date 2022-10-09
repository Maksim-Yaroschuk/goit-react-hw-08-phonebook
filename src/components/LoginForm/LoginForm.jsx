import { Form, Label } from 'components/GlobalStyle';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label className="label">
        Email
        <input type="email" name="email" />
      </Label>
      <Label className="label">
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};


// className="inputName"