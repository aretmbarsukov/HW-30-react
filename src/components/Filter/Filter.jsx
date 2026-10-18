import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../store/contactsSlice'
import styles from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.contactsState.filter)

  return (
    <input
      className={styles.input}
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Фільтр контактів"
    />
  )
}

Filter.propTypes = {}

export default Filter
