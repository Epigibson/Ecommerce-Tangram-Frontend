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
        <section id={id} className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl bg-neutral-950 rounded-3xl mx-auto align py-12 px-12">
                <Title level={2} style={{ color: "#e0e0e0" }} className="text-center text-2xl sm:text-3xl lg:text-4xl">
                    Beneficios para el estudiante
                </Title>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start">
                                <CheckCircleOutlined className="text-green-500 text-xl sm:text-2xl mr-3 mt-1" />
                                <Paragraph className="font-semibold text-sm sm:text-base">{benefit}</Paragraph>
                            </div>
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