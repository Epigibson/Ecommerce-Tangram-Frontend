import {Button, Space, Typography} from "antd";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const MainSellingSection = ({id}) => {
    return (<div id={id}
            className="flex flex-col justify-center h-screen bg-gradient-to-b from-primary-950 to-neutral-950 rounded-lg p-8 text-white text-center">
            <Title level={2} className="text-white mb-4">Experimenta el Tangram Mejorado</Title>
            <Paragraph className="text-lg mb-6">
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