import {
  Box,
  Typography,
  makeStyles
} from '@material-ui/core'

import { useState, useEffect } from 'react'

const useStyles = makeStyles(theme=> ({

}))

function RecentItinerariesModule({ user }){
  const classes = useStyles();
  const[itineraryList, setItineraryList] = useState([]);

  useEffect(()=>{
    fetch(`/users/${user.id}/itineraries`)
    .then(res => res.json())
    .then((list)=>{
      setItineraryList(list)
    })
  },[])

  console.log(itineraryList);

  return(
    <div>
      {itineraryList &&
        <Box>
        <Typography variant="h2">Recent Itineraries</Typography>
        {itineraryList.map((itinerary)=>{
          return (<p key={itinerary.id}>{itinerary.name}</p>)
        })}
      </Box>}
    </div>
  )
}

export default RecentItinerariesModule;