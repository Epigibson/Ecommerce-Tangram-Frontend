import {Button, Space, Typography} from "antd";
import PropTypes from "prop-types";

const {Title, Paragraph} = Typography;

export const MainSellingSection = ({id}) => {
    return (<div id={id}
                 className="flex flex-col justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Experimenta el Tangram Mejorado</h1>
        <Paragraph className="text-lg mb-6 text-neutral-100">
            Únete a la revolución del rompecabezas con Logicabs. ¡Ordena ahora y desafía tu mente!
        </Paragraph>
        <Space className={"justify-center"}>
            <Button type="primary" size="large">Comprar Logicabs</Button>
            <Button ghost size="large">Más Información</Button>
        </Space>
    </div>)
}

MainSellingSection.propTypes = {
    id: PropTypes.string.isRequired,
};