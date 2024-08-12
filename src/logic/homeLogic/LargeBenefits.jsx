import {CheckCircleOutlined} from "@ant-design/icons";
import {Typography} from "antd";
import PropTypes from "prop-types";

const {Title, Paragraph} = Typography;

export const LargeBenefits = ({id}) => {
    const benefitsLarge = ['Mayor tiempo de atención y concentración', 'Actitud analítica y reflexiva mejorada', 'Aumento de la capacidad de resiliencia', 'Mejora en las relaciones maestro-alumno', 'Mayor rendimiento escolar']

    return (
        <div id={id} className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className={"py-4"}>
                    <Title level={2} className="text-center">Beneficios de Largo Alcance</Title>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {benefitsLarge.map((benefit, index) => (<div key={index}
                                                                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <CheckCircleOutlined className="text-green-500 text-2xl mb-2"/>
                        <Paragraph className="font-semibold">{benefit}</Paragraph>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

LargeBenefits.propTypes = {
    id: PropTypes.string
}