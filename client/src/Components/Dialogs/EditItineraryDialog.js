import {
    Dialog,
    Container,
    Button,
    Typography,
    makeStyles
} from '@material-ui/core'

import { useState } from 'react'
  
const useStyles = makeStyles(theme=> ({
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
}
}))

function EditItineraryDialog({ handleEditDialog, open, user, itineraryData, setItineraryData  }) {
    const classes = useStyles();

    const [itineraryFormData, setItineraryFormData] = useState({
        name: itineraryData.name,
        description: itineraryData.description,
        category: itineraryData.category,
        is_private: itineraryData.is_private
    })

    async function handlePatchItinerary(e) {
        e.preventDefault()
        let newItinerary = {
            is_owner: true,
            is_favorite: false,
            user_id: user.id
            }
            for (const key in itineraryFormData) {
                if (itineraryFormData[key] !== "" || (itineraryFormData[key].toString() === "true" || itineraryFormData[key].toString() === "false")) {
                    newItinerary[key] = itineraryFormData[key]
                    if(key === "name") {
                        newItinerary[key] = newItinerary[key].toLowerCase();
                    }
                }
            }
        const response = await fetch(`/itineraries/${itineraryData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItinerary)
        })
        if(response.ok) {
            response.json()
            .then(newItinerary => {
                setItineraryData(newItinerary)
                handleEditDialog()
            })
        }
    }

    function handleFormChange(e) {
        const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)

        setItineraryFormData((itineraryFormData) => ({
            ...itineraryFormData,
            [e.target.name]: value
        }))
        console.log(itineraryFormData)
    }

    return (
        <Dialog 
            open={open}
            onClose={handleEditDialog}
        >
            <Container 
                className={classes.container}
            >
                <Typography 
                    variant="h2" 
                    className={classes.header}
                >
                    Edit itinerary
                </Typography>
                
                <form 
                    onSubmit={handlePatchItinerary}
                >
                    <label 
                        htmlFor="name" 
                        className={classes.label}
                    >
                        Itinerary Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={itineraryFormData.name}
                        required
                        className={classes.input} 
                        onChange={handleFormChange}
                    />

                    <label 
                        htmlFor="description" 
                        className={classes.label}
                    >
                        Description
                    </label>
                    <input
                        name="description"
                        type="text"
                        value={itineraryFormData.description}
                        className={classes.description} 
                        onChange={handleFormChange}
                    />

                    <label 
                        htmlFor="category" 
                        className={classes.label}
                    >
                        Emoji
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={itineraryFormData.category}
                        className={classes.input} 
                        onChange={handleFormChange}
                    />

                    <input
                        type="checkbox"
                        name="is_private"
                        onChange={handleFormChange}
                        checked={itineraryFormData.is_private}
                    />
                    <label>Make this itinerary public</label>
                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="secondary" 
                        disableElevation 
                        className={classes.submitButton}
                    >
                        Update Itinerary
                    </Button>
                </form>
            </Container>
        </Dialog>
    )
}

export default EditItineraryDialog