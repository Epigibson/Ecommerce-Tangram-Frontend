import {Button, Image} from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import tangram from "../../assets/tangram.jpg";
import PropTypes from "prop-types";

export const HeroSection = ({id}) => (<div id={id}
                                           className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white min-h-screen">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Descubre el Tangram Mejorado</h1>
            <p className="text-xl mb-6">Potencia tu creatividad y habilidades cognitivas con nuestro innovador
                diseño</p>
            <Button type="primary" size="large" className="border-none">
                Comprar Ahora <ArrowRightOutlined/>
            </Button>
        </div>
        <div className="md:w-1/2 relative">
            <div className="w-64 h-64 bg-white rounded-full absolute top-0 right-0 animate-pulse"></div>
            <div className="w-48 h-48 bg-blue-300 rounded-lg absolute bottom-0 left-0 animate-bounce"></div>
            <Image width={200} src={tangram} className="relative z-10 animate-pulse"/>
        </div>
    </div>);

HeroSection.propTypes = {
    id: PropTypes.string.isRequired,
};
