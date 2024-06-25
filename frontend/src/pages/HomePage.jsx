import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        bg={"#4bacfc5e"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="work sans"
          textAlign="center"
          textColor={"#180a31"}
        >
          Chatter Boxie
        </Text>
      </Box>
      <Box
        bg={"#4bacfc5e"}
        w={"100%"}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        textColor={"#180a31"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab textColor={"#180a31"} w={"50%"}>
              Login
            </Tab>
            <Tab textColor={"#180a31"} w={"50%"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
