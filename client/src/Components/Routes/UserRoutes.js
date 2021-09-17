import {
  Switch,
  Route
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProfilePage from '../../Pages/ProfilePage';
import ItineraryPage from '../../Pages/ItineraryPage';
import AllItinerariesPage from '../../Pages/AllItinerariesPage';

function UserRoutes({ user, setUser }) {
  const[categories, setCategories] = useState(null);
  const[itineraryList, setItineraryList] = useState(null);

  useEffect(()=>{
    fetch('/categories')
    .then(res=>res.json())
    .then((data)=>setCategories(data))
  },[]) 

  useEffect(()=>{
    fetch(`/users/${user.id}/itineraries`)
    .then(res => res.json())
    .then((list)=>{
      setItineraryList(list)
    })
  }, []);

  return(
    <Switch>
      <Route exact path="/:username/itineraries">
        <AllItinerariesPage />
      </Route>
      
      <Route path="/:username/:itinerary_name">
        <ItineraryPage 
          user={user}
          categories={categories}
          itineraryList={itineraryList}
          setItineraryList={setItineraryList}
        />
      </Route>

      <Route exact path="/:username">
        <ProfilePage 
          user={user}
          setUser={setUser}
          itineraryList={itineraryList}
          setItineraryList={setItineraryList}
        />
      </Route>
    </Switch>
  )
}

export default UserRoutes;