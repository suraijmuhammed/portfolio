"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, interactive portfolio website showcasing professional achievements and expertise, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "/portfolio.png?height=200&width=300",
      github: "https://github.com/suraijmuhammed/portfolio",
      live: "https://suraijpc.live/",
    },
    {
      title: "Communets E-Commerce Website",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication,ai chatbot and admin panel.",
      tech: ["React", "Node.js", "MongoDB", "Firebase Authentication","Tailwind CSS"],
      image: "/communets.png?height=200&width=300",
      github: "https://github.com/tomsabu444/Communets-E-commerce",
      live: "https://communets.com/",
    },
    
    {
      title: "DeEx3 DAO",
      description:
        "A decentralized platform that facilitates scientists and researchers in publishing their papers, securing grants and funding from investors, and offers a dedicated space for peer-reviewed research.Associated with ETH India 2023",
      tech: ["Solidity", "Tailwind CSS", "React.js"],
      image: "/dex33.webp?height=200&width=300",
      github: "https://github.com/orgs/DeEx3-DAO/repositories",
      live: "https://devfolio.co/projects/deex-dao-2de9",
    },
    {
      title: "FaceTrack",
      description:
        "FaceTrack is a comprehensive facial recognition platform that uses advanced machine learning to detect, identify, and label faces in uploaded images. Authenticated users can analyze images through computer vision algorithms and access detailed profiles of identified individuals with secure access controls.",
      tech: ["React.js", "Firebase Authentication"],
      image: "/facetrackk.jpg?height=200&width=300",
      github: "https://github.com/suraijmuhammed/facetrack",
      live: "https://drive.google.com/drive/folders/19oqmMp7KYBobpj38neO_pp63V4KXKQEO?usp=drive_link",
    },
    {
      title: "FaceFinder",
      description:
        "FaceFinder is a real-time facial recognition system for law enforcement, featuring super-resolution, sketch generation, and age progression. I contributed to website development, designing and implementing user and admin flows with Firebase authentication to ensure seamless user interaction and secure access control",
      tech: ["React.js", "Firebase Authentication","UI/UX"],
      image: "/facefinderr.jpg?height=200&width=300",
      github: "https://github.com/suraijmuhammed/FaceFinder",
      live: "https://drive.google.com/file/d/1VOsAiYW7m6KuVXD28NJFMLhvhN9mPLh_/view?usp=sharing",
    },
  ]

 const skills = [
  { name: "Frontend Development", icon: Code, description: "React, Next.js" },
  { name: "Backend Development", icon: Database, description: "Node.js, Python, MongoDB, MySQL, Firebase" },
  { name: "Web Technologies", icon: Globe, description: "HTML5, CSS, JavaScript, REST APIs" },
  { name: "Programming Languages", icon: Code, description: "C, JavaScript, Python,Java" },
]

  const experiences = [
    {
      title: "Software Developer",
      company: "iNPLASS InfoTech",
      location: "Dubai, United Arab Emirates(Remote)",
      period: "2024 Jan - Present",
//       description:[
//         " Developed features for GUEST by iNPLASS, STAFF by iNPLASS, and HOP by iNPLASS, enhancing the guest communication, staff collaboration, and hotel management functionalities, respectively",
// "Fixed bugs and improved existing features using React.js, Node.js, Firebase, and other technologies to ensure a smooth user experience across the multi-lingual guest communication and hotel operations management platform",
// "Gained valuable experience in teamwork, contributing to both frontend and backend development, demonstrating strong collaboration skills and full-stack development capabilities"],
      // achievements: [
      //   "Developed features for GUEST by iNPLASS, STAFF by iNPLASS, and HOP by iNPLASS, enhancing the guest communication, staff collaboration, and hotel management functionalities, respectively",
      //   "Fixed bugs and improved existing features using React.js, Node.js, Firebase, and other technologies to ensure a smooth user experience across the multi-lingual guest communication and hotel operations management platform",
      //   "Gained valuable experience in teamwork, contributing to both frontend and backend development, demonstrating strong collaboration skills and full-stack development capabilities",
      // ],
    },
    {
      title: "Software Developer and Project Manager",
      company: "HULT InfoTech",
      location: "Kottayam,Kerala (Self Employed)",
      period: "2024 Dec - Present",
      // description:
      //   "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      // achievements: ["Delivered 15+ successful projects", "Reduced load times by 60%", "Integrated third-party APIs"],
    },
    {
      title: "Industrial Trainee",
      company: "intel corporation ",
      location: "Bangalore,India",
      period: "2023 Jun - 2023 Aug",
      // description:
      //   "Built responsive web applications and learned modern development practices. Contributed to open-source projects and participated in code reviews.",
      // achievements: [
      //   "Contributed to 10+ open source projects",
      //   "Learned 5 new technologies",
      //   "Improved code quality standards",
      // ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Saintgits College Of Engineering",
      location: "Kottayam,Kerala",
      period: "2021 - 2025",
      description:
        " Minor in Robotics and Automation Engineering",
      gpa: "8.9/10",
    },
    {
      degree: "Higher Secondary",
      school: " Seethi Sahib Higher Secondary School",
      location: "Taliparamba, Kannur",
      period: "2019 - 2021",
      description: "Science",
      gpa: "9.8/10",
    },
  ]

  // Initialize EmailJS
  emailjs.init("VD5FKmnZUt6u7ZCBv") 

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formRef.current) {
      setFormStatus("Sending...")
      emailjs
        .sendForm(
          "service_gw2giwg",
          "template_wbe449x", 
          formRef.current
        )
        .then(
          () => {
            setFormStatus("Message sent successfully!")
            formRef.current?.reset()
            setTimeout(() => setFormStatus(null), 3000)
          },
          (error) => {
            setFormStatus("Failed to send message. Please try again.")
            console.error("EmailJS error:", error)
          }
        )
    }
  }

  const FloatingParticles = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Small particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Medium bubbles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-15"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Large bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-3 h-3 bg-gray-500 rounded-full opacity-10"
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 18 + 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 12,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Extra large floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`xlarge-${i}`}
            className="absolute w-4 h-4 bg-gray-600 rounded-full opacity-5"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.02, 0.1, 0.02],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 15,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    )
  }

  const TimelineItem = ({ item, index, isExperience = true }: { item: any; index: number; isExperience?: boolean }) => {
    const desktopRef = useRef(null)
    const mobileRef = useRef(null)
    const isDesktopInView = useInView(desktopRef, { once: true, margin: "-50px" })
    const isMobileInView = useInView(mobileRef, { once: true, margin: "-50px" })

    return (
      <>
        {/* Desktop Timeline Layout */}
        <motion.div
          ref={desktopRef}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isDesktopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`hidden md:flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-500 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {isExperience ? <Briefcase className="w-5 h-5 mr-2" /> : <GraduationCap className="w-5 h-5 mr-2" />}
                  <span className="text-sm text-gray-400">{item.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{isExperience ? item.title : item.degree}</h3>
                <p className="text-gray-300 mb-2">{isExperience ? item.company : item.school}</p>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </div>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                {isExperience && item.achievements && (
                  <ul className="text-sm text-gray-400 space-y-1">
                    {item.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
                {!isExperience && item.gpa && <p className="text-sm text-gray-400">GPA: {item.gpa}</p>}
              </CardContent>
            </Card>
          </div>
          <div className="w-4 h-4 bg-white rounded-full border-4 border-gray-800 z-10"></div>
          <div className="w-1/2"></div>
        </motion.div>

        {/* Mobile Single Column Layout - Everything on Right */}
        <motion.div
          ref={mobileRef}
          initial={{ opacity: 0, x: 50 }}
          animate={isMobileInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="md:hidden mb-6"
        >
          <div className="flex items-start pl-4">
            <div className="flex flex-col items-center mr-4 flex-shrink-0">
              <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-800"></div>
              {index < (isExperience ? experiences.length - 1 : education.length - 1) && (
                <div className="w-0.5 h-24 bg-gray-700 mt-2"></div>
              )}
            </div>
            <div className="flex-1 w-full">
              <Card className="bg-gray-900 border-gray-700 w-full">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    {isExperience ? <Briefcase className="w-4 h-4 mr-2" /> : <GraduationCap className="w-4 h-4 mr-2" />}
                    <span className="text-xs text-gray-400">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{isExperience ? item.title : item.degree}</h3>
                  <p className="text-gray-300 mb-2 text-sm">{isExperience ? item.company : item.school}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location}
                  </div>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{item.description}</p>
                  {isExperience && item.achievements && (
                    <ul className="text-xs text-gray-400 space-y-1">
                      {item.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!isExperience && item.gpa && <p className="text-xs text-gray-400 mt-2">GPA: {item.gpa}</p>}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </>
    )
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    // Small delay to allow menu to close first
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-white">
              DevPortfolio
            </motion.div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(`#${item.toLowerCase()}`)
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md rounded-lg mt-4"
          >
            <div className="py-4 space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left px-4 py-2 text-white hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container mx-auto px-6 text-center relative z-10"
        >
          {/* <motion.div variants={fadeInUp} className="mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-40 h-40 mx-auto mb-6 relative"
            >
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full border-4 border-white"
              />
            </motion.div>
          </motion.div> */}

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Muhammed Suraij Pc</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Developer
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: "https://github.com/suraijmuhammed" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-suraij-pc/" },
              // { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnNfKsHpZxPfvXHRfhBfvWDclDZvbXwJFwhbxtsZNksGxXJdBBmCkWvPnrqclfVbzDSvrN" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button
              onClick={() => {
                // Create a dummy PDF download
                const link = document.createElement("a")
                link.href = "/MUHAMMED_SURAIJ_PC.pdf?height=800&width=600" 
                link.download = "Muhammed_Suraij_pc.pdf"
                link.click()
              }}
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-full transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate software developer with 1.5+ years of experience building scalable web applications. I love
              turning complex problems into simple, beautiful solutions.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all"
              >
                <skill.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Experience</h3>
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} index={index} isExperience={true} />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Education</h3>
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} isExperience={false} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }} className="group">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-500 transition-all overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-black/50 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-black/50 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        name="name"
                        className="bg-gray-700 border-gray-600 focus:border-gray-400 text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        className="bg-gray-700 border-gray-600 focus:border-gray-400 text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      className="bg-gray-700 border-gray-600 focus:border-gray-400 text-white"
                      placeholder="Project collaboration"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      className="bg-gray-700 border-gray-600 focus:border-gray-400 text-white min-h-[120px]"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3">
                      Send Message
                    </Button>
                  </motion.div>
                  {formStatus && (
                    <p className={`text-sm text-center ${formStatus.includes("success") ? "text-green-400" : "text-red-400"}`}>
                      {formStatus}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © Muhammed Suraij Pc
          </p>
        </div>
      </footer> */}
    </div>
  )
}
