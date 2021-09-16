import { useHistory } from 'react-router-dom';

import {
  Dialog,
  Container,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  container: {
    width: '50vw',
    minWidth: '400px',
    padding: '40px'
},
header: {
  marginBottom: '32px'
},
button: {
  marginRight: '16px',

}
}))

function DeleteItineraryConfirmDialog({ open, handleOpenDialog, itineraryData, user, setItineraryList }){
  const classes = useStyles();
  const history = useHistory();

  function renderDelete() {
    fetch(`/itineraries/${itineraryData.id}`, {
      method: 'DELETE'
    })
    history.push(`/${user.username}`)
    setItineraryList((itineraryList)=>{
      return itineraryList.filter((item)=> item.id !== itineraryData.id)
    })
  }

  function clickNeverMind() {
    handleOpenDialog()
  }

  return(
    <Dialog
      open={open}
      onClose={handleOpenDialog}
    >
      <Container
        className={classes.container}
      >
        <Typography
          variant="h2"
          className={classes.header}
        >
          Are you sure you want to delete this itinerary?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={renderDelete}
        >
          Delete this itinerary
        </Button>
        <Button
          disableElevation
          className={classes.button}
          onClick={clickNeverMind}
        >
          Never mind
        </Button>
      </Container>
    </Dialog>
  )
}

export default DeleteItineraryConfirmDialog;