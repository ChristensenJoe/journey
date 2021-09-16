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

function DeleteItineraryItemConfirmDialog({ open, handleDeleteItem, itemID, setItineraryItems }){
  const classes = useStyles();

  function handleDelete() {
    fetch(`/itinerary_items/${itemID}`, {
      method: "DELETE"
    })
    setItineraryItems((itineraryItems) => {
      return itineraryItems.filter((item) => item.id !== itemID)
    })
    handleDeleteItem()
  }

  function clickNeverMind() {
    handleDeleteItem()
  }

  return(
    <Dialog
      open={open}
      onClose={handleDeleteItem}
    >
      <Container
        className={classes.container}
      >
        <Typography
          variant="h2"
          className={classes.header}
        >
          Are you sure you want to delete this item?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={handleDelete}
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

export default DeleteItineraryItemConfirmDialog;