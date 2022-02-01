import styled from "styled-components";

const StyledInput = styled.div`
    background-color: white;
    padding: .75rem 1rem;
    input{
        width: 100%;
        border: none;
        outline: none;
        font-size: 1.125rem;
    }
`

type InputType = {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string
}
const Input: React.FC<InputType> = ({
    placeholder,
    onChange,
    name
}) => {
    return (
        <StyledInput>
            <input placeholder={placeholder} onChange={onChange} name={name}></input>
        </StyledInput>
    )
}

export default Input