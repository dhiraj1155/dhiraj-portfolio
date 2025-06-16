import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Brain,
  Database,
  Cloud,
} from "lucide-react"

export default function Portfolio() {
  const skills = {
    programming: ["Python 3.x", "C++", "Java SE 8+", "JavaScript ES6+", "SQL", "HTML5/CSS3"],
    ml: ["TensorFlow 2.x", "OpenCV 4.x", "CNN", "scikit-learn", "NumPy", "Pandas"],
    development: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
    infrastructure: ["AWS (EC2, S3, Lambda)", "Vercel", "Git", "GitHub"],
  }

  const projects = [
    {
      title: "SkillSage: AI-Powered Placement Platform",
      date: "May 2025",
      tech: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
      description:
        "Launched an AI career platform attracting 500+ active users, featuring ATS-compatible resume analysis (95%+ match rate)",
      highlights: [
        "Orchestrated integration of OpenAI&#39;s GPT-4 for personalized interview preparation",
        "Crafted ML recommendation algorithm using Adzuna API with 85% user satisfaction",
      ],
    },
    {
      title: "CNN-Based Driver Drowsiness Detection System",
      date: "Oct 2024",
      tech: ["OpenCV", "CNN", "Deep Learning", "Transfer Learning"],
      description:
        "Built a real-time drowsiness detection system using MobileNetV2 with 96.88% eye-state and 98.76% yawning detection accuracy",
      highlights: [
        "Processed 15,000+ eye and mouth images via ROI extraction",
        "Deployed TensorFlow pipeline achieving <2s/frame detection speed",
      ],
    },
    {
      title: "Violence Detection in Surveillance System",
      date: "Oct 2024",
      tech: ["MobileNetV2", "MTCNN", "Python", "Firebase", "Telegram Bot"],
      description: "Achieved 94.38% accuracy in detecting violent activities using fine-tuned MobileNetV2 model",
      highlights: [
        "Processed 1,000+ video frames from real-life surveillance scenarios",
        "Reduced model complexity by 60% compared to traditional CNNs",
      ],
    },
  ]

  const certifications = [
    "IBM IT Project Manager - Google (April 2025)",
    "AWS Certified Cloud Practitioner - Amazon Web Services (April 2025)",
    "Complete Web Development Bootcamp - Udemy (December 2022)",
    "Docker Mastery: with Kubernetes +Swarm from a Docker Captain - Udemy",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Profile Picture */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                 <Image
                    src="/avatar1.png"
                    alt="Dhiraj Anil Wagh"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
            </div>

            {/* Right side - Description */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Dhiraj Wagh</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">Full-Stack Developer</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
                Information Technology graduate with expertise in TensorFlow, OpenCV, and MERN Stack. Demonstrated
                success in delivering 5+ production-ready applications with 94-98% accuracy in AI models and 40%
                efficiency increase in process automation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Lines of Code</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
               <a href="mailto:dhirajwagh@example.com?subject=Hello&body=Hi Dhiraj,%20I%20wanted%20to%20connect%20with%20you.">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>

                <div className="flex gap-3">
                  <a href="https://github.com/dhiraj1155">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/dhirajwagh/">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                I&#39;m a passionate Information Technology graduate specializing in computer vision, machine learning
                algorithms, and full-stack development. With a strong foundation in AI/ML technologies, I&#39;ve
                successfully delivered multiple production-ready applications that solve real-world problems.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                My expertise spans from developing sophisticated computer vision systems for safety applications to
                building AI-powered platforms that enhance user experiences. I&#39;m driven by the potential of technology
                to create meaningful impact.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Pune, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">+91-7083488252</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">dhirajwagh2004@gmail.com</span>
              </div>
              <div className="flex gap-3 pt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Code className="h-3 w-3" />
                  Full-Stack Dev
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Brain className="h-3 w-3" />
                  Problem Solver
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-emerald-600" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-orange-600" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-sky-600" />
                  Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.infrastructure.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Experience
              </h3>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Technical Support Intern</CardTitle>
                  <CardDescription>Om Sai Computers • June 2022 - Aug 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Executed troubleshooting and repair tasks for 200+ desktops, laptops, and printers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Achieved resolution rate within average time frame of under two hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Provided technical support and customer service to clients
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>B.Tech in Information Technology</CardTitle>
                    <CardDescription>Vishwakarma Institute of Information Technology • 2023 – Present</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">8.61 CGPA</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Diploma in Computer Technology</CardTitle>
                    <CardDescription>Sanjivani K.B.P. Polytechnic • 2020 – 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">91.26%</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Let&#39;s Connect</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I&#39;m always interested in discussing new opportunities, innovative projects, and collaborations in AI/ML and
            software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="mr-2 h-4 w-4" />
              dhirajwagh2004@gmail.com
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              +91-7083488252
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Dhiraj Wagh.</p>
        </div>
      </footer>
    </div>
  )
}