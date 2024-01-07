//import logo from './logo.svg';
import Button from './Button';
import LinkButton from './LinkButton';
import NavItem from './NavItem';
export default function App() {
  return (
    <div className='scroll-smooth md:scroll-smooth'>
      <nav className='fixed flex justify-around items-center bg-onyx p-2 w-full'>
        <div className='flex justify-around tracking-tighter sm:tracking-[.10em] w-full'>
          <a href='/'><h1 className='text-base sm:text-lg m-2 text-white font-bold hover:text-black tracking-tight'>Nilson Gao</h1></a>
          <ul className='flex justify-around w-7/12 scroll-smooth'>
            <NavItem title="Summary" href={"#Summary"}></NavItem>
            <NavItem title="Skills" href={"#Skills"}></NavItem>
            <NavItem title="Courses" href={"#Courses"}></NavItem>
            <Button title="Contact" href={"mailto:nilsongao33@gmail.com"}></Button>
          </ul>
        </div>
      </nav>
      <section id = "Summary" className='bg-opal flex justify-evenly items-center content-center h-screen w-full'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold text-center mb-4'>About Me</h1>
          <img src='1653540266234.jfif' alt='profile' width={300}></img>
        </div>
        <div className='flex flex-col bg-gainsboro h-3/5 w-2/3'>
          <p className='text-sm font-bold text-left m-10 sm:text-lg'>I am a student at the University of Toronto Scarborough currently studying in Statistics - ML and DataSci program. I wish to pursue a career that allows me to use and manipulate Data to achieve desired results.
              I believe we live in a time where data skills are becoming increasingly important. I am observant, willing to learn, passionate, and organized.
              I adapt quickly under pressure and enjoy overcoming challenges.
          </p>
          <div className='flex justify-center'>
            <LinkButton href={'https://github.com/Gao-N'} title="Github"></LinkButton>
            <LinkButton href={'https://www.linkedin.com/in/nilson-gao/'} title="Linkedin"></LinkButton>
            <LinkButton href={'/Nilson_Gao_Resume_28-09-2022-16-07-39.pdf'} title="Resume"></LinkButton>
          </div>
        </div>
      </section>
      <section id = "Skills" className='bg-blue flex justify-evenly items-center content-center h-screen w-full'>
        <h1 className='text-4xl font-bold text-black text-center'>Summary of Skills</h1>
        <div className='flex justify-center bg-onyx h-4/5 w-4/6 text-center text-white place-content-evenly'>
        <ol className='text-sm sm:text-lg font-bold text-center m-10 list-none'>
          <li className='h-min sm:mb-6 mb-11'>Python</li>
          <li className='h-min sm:mb-6 mb-11'>Java</li>
          <li className='h-min sm:mb-6 mb-11'>C</li>
          <li className='h-min sm:mb-6 mb-11'>HTML, CSS, JS</li>
          <li className='h-min sm:mb-6 mb-11'>Technologies: React JS, Tailwind CSS</li>
          <li className='h-min sm:mb-6 mb-11'>Microsoft Office (MS Word, Excel, VBA)</li>
          <li className='h-min sm:mb-6 mb-11'>Network Applications (Internet)</li>
          <li className='h-min sm:mb-6 mb-11'>Bilingual</li>
        </ol>
        </div>
      </section>
      <section id = "Courses" className='bg-prussian flex justify-evenly items-center content-center h-screen w-full'>
        <h1 className='text-4xl font-bold text-white text-center'>Relevant Courses</h1>
        <div className='flex justify-evenly items-center bg-gainsboro h-4/5 w-4/6'>
        <ul>
          <li className='bg-emerald rounded-md m-2 p-2'><h1 className='font-bold text-2xl text-white'>CSCA48</h1>
          <ul className='font-bold text-base bg-emerald rounded-md text-white m-3 p-2 list-disc'>
            <li>Learned C Programming</li>
            <li>Abstract Data Types/Structures and their Implementation</li>
            <li>Efficiency Analysis of Algorithms</li>
          </ul>
          </li>
          <li className='bg-emerald rounded-md m-2 p-2'><h1 className='font-bold text-2xl text-white'>CSCB07</h1>
          <ul className='font-bold text-base bg-emerald rounded-md text-white m-3 p-2 list-disc'>
            <li>Learned Java and Software Design</li>
            <li>Good Software Principles</li>
            <li>Advanced Object Oriented Programming and IDE usage</li>
            <li>Agile, Software Methodologies, and Build Management</li>
            <li>Version Control</li>
            <li>Design Patterns and Quick Solutions</li>
          </ul>
          </li>
        </ul>
        </div>
      </section>
    </div>
  )
} 
