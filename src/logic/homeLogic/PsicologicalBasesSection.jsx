import {Typography} from "antd";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const PsicologicalBasesSection = ({id}) => {
    return (
        <div id={id} className={"flex flex-col justify-center min-h-screen bg-white px-4 sm:p-6 md:p-52 lg:52"}>
            <Title level={3} className="mb-4">¿Cuales fueron las bases psicológicas para dar una solucion
                concreta?</Title>
            <Paragraph className="text-lg my-5 text-start">
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
            <Paragraph className="text-lg my-5 text-justify">
                Es así como después de observaciones de experiencias de otros sistemas educativos con altos
                rendimientos llegamos a confirmar que nuestro enfoque para resolver la situación que nos
                ocupa tenía coincidencias. </Paragraph>
        </div>
    )
}

PsicologicalBasesSection.propTypes = {
    id: PropTypes.string
}