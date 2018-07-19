import React from 'react'

const Navigation = (props) => (
  // <div className="header-navigation">
    <ul className="header-navigation">
      {
        props.links.map(l => (
          <a
            href={l.src}
          > {l.name} </a>
        ))
      }
    </ul>
  // </div>
)

export default Navigation
