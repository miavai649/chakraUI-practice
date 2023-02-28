import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
  return (
    <div>
      <Grid templateColumns={'repeat(6, 1fr)'} bg='gray.50'>
        <GridItem
          as={'aside'}
          colSpan={{ base: 6, lg: 2, xl: 1}}
          h='100vh'
          bg={'purple.400'}
          p={{base: '20px', lg: '30px'}}
        >
        <Sidebar/>
        </GridItem>
        <GridItem
          colSpan={{ base: 6, lg: 4, xl: 5}}
          as='main'
          p='30px'
        >
        <Navbar></Navbar>
          <Outlet></Outlet>
        </GridItem>
      </Grid>
            
    </div>
  )
}

export default RootLayout