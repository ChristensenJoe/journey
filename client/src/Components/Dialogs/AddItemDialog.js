import {
  Dialog,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme=> ({
  container: {
    width: '50vw',
    minWidth: '400px',
    margin: '40px'
  },
  header: {
    marginBottom: '32px'
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(2),
    textAlign: 'left',
    fontSize: '14px'
  },
  input: {
    display: 'block',
    width: 'calc(100% - 56px)',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  description: {
    height: '64px',
    display: 'block',
    width: 'calc(100% - 56px)',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  submitButton: {
    width: 'calc(100% - 40px)'
  }
}))

function AddItemDialog({ open, handleAddItemDialog, setItineraryItems, itinerary_id }) {
  const classes = useStyles()

  function onAddItem(e) {
    e.preventDefault();

    /**
     *  fetch(`/itineraries/${itinerary_id}/itinerary_items`, {
     *  method: "POST",
     *  headers: {
     *  Content-Type: "application/json"
     * },
     * body: JSON.stringify()
     * })
     * .then(res => res.json())
     * .then(data => {
     *  setItineraryItems((itineraryItems) => ({
     *  ...itineraryItems,
     * data
     * }))
     * })
     *  
     *
     */
  }

  return(
    <Dialog 
      open={open}
      onClose={handleAddItemDialog}
      
    >
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.header}>Add an itinerary item</Typography>
        <form
          onSubmit={onAddItem}
        >
            <label 
              for="item_name" 
              className={classes.label}
            >
              Name of destination
            </label>
            <input 
              type="text" 
              name="item_name" 
              required
              className={classes.input}
            />

            <label 
              for="content_name" 
              className={classes.label}
            >
              Description
            </label>
            <input 
              type="text" 
              name="content_name" 
              className={classes.description} 
            />

            <label 
              for="location_name" 
              className={classes.label}
            >
              Location
            </label>
            <input 
              type="text" 
              name="location_name" 
              required
              className={classes.input} 
            />
            
            <label 
              for="time_name" 
              className={classes.label}
            >
              Time
            </label>
            <input 
              type="text" 
              name="time_name" 
              required
              className={classes.input} 
            />
            <Button 
              variant="contained" 
              type="submit" 
              color="secondary" 
              disableElevation 
              className={classes.submitButton}
            >
              Submit
            </Button>
        </form>
      </Container>
    </Dialog>
  )
}

export default AddItemDialog