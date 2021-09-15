import {
  Box,
  Dialog,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import { useState } from 'react';

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
  categoryBox: {
    margin: '8px 0 24px'
  },
  submitButton: {
    width: '100%'
  },
  categoryButton: {
    marginRight: '8px',
    marginBottom: '8px',
    backgroundColor: '#f5f5f5'
  }
}))

function AddItemDialog({ open, handleAddItemDialog, setItineraryItems, itinerary_id, user, categories }) {
  const classes = useStyles()

  const [newFormData, setNewFormData] = useState({
    name: "",
    content: "",
    location: "",
    time: "",
    itinerary_id: user.id
  })
  const[selectedCategories, setSelectedCategories] = useState([])

  function handleOnChange(e) {
    setNewFormData((newFormData)=>({
      ...newFormData,
      [e.target.name]: e.target.value
    }))
  }

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setSelectedCategories((selectedCategories)=>{
        return [
          ...selectedCategories,
          e.target.name
        ]
      })
    } else {
      setSelectedCategories((selectedCategories)=>{
        return selectedCategories.filter((category)=>category !== e.target.name)
      })
    }
  }

  async function onAddItem(e) {
    e.preventDefault();

    let newItineraryItem = {
      categories: selectedCategories
    }

    for (const key in newFormData) {
      if (newFormData[key] !== "") {
        newItineraryItem[key] = newFormData[key]
      }
    }

    const response = await fetch(`/itineraries/${itinerary_id}/itinerary_items`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItineraryItem)
    })
    if (response.ok) {
      response.json()
      .then(data=>{
        setItineraryItems((itineraryItems)=>([
          ...itineraryItems,
          data
        ]))
      })
      handleAddItemDialog((open)=>!open)
    }
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
              for="name" 
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
              for="content" 
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
              for="location" 
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
              for="time" 
              className={classes.label}
            >
              Time
            </label>
            <input 
              type="text" 
              name="time" 
              value={newFormData.time}
              required
              className={classes.input} 
              onChange={handleOnChange}
            />

            <label>
              Category
            </label>
            <Box
              className={classes.categoryBox}
            >
              {categories.map((category)=>{
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