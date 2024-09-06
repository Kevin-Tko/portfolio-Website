const person = {name:'Kevin Njogu', 
  profilePhoto:'images/profile.jpg', 
  navLinks: ['home', 'about', 'project', 'contacts'],
  introduction: 'A Self-Driven Web Developer and Banker.I build and manage Websites and Web Applications that leads to the success of the overall product.',
  about: 'Discover how I can elevate your projects with my expertise in both financial services and software development.',
  project: 'Explore the innovative projects that define my cutting-edge vision and creative excellence.',
  contact:"Let’s Connect! Drop me a message and I’ll get back to you as soon as I can. Looking forward to hearing from you!",

}

export default function App () {
  return <div className='app'>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer />
  </div>
}

function Header() {
  return <header className="header">
    <Navigation/>
    <Hero/>
  </header>
}


function Navigation() {
  return (
  <nav className="nav">
    <div className="nav-user__details">
      <img src={person.profilePhoto} alt={person.name}/>
      <span>{person.name}</span>
    </div>
    <ul>
      {person.navLinks.map((link)=> <li><a href='#'>{link}</a></li>)}
    </ul>
  </nav>)
}

function Hero () {
  return (
  <div className="hero">
    <div className="hero-text">
      <h1 className='heading-primary'>Hello, I'M {person.name}</h1>
      <p className='paragraph u-mb-sm'>{person.introduction}</p>
      <button className='btn'>Projects</button>
    </div>
  </div>)
}

function About() {
  const about = [{experince:'Banking',
    statement:'I excel in realtionship management, cash management and treasury operations.',
    duties:['Risk Management', 'Payments Processing', 'Foreign Exchange Operations', 'Investment and Debt managememt', 'Liquidity and Cashflow management'],
    tools: ['T24 Core Banking', 'Excel and Google Sheets', 'Dhow CSD', 'SWIFT', 'CRM'],
    position:'Treasury Specialist'
  }, {experince:'Web development',
    statement:'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
    duties:['Python and NodeJS', 'React, Django and Flask', 'VS Code, Github and Netlify', 'HTML5, CSS3, SASS and Javascript', 'Pandas, Numpy, Matplotlib, and Seaborne'],
    tools: ['VS code', 'Github', 'Netlify', 'AWS', 'Bootstrap', 'Jupyter notebooks', 'Anaconda'],
    position:'FullStack Developer'
  }]
  return (
  <section className="section section-about">
    <div className='section-box'>
      <div className='about-text'>
        <h2 className='heading-secondary'>About Me</h2>
        <p className='paragraph section-description'>{person.about}</p>
      </div>
      <div className='about-cards'>
        {about.map((exp) => <Card exp={exp} key={exp.experince}/>)}
      </div>
    </div>
  </section>)
}

function Card({exp}) {
  return (
  <div className='card'>
    <div className='card-header'>
      <i class="fa-solid fa-briefcase"></i>
      <h2 className='heading-secondary u-mb-sm'>{exp.experince}</h2>
    </div>   
    <div className='position'>
      <h3 className='heading-tertiary u-mb-sm'>{exp.position}</h3>
      <p className='paragraph'>{exp.statement}</p>
    </div>
    <div className='duties'>
      <h3 className='heading-tertiary'>What I know</h3>
      <ul className='ul-el'>{exp.duties.map((duty, idx) => (<li key={idx}>{duty}</li>))}</ul>
    </div>
    <div className='tools'>
      <h3 className='heading-tertiary'>Tools I use</h3>
      <div className='spans'>{exp.tools.map((tool, idx) => (<span key={idx}>{tool}</span>))}</div>
    </div>
  </div>)
}

function Projects() {
  const projects = [{projectImage:'images/data.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Cras malesuada, ipsum ac varius facilisis, mi nulla.',
    projectname:'project one'
  }, {projectImage:'images/desk.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Cras malesuada, ipsum ac varius facilisis, mi nulla.',
    projectname:'project two'
  },{projectImage:'images/devs.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Cras malesuada, ipsum ac varius facilisis, mi nulla.',
    projectname:'project three'
  }]
  return (
  <section className="section section-projects">
    <div className='section-box'>
      <div className='about-text'>
        <h2 className='heading-secondary'>Projects</h2>
        <p className='paragraph section-description'>{person.project}</p>
      </div>
      <div className='project'>
      {projects.map((prj) => <Project project={prj} key={prj.projectname}/>)}
      </div>
    </div>
  </section>)
}

function Project({project}) {
  return(
  <div className='prjct'>
    <div className='projectimg-box'>
      <img src={project.projectImage} alt={project.projectname} className='projectimg'/>
    </div>
    <div className='projecttext-box'>
      <h3 className ='heading-tertiary'>{project.projectname}</h3>
      <p className='paragraph'>{project.description}</p>
      <button className='btn'>visit</button>
    </div>
  </div>)
}

function Contact() {
  return(
    <section className='section section-contact'>
      <div className='section-box'>
        <div className='about-text'>
          <h2 className='heading-secondary'>Contact Me</h2>
          <p className='paragraph section-description'>{person.contact}</p>
        </div>        
        <form className='form'>
          <div className='form-el'>
            <label for='name'>Name</label>
            <input type='text' placeholder='Jane Doe'/>
          </div>
          <div className='form-el'>
            <label for='name'>email</label>
            <input type='email' placeholder='janedoe@mail.com'/>
          </div>
          <div className='form-el'>
            <label for='name'>message</label>
            <input className='textarea' type='text' placeholder='Enter your message....'/>
        </div>
        <button type='submit' className='btn'>Submit</button>
      </form>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <section className='section section-footer'>
      <div className='section-box footer-box u-mb-sm'>
        <div>
          <h2 className='heading-secondary u-mb-sm'>{person.name}</h2>
          <p className='paragraph'>{person.introduction}</p>
        </div>
        <div className='access'>
          <h3 className='heading-tertiary'>Access</h3>
          <ul>
            {person.navLinks.map((link, idx)=><li key='idx'><a href='#'>{link}</a></li>)}
          </ul>
        </div>
        <div className='socials'>
          <h3 className='heading-tertiary'>Socials</h3>
          <ul>
            <li><a href='#'><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-github"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-youtube"></ion-icon></a></li>
          </ul>  
        </div>
      </div>
      <hr/>
      <div className='copyright'>
        <p className='paragraph'>© Copyright {year} . Made by {person.name}</p>
      </div>
    </section>
  )
}