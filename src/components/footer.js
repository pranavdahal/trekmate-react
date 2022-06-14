import { Container } from "react-bootstrap";

const Footer = () => {
    return (
            <Container>
                <div className="text-center mt-5 text-muted">
                    Copyright &copy; TrekMate {process.env.REACT_APP_NAME}
                </div>
            </Container>
    )
}

export default Footer;