import React from 'react'
import anime from 'animejs'
import css from './_css/banner.scss'

export default class Banner extends React.Component {

  componentDidMount(){
    anime({
      targets: '.'+ css.banner + ' h1',
      delay: 500,
      opacity: {
        value: 1,
        duration: 14000
      },
      translateY: {
        value: -20,
        duration: 14000
      },
      color: {
        value: '#c61919',
        duration: 10000,
        delay: 2000
      }
    });
  }

  render(){
    return (
      <article className={css.banner}>
        <section>
          <h1>P O T U S</h1>
        </section>
      </article>
    )
  }
}
