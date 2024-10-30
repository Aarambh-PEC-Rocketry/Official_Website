import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import profilepic3 from "../../../assets/profilepic3.avif";
import AvionicsLogo from "../../../assets/AvionicsLogo.png";
import { members } from "../../../constants";
import { Puranjot } from "../../../utils";
const AvionicsTeam = (props) => {
  return (
    <div className="namebox">
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Avionics
          <img src={AvionicsLogo} alt="AvionicsLogo" className="size-16" />
        </legend>
        <div className="w-full flex items-center justify-center ">
          <NameSectionTeams
            name="Puranjot Singh Naga"
            img={Puranjot}
            email="puranjotsinghnaga@gmail.com"
            field="Avionics Lead"
            linkedin="https://www.linkedin.com/in/puranjot-singh-92a55326b/"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default AvionicsTeam;
