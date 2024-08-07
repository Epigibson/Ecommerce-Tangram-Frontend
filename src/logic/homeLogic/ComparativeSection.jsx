import image from "../../assets/tangram.jpg";
import {Typography} from "antd";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const ComparativeSection = ({id}) => {
    return (
        <div id={id} className="flex flex-col justify-center min-h-screen py-8 px-4 sm:p-6 md:p-52 lg:52">
            <div className="mb-8">
                <Paragraph className="text-sm text-gray-400 uppercase">Comparación</Paragraph>
                <Title level={2} style={{ color: "#e0e0e0" }} className="text-3xl font-bold">Logicabs vs. Tangram Tradicional</Title>
                <Paragraph className="text-gray-400">
                    Descubre cómo Logicabs supera al rompecabezas tangram tradicional en áreas clave.
                </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <Title level={4} style={{ color: "#e0e0e0" }} className="text-xl font-semibold text-start">Diseño Innovador</Title>
                        <Paragraph className="text-gray-400 text-start">
                            Las piezas de Logicabs están diseñadas con precisión geométrica, permitiendo un ajuste
                            perfecto
                            y una versatilidad excepcional. Su forma única facilita la creación de figuras complejas,
                            estimulando la creatividad y el pensamiento espacial.
                        </Paragraph>
                    </div>
                    <div>
                        <Title level={4} style={{ color: "#e0e0e0" }} className="text-xl font-semibold text-start">Mayor
                            Complejidad</Title>
                        <Paragraph className="text-gray-400 text-start">
                            Con una gama más amplia de formas y un diseño más intrincado, Logicabs
                            ofrece un mayor desafío para los entusiastas de los rompecabezas.
                        </Paragraph>
                    </div>
                    <div>
                        <Title level={4} style={{ color: "#e0e0e0" }}
                               className="text-xl font-semibold text-start">Versatilidad</Title>
                        <Paragraph className="text-gray-400 text-start">
                            La forma y el tamaño únicos de Logicabs permiten una variedad de
                            configuraciones de rompecabezas, fomentando la creatividad y la resolución
                            de problemas.
                        </Paragraph>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src={image}
                        alt="Comparación de Tangram"
                        className="max-w-full h-80 rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

ComparativeSection.propTypes = {
    id: PropTypes.string.isRequired,
};