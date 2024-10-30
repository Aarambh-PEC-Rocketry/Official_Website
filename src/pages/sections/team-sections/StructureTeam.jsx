import React from "react";
import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import StructureLogo from "../../../assets/StructureLogo.png";
import { Koysha, Sunil } from "../../../utils";
const StructureTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          Structures
          <img src={StructureLogo} alt="Structure Logo" className="size-16" />
        </legend>

        <div className="lead-namebox">
          <NameSectionTeams
            img={Sunil}
            name="Suneel Kumar Deen"
            field="Structure Lead"
            linkedin="https://www.linkedin.com/in/suneel-deen"
            email="suneelshivpur@gmail.com"
          />
        </div>
        <div className="member-namebox">
          <NameSectionTeams
            img={Koysha}
            name="Koysha Shrimali "
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/koysha-shrimali-810823270"
            email="koysha.shrimali@gmail.com"
          />
          <NameSectionTeams
            img={profilepicdemo}
            name="Madhav Saraswat"
            field="Sub-Head"
            linkedin="https://www.linkedin.com/in/madhav-saraswat-724a7426b"
            email="madhavsaraswatt@gmail.com"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default StructureTeam;
