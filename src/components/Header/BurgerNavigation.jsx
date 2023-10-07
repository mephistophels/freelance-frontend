import React from 'react'
import { UserCard } from '../UserCard'
import { Container, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

const BurgerNavigation = ({
  show,
  userCardData,
  getImlementerLinks,
  getBalanceLink
}) => {
  if (!show) return <div></div>
  return (
    <div style={{
      position: 'fixed',
      height: '100vh',
      width: '300px',
      backgroundColor: '#495057',
      borderRadius: '10px',
      zIndex: 20,
      margin: '0 auto',
    }}>
      <Container p={30}>
        <UserCard {...userCardData}/>
        <br />
        {getBalanceLink()}
        <br />
        {getImlementerLinks()}
      </Container>

    </div>
  )
}

export default BurgerNavigation