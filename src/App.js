//import logo from './logo.svg';
import Button from './Button';
import LinkButton from './LinkButton';
import NavItem from './NavItem';
export default function App() {
  return (
    <div className='scroll-smooth'>
      <nav className='fixed flex justify-around items-center bg-onyx p-3 w-full'>
        <div className='flex justify-around tracking-[.10em] w-screen'>
          <a href='/'><h1 className='text-lg text-white font-bold hover:text-black tracking-widest'>Nilson Gao</h1></a>
          <ul className='flex justify-around w-7/12 scroll-smooth'>
            {/* <NavItem title="About Me" href={"#Summary"}></NavItem> */}
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
          <p className='text-sm font-bold text-left m-10 sm:text-lg'>I am a second year student at the University of Toronto Scarborough.
              I am currently in Statistics Specialist - Machine Learning and Data Mining program. I wish to pursue a career that allows me to use and manipulate Data to achieve desired results.
              I believe we live in a time where there is abundant information and inefficient usage of it. I am observant, willing to learn, passionate, straightforward, and organized.
              I strive under pressure and enjoy overcoming challenges.
          </p>
          <div className='flex justify-center'>
            <LinkButton href={'https://github.com/Gao-N'} title="Github"></LinkButton>
            <LinkButton href={'https://www.linkedin.com/in/nilson-gao/'} title="Linkedin"></LinkButton>
            <LinkButton href={'/Nilson_Gao_Resume_28-09-2022-16-07-39.pdf'} title="Resume"></LinkButton>
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
        <div className='flex justify-evenly items-center bg-gainsboro h-4/5 w-4/6'>
        <ul className=''>
          <li className='bg-emerald rounded-md m-2 p-2'><h1 className='font-bold text-2xl text-white'>CSCA48</h1>
          <ul className='font-bold text-base bg-emerald rounded-md text-white m-3 p-2 list-disc'>
            <li>Learned C Programming</li>
            <li>Abstract Data Types/Structures and their Implementation</li>
            <li>Efficiency Analysis of Algorithms</li>
          </ul>
          </li>
        </ul>
        </div>
      </section>
    </div>
  )
} 
