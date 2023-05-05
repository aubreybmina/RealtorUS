import React from "react";
import { FaBed, FaBath } from "react-icons/fa";

const PropertyCard = ( {property} ) => {
  const location = `${property.location.address.line}, ${property.location.address.city}, ${property.location.address.state}, ${property.location.address.postal_code}, ${property.location.address.country}`;
  const picture = property.primary_photo.href.replace("s.jpg","d-w480_h360_x2.webp");
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'} );
  const list_date = new Date(Date.parse(property.list_date));

  return (
    <>  
      <div className="properties__card">
        <div className="properties__card--image">
        <img className='properties__card--photo'
                src={
                  picture !== "N/A" ? picture : "https://ap.rdcpix.com/e6e5a3f8cfa2e86b836a8d9b724de2dal-m146880150od-w480_h360_x2.webp"
                }
                alt={location}
              /> 
          <div className="properties__card--image--status" >{property.status === "for_sale" ? "FOR SALE" : "FOR RENT"}</div>
          <div className="properties__card--image--bedbath" ><FaBed/> {property.description.beds} <FaBath/> {property.description.baths}</div>
        </div>
        <div className="properties__card--text">
          <h3>Asking price: {formatter.format(property.list_price)}</h3> 
          <p>{location}</p>
          <p>Listed: {list_date.toDateString()}</p>
        </div>
      </div>    
      
  </>
    
    
  );
};

export default PropertyCard; 