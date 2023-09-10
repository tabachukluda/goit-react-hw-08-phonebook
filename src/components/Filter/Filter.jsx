import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.contacts.filter);
    const contacts = useSelector(contactsSelectors.getContacts);

    return (
    <div className={css.container}>
        <label className={css.filterLabel} htmlFor="filterInput">
        Find contacts by Name
        </label>
        <input
        id="filterInput"
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={e =>
                dispatch(contactsActions.filterContact(e.target.value))
                }
        aria-label="Filter contacts by name"
        />
    </div>
    );
};

export default Filter;