export default function App () {
  return <div className='container'>
    <Header/>
    <About/>
    <Projects/>
  </div>
}

function Header() {
  return <header className="header">
    <Navigation/>
    <Hero/>
  </header>
}


function Navigation() {
  return <nav className="nav">
    <div className="nav-user__details">
      <img src='images/profile.jpg' alt='Kevin Njogu'/>
      <span>Kevin Njogu</span>
    </div>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Projects</a></li>
      <li><a href='#'>Contacts</a></li>
    </ul>
  </nav>
}

function Hero () {
  return <div className="hero">
    <div className="hero-text">
      <h1>Hello, I'M KEVIN NJOGU</h1>
      <p>A Self-Driven Web Developer and Banker.I build and manage Websites and Web Applications that leads to the success of the overall product</p>
      <button className='btn'>Projects</button>
    </div>
  </div>
}

function About() {
  const about = [{experince:'Banking',
    statement:'I excel in realtionship management, cash management and treasury operations.',
    duties:['Liquidity and Casflow management', 'Payments Processing','Risk Management', 'Investment and Debt management', 'Relationship management'],
    tools: ['T24 Core Banking', 'Excel and Google Sheets', 'Dhow CSD', 'SWIFT', 'CRM']
  }, {experince:'Web development',
    statement:'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
    duties:['HTML', 'CSS', 'SASS', 'Javascript', 'React'],
    tools: ['VS code', 'Github', 'Netlify', 'AWS', 'Bootstrap']
  }]
  return <section className="section">
    <div className='section-box'>
      <div className='about-text'>
        <h2 className='heading-secondary'>About Me</h2>
        <p className='description'>Discover how I can elevate your projects with my expertise in both financial services and software development.</p>
      </div>
      <div className='about-cards'>
        {about.map((exp) => <Card exp={exp} key={exp.experince}/>)}
      </div>
    </div>
  </section>
}

function Card({exp}) {
  return <div className='card'>
    <div>
      <h2 className='heading-secondary'>{exp.experince}</h2>
      <p className='description'>{exp.statement}</p>
    </div>
    <div>
      <h3 className='heading-tertiary'>What I do</h3>
      <div className='spans'>{exp.duties.map((duty, idx) => (<span key={idx}>{duty}</span>))}</div>
    </div>
    <div>
      <h3 className='heading-tertiary'>Tools I use</h3>
      <div className='spans'>{exp.tools.map((tool, idx) => (<span key={idx}>{tool}</span>))}</div>
    </div>
  </div>
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
  return <section className="section section-projects">
    <div className='projects'>
      <div className='about-text'>
        <h2 className='heading-secondary'>Projects</h2>
        <p className='description'>Explore the innovative projects that define our cutting-edge vision and creative excellence.</p>
      </div>
      <div className='project'>
      {projects.map((prj) => <Project project={prj} key={prj.projectname}/>)}
      </div>
    </div>
  </section>
}

function Project({project}) {
  return<>
  <div className='projectimg-box'>
    <img src={project.projectImage} alt={project.projectname} className='projectimg'/>
  </div>
  <div className='projecttext-box'>
    <h3 className ='heading-tertiary'>{project.projectname}</h3>
    <p className='description'>{project.description}</p>
    <button className='btn'>see code</button>
  </div>
  </>

}