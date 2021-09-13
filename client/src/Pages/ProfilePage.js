import { useParams } from 'react-router-dom';

import {
  Container
} from '@material-ui/core'

function ProfilePage({ user }) {
  const { username } = useParams();
  const isMyAccount = user.username === username
  
  return(
    <Container>
      <p>This is the all profile page for #{username}</p>
      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>
      {isMyAccount && <h1>Welcome in, {user.username}</h1>}
    </Container>
  )
}

export default ProfilePage