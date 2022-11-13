import styled from "styled-components";
import theme from "../../lib/styles/theme";

type TextHeaderType = {
    children: any,
    align?: "right" | "left" | "center"
}
const TextHeaderStyled = styled.div<TextHeaderType>`
    font-size: 20px;
    font-weight: bold;
    text-align: ${(props) => props.align};
    position: relative;
    //margin-top: 13px;
    .point-circle{
        margin-bottom: 18px;
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: ${theme.colors.primary};
        border-radius: 100%;
    }
`

const TextHeader = ({children, align = 'left'}: TextHeaderType) => (
    <TextHeaderStyled align={align} className='text-header'>
        <div className='point-circle'></div>
        {children}
    </TextHeaderStyled>
)

export default TextHeader;