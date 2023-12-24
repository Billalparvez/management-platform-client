import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const CreatNewJob = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title>Management || New JOb</title>
            </Helmet>
            <SectionTitle
                headings={'New Job'}
                subHeading={'Creating New Job'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <h1>job DB</h1>
            </div>
        </div>
    );
};

export default CreatNewJob;