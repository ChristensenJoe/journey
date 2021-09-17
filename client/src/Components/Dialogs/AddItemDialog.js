import {
  Box,
  Dialog,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import { useState } from 'react';

const useStyles = makeStyles(theme => ({
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
    maxWidth: '490px',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  description: {
    height: '64px',
    display: 'block',
    width: 'calc(100% - 16px)',
    maxWidth: '490px',
    backgroundColor: '#efefef',
    border: 'none',
    padding: '8px',
    marginBottom: '16px'
  },
  categoryBox: {
    margin: '8px 0 24px'
  },
  submitButton: {
    width: '100%',
    maxWidth: '506px',
  },
  categoryButton: {
    marginRight: '8px',
    marginBottom: '8px',
    backgroundColor: '#f5f5f5'
  },
  timeField: {
    display: 'block',
    width: '100%',
    marginBottom: '16px',
    "& div": {
      width: 'calc(100% - 16px)',
      maxWidth: '506px'
    }
  }
}))

function AddItemDialog({ open, handleAddItemDialog, setItineraryItems, itinerary_id, user, categories }) {
  const classes = useStyles()

  const [newFormData, setNewFormData] = useState({
    name: "",
    content: "",
    location: "",
    time: "2022-01-01T12:00"
  })
  const [selectedCategories, setSelectedCategories] = useState([])
  console.log(newFormData);
  function handleOnChange(e) {
    setNewFormData((newFormData) => ({
      ...newFormData,
      [e.target.name]: e.target.value
    }))
  }

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setSelectedCategories((selectedCategories) => {
        return [
          ...selectedCategories,
          e.target.name
        ]
      })
    } else {
      setSelectedCategories((selectedCategories) => {
        return selectedCategories.filter((category) => category !== e.target.name)
      })
    }
  }

  function onAddItem(e) {
    e.preventDefault();

    let newItineraryItem = {
      categories: selectedCategories,
      location: ""
    }

    for (const key in newFormData) {
      if (newFormData[key] !== "") {
        newItineraryItem[key] = newFormData[key]
      }
    }

    const formattedLocation = newItineraryItem.location.split(" ").join("%20");

    fetch(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_TOKEN}&q=${formattedLocation}&format=json`)
      .then(res => res.json())
      .then(data => {
        newItineraryItem.location = `${data[0].lat} ${data[0].lon}`;
        postItem(newItineraryItem);
      })
  }

  async function postItem(newItineraryItem) {
    const response = await fetch(`/itineraries/${itinerary_id}/itinerary_items`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItineraryItem)
    })
    if (response.ok) {
      response.json()
        .then(data => {
          setItineraryItems((itineraryItems) => ([
            ...itineraryItems,
            data
          ]))
        })
      handleAddItemDialog((open) => !open)
      setNewFormData({
        name: "",
        content: "",
        location: "",
        time: "2022-01-01T12:00",
        itinerary_id: user.id
      })
      setSelectedCategories([])
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleAddItemDialog}
    >
      <Container
        className={classes.container}
      >
        <Typography
          variant="h2"
          className={classes.header}
        >
          Add an itinerary item
        </Typography>

        <form
          onSubmit={onAddItem}
        >
          <label
            htmlFor="name"
            className={classes.label}
          >
            Name of destination
          </label>
          <input
            type="text"
            name="name"
            value={newFormData.name}
            required
            className={classes.input}
            onChange={handleOnChange}
          />

          <label
            htmlFor="content"
            className={classes.label}
          >
            Description
          </label>
          <input
            type="text"
            name="content"
            value={newFormData.content}
            className={classes.description}
            onChange={handleOnChange}
          />

          <label
            htmlFor="location"
            className={classes.label}
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            value={newFormData.location}
            required
            className={classes.input}
            onChange={handleOnChange}
          />

          <label
            htmlFor="time"
            className={classes.label}
          >
            Time
          </label>
          <TextField
            name="time"
            type="datetime-local"
            defaultValue={newFormData.time}
            value={newFormData.time}
            onChange={handleOnChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.timeField}
          />

          <label>
            Category
          </label>
          <Box
            className={classes.categoryBox}
          >
            {categories.map((category) => {
              return <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    name={category.name}
                    color="secondary"
                  />
                }
                label={category.name}
                key={category.id}
              />
            })}
          </Box>

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