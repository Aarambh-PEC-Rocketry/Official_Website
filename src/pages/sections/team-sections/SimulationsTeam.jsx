import React, { useState } from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import StructureLogo from "../../../assets/StructureLogo.png";
import { Astha_Patel, Kesia, Koysha, Shambhavi, Sunil } from "../../../utils";
import AvionicsLogo from "../../../assets/AvionicsLogo.png";
const SimulationsTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Simulations
          <img src={AvionicsLogo} alt="Simulations Logo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={Kesia}
            name="Kesia Ajith"
            field="Simulations Lead"
            linkedin="https://www.linkedin.com/in/kesia-ajith-aero"
            email="kesiaajith3@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={Astha_Patel}
            name="Astha Patel"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/astha-patel-2588a2271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            email="abp199ii@gmail.com"
          />
          <NameSectionTeams
            img={Shambhavi}
            name="Shambhavi Tiwari"
            field="Sub-Head"
            linkedin="www.linkedin.com/in/shambhavi-tiwari-6816322b9"
            email="shambhavi.tiwari53@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default SimulationsTeam;
