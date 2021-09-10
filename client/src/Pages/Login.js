import {
  Container
} from '@material-ui/core'

import LoginForm from '../Components/Forms/LoginForm';
import SignupForm from '../Components/Forms/SignupForm';

function Login() {
  return(
    <Container>
      <LoginForm />
      <SignupForm />
    </Container>
  )
}

export default Login