import React from 'react'
import location from "../images/location.png"

export default function Card(props) {
    return (
        <div className='card'>
            <img src={`../images/${props.item.imageUrl}`} alt="" className='card--image' />
            <div className="card-stats">
                <div className='location--stats'>
                    <img src={location} alt="" className='card--icon' />
                    <p className='card--location'>{props.item.location}</p>
                    <a className='card-map' href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.item.title}</h1>
                <p className='card--date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='card--description'>{props.item.description}</p>
            </div>
        </div>
    )
}