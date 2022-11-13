import styled from "styled-components";
import theme from "../../lib/styles/theme";

type TextDescriptionType = {
    children: any,
    align?: "right" | "left" | "center"
}
const TextDescriptionStyled = styled.div<TextDescriptionType>`
    font-size: 14px;
    text-align: ${(props) => props.align};
    span{
        font-weight: bold;
    }
`

const TextDescription = ({children, align = 'left'}: TextDescriptionType) => (
    <TextDescriptionStyled align={align} className='text-description'>
        {children}
    </TextDescriptionStyled>
)

export default TextDescription;