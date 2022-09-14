import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Map.css'

  const mapStyles =
    {disableDefaultUI:true,zoomControl:false, styles: [
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },

  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},

{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#232326"
      },
      {
          "visibility": "off"
      },
      {
          "weight": 2
      }
  ]
},

{
  "featureType": "road.arterial",
  "elementType": "all",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},

{
  "featureType": "road.local",
  "elementType": "all",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "transit",
  "elementType": "all",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},

{
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},

{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#161618"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "administrative",
  "elementType": "labels.text.stroke",
  "stylers": [

      {
        "visibility": "on",
      },
  ]
},

{
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#161618"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "administrative.locality",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#e0d2e0"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "color": "#161618"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#161618"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},

{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#e0d2e0"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [
      {
          "color": "#232326"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [
      {
          "color": "#232326"
      },
      {
          "visibility": "on"
      }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "all",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "color": "#3a3333"
      }
  ]
},

{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#a09fa6"
          
      }
  ]
},
  
]}

  const position = {
    lat: -27.58,
    lng: -48.49
  };

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAi75xX65ExJLakbVA-5nUq_ED00xJe7Qg"
      });

      return (
      <div className='googleMap'>
        { isLoaded ? (
        <GoogleMap
        options={mapStyles}
          mapContainerStyle={{width: "100%", height: "100%"}}
          center={position}
          zoom={9}
        >
            <Marker position={position}/>
        </GoogleMap>
        ) : (
          <></>
        )}
    </div>

)};

export default Map