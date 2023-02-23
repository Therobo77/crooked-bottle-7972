import "./Sidebar.css"
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
export default function Sidebar() {
    
    return(
        <div className="sidebar">
                <Box className="left-mobile">
                    <Heading as='h2' size='lg'>Filter</Heading>
                    <Text>CATEGORIES</Text>
                </Box>
                
            
        </div>
    )
};
