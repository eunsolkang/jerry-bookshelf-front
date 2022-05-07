import styled, {css} from "styled-components";

const StyledInput = styled.div`
    background-color: white;
    padding: .75rem 1rem;
    border: 1px solid #dbdbdb;
    border-radius : 8px;
    ${(props: any) => 
            props.fullWidth && 
            css`
                 width: 100%;
            `
    }
    input{
        background-color: transparent;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1rem;
        -webkit-box-shadow: 0 0 0 1000px #fff inset;
    }
`

const StyledInputLabel = styled.div`
  margin-top: .25rem;
  font-size: .75rem;
  margin-left: .1rem;
  color: red;
`

type InputType = {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    fullWidth?: boolean | false,
    type?: string,
    labelText?: string,
}

const Input: React.FC<InputType> = (props) => {
    const {placeholder, onChange, name, type, labelText} = props;
    return (
        <div className='input'>
            <StyledInput {...props} >
                <input placeholder={placeholder} type={type} onChange={onChange} name={name}></input>
            </StyledInput>
            {labelText && (
                <StyledInputLabel>
                    {labelText}
                </StyledInputLabel>
            )}
        </div>
    )
}

export default Input