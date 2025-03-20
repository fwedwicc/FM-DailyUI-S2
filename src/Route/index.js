import React from 'react'
import { Home, UpcomingChallenge, NoPage, Draft, Day26 } from '../pages'

const existingPages = {
  Day26
}

export const routes = [
  { path: '/', element: React.createElement(Home), index: true },
  { path: '/home', element: React.createElement(Home) },
  ...Array.from({ length: 25 }, (_, i) => {
    const dayNumber = (i + 26)
    const Component = existingPages[`Day${dayNumber}`] || UpcomingChallenge // Check if component exists
    return {
      path: `/day${dayNumber}`,
      element: React.createElement(Component),
    }
  }),
  { path: '*', element: React.createElement(NoPage) },
  { path: '/draft', element: React.createElement(Draft) },
]