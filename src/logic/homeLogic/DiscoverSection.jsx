import {Typography} from "antd";
const {Title, Paragraph} = Typography;
import PropTypes from "prop-types";

export const DiscoverSection = ({id}) => {
    return (
        <div id={id} className={"flex flex-col justify-center min-h-screen px-4 sm:p-6 md:p-52 lg:52 dark:bg-gray-900 transition-colors duration-300"}>
            <Title
                level={3}
                className="mb-4"
            >
                ¿Que descubrimos?
            </Title>
            <Paragraph className="text-lg mb-4 text-justify text-neutral-500">
                Descubrimos que existen importantes componentes mostrados por los estudiantes, ante los
                que el profesor o los sistemas educativos han dado por sentados o poco atendidos, además
                de los ya señalados como sus creencias y actitudes, se suman: interés, atención,
                observación, imaginación, visualización, procesos de análisis, reflexión; todos ellos de
                indiscutibles raíces subjetivas, lo que ha hecho que se dejen de lado. </Paragraph>
        </div>
    )
}

DiscoverSection.propTypes = {
    id: PropTypes.string.isRequired
}