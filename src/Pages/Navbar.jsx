import { FaEnvelope, FaFileAlt,  FaLaptopCode,  FaTools, FaUser } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { Router } from "react-router-dom";
import { SiHyperskill } from "react-icons/si";
import { MyInfo } from "../Data";

export const Navdata = [
    { name: 'Home', path: '#Home', icon: <ImHome /> },
    { name: 'About', path: '#About', icon: <FaUser /> },
    { name: 'Skills', path: '/#Skills', icon: <SiHyperskill />    },
    { name: 'Projects', path: '/#Projects', icon: <FaLaptopCode /> },
  
    { name: 'ExperienceSection', path: '/#ExperienceSection', icon: <FaFileAlt /> },
    { name: 'services', path: '/#services', icon:<FaTools />},
        { name: 'Home', path: '/#Contact', icon: <FaEnvelope /> },
  
]


const Navbar = () => {
    const pathname = Router.pathname;
    return (
        <>
            <nav
                className=" flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
                bottom-0 mt-auto xl:right-[1.5%] z-10 top-0 w-full xl:w-12 xl:max-w-md xl:h-screen 
                text-Tird_Color"
            >
                <div
                    className="flex w-full xl:flex-col items-center justify-between 
                    xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-5 
                    backdrop-blur-3xl  text-2xl xl:text-sm xl:rounded-full shadow-2xl"
                >
                    {Navdata.map((a, i) => {
                        return <a
                            className={`${a.path === pathname && 'active:text-slate-900'} hover:text-blue-900`}
                            href={a.path}
                            key={i}
                        >
                            <div>{a.icon}</div>
                        </a>;
                    })}
                </div>
            </nav>
        </>
    )
}

const Seminavbar = () => {
    const  {socialLinks , Mylogo} = MyInfo[0]
    return (
        <>
            <nav className="flex fixed items-center justify-around 
                            w-full z-10   
                            py-[1px] -top-1              
                            bg-gray-200 text-Tird_Color">
                            
                <div className="">
                    <img src={Mylogo} alt="my_logo" width={"120px"} className="max-w-20 p-0 m-0" />
                </div>
                <div className="flex space-x-6">
                    {socialLinks.slice(0, 5).map((l , i )=>(<>
                        <a key={i} href={l.link} target="_blank" rel="noopener noreferrer" className='hover'>
                            {l.icoo}
                        </a>
                        </>
                    ))}
                </div>
            </nav>
        </>
    );
};

export { Navbar, Seminavbar };