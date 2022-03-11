import React from 'react'
import './Contact.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';


function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.845619, lng: -86.390266 }}>
            <Marker key='AIzaSyAAvC79rERjtYb7zz_yY-Qs1HYBKDJjDhY' position={{ lat: 35.845619, lng: -86.390266 }}/>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Contact() {
    return (
        <div style={{width: '100%', height: '80vh'}}>
            <div className="contact-info">
                <div className="caption">
                    <h1>Contact Information:</h1>
                </div>
            </div>

            <WrappedMap className = "map"
                googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                &key=AIzaSyAAvC79rERjtYb7zz_yY-Qs1HYBKDJjDhY`}
                loadingElement={<div style={{height: '80%', width: '450px', paddingRight: '2vw',
                    paddingLeft: '4.75vw', paddingTop: '20px'}} />}
                containerElement={<div style={{height: '80%', width: '450px', paddingRight: '2vw',
                    paddingLeft: '4.75vw', paddingTop: '20px'}} />}
                mapElement={<div style={{height: '80%', width: '450px', paddingRight: '2vw',
                    paddingLeft: '4.75vw', paddingTop: '20px', border: 'medium solid lightgray'}} />}
            />

            <div className="details">
                <p>Sooriya Kinoy Bounyalith</p>
                <p>Phone Number: (Mobile) (615) 663-3590</p>
                <p>E-mail: sbounyalith@gmail.com</p>
                <p>Current City of Residence: Murfreesboro, Tennessee</p>
            </div>
        </div>
    );
}