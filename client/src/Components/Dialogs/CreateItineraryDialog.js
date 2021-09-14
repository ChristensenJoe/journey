import {
    Dialog,
    Container,
    Button,
    Typography,
    makeStyles
} from '@material-ui/core'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
  
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
    width: '100%',
    marginTop: '24px'
}
}))

function CreateItineraryDialog({ handleChangeCreate, open, user }) {
    const classes = useStyles();

    const [itineraryFormData, setItineraryFormData] = useState({
        name: "",
        description: "",
        category: "",
        is_private: false
    })

    const history = useHistory();

    async function handlePostItinerary(e) {
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


        const response = await fetch('/itineraries', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItinerary)
        })
        if (response.ok) {
            response.json()
                .then(data => {
                    history.push(`/${user.username}/${itineraryFormData.name.toLowerCase().split(' ').join("-")}`)
                })
        }
    }

    function handleFormChange(e) {
        const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)

        setItineraryFormData((itineraryFormData) => ({
            ...itineraryFormData,
            [e.target.name]: value
        }))
    }

    return (
        <Dialog 
            open={open}
            onClose={handleChangeCreate}
        >
            <Container 
                className={classes.container}
            >
                <Typography variant="h2" className={classes.header}>Add new itinerary</Typography>
                <form onSubmit={handlePostItinerary}>
                    <label 
                        for="name" 
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
                        for="description" 
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
                        for="category" 
                        className={classes.label}
                    >
                        Category
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
                        Create Itinerary
                    </Button>
                </form>
            </Container>
        </Dialog>
    )
}

export default CreateItineraryDialog