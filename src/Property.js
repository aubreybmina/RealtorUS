import React from "react";
import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard"; 

const API_URL = process.env.REACT_APP_API_URL;
const APIKEY = process.env.REACT_APP_API_KEY;
const HOST = process.env.REACT_APP_HOST;

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": `${APIKEY}`, 
    "X-RapidAPI-Host": `${HOST}`,
  },
  body: '{"limit":200,"offset":0,"postal_code":"90004","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}',
};

const Property = () => {
  const [properties, setProperties] = useState([]);

  const searchProperties = async () => {
    const response = await fetch(API_URL, options).then((response) =>
      response.json()
    );
    setProperties(response.data.home_search.results);
  };
  useEffect(() => {
    searchProperties("");
  }, []);

  return (
    <>
      {properties?.length > 0 ? (
        <div className="properties">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.listing_id} property={property} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No properties found.</h2>
        </div>
      )}
    </>
  );
};

export default Property;
