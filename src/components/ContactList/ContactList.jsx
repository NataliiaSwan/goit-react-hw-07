import React from "react";

import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contactsSlice/";

import { selectLoading, selectError } from "../../redux/contactsSlice/";

import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) {
    return (
      <div className={css.loaderBox}>
        <div className={css.loader}></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            item={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
