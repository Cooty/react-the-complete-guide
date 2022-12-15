import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Button,
    TextField,
    Grid
} from '@mui/material';
import {
    isEmpty,
    isNegative
} from '../utils/validators';

export default function PersonForm({ onAddPerson, onError }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const validate = () => {
        if (isEmpty(name) || isEmpty(age)) {
            onError('You have to set both name and age to add a person!', true);
        } else if (isNegative(parseInt(age, 10))) {
            onError('Age can not be a negative number!', true);
        } else {
            onError('', false);
            successHandler();
        }
    }
    const successHandler = () => {
        onAddPerson({
            name,
            age
        });
        setAge('');
        setName('');
    }
    const submitHandler = (e) => {
        e.preventDefault();
        validate();
    }

    return (
        <Card component="article">
            <CardContent>
                <form noValidate onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} component="fieldset">
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                label="Name"
                                type="text"
                                id="name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} component="fieldset">
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                type="number"
                                id="age"
                                label="Age"
                                variant="outlined"
                                value={age}
                                onChange={(e) => { setAge(e.target.value) }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button type="submit" variant="contained">
                                Add person!
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}
