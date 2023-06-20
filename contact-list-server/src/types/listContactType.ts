export interface ContactList {
  occupation: string
  created_at: Date
  company: Company
  contact: Contact
}

interface Company {
  name: string
  id: string
}

interface Contact {
  fullName: string
  email: string
  phoneNumber: string
  id: string
}
