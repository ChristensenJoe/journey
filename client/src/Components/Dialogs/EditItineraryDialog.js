import {
    Dialog,
    Container,
    Button,
    Typography,
    makeStyles,
    IconButton
} from '@material-ui/core'

import Picker from 'emoji-picker-react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
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

function EditItineraryDialog({ handleEditDialog, open, user, itineraryData, setItineraryData, setItineraryList }) {
    const classes = useStyles();
    const history = useHistory();

    const [itineraryFormData, setItineraryFormData] = useState({
        name: itineraryData.name,
        description: itineraryData.description,
        category: itineraryData.category,
        is_private: itineraryData.is_private
    })

    const [pickerButton, setPickerButton] = useState(false);

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
                if (key === "name") {
                    newItinerary[key] = newItinerary[key].toLowerCase().trim();
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
        if (response.ok) {
            response.json()
                .then(data => {
                    const pathName = data.name.split(" ").join("-")

                    const newName = data.name.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ")
                    data.name = newName;
                    setItineraryData(data)
                    handleEditDialog()
                    setItineraryList((itineraryList) => {
                        const filteredItineraryList = itineraryList.filter((i) => i.id !== data.id)

                        return [
                            ...filteredItineraryList,
                            data
                        ]
                    })
                    history.push(`/${user.username}/${pathName}`)
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

    function handleEmojiChange(e, emojiObject) {
        setItineraryFormData((itineraryFormData) => ({
            ...itineraryFormData,
            category: emojiObject.emoji
        }))
        setPickerButton(false)
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

                    <IconButton
                        variant="contained"
                        color="secondary"
                        className={classes.emojiButton}
                        onClick={(e) => {
                            e.preventDefault();
                            setPickerButton((pickerButton) => !pickerButton)
                        }}
                    >
                        {itineraryFormData.category}
                    </IconButton>
                    <div className={classes.emojiContainer}>
                        {pickerButton && <Picker onEmojiClick={handleEmojiChange} />}
                    </div>

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