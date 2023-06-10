import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Typography } from '@mui/material';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useAuth } from 'redux/hooks';

import { Container } from 'components/Container/Container';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      {error ? (
        toast.error('Unable to load data from database!')
      ) : (
        <Container>
          <Typography variant="h3" component="h2" color="primary.main">
            {`Contacts of user "${user.name}"`}
          </Typography>
          <FormAddContact />
          <Typography
            variant="h5"
            color="primary.main"
            mt="10px"
            align="center"
          >
            Contacts list
          </Typography>
          <Filter />
          {isLoading && <div>Loading contacts from database...</div>}
          <ContactList />
        </Container>
      )}
    </main>
  );
}

export default ContactsPage;
