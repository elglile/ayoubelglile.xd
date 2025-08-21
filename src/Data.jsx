  import {
    FaBehance,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaPhoneAlt,
  } from "react-icons/fa";
  import { assets } from "./assets/assets";
  import { BsGithub, BsInstagram } from "react-icons/bs";
  import { FaXTwitter } from "react-icons/fa6";
  import { IoLogoWhatsapp } from "react-icons/io";
  import { TbEyeShare } from "react-icons/tb";
  import { MdOutlineMail } from "react-icons/md";
  import { FiFigma } from "react-icons/fi";

  export let AdminAuth = {
    // 123456 , admin@ayoub.com
    email: "admin",
    password: "admin", // تقدر تبدلو باش يكون أصعب
  };
  export const sampleData = {
    totalVisitors: [12543, 13201, 11987, 14532],
    monthlyVisitors: [2341, 2567, 2198, 2789],
    dailyVisitors: [89, 94, 76, 102],
    bounceRate: ['23%', '21%', '25%', '19%']
  };

  export let MyInfo = [
    {
      fullName: "Ayoub El-Glile",
      address: "Sidi Maarouf, Al Moustakbal, 26300, Casablanca, Morocco",
      profileImage: "https://res.cloudinary.com/diypq1cyl/image/upload/v1755767644/Untitled_designprofile_m7oe6v.png",
      cvLink:
        "https://res.cloudinary.com/diypq1cyl/image/upload/v1755762363/Doc_by_ayoub_Anglais_Org_xgdlm2.pdf", // Add your CV link
      cvLink_Français:
        "https://res.cloudinary.com/diypq1cyl/image/upload/v1755762364/Doc_by_ayoub_Fran%C3%A7ais_Org_k7n6kp.pdf", // Add your CV link
      Mylogo: "https://res.cloudinary.com/diypq1cyl/image/upload/v1755714583/logo_rn89sn.svg",
      MylogoG: "https://res.cloudinary.com/diypq1cyl/image/upload/v1755714583/LOGO_w9ay2u.gif",
      socialLinks: [
        {
          id: 1,
          github: "elglile",
          link: "https://github.com/elglile", // GitHub profile link
          icoo: <BsGithub size={21} className="hover:text-yellow-600" />,
        },
        {
          id: 2,
          Instagram: "elglile_ayoub",
          link: "https://www.instagram.com/elglile_ayoub_7?igsh=YmNjY3Y3NHVwdWRx", // Link to open the phone dialer
          icoo: <BsInstagram size={21} className="hover:text-pink-600" />,
        },
        {
          id: 3,
          linkedin: "Ayoub El-Glile",
          link: "https://www.linkedin.com/in/ayoub-el-glile", // LinkedIn profile link
          icoo: <FaLinkedin size={21} className="hover:text-blue-600" />,
        },
        {
          id: 4,
          Behance: "ayoub_xd",
          link: "https://www.behance.net/ayoubelglile", // LinkedIn profile link
          icoo: <FaBehance size={21} className="hover:text-black" />,
        },
        {
          id: 5,
          email: "ayoubelglile@gmail.com",
          link: "https://mail.google.com/mail/?view=cm&fs=1&to=ayoubelglile@gmail.com", // Link to open the email client
          icoo: <MdOutlineMail size={24} className="hover:text-black" />,
        },
        {
          id: 6,
          phone: "+212 687-976771",
          link: "tel:+212687976771", // Link to open the phone dialer
          icoo: <FaPhoneAlt size={20} className="hover:text-green-600" />,
        },
        {
          id: 7,
          Whatsapp: "Whatsapp",
          link: "https://wa.me/212687-976771", // Whatsapp profile link
          icoo: <IoLogoWhatsapp size={22} className="hover:text-green-600" />,
        },
        {
          id: 8,
          Facebook: "Ayoub el Glil",
          link: "https://www.facebook.com/share/aDjd7Aj2dbPRwP7q/?mibextid=wwXIfr", // Link to open the email client
          icoo: <FaFacebook size={21} className="hover:text-blue-600" />,
        },
        {
          id: 9,
          Twitter: "ayoub_elglile_7",
          link: "https://x.com/x_goju", // X profile link
          icoo: <FaXTwitter size={21} className="hover:text-black" />,
        }
      ],
      careerFocus: ["Front-End Development", "Web Desiger"],
        careerFocus1: [
      { title: "Full Stack Developer", selected: 0 },
      { title: "Backend Developer", selected: 0 },
      { title: "UI/UX Designer", selected: 0 },
      { title: "Mobile Developer", selected: 0 },
      { title: "DevOps Engineer", selected: 0 },
      { title: "Data Scientist", selected: 0 },
      { title: "Product Manager", selected: 0 },
      { title: "Technical Lead", selected: 0 },
      { title: "Software Architect", selected: 0 },
      { title: "Front-End Development ", selected: 1 },
      { title: "Web Desiger", selected: 1 },
    ],
      aboutMe: [
        {
          id: 1,
          paragraph:
            "My name is Ayoub el-Glile, I'm a developer specializing in front-end and web design, with a solid background in full-stack development acquired during four semesters of in-depth studies in this field. Passionate about creating modern, functional user interfaces, I use my creativity and technical expertise to design intuitive, high-performance solutions.",
        },
        {
          id: 2,
          paragraph:
            "Recognized for my responsibility, adaptability and constant thirst for learning, I'm ready to take on new challenges. Flexible and immediately available, I have a perfect command of Office suite tools, which enables me to be organized and efficient in my work.",
        },
        {
          id: 3,
          info: {
            Age: "20",
            Address: "Sidi Maarouf, Al Moustakbal, 26300",
            Phone: "+212 687-976771",
            Email: "ayoubelglile@gmail.com",
            From: "El-Gara, Morocco",
            Languages: ["Arabic", "French", "English", "German (Basic)"],
          },
        },
        {
            strengths: ["Adaptability", "Continuous learning", "Organizational skills"],
        },
      ],

      Myexperiences: [
        {
          title: "Related training",
          company: "ODC Club Sidi Maarouf and Ben M’Sick",
          period: "26-27 August | 28-30 August | 13-15 November",
          description: "Docker, Kubernetes Mastery, Python Languages, DevOps",
          align: "left",
        },
        {
          title: "Final year project intern (PFE), Full-time Freelancer",
          company: "Ellendir",
          period: "April 2024 - May 2024",
          description:
            "Creation of a freelance website interface in WordPress. Master the management of complex extensions and advanced customizations.",
          align: "right",
        },
        {
          title: "Marketing and Digital Intern",
          company: "Go Creative | Maroc",
          period: "July 2023 - August 2023",
          description:
            "Learn how to manage and maintain an e-commerce site developed with WordPress. Familiarization with the functionalities and best practices to ensure site performance.",
          align: "left",
        },
        {
          title: "Full stack development",
          company: "ISTA 2 Settat | Morocco",
          period: "2022 - 2024",
          description:
            "Diplôme de Technicien Spécialisé en Développement Digital - Front-end, Back-end, and Web Design. Final year project: Front-end development of a website.",
          align: "right",
        },
      ],

      skillsMenu: [
        { id: 1, name: "All", Classname: "All" },
        { id: 2, name: "Frontend", Classname: "Frontend" },
        { id: 3, name: "Backend", Classname: "Backend" },
        { id: 4, name: "Tool", Classname: "Tool" },
        { id: 5, name: "Database", Classname: "Database" },
      ],
      MySkills: [
        {
          id: 1,
          name: "Html5",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/u0pddkopxcl7murgffxp.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 2,
          name: "Css3",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825749/qz2csfjfhsmyijhxv7oa.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 3,
          name: "Vscode",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734827637/b2btkmkp5ex1dcdaim0r.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 4,
          name: "Figma",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734827636/t2hbq6aak56dg8gzn7xe.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 5,
          name: "Office",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734827635/a5adxskceltr0wysuak3.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 6,
          name: "JavaScript",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825746/tf9limxp4tvuxe0glzzw.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 7,
          name: "Tailwind",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734826518/jbnzyansgkpasjiyznpm.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 8,
          name: "Bootstrap",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734826524/bgnrx1ccpj6ofxquws77.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 9,
          name: "Git",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/slqgzeosusfocckah2d0.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 10,
          name: "MongoDB",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825747/ohozxxkohoua0tsfecmo.png",
          type: "Database",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 11,
          name: "MySQL",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/bh6teauuagenmooudlyg.png",
          type: "Database",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 12,
          name: "Nodejs",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825746/keruxrmuy6aenqojp33e.png",
          type: "Backend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 13,
          name: "Python",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/pjgqrofo3st5sp3d3gp3.png",
          type: "Backend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 14,
          name: "React",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/o01or1aotvpnw34k9nil.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 15,
          name: "Jquery",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825745/vxtbxh0odtnx5vhagcz7.png",
          type: "Frontend",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 16,
          name: "Gitlab",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825749/jmmf3xpdkl8oe4xydjy5.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 17,
          name: "Wordpress ",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734827635/bmj0mxyfqlbf1j8dva1w.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 18,
          name: "Kubernetes",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825747/pdwclsvh8v8ccirygmbt.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 19,
          name: "Docker",
          src: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825747/ugnxwnzhomfbozlvink8.png",
          type: "Tool",
          desc: "Lorem ipsum dolor sit amet consectetur.",
        },
      ],
      MY_PROJECT: [
        {
          id: 1,
          Dashbord_web_App_name: "EasyStady",
          image_src:
            "https://res.cloudinary.com/diypq1cyl/image/upload/v1736510086/znvtoru5xrniydqcqkpw.png",
          description:
            "Platform to help mobile students find accommodation, jobs, transport and catering.",
          Gitlink: {
            src: (
              <FaGithub
                size={28}
                className="text-black hover:text-orange-600 transition duration-500 "
              />
            ),
            link: "https://github.com/elglile/pfe",
          },
          dimolink: {
            src: (
              <TbEyeShare
                size={28}
                className="hover:text-Tird_Color  hover:rounded-xl transition duration-500 ease-in-out  "
              />
            ),
            link: "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/o01or1aotvpnw34k9nil.png",
          },
          Figmalink: {
            src: 'https://res.cloudinary.com/diypq1cyl/image/upload/v1736512146/figma_ix8tib.png',
            link: "",
          },
          languages_prog: {
            language1:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/o01or1aotvpnw34k9nil.png",
            language2:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825749/qz2csfjfhsmyijhxv7oa.png",
            language3:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734826524/bgnrx1ccpj6ofxquws77.png",
          },
        },
        {
          id: 2,
          Dashbord_web_App_name: "FastLoad",
          image_src:
            "https://res.cloudinary.com/diypq1cyl/image/upload/v1736510086/ctz0mumbkkn0w3ggzcu8.png",
          description:
            "A site that lets you download videos using a simple URL from any platform.",
          Gitlink: {
            src: (
              <FaGithub
                size={28}
                className="text-black hover:text-orange-600 transition duration-500 "
              />
            ),
            link: "https://github.com/elglile/FastLoad.git",
          },
          dimolink: {
            src: (
              <TbEyeShare
                size={28}
                className="hover:text-Tird_Color hover:rounded-xl transition duration-500 ease-in-out  "
              />
            ),
            link: "",
          },
          Figmalink: {
            src: 'https://res.cloudinary.com/diypq1cyl/image/upload/v1736512146/figma_ix8tib.png',
            link: "",
          },
          languages_prog: {
            language1:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/o01or1aotvpnw34k9nil.png",
            language2:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825749/qz2csfjfhsmyijhxv7oa.png",
            language3:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734826524/bgnrx1ccpj6ofxquws77.png",
          },
        },
        {
          id: 3,
          Dashbord_web_App_name: "Ayoubelglile.xd",
          image_src:
            "https://res.cloudinary.com/diypq1cyl/image/upload/v1736344990/beawn60yg1l17gslo3tb.png",
          description:
            "A platform to present my online portfolio and showcase my skills, projects and services.",
          Gitlink: {
            src: (
              <FaGithub
                size={28}
                className="text-black hover:text-orange-600 transition duration-500 "
              />
            ),
            link: "https://github.com/elglile/ayoubelglile.xd",
          },
          dimolink: {
            src: (
              <TbEyeShare
                size={28}
                className="hover:text-Tird_Color hover:rounded-xl transition duration-500 ease-in-out  "
              />
            ),
            link: "https://ayoubelglile-xd.vercel.app/",
          },
          Figmalink: {
            src: 'https://res.cloudinary.com/diypq1cyl/image/upload/v1736512146/figma_ix8tib.png',
            link: "",
          },
          languages_prog: {
            language1:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825748/o01or1aotvpnw34k9nil.png",
            language2:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1734825749/qz2csfjfhsmyijhxv7oa.png",
            language3:
              "https://res.cloudinary.com/diypq1cyl/image/upload/v1736508852/gfopdthhcxntnxtovq64.png",
          },
        },
      ],
      Myservices: [
        {
          title: "Frontend",
          icon: "Code",
          description:
            "We specialize in creating responsive user interfaces with expertise in ReactJS, HTML, CSS, and API integration. My projects showcase my proficiency in delivering sophisticated, functional web solutions that are tailored to user needs. ",
        },
        {
          title: "Web Design",
          icon: "Palette",
          description:
            "I create visually appealing, user-friendly websites that focus on seamless navigation and engaging designs. With expertise in **Figma** and modern web design principles, I ensure every project is crafted to provide an optimal user experience while aligning with the client's brand identity.",
        },
        {
          title: "Office",
          icon: "Building2",
          description:
            "I offer expertise in document creation, presentation design, and data management using tools like Microsoft Word, PowerPoint, and Excel. My skills ensure professional, organized, and visually appealing outputs for various office needs.",
        },
      ],
    },
  ];
