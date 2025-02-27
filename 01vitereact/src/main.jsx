import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp() {
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit Google</a>
)
const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: 'blank' },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App></App>
)
