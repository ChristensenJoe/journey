import { useState } from 'react'

import {
  Dialog,
  Box,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
  TextField,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  container: {
    width: '50vw',
    minWidth: '400px',
    padding: '40px'
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
  submitButton: {
      width: '100%',
      maxWidth: '506px',
      marginTop: '24px'
  },
  timeField: {
    display:'block',
    width: '100%',
    marginBottom: '16px',
    "& div": {
      width: 'calc(100% - 16px)',
      maxWidth: '506px'
    }
  }
}))

function EditItemDialog({ open, handleEditDialog, user, itemID, name, location, content, time, categories, allCategories, setItineraryItems }) {
  const classes = useStyles()
  const [newFormData, setNewFormData] = useState({
    name: name,
    content: content,
    location: "",
    time: time,
  })
  const[selectedCategories, setSelectedCategories] = useState(categories.map((category)=>category.name))

  function handleOnChange(e) {
    const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)

    setNewFormData((newFormData) => ({
        ...newFormData,
        [e.target.name]: value
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

  function patchEditedForm(e) {
    e.preventDefault()

    let newItineraryItem = {
      categories: selectedCategories
    }

    for (const key in newFormData) {
      if (newFormData[key] !== "") {
        newItineraryItem[key] = newFormData[key]
      }
    }

    if (newFormData.location !== "") {
      const formattedLocation = newFormData.location.split(" ").join("%20");

      fetch(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_TOKEN}&q=${formattedLocation}&format=json`)
      .then(res => res.json())
      .then(data => {
        newItineraryItem.location = `${data[0].lat} ${data[0].lon}`;
        postItem(newItineraryItem);
      })
    } else {
      postItem(newItineraryItem)
    }
  }

  async function postItem(newItineraryItem) {
    const response = await fetch(`/itinerary_items/${itemID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItineraryItem)
    })
    if (response.ok) {
      response.json()
      .then(()=>{
        fetch(`/itinerary_items/${itemID}`)
        .then(res=>res.json())
        .then((data)=>{
          setItineraryItems((itineraryItems)=>{
            let filteredList = itineraryItems.filter((item)=>item.id !== itemID)
            
            return ([
              ...filteredList,
              data
            ])
          })
        })
      })
      handleEditDialog((open)=>!open)
    }
  }

  return(
    <Dialog
      open={open}
      onClose={handleEditDialog}
    >
      <Container className={classes.container}>
        <Typography 
          variant="h2" 
          className={classes.header}
        >
          Edit itinerary item
        </Typography>
        
        <form
          onSubmit={patchEditedForm}
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
              type="datetime-local"
              name="time"
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
              {allCategories.map((category)=>{
                return <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={selectedCategories.filter((indCategory)=>indCategory === category.name).length > 0}
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

export default EditItemDialog;