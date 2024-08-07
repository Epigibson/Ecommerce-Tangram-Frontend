import {Timeline, Typography} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
const {Title, Paragraph} = Typography;
import { motion } from "framer-motion";
import image from "../../assets/tangram.jpg";
import PropTypes from "prop-types";

export const HistorySection = ({id}) => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    const slideIn = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <motion.div
            id={id}
            className="bg-neutral-950 rounded-lg py-2 sm:py-4 md:py-4 px-4 sm:px-6 md:px-52 lg:px-52"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <motion.div className="text-center mb-8" variants={fadeIn}>
                <Paragraph className="text-sm text-gray-300 uppercase">Orígenes e Innovación</Paragraph>
                <Title level={2} style={{ color: '#e0e0e0' }} className="text-3xl font-bold">La Historia detrás de Logicabs</Title>
                <Paragraph className="text-gray-400 max-w-3xl mx-auto">
                    Descubre cómo el antiguo rompecabezas chino inspiró la creación de Logicabs y por
                    qué decidimos reinventar este clásico juego.
                </Paragraph>
            </motion.div>

            <motion.div className="mb-12 max-w-4xl mx-auto" variants={slideIn}>
                <Title level={3} style={{ color: '#e0e0e0' }} className="mb-4">El Nacimiento de una Idea Innovadora</Title>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify">
                    La historia de Logicabs es el resultado de años de investigación y experiencia en
                    el campo educativo. Nace de la necesidad de mejorar el aprendizaje
                    de las matemáticas, enfocándose no solo en la enseñanza,
                    sino en el desarrollo de procesos mentales fundamentales.
                </Paragraph>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify">
                    Desde estos desempeños profesionales, se buscan mejorar el aprendizaje de las
                    matemáticas y esto por lo general, siempre se hace desde la enseñanza; con los
                    resultados muy a menudo poco satisfactorios para la mayoría de los participantes en
                    el quehacer educativo, incluyendo a los padres de los alumnos.
                </Paragraph>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify font-bold">
                    ¿Que hace el maestro y los actores involucrados ante los resultados educativos?
                </Paragraph>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify">
                    Primeramente, debemos decir que existen valoraciones de rendimientos escolares
                    imparciales de corte internacional como los propuestos por la OCDE a través del PISA
                    (Programme International Assessment Students), que revelan capacidades de los procesos
                    de razonamientos y no así dominio de conocimientos.
                    A estos estudios comparativos de los sistemas educativos nacionales; muchos de ellos
                    tienen de interés de participar; en tanto alguno por su falta de resultados
                    satisfactorios subestiman su importancia y los profesores por su lado lo atribuyen a
                    muchos factores y como factor determinante a la carga genética.
                </Paragraph>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify font-bold">
                    ¿Que podemos hacer para mejorar la situacion?
                </Paragraph>
                <Paragraph className="text-gray-400 text-lg mb-4 text-justify">
                    Hay cierta claridad de la presencia del dilema: sobre cuál es el objetivo de la
                    educación buscar el dominio del conocimiento o la capacidad de desplegar razonamientos
                    acertados.
                    Donde la totalidad de profesores opinaron que son los procesos mentales implicados por
                    el razonamiento lo más importante

                </Paragraph>
                <Paragraph className="text-gray-400 text-lg text-justify">
                    Después de años de investigación y desarrollo, nació Logicabs: un tangram
                    reinventado que mantiene
                    la esencia del original mientras lleva la experiencia a un nuevo nivel de desafío y
                    versatilidad.
                </Paragraph>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
                <motion.div variants={slideIn}>
                    <Title level={3} style={{ color: '#e0e0e0' }} className="mb-4">Evolución del Tangram a Logicabs</Title>
                    <Timeline
                        className={"mt-8 ml-8"}
                        items={[{
                            dot: <ClockCircleOutlined className="text-primary-500 bg-neutral-950"/>, children: (<>
                                <Title className={"text-start"} style={{ color: '#e0e0e0' }} level={4}>Siglo VII - Dinastía
                                    Tang</Title>
                                <Paragraph className={"text-start text-gray-400"}>Origen del tangram en China,
                                    aunque su historia
                                    exacta es incierta.</Paragraph>
                            </>),
                        }, {
                            dot: <ClockCircleOutlined className="text-blue-500"/>, children: (<>
                                <Title className={"text-start"} style={{ color: '#e0e0e0' }} level={4}>Siglo XIX -
                                    Popularización Global</Title>
                                <Paragraph className={"text-start text-gray-400"} >El tangram se extiende a
                                    Europa y América como juego
                                    de ingenio y herramienta educativa.</Paragraph>
                            </>),
                        }, {
                            dot: <ClockCircleOutlined className="text-blue-500"/>, children: (<>
                                <Title className={"text-start"} style={{ color: '#e0e0e0' }} level={4}>Siglo XX - Evolución
                                    Moderna</Title>
                                <Paragraph className={"text-start text-gray-400"}>Surgen variaciones y nuevos
                                    diseños, inspirando
                                    futuras innovaciones.</Paragraph>
                            </>),
                        }, {
                            dot: <ClockCircleOutlined className="text-blue-500"/>, children: (<>
                                <Title className={"text-start"} style={{ color: '#e0e0e0' }} level={4}>2024 - Nacimiento de
                                    Logicabs</Title>
                                <Paragraph className={"text-start text-gray-400"}>Lanzamiento de Logicabs,
                                    combinando tradición e
                                    innovación para una experiencia mejorada.</Paragraph>
                            </>),
                        },]}
                    />
                </motion.div>
                <motion.div variants={fadeIn}>
                    <img
                        src={image}
                        alt="Evolución del Tangram a Logicabs"
                        className="max-w-full h-80 rounded-lg shadow-md"
                    />
                </motion.div>
            </div>

        </motion.div>
    )
}

HistorySection.propTypes = {
    id: PropTypes.string.isRequired,
};