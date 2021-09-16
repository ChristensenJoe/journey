import {
    useState,
    useEffect
} from 'react'

import ReactMapGL from 'react-map-gl'
import {
    Marker,
    Popup
} from 'react-map-gl'

import {
    IconButton
  } from '@material-ui/core';

  import LocationOnIcon from '@material-ui/icons/LocationOn';

function ItineraryMap({itineraryItems}) {
    const [viewport, setViewport] = useState({
        latitude: 40.730610,
        longitude: -73.935242,
        width: '100vw',
        height: '100vh',
        zoom: 12,
    })
    const [selectedItinerary, setSelectedItinerary] = useState(null)

    useEffect(() => {
        let initialLatitude = 40.730610;
        let initialLongitude = -73.935242;

        if (itineraryItems.length > 0) {
            const location = itineraryItems[0].location.split(" ");
            initialLatitude = parseFloat(location[0])
            initialLongitude = parseFloat(location[1]);
        }
        setViewport((viewport) => ({
            ...viewport,
            latitude: initialLatitude,
            longitude: initialLongitude,
        }))
    }, [itineraryItems])

    return (
        <div>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
        >
            {/* markers here */}
            {itineraryItems.map((itineraryItem) => {
                const location = itineraryItem.location.split(" ");
                return (
                    <Marker
                        key={itineraryItem.id}
                        latitude={parseFloat(location[0])}
                        longitude={parseFloat(location[1])}
                    > 
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault()
                                setSelectedItinerary(() => ({
                                    ...itineraryItem, 
                                    latitude: parseFloat(location[0]),
                                    longitude: parseFloat(location[1])
                                }))
                            }}
                        >
                            <LocationOnIcon />
                        </IconButton>
                    </Marker>
                )
            })
            }
            {selectedItinerary ? (
                <Popup
                    latitude={selectedItinerary.latitude}
                    longitude={selectedItinerary.longitude}
                    onClose={() =>{
                        setSelectedItinerary(null)
                    }}
                >
                    <div>
                        {selectedItinerary.name}
                    </div>
                </Popup>
            ) : null}

        </ReactMapGL>
        </div>
    )
}

export default ItineraryMap;