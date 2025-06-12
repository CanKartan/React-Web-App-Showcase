import React from 'react'
import Container from '@mui/material/Container';

function Pagecontainer({ children }) {
    return (
        <Container maxWidth="lg">{children}</Container>
    )
}

export default Pagecontainer
