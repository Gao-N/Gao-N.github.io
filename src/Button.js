export default function Button({title, href}){
    return <li className="list-none pt-3"><a href={href} className="text-white align-text-bottom bg-prussian font-bold content-bottom tracking-normal rounded-lg p-5 hover:bg-blue hover:text-black" >{title}</a></li>
}