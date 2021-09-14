import {
  Box,
  Container,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core'

import { useState, useEffect } from 'react'

const useStyles = makeStyles(theme=> ({

}))

function FavoritesListModule({ user }) {
  const classes = useStyles()

  const [favoriteData, setFavoriteData] = useState([])

  useEffect(()=>{
    fetch(`/favorites/${user.id}`)
    .then(res=>res.json())
    .then(setFavoriteData)
  },[])

  return(
    <Box
      className={classes.profile}
    >
      <Typography 
        variant="h2"
        gutterBottom
      >
        Favorites
      </Typography>

      <p>hello</p>
    </Box>
  )
}

export default FavoritesListModule;