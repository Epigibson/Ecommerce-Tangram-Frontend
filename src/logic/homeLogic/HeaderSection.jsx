import {LoginOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import {useEffect, useState} from "react";
import { Link, Events, scrollSpy, animateScroll as scroll } from 'react-scroll';

const {Header} = Layout;

const sections = [
    {key: '1', to: 'hero', label: 'Home'},
    {key: '2', to: 'what-is', label: '¿Qué es?'},
    {key: '3', to: 'history', label: 'Historia'},
    {key: '4', to: 'discover', label: 'Descubrimientos'},
    {key: '5', to: 'psychological-bases', label: 'Bases Psicológicas'},
    {key: '6', to: 'comparative', label: 'Comparación'},
    {key: '7', to: 'short-benefits', label: 'Beneficios'},
    {key: '8', to: 'creator', label: 'Creador'},
    {key: '9', to: 'main-selling', label: 'Comprar'},
    // {key: '10', to: 'features', label: 'Features'}
];


export const HeaderSection = () => {
    const [activeKey, setActiveKey] = useState('1');

    useEffect(() => {
        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        const activeSection = sections.find(section => section.to === to);
        if (activeSection) {
            setActiveKey(activeSection.key);
        }
    };

    const menuItems = sections.map(section => ({
        key: section.key,
        label: (
            <Link
                style={{color: 'black'}}
                className="cursor-pointer "
                to={section.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
            >
                {section.label}
            </Link>
        )
    }));

    return (<Header
            className="flex flex-row left-0 top-0 items-center w-screen bg-white shadow-md fixed z-50">
            <div className="flex mr-4">
                <LoginOutlined className="text-2xl mr-2 text-black"/>
                <span className="text-xl font-bold text-black">Logicabs</span>
            </div>
            <Menu
                className="bg-white"
                // theme="dark"
                mode="horizontal"
                selectedKeys={[activeKey]}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
        </Header>);
};