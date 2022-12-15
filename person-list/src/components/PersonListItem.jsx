import React from 'react';
import {
    Card,
    CardContent
} from "@mui/material";

export default function PersonListItem({ person }) {
    return (
        <Card component="li">
            <CardContent>
                {person.name} {`(aged: ${person.age})`}
            </CardContent>
        </Card>
    );
}
