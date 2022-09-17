export default function navSection({title, href}){
    return <li className="list-none pt-3"><a href={href} className="text-white align-text-bottom bg-emerald font-bold content-bottom tracking-normal rounded-lg p-6 hover:bg-opal hover:text-black" >{title}</a></li>
}