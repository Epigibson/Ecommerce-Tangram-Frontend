import { AwardIcon, BrainIcon, PuzzleIcon, UserIcon } from "lucide-react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import PropTypes from "prop-types";

export const WhatIsSection = ({ id }) => {
    return (
        <section id={id} className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Title level={2} className="flex items-center mb-4 text-xl sm:text-2xl lg:text-3xl">
                            <PuzzleIcon className="mr-2 text-green-500 w-6 h-6 sm:w-8 sm:h-8"/> ¿Qué es EL LOGICABS?
                        </Title>
                        <Paragraph className="text-sm sm:text-base">
                            EL LOGICABS es un dispositivo innovador compuesto por 8 piezas geométricas
                            obtenidas al seccionar un cuadrado. Estas piezas guardan una proporcionalidad
                            que les permite integrarse en diversas figuras, incluyendo personas,
                            animales, objetos, números y letras. Su diseño único propicia el desarrollo y
                            potenciación de procesos cognitivos esenciales.
                        </Paragraph>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Title level={2} className="flex items-center mb-4 text-xl sm:text-2xl lg:text-3xl">
                            <BrainIcon className="mr-2 text-purple-500 w-6 h-6 sm:w-8 sm:h-8"/> Metodología de Uso
                        </Title>
                        <Paragraph className="text-sm sm:text-base">
                            La metodología propuesta para el uso de El Logicabs es aplicable a la mayoría de
                            los estudiantes. Se basa en el desarrollo de procesos mentales a través de desafíos
                            visuales y manipulativos. Esta aproximación reconoce la naturaleza no lineal del
                            pensamiento y el comportamiento humano, lo que permite resultados que van más allá
                            de la simple mejora del rendimiento escolar a corto plazo.
                        </Paragraph>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Title level={2} className="flex items-center mb-4 text-xl sm:text-2xl lg:text-3xl">
                            <UserIcon className="mr-2 text-blue-500 w-6 h-6 sm:w-8 sm:h-8"/> Quiénes Somos
                        </Title>
                        <Paragraph className="text-sm sm:text-base">
                            Nuestro equipo está compuesto por profesionales con amplia experiencia en todos
                            los niveles de educación pública y privada. Hemos sido invitados a formar parte del
                            equipo de investigadores de Matemática Educativa del Cinvestav-IPN en la Ciudad de
                            México y participado como ponentes en congresos internacionales de Matemática
                            Educativa en Latinoamérica, España y Estados Unidos.
                        </Paragraph>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Title level={2} className="flex items-center mb-4 text-xl sm:text-2xl lg:text-3xl">
                            <AwardIcon className="mr-2 text-green-500 w-6 h-6 sm:w-8 sm:h-8"/> Situación Actual
                        </Title>
                        <Paragraph className="text-sm sm:text-base">
                            Actualmente, EL LOGICABS está publicado en Espacenet, una base de datos
                            especializada de patentes desarrollada por la Oficina Europea de Patentes (EPO).
                            Puede acceder a la información pulsando: Fortunato Rolando Meneses Ramos.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}

WhatIsSection.propTypes = {
    id: PropTypes.string.isRequired,
};