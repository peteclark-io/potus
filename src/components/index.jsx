import React from 'react'
import anime from 'animejs'
import css from './_css/banner.scss'

import Header from './header'
import Banner from './banner'

export default class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <Banner />
      </div>
    )
  }
}
