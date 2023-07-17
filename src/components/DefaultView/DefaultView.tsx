import { Box, VStack } from "native-base"

type DefaultViewProps = {
    children?: React.ReactElement | React.ReactElement[],
    customWidth?: string | number,
    customMaxWidh?: string
}

export const DefaultView: React.FC<DefaultViewProps> = ({ children, customWidth, customMaxWidh }) => {
    let width = '420px'
    let height = '200px'

    return (
        <VStack alignItems={'center'}>
            <Box
                rounded={'sm'}
                backgroundColor='white'
                maxWidth={customMaxWidh || '90%'}
                width={customWidth || width}
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