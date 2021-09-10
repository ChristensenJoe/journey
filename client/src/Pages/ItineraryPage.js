import { useParams } from 'react-router-dom';

import {
  Container
} from '@material-ui/core'

function ItineraryPage() {
  const { username, itinerary_name } = useParams();
  
  return(
    <Container>
      <p>hello this is the itinerary {username}!!</p>
      <p>hello this is the itinerary page!!</p>
      <p>hello this is the itinerary {itinerary_name}!!</p>
      <p>hello this is the itinerary {itinerary_name}!!</p>
      <p>hello this is the itinerary page!!</p>
      <p>hello this is the itinerary {itinerary_name}!!</p>

    </Container>
  )
}

export default ItineraryPage