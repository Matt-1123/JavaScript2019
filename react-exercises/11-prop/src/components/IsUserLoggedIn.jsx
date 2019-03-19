import React from 'react'

function IsUserLoggedIn(props) {
  return (
    <div>
      <ul>
          {props.users.map((user, idx) => {
              return user.isUserLoggedIn ? <li key={idx}>{user.name} is logged in.</li> : 
              <li key={idx}>{user.name} is logged out.</li>
          })}
      </ul>
    </div>
  )
}

export default IsUserLoggedIn;
