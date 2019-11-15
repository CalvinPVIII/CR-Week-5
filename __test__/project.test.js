import { Person } from './../src/backend.js'

describe ('Number of Days Alive Function', () => {
  test ('Should return number of days person has been alive', () => {
    let date = new Date ('February 14 2001')
    let person = new Person (date)
    person.findDaysAlive()
    expect(person.days).toEqual(6848)
  })
})
