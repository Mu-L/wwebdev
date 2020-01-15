import styled from 'styled-components'
import { greyBlue, boxShadow } from '../../ui/constants'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: ${boxShadow};
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
export const Time = styled.time`
    color: ${greyBlue};
    font-size: 1rem;
    line-height: 30px;
    margin-right: 3px;
`