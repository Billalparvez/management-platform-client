import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import UserTypeSection from "../UserTypeSection/UserTypeSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Management || Home</title>
            </Helmet>
            <Bannar></Bannar>
            <UserTypeSection></UserTypeSection>

        </div>
    );
};

export default Home;