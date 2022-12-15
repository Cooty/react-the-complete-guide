import React from 'react';
import {
    Modal,
    Card,
    CardContent,
    Alert
} from "@mui/material";

export default function ErrorDialog({message, open, onClose}) {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            onClose={onClose}
            sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}
        >
            <Card sx={{ margin: 'auto' }}>
                <CardContent>
                    <Alert
                        id="modal-modal-title"
                        severity="error"
                    >
                        {message}
                    </Alert>
                </CardContent>
            </Card>
        </Modal>
    );
}
