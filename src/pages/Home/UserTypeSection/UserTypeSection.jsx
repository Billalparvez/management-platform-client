import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Container from '../../../Shard/Container'
import TabCart from "../../../Components/WebCart";
import BankarCart from "../../../Components/BankarCart";
import WebCart from "../../../Components/WebCart";
import CorporationCart from "../../../Components/CorporationCart";
const UserTypeSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (

        <Container>
            <div className="my-10 px-10">
                <SectionTitle
                    headings={'Who Can Benefit'}
                    subHeading={'Our Task Management Platform'}>
                </SectionTitle>

                <div className="mt-10">

                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <div className="text-center font-bold">
                            <TabList>
                                <Tab>Developers</Tab>
                                <Tab>Corporate Professionals</Tab>
                                <Tab>Bankers</Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <WebCart></WebCart>
                        </TabPanel>
                        <TabPanel>
                           <CorporationCart></CorporationCart>
                        </TabPanel>
                        <TabPanel>
                            <BankarCart></BankarCart>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </Container>
    );
};


export default UserTypeSection;
