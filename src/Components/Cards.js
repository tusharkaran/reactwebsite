import React from 'react';
import './Cards.css';
import CardItems from './Carditems';

function Cards() {
  return (

    <div className='cards'>
       <video src='/videos/datavid.mp4' autoPlay loop muted />
      <h1>Know more about Me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='images/img-9.jpg'
              text='Are you up for a short story? : Have you ever clicked a website button and wondered what would happen next? Have you ever questioned how a car or a human travels on a single click when playing computer games? Thats me when I was kid.The only difference now is: I like to be the one who controls the behavior of that click.In short, I enjoy building and automating.'
              label='What drives me?'
              path='/services'
            />
            <CardItems
              src='images/img-2.jpg'
              text='I enjoy discussing variety of topics, including UIdevelopment, website design and development, IOT, AI, and entrepreneurship.'
              label='What am I interested in?'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='images/img-3.jpg'
              text='I am here to listen and learn.

              If youa re an engineering professional, I dare to find answers to the technical issues. That includes but not limited to  design, product development,  IoT, AI.
              
              If you are a start-up with a visionary product, I am here to listen and help you out with my broad skill-set.
              
              If you are an individual who wishes to share their story, I am here to listen.'
              label='How can I make a difference in your life?'
              path='/services'
            />
            <CardItems
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='What qualifies me to do so?'
              path='/products'
            />
            <CardItems
              src='images/img-8.jpg'
              text='Whatever I feel like, because why not? 
              Built posters, planted flowers, read books, played football and regular gyming, and most importantly designed this website.'
              label='What do I do in my free time?'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;