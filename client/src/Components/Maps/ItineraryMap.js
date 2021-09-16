import {
    useState,
    useEffect
} from 'react'

import ReactMapGL from 'react-map-gl'

function ItineraryMap({itineraryItems}) {
    const [viewport, setViewport] = useState({
        latitude: 40.730610,
        longitude: -73.935242,
        width: '100vw',
        height: '100vh',
        zoom: 12,
    })

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
            markers here
        </ReactMapGL>
        </div>
    )
}

export default ItineraryMap;