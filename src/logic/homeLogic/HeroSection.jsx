import { Button, Space, Typography } from "antd";
const { Title, Paragraph } = Typography;
import image from "../../assets/tangram.jpg";
import PropTypes from "prop-types";

export const HeroSection = ({ id }) => {
    return (
        <div id={id} className="flex flex-col justify-center min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="mt-8 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-lg overflow-hidden shadow-xl">
                <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Title level={1} style={{ color: "#e0e0e0" }} className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                            Logicabs: El Tangram Mejorado
                        </Title>
                        <Paragraph className="text-white text-base sm:text-lg mb-6">
                            Descubre una nueva dimensión en los rompecabezas con Logicabs, la versión
                            revolucionaria del clásico tangram.
                        </Paragraph>
                        <Space direction="vertical" size="middle" className="w-full sm:flex-row sm:space-x-4">
                            <Button type="primary" size="large" className="w-full sm:w-auto">
                                Comprar Ahora
                            </Button>
                            <Button ghost size="large" className="w-full sm:w-auto">
                                Más Información
                            </Button>
                        </Space>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img
                            src={image}
                            alt="Logicabs"
                            className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <section className="mt-12 py-4 md:py-8 lg:py-12 text-center bg-gradient-to-r from-emerald-600 to-purple-600 bg-blend-hue bg-opacity-25">
                <Title level={2} style={{ color: "#e0e0e0" }} className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                    ¡Descubre el poder de EL LOGICABS!
                </Title>
                <Paragraph className="text-base sm:text-lg mb-6 text-gray-300">
                    Impulsa el desarrollo cognitivo y el éxito académico de tu hijo.
                </Paragraph>
                <Button type="primary" size="large" className="sm:w-auto">
                    ¡Obtén EL LOGICABS ahora!
                </Button>
            </section>
        </div>
    );
};

HeroSection.propTypes = {
    id: PropTypes.string.isRequired,
};