import React from 'react'
import PartnerUser from "../../components/users/PartnerUser"
import GenericUser from "../../components/users/GenericUser"
import AdministratorUser from "../../components/users/AdministratorUser"
import { Container } from 'react-bootstrap'


function DashboardUser() {
  return (
    <Container>
      <PartnerUser/>
      <GenericUser/>
      <AdministratorUser/>
    </Container>
  )
}

export default DashboardUser
