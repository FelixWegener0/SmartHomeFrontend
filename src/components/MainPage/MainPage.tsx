import { Box, Button, HStack, Icon, Pressable, Text, VStack } from "native-base";

export const MainPage = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box backgroundColor={'white'} rounded={'full'} alignItems={'center'}>
                <Text fontSize={'xl'} fontFamily={'heading'}>
                    Overview SmartHome
                </Text>
            </Box>
            <VStack>
                <Pressable onPress={() => console.log('test')}>
                    <Icon name="cog" />
                    <Text>Settings LED</Text>
                </Pressable>
            </VStack>
        </div>
    );
};
