import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Management || Home</title>
            </Helmet>
            <Bannar></Bannar>

        </div>
    );
};

export default Home;