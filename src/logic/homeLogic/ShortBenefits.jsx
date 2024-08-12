import { CheckCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import PropTypes from "prop-types";

export const ShortBenefits = ({ id }) => {
    const benefits = [
        'Impulsa a obtener logros por sí mismo',
        'Desarrolla capacidades de observación, imaginación y visualización',
        'Mejora habilidades de análisis, comparación y reflexión',
        'Fomenta la deducción, intuición y discernimiento',
    ];

    return (
        <section id={id} className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2 md:py-24 lg:py-32">
            <div className="max-w-7xl rounded-3xl mx-auto align py-12 px-12">
                <Title level={2} className="text-center text-2xl sm:text-3xl lg:text-4xl">
                    Beneficios para el estudiante
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <CheckCircleOutlined className="text-green-500 text-2xl mb-2" />
                                <Paragraph className="font-semibold text-sm sm:text-base">{benefit}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

ShortBenefits.propTypes = {
    id: PropTypes.string
}