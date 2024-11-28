import styled from "styled-components"
import { Button } from "../styled/Button"
// eslint-disable-next-line react/prop-types
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/public/images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`

