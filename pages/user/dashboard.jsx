import { Button, Container, ThemeProvider, Typography } from "@mui/material"
import TemplateDefault from "../../src/templates/Default"

const Home = () => {
  return (
    <TemplateDefault>
      <ThemeProvider >
        <Container maxWidth="sm" style={{paddingTop: '2rem', gap: '1rem'}} align="center">
          <Typography variant="h2">My Products</Typography>
          <Button variant="contained" color="primary">Add new Product</Button>
        </Container>
      </ThemeProvider>
    </TemplateDefault>
  )
}

export default Home
