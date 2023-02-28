import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
      <List fontSize={'1.2em'} color='white' spacing={3}>
          <ListItem>
              <NavLink to='/'>
                <ListIcon as={CalendarIcon} color={'white'}></ListIcon>
                  Dashboard
              </NavLink>
          </ListItem>
          <ListItem>
              <NavLink to='/create'>
              <ListIcon as={EditIcon} color='white'></ListIcon>
                  New Task
              </NavLink>
          </ListItem>
          <ListItem>
              <NavLink to='/profile'>
              <ListIcon as={AtSignIcon} color='white'></ListIcon>
                  Profile
              </NavLink>
          </ListItem>
      </List>
  )
}

export default Sidebar