
import {Layout, Menu, Typography, Space, Button, Timeline, Avatar} from 'antd';
import {CheckCircleOutlined, ClockCircleOutlined, LoginOutlined} from "@ant-design/icons";
import image from "../../assets/tangram.jpg"
import {BookOpenIcon, LightbulbIcon, TrophyIcon} from "lucide-react";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export const HomeLogic = () => {
    const benefits = [
        'Mejora el razonamiento espacial',
        'Desarrolla la creatividad',
        'Fomenta la resolución de problemas',
        'Aumenta la concentración',
        'Estimula el pensamiento lógico'
    ];
    return (
        <Layout className="min-h-screen">
            <Header className="flex items-center justify-between bg-white shadow-md">
                <div className="flex items-center">
                    <LoginOutlined className="text-2xl mr-2 text-blue-600" />
                    <span className="text-xl font-bold text-blue-600">Logicabs</span>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Características</Menu.Item>
                    <Menu.Item key="2">Comparación</Menu.Item>
                    <Menu.Item key="3">Beneficios</Menu.Item>
                    <Menu.Item key="4">Comprar</Menu.Item>
                    <Menu.Item key="5">Login</Menu.Item>
                </Menu>
            </Header>

            <Content>
                <div className="container mx-auto px-4 py-8">
                    <Space direction="vertical" size="large" className="w-full">
                        {/* Hero Section */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="lg:w-1/2 mb-6 lg:mb-0">
                                    <Title level={1} className="text-white">Logicabs: El Tangram Mejorado</Title>
                                    <Paragraph className="text-white text-lg">
                                        Descubre una nueva dimensión en los rompecabezas con Logicabs, la versión
                                        revolucionaria del clásico tangram.
                                    </Paragraph>
                                    <Space>
                                        <Button type="primary" size="large"
                                                className="bg-white text-blue-600 hover:bg-gray-100">Comprar
                                            Ahora</Button>
                                        <Button ghost size="large">Más Información</Button>
                                    </Space>
                                </div>
                                <div className="lg:w-1/2">
                                    <img
                                        src={image}
                                        alt="Logicabs"
                                        className="w-full h-80 rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sección de Historia del Tangram y Creación de Logicabs - Actualizada */}
                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <div className="text-center mb-8">
                                <Paragraph className="text-sm text-gray-500 uppercase">Orígenes e Innovación</Paragraph>
                                <Title level={2} className="text-3xl font-bold">La Historia detrás de Logicabs</Title>
                                <Paragraph className="text-gray-600 max-w-3xl mx-auto">
                                    Descubre cómo el antiguo rompecabezas chino inspiró la creación de Logicabs y por
                                    qué decidimos reinventar este clásico juego.
                                </Paragraph>
                            </div>

                            <div className="mb-12 max-w-5xl mx-auto">
                                <Title level={3} className="mb-4">El Nacimiento de una Idea Innovadora</Title>
                                <Paragraph className="text-lg mb-4 text-start">
                                    Logicabs nació de la pasión por los rompecabezas y el deseo de innovar en el campo
                                    de los juegos educativos.
                                    Nuestro equipo, formado por entusiastas del tangram y expertos en educación, se
                                    propuso crear una versión mejorada
                                    que pudiera ofrecer una experiencia más enriquecedora.
                                </Paragraph>
                                <Paragraph className="text-lg mb-4 text-start">
                                    Inspirados por la rica tradición del tangram y motivados por los avances en
                                    tecnología de materiales,
                                    combinamos la elegancia del diseño tradicional con elementos modernos. Añadimos
                                    piezas magnéticas y
                                    ampliamos las posibilidades de configuración para crear un producto que no solo
                                    honra la herencia del tangram,
                                    sino que también ofrece nuevas oportunidades de juego y aprendizaje.
                                </Paragraph>
                                <Paragraph className="text-lg text-start">
                                    Después de años de investigación y desarrollo, nació Logicabs: un tangram
                                    reinventado que mantiene
                                    la esencia del original mientras lleva la experiencia a un nuevo nivel de desafío y
                                    versatilidad.
                                </Paragraph>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-52">
                                <div>
                                    <Title level={3} className="mb-4">Evolución del Tangram a Logicabs</Title>
                                    <Timeline
                                        className={"mt-8 ml-8"}
                                        items={[
                                            {
                                                dot: <ClockCircleOutlined className="text-blue-500"/>,
                                                children: (
                                                    <>
                                                        <Title className={"text-start"} level={4}>Siglo VII - Dinastía
                                                            Tang</Title>
                                                        <Paragraph className={"text-start"}>Origen del tangram en China,
                                                            aunque su historia
                                                            exacta es incierta.</Paragraph>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <ClockCircleOutlined className="text-blue-500"/>,
                                                children: (
                                                    <>
                                                        <Title className={"text-start"} level={4}>Siglo XIX -
                                                            Popularización Global</Title>
                                                        <Paragraph className={"text-start"}>El tangram se extiende a
                                                            Europa y América como juego
                                                            de ingenio y herramienta educativa.</Paragraph>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <ClockCircleOutlined className="text-blue-500"/>,
                                                children: (
                                                    <>
                                                        <Title className={"text-start"} level={4}>Siglo XX - Evolución
                                                            Moderna</Title>
                                                        <Paragraph className={"text-start"}>Surgen variaciones y nuevos
                                                            diseños, inspirando
                                                            futuras innovaciones.</Paragraph>
                                                    </>
                                                ),
                                            },
                                            {
                                                dot: <ClockCircleOutlined className="text-blue-500"/>,
                                                children: (
                                                    <>
                                                        <Title className={"text-start"} level={4}>2024 - Nacimiento de
                                                            Logicabs</Title>
                                                        <Paragraph className={"text-start"}>Lanzamiento de Logicabs,
                                                            combinando tradición e
                                                            innovación para una experiencia mejorada.</Paragraph>
                                                    </>
                                                ),
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src={image}
                                        alt="Evolución del Tangram a Logicabs"
                                        className="max-w-full h-80 rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Características Section */}
                        <div className="bg-gray-100 rounded-lg py-8 px-72">
                            <div className="text-center mb-8">
                                <Paragraph className="text-sm text-gray-500 uppercase">Características</Paragraph>
                                <Title level={2} className="text-3xl font-bold">Descubre las Ventajas de
                                    Logicabs</Title>
                                <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                                    Logicabs ofrece una serie de características mejoradas que hacen que el rompecabezas
                                    tangram sea más atractivo y desafiante.
                                </Paragraph>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <Title level={4} className="text-xl font-semibold text-start">Piezas
                                            Magnéticas</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            Las piezas de Logicabs están equipadas con imanes potentes,
                                            lo que permite una colocación más precisa y segura.
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Title level={4} className="text-xl font-semibold text-start">Mayor
                                            Dificultad</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            Logicabs cuenta con una gama más amplia de formas y un
                                            diseño más complejo, lo que supone un mayor desafío para los
                                            entusiastas de los rompecabezas.
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Title level={4} className="text-xl font-semibold text-start">Diseño
                                            Versátil</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            La forma y el tamaño únicos de Logicabs permiten una variedad
                                            de configuraciones de rompecabezas, fomentando la
                                            creatividad y la resolución de problemas.
                                        </Paragraph>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt="Ventajas de Logicabs"
                                        className="max-w-full h-80 rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Comparación Section */}
                        <div className="bg-white rounded-lg py-8 px-72 shadow-md">
                            <div className="mb-8">
                                <Paragraph className="text-sm text-gray-500 uppercase">Comparación</Paragraph>
                                <Title level={2} className="text-3xl font-bold">Logicabs vs. Tangram Tradicional</Title>
                                <Paragraph className="text-gray-600">
                                    Descubre cómo Logicabs supera al rompecabezas tangram tradicional en áreas clave.
                                </Paragraph>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <Title level={4} className="text-xl font-semibold text-start">Piezas
                                            Magnéticas</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            Las piezas magnéticas de Logicabs proporcionan un ajuste más seguro y
                                            preciso, mejorando la experiencia general del rompecabezas.
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Title level={4} className="text-xl font-semibold text-start">Mayor
                                            Complejidad</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            Con una gama más amplia de formas y un diseño más intrincado, Logicabs
                                            ofrece un mayor desafío para los entusiastas de los rompecabezas.
                                        </Paragraph>
                                    </div>
                                    <div>
                                        <Title level={4}
                                               className="text-xl font-semibold text-start">Versatilidad</Title>
                                        <Paragraph className="text-gray-600 text-start">
                                            La forma y el tamaño únicos de Logicabs permiten una variedad de
                                            configuraciones de rompecabezas, fomentando la creatividad y la resolución
                                            de problemas.
                                        </Paragraph>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt="Comparación de Tangram"
                                        className="max-w-full h-80 rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Nueva sección: Creador de Logicabs */}
                        <div className="bg-white rounded-lg py-8 px-52 shadow-md">
                            <div className="text-center mb-8">
                                <Paragraph className="text-sm text-gray-500 uppercase">El Genio detrás de
                                    Logicabs</Paragraph>
                                <Title level={2} className="text-3xl font-bold">Conozca a Nuestro Creador</Title>
                                <Paragraph className="text-gray-600 max-w-3xl mx-auto">
                                    Descubra la mente innovadora que dio vida a Logicabs, su trayectoria y la
                                    inspiración que lo llevó a reinventar el clásico tangram.
                                </Paragraph>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
                                <div>
                                    <Avatar size={200} src="/api/placeholder/200/200" alt="Creador de Logicabs"
                                            className="mb-4 md:mb-0"/>
                                </div>
                                <div>
                                    <Title level={3}>Dr. Alejandro Méndez</Title>
                                    <Paragraph className="text-lg mb-4 text-start">
                                        El Dr. Alejandro Méndez, con más de 20 años de experiencia en psicología
                                        cognitiva y diseño de juegos educativos,
                                        es la mente brillante detrás de Logicabs. Su pasión por los rompecabezas y el
                                        aprendizaje lo ha llevado a
                                        revolucionar la forma en que interactuamos con los juegos de lógica espacial.
                                    </Paragraph>
                                    <Paragraph className="text-lg italic">
                                        &ldquo;Mi objetivo con Logicabs era crear una herramienta que no solo desafiara la
                                        mente, sino que también
                                        inspirara la creatividad y fomentara el pensamiento espacial de una manera nueva
                                        y emocionante.&ldquo;
                                    </Paragraph>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <Title level={4} className="flex items-center mb-4">
                                        <TrophyIcon className="mr-2 text-yellow-500"/> Logros y Reconocimientos
                                    </Title>
                                    <Paragraph className="text-lg text-start mt-8">
                                        La trayectoria del Dr. Méndez está marcada por numerosos hitos. En 2022, recibió
                                        el prestigioso Premio a la
                                        Innovación Educativa por su trabajo en Logicabs. Su diseño único le valió una
                                        patente internacional,
                                        reconociendo la originalidad y el potencial de su creación. Además, la
                                        Asociación Internacional de Juegos
                                        Cognitivos ha destacado su contribución al campo, solidificando su posición como
                                        líder en la intersección
                                        entre juego y desarrollo cognitivo.
                                    </Paragraph>
                                </div>

                                <div>
                                    <Title level={4} className="flex items-center mb-4">
                                        <BookOpenIcon className="mr-2 text-blue-500"/> Investigación y Desarrollo
                                    </Title>
                                    <Paragraph className="text-lg text-start mt-8">
                                        El trabajo del Dr. Méndez se basa en años de investigación rigurosa. Sus
                                        estudios sobre el impacto de los
                                        rompecabezas en el desarrollo cognitivo han sido fundamentales para el diseño de
                                        Logicabs. Ha explorado
                                        las aplicaciones del tangram en la terapia ocupacional, abriendo nuevas vías
                                        para el uso de juegos en
                                        entornos terapéuticos. Además, su investigación en innovaciones de materiales
                                        para juegos educativos
                                        ha sido crucial para desarrollar las piezas magnéticas y duraderas que
                                        caracterizan a Logicabs.
                                    </Paragraph>
                                </div>

                                <div>
                                    <Title level={4} className="flex items-center mb-4">
                                        <LightbulbIcon className="mr-2 text-green-500"/> Inspiración y Visión
                                    </Title>
                                    <Paragraph className="text-lg text-start mt-8">
                                        La chispa que encendió Logicabs surgió durante un viaje del Dr. Méndez a China.
                                        Allí, redescubrió el tangram
                                        tradicional y quedó fascinado por su simplicidad y potencial educativo. Este
                                        encuentro lo inspiró a
                                        crear una versión moderna que honrara la sabiduría ancestral del juego mientras
                                        incorporaba tecnología
                                        de vanguardia. Su visión era clara: desarrollar un producto que no solo
                                        entretuviera, sino que también
                                        desafiara e inspirara a jugadores de todas las edades, fomentando habilidades
                                        cruciales para el siglo XXI
                                        como el pensamiento espacial, la resolución de problemas y la creatividad.
                                    </Paragraph>
                                </div>
                            </div>
                        </div>

                        {/* Beneficios Section */}
                        <div className="bg-blue-50 rounded-lg p-8">
                            <Title level={2} className="text-center mb-8">¿Por qué Elegir Logicabs?</Title>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index}
                                         className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <CheckCircleOutlined className="text-green-500 text-2xl mb-2"/>
                                        <Paragraph className="font-semibold">{benefit}</Paragraph>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comprar Section */}
                        <div
                            className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 text-white text-center">
                            <Title level={2} className="text-white mb-4">Experimenta el Tangram Mejorado</Title>
                            <Paragraph className="text-lg mb-6">
                                Únete a la revolución del rompecabezas con Logicabs. ¡Ordena ahora y desafía tu mente!
                            </Paragraph>
                            <Space>
                                <Button type="primary" size="large"
                                        className="bg-white text-blue-600 hover:bg-gray-100">Comprar Logicabs</Button>
                                <Button ghost size="large">Más Información</Button>
                            </Space>
                        </div>
                    </Space>
                </div>
            </Content>

            <Footer className="text-center bg-gray-800 text-white py-4">
                © 2024 Logicabs. Todos los derechos reservados.
            </Footer>
        </Layout>
    )
}