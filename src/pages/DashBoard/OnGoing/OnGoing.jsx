import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const OnGoing = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title> Management ||  OnGoing </title>
            </Helmet>
            <SectionTitle
                headings={'Ongoing to Completed'}
                subHeading={'On Going'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <h1>job DB</h1>
            </div>
        </div>
    );
};

export default OnGoing;