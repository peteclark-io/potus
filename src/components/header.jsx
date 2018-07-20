import React from 'react'
import anime from 'animejs'
import css from './_css/header.scss'

export default class Header extends React.Component {

  componentDidMount(){
    let timeline = anime.timeline();

    timeline.add({
      targets: '.'+ css.logo + ' h1',
      opacity: {
        value: 1,
        duration: 2000
      },
      delay: 4000
    })
    .add({
      targets: '.'+ css.menu + ' li',
      offset: 4750,
      opacity: {
        value: 1,
        duration: 2000
      }
    });
  }

  render(){
    return (
      <header className={css.header}>
        <section className={css.logo}>
          <h1>Tappy Shakes</h1>
        </section>

        <section className={css.menu}>
          <ol>
            <li><a href="/contact">Contact</a></li>
            <li>About Us</li>
            <li>Jobs</li>
          </ol>
        </section>
      </header>
    )
  }
}
