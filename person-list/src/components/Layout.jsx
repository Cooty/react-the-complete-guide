import React from 'react';
import {Container, CssBaseline} from '@mui/material';

export default function Layout({children}) {
    return (
        <Container
            maxWidth="sm"
            component="main"
        >
            <CssBaseline/>
            {children}
        </Container>
    );
}
