import { Layout } from 'antd';
import { HeroSection } from "./HeroSection.jsx";
import { WhatIsSection } from "./WhatIsSection.jsx";
import { HistorySection } from "./HistorySection.jsx";
import { DiscoverSection } from "./DiscoverSection.jsx";
import { PsicologicalBasesSection } from "./PsicologicalBasesSection.jsx";
import { ComparativeSection } from "./ComparativeSection.jsx";
import { ShortBenefits } from "./ShortBenefits.jsx";
import { LargeBenefits } from "./LargeBenefits.jsx";
import { CreatorSection } from "./CreatorSection.jsx";
import { MainSellingSection } from "./MainSellingSection.jsx";
import { HeaderSection } from "./HeaderSection.jsx";
import { FooterSection } from "./FooterSection.jsx";
import { ParticlesUtil } from "./ParticlesUtil.jsx";

const { Content } = Layout;

export const HomeLogic = () => {
    return (
        <div className="relative min-h-screen">
            <ParticlesUtil />
            <Layout className="relative z-10 min-h-screen bg-transparent">
                <HeaderSection />
                <Content className="bg-white bg-opacity-70">
                    <div className="container mx-auto">
                        <div className="w-full">
                            <HeroSection id="hero" />
                            {/*<FeatureSection id="features" />*/}
                            <WhatIsSection id="what-is" />
                            <HistorySection id="history" />
                            <DiscoverSection id="discover" />
                            <PsicologicalBasesSection id="psychological-bases" />
                            <ComparativeSection id="comparative" />
                            <ShortBenefits id="short-benefits" />
                            <LargeBenefits id="large-benefits" />
                            <CreatorSection id="creator" />
                            <MainSellingSection id="main-selling" />
                        </div>
                    </div>
                </Content>
                <FooterSection />
            </Layout>
        </div>
    )
}