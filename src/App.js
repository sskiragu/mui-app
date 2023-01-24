import { Button, Container, styled, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

function App() {
  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888"
  }))
  return (
    <>
     <Container>
        <Button startIcon={<LoginIcon/>} sx={{
          mt: 5
          }} variant="contained" color="otherColor" >Login</Button>
        <Typography variant="h1">
          Some text will be added here!
        </Typography>
        <BlueButton>New Btn</BlueButton>
     </Container>
    </>
  );
}

export default App;
