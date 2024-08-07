import {Avatar, Typography} from "antd";
import {BookOpenIcon, LightbulbIcon, TrophyIcon} from "lucide-react";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const CreatorSection = ({id}) => {
    return (<div id={id} className="py-4 px-4 sm:p-6 md:p-52 lg:52 bg-white">
        <div className="text-center">
            <Paragraph className="text-sm text-gray-500 uppercase">Acerca del creador de
                Logicabs</Paragraph>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
            <div>
                <Avatar size={200} src="/api/placeholder/200/200" alt="Creador de Logicabs"
                        className="mb-4 md:mb-0"/>
            </div>
            <div>
                <Title level={3}>Ing. Fortunato Rolando Meneses Ramos</Title>
                <Paragraph className="text-lg mb-4 text-justify">
                    Profesor de todos los niveles de educación pública y privada excluyendo
                    prescolar y posgrados, además por invitación expresa para formar parte del
                    equipo de investigadores de Matemática Educativa del Cinvestav-ipn en la Ciudad
                    de México y como ponente en congresos de Matemática Educativa celebrados en
                    algunos países de Latinoamérica, así como también en universidades de España y
                    de Arizona USA.
                </Paragraph>
                <Paragraph className="text-lg italic">
                    &ldquo;Mi objetivo con Logicabs era crear una herramienta que no solo desafiara
                    la
                    mente, sino que también
                    inspirara la creatividad y fomentara el pensamiento espacial de una manera nueva
                    y emocionante.&ldquo;
                </Paragraph>
            </div>
        </div>

        <div className="space-y-12">
            <div>
                <Title level={4} className="flex items-center mb-4">
                    <TrophyIcon className="mr-2 text-yellow-500"/> Antecedentes Profesionales
                </Title>
                <Paragraph className="text-lg text-justify mt-8">
                    Nuestro equipo está compuesto por profesionales con una vasta experiencia en el
                    campo de la educación y las matemáticas. Nos enorgullece contar con educadores
                    que han dejado su huella en todos los niveles de la enseñanza, desde la
                    educación primaria hasta la universitaria, abarcando tanto instituciones
                    públicas como privadas.
                </Paragraph>
            </div>

            <div>
                <Title level={4} className="flex items-center mb-4">
                    <BookOpenIcon className="mr-2 text-blue-500"/> Experiencia Educativa
                </Title>
                <Paragraph className="text-lg text-justify mt-8">
                    Nuestros miembros han impartido clases en todos los niveles de educación
                    pública y privada, excluyendo preescolar y posgrados. Esta amplia experiencia
                    nos ha permitido comprender las necesidades educativas en diferentes etapas del
                    aprendizaje, lo que ha sido fundamental en el desarrollo de Logicabs como
                    herramienta educativa versátil y efectiva.
                </Paragraph>
            </div>

            <div>
                <Title level={4} className="flex items-center mb-4">
                    <LightbulbIcon className="mr-2 text-green-500"/> Reconocimiento Internacional
                </Title>
                <Paragraph className="text-lg text-justify mt-8">
                    La excelencia de nuestro equipo ha sido reconocida internacionalmente.
                    Hemos sido invitados a formar parte del equipo de investigadores de Matemática
                    Educativa del Cinvestav-IPN en la Ciudad de México, una distinción que subraya
                    nuestro compromiso con la innovación en la enseñanza de las matemáticas.
                    Además, nuestros miembros han participado como ponentes en numerosos congresos
                    de Matemática Educativa celebrados en varios países de Latinoamérica.
                    Nuestra experiencia y conocimientos también han sido compartidos en
                    prestigiosas universidades de España y Arizona, EE.UU., contribuyendo al avance
                    global de la educación matemática.
                </Paragraph>
            </div>
        </div>
    </div>)
}

CreatorSection.propTypes = {
    id: PropTypes.string
}