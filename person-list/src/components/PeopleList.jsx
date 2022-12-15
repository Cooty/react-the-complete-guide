import React from 'react';
import PersonListItem from './PersonListItem';
import {
    Stack
} from "@mui/material";

export default function PeopleList({people}) {
    return (
        <Stack component="ul" spacing={2}>
            {people.map((person) => {
                return (
                    <PersonListItem person={person} key={person.id} />
                );
            })}
        </Stack>
    );
}
