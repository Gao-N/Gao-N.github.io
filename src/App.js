//import logo from './logo.svg';
import Button from './Button';
import NavItem from './NavItem';
export default function App() {
  return (
    <div className='scroll-smooth'>
      <nav className='fixed flex justify-around items-center bg-onyx min-h-13 p-3 w-screen'>
        <div className='flex justify-around tracking-[.25em] w-screen'>
          <a href='/'><h1 className='text-lg text-white font-bold hover:text-black tracking-widest'>Nilson Gao</h1></a>
          <ul className='flex justify-around w-7/12 scroll-smooth'>
            <NavItem title="About Me" href={"#Summary"}></NavItem>
            <NavItem title="Skills" href={"#Skills"}></NavItem>
            <NavItem title="Courses" href={"#Courses"}></NavItem>
            <Button title="Contact" href={"mailto:nilsongao33@gmail.com"}></Button>
          </ul>
        </div>
      </nav>
      <section id = "Summary" className='bg-opal flex justify-evenly items-center content-center h-screen w-screen'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-bold text-center mb-4'>About Me</h1>
          <img src='1653540266234.jfif' alt='profile' width={300}></img>
        </div>
        <div className='flex flex-col bg-gainsboro h-4/5 w-2/3'>
          <p className='text-lg font-bold text-left m-10'>I am a second year student at the University of Toronto Scarborough.
              I am currently in Statistics Specialist - Machine Learning and Data Mining program. I wish to pursue a career that allows me to use and manipulate Data to achieve desired results.
              I believe we live in a time where there is abundant information and inefficient usage of it. I am observant, willing to learn, passionate, straightforward, and organized.
              I strive under pressure and enjoy overcoming challenges.
          </p>
          <div className='flex justify-center'>
            <a href='https://github.com/Gao-N' className="text-lg text-center text-white bg-emerald font-bold tracking-normal rounded-full hover:bg-opal hover:text-black w-1/6 p-2 m-2">Github</a>
            <a href='https://www.linkedin.com/in/nilson-gao/' className="text-base text-center text-white bg-emerald font-bold tracking-normal rounded-full hover:bg-opal hover:text-black w-1/6 p-2 m-2">Linkedin</a>
            <a href='/' className="text-lg text-center text-white bg-emerald font-bold tracking-normal rounded-full hover:bg-opal hover:text-black w-1/6 p-2 m-2">Resume</a>
          </div>
        </div>
      </section>
      <section id = "Skills" className='bg-blue flex justify-evenly items-center content-center h-screen w-screen'>
        <h1 className='text-2xl font-bold text-black text-center'>Summary of Skills</h1>
        <div className='flex justify-center bg-onyx h-4/5 w-4/6 text-center text-white place-content-evenly'>
        <ol className='text-lg font-bold text-center m-10 list-none'>
          <li className='h-1/6'>Python</li>
          <li className='h-1/6'>HTML, CSS, JS</li>
          <li className='h-1/6'>Technologies: React JS, Tailwind CSS</li>
          <li className='h-1/6'>Microsoft Office (MS Word, Excel, VBA)</li>
          <li className='h-1/6'>Network Applications (Internet)</li>
          <li className='h-1/6'>Bilingual</li>
        </ol>
        </div>
      </section>
      <section id = "Courses" className='bg-prussian flex justify-evenly items-center content-center h-screen w-screen'>
        <h1 className='text-2xl font-bold text-white text-center'>Relevant Courses</h1>
        <div className='flex justify-center items-center bg-gainsboro h-4/5 w-4/6 text-center'>
        <ul className='flex flex-col justify-center'>
          <li className='rounded-md'><h1 className='font-bold text-2xl text-black'>CSCA48</h1>
          <ul>
            <li>Learned C Programming and Fundamental Data Structures</li>
          </ul>
          </li>
        </ul>
        </div>
      </section>
    </div>
  )
} 
