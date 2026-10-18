import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../store/contactsSlice'
import styles from './ContactForm.module.css'
import PropTypes from 'prop-types'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const contacts = useSelector(state => state.contactsState.contacts)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    if (contacts.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} вже в контактах`)
      return
    }
    dispatch(addContact({ name, phone }))
    setName('')
    setPhone('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Ім'я"
      />
      <input
        className={styles.input}
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Телефон"
      />
      <button className={styles.button} type="submit">Додати</button>
    </form>
  )
}

ContactForm.propTypes = {}

export default ContactForm
