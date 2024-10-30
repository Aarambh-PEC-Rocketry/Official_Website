import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import PropulsionLogo from "../../../assets/PropulsionLogo.png";
import { members } from "../../../constants";
import LeadFilter from "../../../utils/lead-filter";
import MemberMapper from "../../../utils/MemberMapper";

import { Ketan, RahulBansal, Sathvika, Viraj_Patel } from "../../../utils";

const PropulsionTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Propulsion
          <img src={PropulsionLogo} alt="Propulsion Logo" className="size-16" />
        </legend>
        <div className="lead-namebox">
          <NameSectionTeams
            img={Sathvika}
            name="Sathvika Balasubramanian"
            field="Propulsion Lead"
            linkedin="linkedin.com/in/sathvika-bala"
            email="balusathu@hotmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={RahulBansal}
            name="Rahul Bansal"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/rahul-bansal-61971928a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            email="rahulbansal172004@gmail.com"
          />
          <NameSectionTeams
            img={profilepicdemo}
            name="Varun Choudhary"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/varun-choudhary-4491582b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            email="varunchoudhary2003@gmail.com"
          />

          <NameSectionTeams
            img={profilepicdemo}
            name="Adu sneha bai"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/adu-sneha-bai-9b592b211"
            email="snehabai2004@gmail.com"
          />
          <NameSectionTeams
            img={Ketan}
            name="Ketan Jain"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/ketan-jain-71a392257"
            email="ketanjain1124@gmail.com"
          />
          <NameSectionTeams
            img={Viraj_Patel}
            name="Viraj Patel"
            field="Sub-Head"
            linkedin="www.linkedin.com/in/viraj-patel-99701b168"
            email="patelviraj944@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default PropulsionTeam;
