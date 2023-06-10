import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Contact, Contacts } from './ContactList.styled';
import { Alert, Button, Container, Grid } from '@mui/material';
import { useVisibleContacts } from 'redux/hooks';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useVisibleContacts();

  if (!visibleContacts)
    return (
      <Alert
        severity="warning"
        sx={{
          marginTop: 1,
        }}
      >
        There are no contacts in adress book...
      </Alert>
    );

  return visibleContacts.length > 0 ? (
    <Container maxWidth="sm">
      <Contacts>
        {visibleContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <p>{name}</p>
              </Grid>
              <Grid item xs={4}>
                <p>{number}</p>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => console.log('edit')}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Contact>
        ))}
      </Contacts>
    </Container>
  ) : (
    <Alert
      severity="warning"
      sx={{
        marginTop: 1,
      }}
    >
      There are no contacts matching the filter
    </Alert>
  );
};
