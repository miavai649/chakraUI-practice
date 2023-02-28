import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [cards, setCards] = useState([])
  console.log(cards);

  useEffect(() => {
    fetch('db.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])

  return (
    <SimpleGrid minChildWidth={'300px'} spacing={10}>
      {
        cards.map(card => 
          <Card key={card.id}>
            <CardHeader>
              <Flex gap={5}>
                <Box w={'50px'} h='50px' bg={"gray.200"}>
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as={'h3'} size={"sm"}>
                    {card.title}
                  </Heading>
                  <Text>by { card.author }</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={"gray.500"}>
              {card.description}
            </CardBody>

            <CardFooter>
              <HStack>
                <Button><ViewIcon/></Button>
                <Button><EditIcon/></Button>
              </HStack>
            </CardFooter>
          </Card>
          )
      }
    </SimpleGrid>
  );
};

export default DashBoard;
