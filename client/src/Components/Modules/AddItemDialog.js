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
    width: 'calc(100% - 16px)',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  description: {
    height: '64px',
    display: 'block',
    width: 'calc(100% - 16px)',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  submitButton: {
    width: '100%'
  }
}))

function AddItemDialog({ open, handleClose }) {
  const classes = useStyles()

  return(
    <Dialog 
      open={open}
      onClose={handleClose}
      
    >
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.header}>Add an itinerary item</Typography>
        <form>
            <label for="item_name" className={classes.label}>Name of destination</label>
            <input type="text" name="item_name" className={classes.input} />
            <label for="content_name" className={classes.label}>Description</label>
            <input type="text" name="content_name" className={classes.description} />
            <label for="location_name" className={classes.label}>Location</label>
            <input type="text" name="location_name" className={classes.input} />
            <label for="time_name" className={classes.label}>Time</label>
            <input type="text" name="time_name" className={classes.input} />
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