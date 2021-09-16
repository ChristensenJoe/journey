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
    Container,
    Typography,
    IconButton,
    makeStyles
} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme=>({
    popupContainer: {
        width: '320px',
        padding: '24px'
    },
    container: {
        padding: '24px'
    },
    category: {
        padding: '6px 12px',
        backgroundColor: '#efefef',
        display: 'inline-block',
        marginBottom: '6px',
        marginRight: '6px',
        borderRadius: '40px'
    },
    iconLocation: {
        width: '40px',
        height: '40px'
    }
}))

function ItineraryMap({itineraryItems}) {
    const classes = useStyles();

    const [viewport, setViewport] = useState({
        latitude: 40.730610,
        longitude: -73.935242,
        width: '67vw',
        height: '90vh',
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
            mapStyle="mapbox://styles/jyk595/cktnkj8al0dcv17qovaj4w3xe"
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
        >
            {itineraryItems.map((itineraryItem) => {
                const location = itineraryItem.location.split(" ");
                return (
                    <Marker
                        key={itineraryItem.id}
                        latitude={parseFloat(location[0])}
                        longitude={parseFloat(location[1])}
                    > 
                        <IconButton
                            color="textPrimary"
                            className={classes.iconLocation}
                            onClick={(e) => {
                                e.preventDefault()
                                setSelectedItinerary(() => ({
                                    ...itineraryItem, 
                                    latitude: parseFloat(location[0]),
                                    longitude: parseFloat(location[1])
                                }))
                            }}
                        >
                            <LocationOnIcon 
                                className={classes.iconLocation}
                            />
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
                    className={classes.popupContainer}
                >
                    <div
                        classes={classes.container}
                    >
                        <Typography
                            variant="h2"
                            gutterBottom
                        >
                            {selectedItinerary.name}
                        </Typography>

                        <Typography
                            variant="body1"
                            gutterBottom
                        >
                            {selectedItinerary.content}
                        </Typography>

                        <Typography
                            variant="body1"
                            gutterBottom
                        >
                            {selectedItinerary.time}
                        </Typography>

                        {selectedItinerary.categories.map((category)=>{
                            return <Typography
                            variant="body1"
                            className={classes.category}
                        >
                            {category.name}
                        </Typography>
                        })}
                    </div>
                </Popup>
            ) : null}

        </ReactMapGL>
        </div>
    )
}

export default ItineraryMap;