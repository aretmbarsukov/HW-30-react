import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  contacts: [],
  filter: ''
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const { name, phone } = action.payload
      state.contacts.push({ id: uuidv4(), name, phone })
    },
    removeContact(state, action) {
      const id = action.payload
      state.contacts = state.contacts.filter(c => c.id !== id)
    },
    setFilter(state, action) {
      state.filter = action.payload
    }
  }
})

export const { addContact, removeContact, setFilter } = contactsSlice.actions
export default contactsSlice.reducer
