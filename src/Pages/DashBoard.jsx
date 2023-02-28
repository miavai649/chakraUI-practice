import { Heading, SimpleGrid } from "@chakra-ui/react";
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
    <SimpleGrid minChildWidth={'250px'} p={"10px"} spacing={10}>
      <Heading>{ cards.length }</Heading>
    </SimpleGrid>
  );
};

export default DashBoard;
