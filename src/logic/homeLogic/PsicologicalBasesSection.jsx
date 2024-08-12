import {Typography, Divider} from "antd";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const PsicologicalBasesSection = ({id}) => {
    return (
        <div id={id} className={"min-h-screen flex flex-col justify-evenly mx-4 sm:mx-6 md:mx-52 lg:mx-52"}>
            <Title level={3}>
                ¿Cuales fueron las bases psicológicas para dar una solucion
                concreta?
                <Divider className={"bg-black"} />
            </Title>
            <div className={"px-8 rounded-lg bg-neutral-900"}>
                <Paragraph className="text-lg my-5 text-start text-gray-300">
                    Consideramos 4 de ellas:
                    <ol className={"text-justify"}>
                        <li>La actividad mental es permanente por naturaleza y de gran movilidad en las edades
                            escolares.
                        </li>
                        <li>Aceptar desafíos.</li>
                        <li>Gran curiosidad a temprana edad.</li>
                        <li>Al pensar, el cerebro todo lo traduce en de imágenes.
                            Es así como después de observaciones de experiencias de otros sistemas educativos
                            con altos rendimientos llegamos a confirmar que nuestro enfoque para resolver la
                            situación que nos
                            ocupa tenía coincidencias.
                        </li>

                    </ol>


                </Paragraph>
                <Paragraph className="text-lg mt-5 text-justify text-gray-300">
                    Es así como después de observaciones de experiencias de otros sistemas educativos con altos
                    rendimientos llegamos a confirmar que nuestro enfoque para resolver la situación que nos
                    ocupa tenía coincidencias.
                </Paragraph>
            </div>
        </div>
    )
}

PsicologicalBasesSection.propTypes = {
    id: PropTypes.string
}