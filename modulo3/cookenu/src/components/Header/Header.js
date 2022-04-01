import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled'
import { goToListaReceita, goToLogin } from "../../Routes/coordinator"
import {useHistory} from "react-router-dom"

const Header = () => {
  const history = useHistory()
  return (

    <AppBar position="static">
      <StyledToolbar>
      <Button onClick={() => goToListaReceita(history)} color="inherit">Cookenu</Button>
      <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  ) 
}
export default Header