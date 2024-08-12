import React, { useState } from 'react';
import { Card, Tabs } from 'antd';
import { BulbOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export const FeatureSection = () => {
    const [activeTab, setActiveTab] = useState('1');

    const features = [
        { key: '1', title: 'Creatividad', icon: <BulbOutlined />, description: 'Estimula el pensamiento creativo y la resolución de problemas.' },
        { key: '2', title: 'Desarrollo', icon: <RocketOutlined />, description: 'Mejora las habilidades motoras y la percepción espacial.' },
        { key: '3', title: 'Colaboración', icon: <TeamOutlined />, description: 'Fomenta el trabajo en equipo y la comunicación.' },
    ];

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Características Únicas</h2>
            <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
                {features.map(feature => (
                    <TabPane tab={<span>{feature.icon} {feature.title}</span>} key={feature.key}>
                        <Card hoverable className="text-center">
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </Card>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

