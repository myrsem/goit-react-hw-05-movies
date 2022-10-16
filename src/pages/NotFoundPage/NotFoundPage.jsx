import { Container, Title, HomeLink } from 'pages/NotFoundPage/NotFoundPage.styled'

const NotFoundPage = () => {
    return (
        <Container>
            <Title>404</Title>
            <h2>Oops! Page not found</h2>
            <p style={{marginTop:"30px"}}>
              <HomeLink to="/">Go to Home </HomeLink>
            </p>
        </Container>
    )
}

export default NotFoundPage