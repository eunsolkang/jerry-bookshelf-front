import styled from "styled-components";

const fontSizes = {
    title: "2rem",
    subTitle: "1.25rem" 
}

const colors = {
    primary: 'fcbe11',
    text: '#303441',
    border: '#1e2828',
}

const flex = {
    columnCenter: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    rowCenter: `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `
}

const theme = {
    colors,
    fontSizes,
    flex,
}

export default theme;