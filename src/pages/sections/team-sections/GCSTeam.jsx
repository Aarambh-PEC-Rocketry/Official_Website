import NameSectionTeams from "../../../components/NameSectionTeams";
import profilepicdemo from "../../../assets/profile-demo (1).jpeg";
import profilepic2 from "../../../assets/profilepic4.avif";
import GCSLogo from "../../../assets/GCSLogo.png";
import { members } from "../../../constants";
import { Puranjay } from "../../../utils";

const GCSTeam = () => {
  return (
    <div>
      <fieldset className="border-4 border-purple-500 p-4 m-8">
        <legend className="title-3 flex flex-row items-center ">
          GCS
          <img src={GCSLogo} alt="GCSLogo" className="size-16" />
        </legend>
        <div className="w-full flex items-center justify-center">
          <NameSectionTeams
            name="Puranjay Kaushik"
            img={Puranjay}
            email="punnukaushik29@gmail.com"
            field="GCS Lead"
            linkedin="https://www.linkedin.com/in/puranjay-kaushik-2718042b9/"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default GCSTeam;
