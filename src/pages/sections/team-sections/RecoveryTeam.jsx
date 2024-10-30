import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import RecoveryLogo from "../../../assets/RecoveryLogo.png";
import {
  Kartik,
  Ketan,
  Naman,
  Pranav_Mahajan,
  RahulBansal,
  Sathvika,
  Viraj_Patel,
} from "../../../utils";
const RecoveryTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Recovery
          <img src={RecoveryLogo} alt="AvionicsLogo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={Kartik}
            name="Kartik Kumar"
            field="Recovery Lead"
            linkedin="https://www.linkedin.com/in/kartik-kumar-8b4402259/"
            email="kartikkumaroctober2002@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={Naman}
            name="Naman Jain"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/naman-jain-526b782b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            email="namanjain181018@gmail.com"
          />
          <NameSectionTeams
            img={Pranav_Mahajan}
            name="Pranav Mahajan"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/pranav-mahajan-8a9471265"
            email="hellopranav1039@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default RecoveryTeam;
