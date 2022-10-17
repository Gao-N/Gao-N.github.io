export default function LinkButton({title, href}){
    return <a href={href} className="text-center text-white bg-emerald font-bold tracking-normal rounded-full hover:bg-opal sm:w-1/6 sm:text-lg hover:text-black w-1/3 p-2 m-2">{title}</a>
}