import React from 'react'
import anime from 'animejs'
import css from './_css/general.scss'

export default class ComingSoon extends React.Component {

  componentDidMount(){
    let timeline = anime.timeline();

    timeline.add({
      targets: '.'+ css['coming-soon'] + ' h2',
      delay: 5000,
      opacity: {
        value: 1,
        duration: 9000
      }
    })
    .add({
      targets: '.'+ css['coming-soon'] + ' h4',
      offset: 6500,
      opacity: {
        value: 1,
        duration: 9000
      }
    });

    anime();
  }

  render(){
    return (
      <section className={css['coming-soon']}>
        <h2>December 2018</h2>
        <h4>A Tappy Shakes Production</h4>
      </section>
    )
  }
}
