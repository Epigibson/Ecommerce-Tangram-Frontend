import { MainContainerLayout } from "../../components/layout/MainContainerLayout.jsx";
import {HomeLogic} from "../../logic/homeLogic/HomeLogic.jsx";

export const HomePage = () => {
    return (
        <>
            <MainContainerLayout>
                <HomeLogic />
            </MainContainerLayout>
        </>
    );
};
