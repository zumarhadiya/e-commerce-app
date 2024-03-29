import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Tabs>
  <TabList>
    <Tab><Link to={`/`}>HOME</Link> </Tab>
    <Tab><Link to={`/products`}>PRODUCTS</Link></Tab>
    <Tab><Link to={`/signup`}>SIGNUP</Link></Tab>
    <Tab><Link to={`/login`}>LOGIN</Link></Tab>
  </TabList>
</Tabs>
  )
}

export default Navbar