import {
  Switch,
  Route
} from 'react-router-dom';

import ProfilePage from '../../Pages/ProfilePage';
import ItineraryPage from '../../Pages/ItineraryPage';
import AllItinerariesPage from '../../Pages/AllItinerariesPage';

function UserRoutes({ user, setUser }) {

  return(
    <Switch>
      <Route exact path="/:username/itineraries">
        <AllItinerariesPage />
      </Route>
      
      <Route path="/:username/:itinerary_name">
        <ItineraryPage />
      </Route>

      <Route exact path="/:username">
        <ProfilePage 
          user={user}
          setUser={setUser}
        />
      </Route>
    </Switch>
  )
}

export default UserRoutes;