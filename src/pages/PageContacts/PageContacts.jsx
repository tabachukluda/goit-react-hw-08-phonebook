import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import {PageContactSection, PageContactTitle} from './PageContacts.styled';

function PageContacts() {
  return (
    <PageContactSection>
      <PageContactTitle>PHONEBOOK APP</PageContactTitle>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PageContactSection>
  );
}

export default PageContacts;