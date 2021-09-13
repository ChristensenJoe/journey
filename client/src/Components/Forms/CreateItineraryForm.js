import {
    Button,
    makeStyles
  } from '@material-ui/core' 

import {useState } from 'react'

import {useHistory} from 'react-router-dom'

function CreateItineraryForm({ user }) {
    const [itineraryFormData, setItineraryFormData] = useState({
        name:"",
        description:"",
        category:"",
        is_private: false
    })

    const history = useHistory();


    async function handlePosteItinerary(e) {
        e.preventDefault()
        let newItinerary = {
            is_owner: true,
            is_favorite: false,
            user_id: user.id
        }
        for (const key in itineraryFormData) {
            if (itineraryFormData[key] !== "" && (itineraryFormData[key].toString() === "true" || itineraryFormData[key].toString() === "false")) {
              newItinerary[key] = itineraryFormData[key]
            }
        }
        console.log(newItinerary)
        const response = await fetch('/itinerary', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItinerary)
        })
        if(response.ok) {
            response.json()
            .then(data => {
                history.push(`/${user.username}/${itineraryFormData.name.toLowerCase().split(' ').join("-")}`)
            })
        }        
    }

    function handleFormChange(e) {
        if(e.target.name === "is_private") {
               setItineraryFormData((itineraryFormData) => ({
            ...itineraryFormData,
            [e.target.name]: !itineraryFormData.is_private
            })
            )

        }
        else {
            setItineraryFormData((itineraryFormData) => ({
                ...itineraryFormData,
                [e.target.name]: e.target.value
            })
            )
        }
    }

    return (
         <form onSubmit={handlePosteItinerary}> 
             <input
             name="name"
             type="text"
             onChange = {handleFormChange}
             value={itineraryFormData.name}
             /> 
             <input
             name="description"
             type="text"
             onChange = {handleFormChange}
             value={itineraryFormData.description}
             />
             <input
             type="text"
             name="category"
             onChange = {handleFormChange}
             value={itineraryFormData.category}
            />
            <input
            type="checkbox"
            name="is_private"
            onChange = {handleFormChange}
            checked={itineraryFormData.is_private}
            />
            <label>Would you like to make this public?</label>
            <Button type="submit">Create Itinerary</Button>
         </form>
    )
}

export default CreateItineraryForm