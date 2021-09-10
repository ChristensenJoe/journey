import { useParams } from 'react-router-dom';

import {
  Container
} from '@material-ui/core'

function AllItinerariesPage() {
  const { username } = useParams();

  return(
    <Container>
      <p>This is the all itineraries page for {username}</p>
      <p>This is the all itineraries page for #{username}</p>
      <p>This is the all itineraries page for #{username}</p>
      <p>This is the all itineraries page for #{username}</p>
      <p>This is the all itineraries page for #{username}</p>
      <p>This is the all itineraries page for #{username}</p>
    </Container>
  )
}

export default AllItinerariesPage