import {Basics} from '../types'

export default function Contacts(props: {basics: Basics}){
    const {name, phone, website, location} = props.basics
    const {address, city, countryCode, postalCode, region} = location
    return (
        <div className="row">

        <div className="columns contact-details">

          <h2>Contact Details</h2>
          <p className="address">
            <span>{name}</span><br />
            <span>{address}<br />
              {city} {region}, {postalCode} {countryCode}
            </span><br />
            <span>{phone}</span><br />
            <span><a href={website}>Website</a></span>
          </p>

        </div>

        <div className="columns download">
          <p>
            <a href="inc/Amit.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
          </p>
        </div>

      </div>
    )
}