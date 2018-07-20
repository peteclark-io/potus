import React from 'react'

import Banner from './banner'
import ComingSoon from './coming-soon'

export default class App extends React.Component {

  render(){
    return (
      <div>
        <Banner />
        <ComingSoon />
      </div>
    )
  }
}
