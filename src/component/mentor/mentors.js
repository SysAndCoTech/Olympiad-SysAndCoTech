import React from "react";
import Main from "./main/main";
import nasha from "../../img/NashaTech_Logo-10.png";
import Header from './../header/Header';
function Mentors() {
  function onClick() {}

  return (
    <div>
      <Header/>
      <Main
        img={nasha}
        description1="Nasha tech"
        description2="THE NEXT LEVEL"
        description3="We provide an extensive range of specialized 
        services, encompassing DevOps, System & Cloud Development, 
        AI and Machine Learning Development, Web System Development, 
        Mobile App Development, Big Data Development, Legacy Product 
        Re-engineering, and Product UI/UX Design. Our highly skilled 
        engineering team adeptly utilizes various programming languages 
        to provide comprehensive solutions tailored to your specific needs."
        onClick={onClick}
      />
    </div>
  );
}

export default Mentors;
