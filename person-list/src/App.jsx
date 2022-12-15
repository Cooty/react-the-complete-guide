import React, {useState} from 'react';
import {Divider} from "@mui/material";
import generateUniqueId from './utils/generate-unique-id';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
import ErrorDialog from './components/ErrorDialog';
import Layout from './components/Layout';

export default function App() {
    const [people, setPerson] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const addPerson = (personData) => {
        const person = {...personData, id: generateUniqueId()}
        setPerson((prevState) => {
            return [person, ...prevState];
        });
    }
    const errorHandler = (message, openModal) => {
        setErrorMessage(message);
        setModalOpened(openModal);
    }

    return (
        <Layout>
            <PersonForm
                onAddPerson={addPerson}
                onError={errorHandler}
            />

            {errorMessage && (
                <ErrorDialog
                    message={errorMessage}
                    open={modalOpened}
                    onClose={() => setModalOpened(false)}
                />)}

            {people.length !== 0 && (
                <>
                    <Divider sx={{my: 3}}/>
                    <PeopleList people={people}/>
                </>
            )}
        </Layout>
    );
}
