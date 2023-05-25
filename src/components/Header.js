import {LoginBtn, StyledHeader} from './styles/Header.styled'
import { Container, Flex } from './styles/Invisible.styled'

export default function Header() {
    return (
        <StyledHeader>
            <LoginBtn onClick={Login}>Login</LoginBtn>
            <Flex>
                <h1 className="Logo">TestSite</h1>
            </Flex>
        </StyledHeader>
    )
}
