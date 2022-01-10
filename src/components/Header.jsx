import { Link } from 'react-router-dom'
import {LoginBtn, StyledHeader} from './styles/Header.styled'
import { Container, Flex } from './styles/Invisible.styled'

export default function Header() {
    return (
        <StyledHeader>
            {/* <LoginBtn to='/auth'>Log in</LoginBtn> */}
            <Flex>
                <h1 className="Logo">TestSite</h1>
            </Flex>
        </StyledHeader>
    )
}
