import { assets } from "../assets/assets";
import { Seminavbar } from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import {  useRef, useState } from "react";
import {  MyInfo } from "../Data";
import { Code, Palette, Building2, MapPin } from 'lucide-react';
import { MdReviews } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser'
import { useEffect } from "react";



export default function Fct() {
  return (
    <div className="select-none">
        {/* <Home /> */}
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Myservices />
        <Contactsection />
        <Footer/>


    </div>
  );
}


// function Home() {
//   const { fullName, profileImage, cvLink, careerFocus } = MyInfo[0];

//   return (
//     <>
//       <div className="w-full lg:h-screen pb-20 animation_scroling " id="Home">
//         <Seminavbar />
//         <div className="h-full grid grid-cols-2 lg:px-[100px] 
//                         pt-24 md:pt-20 lg:pt-20 
//                         lg:w-[90%] mx-auto
//                         ">
//           {/* Left Section */}
//           <div
//             className="col-span-2 md:col-span-1 order-2 md:order-1
//                             text-xl md:text-4xl font-mono font-bold
//                             flex items-start justify-center "
//           >
//             <p className="ms:mx-52 text-center md:my-40 space-y-[6px] block w-[100%]">
//               <h1 className="text-black">
//                 Hello <span className="text-Tird_Color"> I'm</span>
//                 <br />
//               </h1>
//               <h1 className="text-black">{fullName}</h1>
//               <div className="text-Tird_Color">
//                 <TypeAnimation
//                   sequence={[
//                     ...careerFocus.flatMap((focus) => [focus, 1000]), // Dynamically add each focus and wait time
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   style={{
//                     fontSize: "1.5rem",
//                     display: "inline-block",
//                     width: "100%",
//                     whiteSpace: "nowrap",
//                     fontFamily: "monospace",
//                     overflow: "hidden",
//                     letterSpacing: "1px",
//                   }}
//                   repeat={Infinity}
//                 />
//               </div>
//               <a
//                 href={cvLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm font-mono bg-Tird_Color py-2 px-2 my-2 rounded-lg font-bold border-Tird_Color border-[3px] text-white
//                         hover:bg-transparent hover:border-[3px] hover:border-Tird_Color hover:text-tirborder-Tird_Color hover:font-bold hover:text-Tird_Color
//                         transition duration-500 ease-in-out
//                 "
//               >
//                 CV Review
//                 <MdReviews className="inline ml-2" size={22} />
//               </a>
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="col-span-2 md:col-span-1 flex items-start justify-center order-1 md:order-2">
//             <div className="h-full w-[320] sm:w-[330px] md:w-[400px] lg:w-[480px] -z-10 absolute">
//               <img src={assets.Hand} alt="" />
//             </div>
//             <img
//               src={profileImage}
//               alt={fullName}
//               className="md:w-[350px] w-[250px]"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



function About() {
  const { aboutMe } = MyInfo[0];
  return (
    <>
      <div id="About" className="  w-full pb-28 bg-gray-100 animation_scroling ">
        <div className="menu_part ">
          <h1 className="">
            ABOUT ME
          </h1>
          <h2>
            ABOUT ME
          </h2>
        </div>
        <div className=" grid grid-cols-5 lg:w-[80%] mx-auto ">
          <div className="col-span-5 lg:col-span-2 flex items-start justify-center top-10">
            <img src={assets.AboutUs} alt="" className="lg:w-[540px]" />
          </div>
          <div className="col-span-5 lg:col-span-3  w-full px-4 pb-10 lg:py-16 lg:pr-32 text-justify ">
            <ul className=" font-bold text-black space-y-3 text-sm md:text-base">
              {/* 
              {aboutMe.map( (j , i)=>(
                <>
                    <li key={i} className="border-l-4 border-gray-200  px-3 py-5">
                    {j.paragraph}
                    </li>
                  
                </>
              ))} */}


              {aboutMe.map((item) => (
                <li className="border-l-4 border-gray-200  px-3 py-2" key={item.id}>
                  {item.paragraph ? (
                    <p>{item.paragraph}</p> // إذا كان هناك نص paragraph، قم بعرضه
                  ) : (
                    item.info && (
                      <>
                        <p>My Info</p> {/* النص الثابت */}
                        <table className="table-auto border-collapse w-full">
                          <tbody>
                            {Object.entries(item.info).map(([key, value]) => (
                              <tr key={key}>
                                <td>{key}</td>
                                <td>: {value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )
                  )}
                </li>
              ))}


            </ul>
          </div>
        </div></div>
    </>
  );
}


function Skills() {
  const {skillsMenu , MySkills}  = MyInfo[0];
  const [dt, setDt] = useState([...MySkills]); // Replace SkillsData with MySkills
  const [selectedMenu, setSelectedMenu] = useState("All");

  function FilterData(e) {
    setSelectedMenu(e.target.className);
    if (e.target.className !== "All") {
      setDt([...MySkills.filter(el => el.type === e.target.className)]);
    } else {
      setDt([...MySkills]);
    }
  }

  return (
    <>
      <div id="Skills" className="bg-white animation_scroling">
        <div className="menu_part">
          <h1>My SKILLS</h1>
          <h2>My SKILLS</h2>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-[80%] py-10 mx-auto">
          {/* Skills menu */}
          <div style={{ display: "flex", padding: "10px" }} className="">
            {
              skillsMenu.map((menus, i) => (
                <a
                  key={i}
                  className={menus.Classname}
                  id="Skills_style"
                  style={{
                    padding: "10px",
                    backgroundColor: selectedMenu === menus.Classname ? "#0077B6" : "white",
                  }}
                  onClick={FilterData}
                >
                  {menus.name}
                </a>
              ))
            }
          </div>
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {
              dt.map((el, x) => (
                <div key={x} className="group flex flex-col items-center 
                          bg-gray-100 mx-1 my-4 py-6 px-6 space-y-4 hover:bg-white hover:shadow-2xl">
                  <div className="border-2 p-3 rounded-full w-[80px] m-auto 
                    group-hover:border-Tird_Color group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-600">
                    <img src={el.src} alt={el.name} className="lg:w-[120px]  " />
                  </div>
                  <h1 className="font-bold text-sm text-center group-hover:text-Tird_Color transition-colors duration-500">{el.name}</h1>
                  {/* <p className="">{el.desc}</p> */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const { MY_PROJECT } = MyInfo[0];

  return (
    <>
      <div id="Projects" className="w-full pb-28 animation_scroling">
        <div className="menu_part">
          <h1>MY PROJECT</h1>
          <h2>MY PROJECT</h2>
        </div>
        <div className="grid grid-cols-6 lg:pr-16 py-10">
          {MY_PROJECT.map((project, i) => (
            <div
              key={i}
              className="col-span-6 lg:col-span-2 py-3 px-1 sm:px-8 md:px-0 lg:px-2"
            >
              <div
                className="m-auto w-[90%] lg:w-[92%] p-2 bg-gray-100 rounded-xl shadow-xl
                            grid grid-cols-1 md:grid-cols-2"
              >
                <div className="relative">
                  <img
                    src={project.image_src || assets.bg9}
                    className="col-span-2 md:col-span-1 w-[100%] h-44 p-1 rounded-xl"
                    alt="Image does not apply"
                  />
                  <div className="absolute top-2 right-2 flex-col flex items-baseline justify-center space-x-2">
                    {Object.keys(project.languages_prog).map((key, index) => (
                      <img
                        key={index}
                        src={project.languages_prog[key] || assets.bg9}
                        className="w-7 bg-gray-50 m-1 p-1 rounded-full border-2 hover:border-Tird_Color transition duration-500"
                        alt={`Language ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 p-2  space-y-2">
                    <h1 className="font-bold font-mono text-lg">{project.Dashbord_web_App_name}</h1>
                    <p className="md:text-[0.9rem] h-[98px]
                            overflow-y-scroll scrollbar-thin scrollbar-thumb-Tird_Color scrollbar-track-slate-100"
                    >
                      {project.description}
                    </p>
                    <div className="flex items-end justify-between flex-col-reverse space-y-4 ">
                      <div className="flex space-x-3">
                        <a href={project.Gitlink.link}>
                          {project.Gitlink.src}
                        </a>
                        <a href={project.dimolink.link}>
                        {project.dimolink.src}
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




function ExperienceSection() {
  const {Myexperiences}  = MyInfo[0];
  return (
    <div id="ExperienceSection" className="min-h-screen bg-gray-200 p-8 md:p-16 animation_scroling">
      <div className="menu_part ">
        <h1>
          RESUME
        </h1>
        <h2>
          RESUME
        </h2>
      </div>

      <div className="relative py-4 lg:py-10  lg:w-[80%] mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gray-300" />

        <div className="space-y-12">
          {Myexperiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className={`
                  flex items-start gap-8
                  ${exp.align === 'right' ? 'flex-row-reverse' : 'flex-row'}
                `}>
                {/* Content */}
                <div className="w-max	 lg:w-1/2">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-Tird_Color/50 transition-colors duration-300 shadow-md">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {exp.title}
                          {exp.company && (
                            <span className="text-Tird_Color"> at {exp.company}</span>
                          )}
                        </h3>
                        <p className="text-sm text-Tird_Color/80">{exp.period}</p>
                      </div>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-Tird_Color rounded-full border-4 border-white" />

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

const iconMap = {
  Code: Code,
  Palette: Palette,
  Building2: Building2
};

function Myservices() {
  const {Myservices} = MyInfo[0];
  return (
    <div id="services" className="min-h-screen bg-gray-100 p-8 md:p-16 animation_scroling">
      <div className="menu_part ">
        <h1>
          Myservices
        </h1>
        <h2>
          Myservices
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-20  lg:w-[80%] mx-auto">
        {Myservices.map((service, index) => {
          const IconComponent = iconMap[service.icon];

          return (
            <div
              key={index}
              className="group bg-gray-100/50 backdrop-blur-sm border border-gray-400 rounded-lg p-6 hover:border-Tird_Color transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center group-hover:bg-Tird_Color shadow-lg transition-colors duration-500">
                  <IconComponent className="w-6 h-6 !hover:text-gray-100" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-Tird_Color">
                    {service.title}
                  </h3>
                  <p className=" text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


function Contactsection() {
  const { address } = MyInfo[0];
  const contactLinks = MyInfo[0].socialLinks.filter(
    (item) => item.phone || item.email || item.github || item.linkedin
  );
  const [alert, setAlert] = useState({ type: "", message: "" });
  const formRef = useRef(null);

  const Send_a_Msg = (el) => {
    el.preventDefault();

    // Form validation: check if any input is empty
    const formData = new FormData(el.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("Company");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!name || !email || !company || !phone || !message) {
      setAlert({ type: "error", message: "Please fill in all fields!" });
      return;
    }

    // If all fields are filled, send the form via EmailJS
    emailjs
      .sendForm(
        "service_16uwo9c",
        "template_yhc72ga",
        el.target,
        "a0CnnUiBM6l-p9V4q"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setAlert({ type: "success", message: "Message sent successfully!" });
          formRef.current.reset(); // Clear the form inputs
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setAlert({ type: "error", message: "Failed to send the message. Please try again!" });
        }
      );
  };

  // Automatically remove alert after 2 seconds
  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ type: "", message: "" });
      }, 2000); // Alert disappears after 2 seconds

      return () => clearTimeout(timer); // Clean up the timeout when the component is unmounted or alert changes
    }
  }, [alert]);

  return (
    <div id="Contact" className="lg:min-h-screen p-3 lg:p-8 md:p-1 space-y-12 my-10 lg:my-0 animation_scroling">
      <div className="menu_part">
        <h1>
          Contact <span className="text-Tird_Color">white me</span>
        </h1>
        <h2>Contact</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:w-[90%] lg:w-[80%] md:mx-auto lg:mx-auto ">
        <div className="grid grid-cols-3">
          {/* Contact Form */}
          <div className="p-4 lg:p-8 col-span-3 lg:col-span-2">
            <h2 className="lg:text-xl font-semibold font-mono mb-8 text-center">
              If you would like to get in touch with me, I would be happy to provide{" "}
              <span className="text-Tird_Color">my contact information.</span>
            </h2>

            {/* Alert Messages */}
            {alert.message && (
              <div
                className={` text-sm font-bold p-2 rounded-lg border-[2px] 
                  fixed flex justify-between items-center
                  w-52 top-24 left-4 right-1
                  md:top-32
                  lg:px-3 lg:w-72 lg:top-24 lg:left-4 lg:right-4 lg:mb-4 ${
                  alert.type === "success" ? "bg-green-100 text-green-800 border-green-800" : "bg-red-100 text-red-800 border-red-800"
                }`}
              >
                {alert.message}
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => setAlert({ type: "", message: "" })}
                >
                  x
                </span>
              </div>
            )}

            <form className="space-y-6 contact_form" onSubmit={Send_a_Msg} ref={formRef}>
              <div className="lg:flex lg:space-x-4 space-y-6 lg:space-y-0">
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-600" htmlFor="name">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="David Morgan"
                    className="Your_name w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-600" htmlFor="email">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="davidmorgan@email.com"
                    className="email w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="lg:flex lg:space-x-4 space-y-6 lg:space-y-0">
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-600" htmlFor="Company">Company</label>
                  <input
                    name="Company"
                    type="text"
                    placeholder="Morgan & Meet Enterprises"
                    className="Company w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-600" htmlFor="phone">Phone number</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+212 600-000001"
                    className="Phone w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600" htmlFor="Message">Message</label>
                <textarea
                  name="message"
                  placeholder="Hi, do you have a moment to talk about..."
                  className="Message w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[120px]"
                ></textarea>
              </div>

              <button
                className="bg-Tird_Color hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-between"
              >
                Send Message<IoSend className="mx-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-Tird_Color text-white p-8 col-span-3 lg:col-span-1 hidden lg:block">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>{address}</p>
                </div>
              </div>
              {contactLinks.map((link, index) => (
                <a key={index} href={link.link} className="flex items-center gap-2 space-x-3">
                  {link.icoo} {/* Render the icon */}
                  {link.phone || link.email || link.github || link.linkedin} {/* Render phone or email */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function Footer () {
  const {fullName} = MyInfo[0]
  return (
    <footer className="pb-20 md:pb-20 lg:py-8 mt-auto animation_scroling">
      <div className=" mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          Created by <a  href="" className="font-bold text-Tird_Color">{fullName}</a> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

