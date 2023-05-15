import React from 'react';
import ReactDOM from "react-dom";
import config from '../../../package.json';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Text, Button } from 'native-base';

export const LicensePage = () => {
    const navigation = useNavigate();
    
    const LicenseMap = () => {
        return (
            <VStack>
                {Object.keys(config.dependencies).map((element) => {
                    return (
                        <Text color={'white'} fontSize={24} fontWeight={'bold'}>
                            {element}
                        </Text>
                    )
                })}
            </VStack>
        );
    };

    return (
        <div
            style={{
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                height: '100vh'
            }}
        >
            <VStack space={10}>
                <Text color={'white'} fontSize={24} fontWeight={'bold'}>
                    Packages die in diesem Projekt von Frontend genutzt werden
                </Text>
                <LicenseMap />
                <Button onFocus={() => navigation('/')} backgroundColor={'white'}>
                    <Text color={'black'} fontSize={24} fontWeight={'bold'}>
                        Zurück zur Main Page
                    </Text>
                </Button>
            </VStack>
        </div>
    );
};
