import { Container, Content, Icon } from "./styles"

import logoImage from "images/logo.svg"
import homeImage from "images/home.svg"
import moviesImage from "images/movies.svg"
import tvImage from "images/tv.svg"
import favImage from "images/fav.svg"

const Navbar = () => {
    return <Container>
        <img src={logoImage} alt="" />

        <Content>
            <Icon src={homeImage} alt="" />
            <Icon src={moviesImage} alt="" />
            <Icon src={tvImage} alt="" />
            <Icon src={favImage} alt="" />
        </Content>
    </Container>
}

export { Navbar }