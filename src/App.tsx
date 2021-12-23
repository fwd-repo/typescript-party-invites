import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iM5vZtdUkW91K8qnmY4-IqwYY5VqZXw9IO8P8BO391MlQSvaYpGp6BOd4fcbOecYIck&usqp=CAU',
      age: 36,
      note: 'Allergic to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      url: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png',
      age: 36,
      note: '',
    },
  ])

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
