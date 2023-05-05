import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="hero">
      <div className="hero__taglinecontainer">
        <h1>The home of properties</h1>
        <p>Trusted by homebuyers, sellers, and brokers nationwide!</p>
      </div>
      <div className="hero__searchcontainer">
        <form
          className="hero__searchcontainer--form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="search"
            placeholder="Search by model, make, or body type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch /> Search
          </button>
          {/* <FaSearch alt="search" onClick={() => searchcars(searchTerm)} />  */}
        </form>
        </div>
    </div>
  );
};

export default Hero;
