import { useParams } from 'react-router-dom';

import {
  Container
} from '@material-ui/core'

function ProfilePage() {
  const { username } = useParams();
  
  return(
    <Container>
      <p>This is the all profile page for #{username}</p>
      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>

      <p>This is the all profile page for #{username}</p>

    </Container>
  )
}

export default ProfilePage