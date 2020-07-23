import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { lightBlue, darkGrey, lightGrey, breakpointSmall } from '../../ui/constants'

export const Container = styled.form`
    margin-bottom: 30px;

    h2 {
        margin: 0 0 0.6em !important;
    }
`
export const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`
export const Wrapper = styled(Paper)`
    padding: 20px;
    display: inline-block;
    min-width: 300px;
    width: 100%;
`
export const Input = styled(TextField)`
    width: 100%;
    margin-bottom: 20px !important;

    label {
        color: ${darkGrey};
    }

    fieldset {
        display: none;
    }
`
export const SubmitButton = styled(Button)`
    background-color: ${lightBlue} !important;
    color: #fff !important;
`
export const Text = styled.div`
    color: ${darkGrey};
    margin-bottom: 30px;
`
export const CheckboxContainer = styled.div`
    ul {
        list-style: none !important;
        padding-left: 0 !important;
    }
    input {
        display: none !important;
    }
`
export const CheckboxList = styled.ul`
    display: flex;
    flex-direction: ${props => props.isSmall ? 'column' : 'row'};

    @media (max-width: ${breakpointSmall}) {
        flex-direction: column;
    }

    li {
        margin-right: 5px;
    }
`