import React ,{  useEffect } from 'react'
import TagCloud from 'TagCloud'
import './Skill.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Skill() {
    useEffect(() => {
       
    
   
     const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery','banta'
    ];
    
   
    TagCloud('.content', myTags,{
    
      // radius in px
      radius: 250,
    
      // animation speed
      // slow, normal, fast
      maxSpeed: 'fast',
      initSpeed: 'fast',
    
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true
      
    });
   
    });
//     var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.content').style.color = random_color;
  return (
//     <div className='row main-division'>
       
//     <div className="col-sm">
//     <header>
//     <h2 aria-label="Me, Myself and I" className="blast-root"><span className="blast"    >M</span><span className="blast"    >e</span><span className="blast"    >,</span> <span className="blast"    >M</span><span className="blast"    >y</span><span className="blast"    >s</span><span className="blast"    >e</span><span className="blast"    >l</span><span className="blast"    >f</span> <span className="blast"    >a</span><span className="blast"    >n</span><span className="blast"    >d</span> <span className="blast"    >I</span></h2>
//     </header>
//     <span className='text-skill'> For over a decade I had many opportunities to work in a vast spectrum of <a rel="skills" href="#">web technologies</a> what let me gather a significant amount of various experience.
//  Working for companies and individuals around the globe I met and learnt from amazing and ambitious people</span>
//     </div>
//     <div className ="col-sm sphere-skill">
//     <span className="content"></span>
//     </div>
//     </div>
    <div class="columns main-division">
      <video src='/videos/datavid.mp4' autoPlay loop muted />
    <div class="column first-division">
        <header>
    <h2 aria-label="Me, Myself and I" className="blast-root"><span className="blast"    >M</span><span className="blast"    >e</span><span className="blast"    >,</span> <span className="blast"    >M</span><span className="blast"    >y</span><span className="blast"    >s</span><span className="blast"    >e</span><span className="blast"    >l</span><span className="blast"    >f</span> <span className="blast"    >a</span><span className="blast"    >n</span><span className="blast"    >d</span> <span className="blast"    >I</span></h2>
     </header>
     <br></br><br></br>
     <span className='text-skill'> For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience.
  Working for companies and individuals around the globe I met and learnt from amazing and ambitious people</span>
    </div>
    <div class="column sphere-skill">
      <span className="content"></span>
   </div>
 </div>

  )
}

export default Skill