import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeContact } from '../../store/contactsSlice'
import styles from './ContactList.module.css'
import PropTypes from 'prop-types'

const ContactList = () => {
  const dispatch = useDispatch()
  const { contacts, filter } = useSelector(state => state.contactsState)

  const visible = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul className={styles.list}>
      {visible.map(c => (
        <li key={c.id} className={styles.item}>
          <span>{c.name}: {c.phone}</span>
          <button className={styles.delete} onClick={() => dispatch(removeContact(c.id))}>Видалити</button>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {}

export default ContactList
