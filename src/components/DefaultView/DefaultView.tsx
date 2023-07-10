import { Box, VStack } from "native-base"

type DefaultViewProps = {
    children?: React.ReactElement | React.ReactElement[]
}

export const DefaultView: React.FC<DefaultViewProps> = ({ children }) => {
    let width = '420px'
    let height = '200px'

    return (
        <VStack alignItems={'center'}>
            <Box
                rounded={'sm'}
                backgroundColor='white'
                maxWidth={'90%'}
                width={width}
                height={height}
                alignItems={'flex-start'}
                paddingLeft={8}
            >
                {children}
            </Box>
            <Box height={'20px'} backgroundColor={'black'}/>
        </VStack>
    )
}