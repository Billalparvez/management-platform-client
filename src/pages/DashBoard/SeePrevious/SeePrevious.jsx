import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const SeePrevious = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title> Management ||  SEE Previous </title>
            </Helmet>
            <SectionTitle
                headings={'see'}
                subHeading={'See Previous job'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <h1>job DB</h1>
            </div>
        </div>
    );
};

export default SeePrevious;