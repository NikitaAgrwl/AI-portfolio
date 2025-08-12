import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Healthcare Data Integration Platform",
      description: "Built a comprehensive data platform for healthcare analytics, processing EHR and claims data for over 500 providers. Implemented real-time patient cohorting and provider performance tracking.",
      technologies: ["Python", "Snowflake", "DBT", "AWS", "Power BI", "MWAA", "Apache Airflow", "Healthcare APIs"],
      github: "#",
      demo: "#",
      highlights: [
        "Processed 10M+ patient records",
        "Reduced query response time by 60%",
        "HIPAA compliant architecture"
      ]
    },
    {
      title: "Enterprise DBT Cloud Migration",
      description: "Configured role-based access controls and environment isolation for enterprise governance. Achieved 95% team adoption rate through comprehensive training and documentation",
      technologies: ["DBT Core","DBT Cloud", "CI/CD", "GitHub Actions", "Git"],
      github: "#",
      demo: "#",
      highlights: [
        "Led migration of 200+ DBT models from Core to Cloud",
        "Automated CI/CD pipelines",
        "Reduced deployment errors by 50%"
      ]
    },
    {
      title: "Production Healthcare Infrastructure Monitoring",
      description: "Implemented proactive issue detection preventing 15+ potential system failures. Achieved 4-hour average incident resolution time through systematic troubleshootingEnhanced overall system efficiency for mission- critical healthcare reporting",
      technologies: ["Apache Airflow","Arena Platform", "Jira", "Linux", "AWS EMR"],
      github: "#",
      demo: "#",
      highlights: [
        "Monitored 50+ data pipelines across customer environments",
        "Ensured 99.9% uptime",
        "Managed infrastructure optimization"
      ]
    },
    {
      title: "SWH Hostel",
      description: "A web app developed for one of the Tezpur University's hostel to manage records of the borders, hostel rooms and other managerial activity related to the hostel.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Javascript"],
      github: "#",
      demo: "https://www.tezu.ernet.in/hostels/swh/",
      highlights: [
        "Centralized Record Management",
        "Admin Panel for Daily Operations",
        "Real-Time Data & Reporting"
      ]
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8 animate-fade-in-up">Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-surface border-portfolio-border hover:bg-portfolio-surface-hover transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/10 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-portfolio-text group-hover:text-portfolio-accent transition-colors duration-300">{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-portfolio-text-muted hover:text-portfolio-accent hover:scale-110 transition-all duration-200">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-portfolio-text-muted hover:text-portfolio-accent hover:scale-110 transition-all duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-portfolio-text-muted leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-portfolio-text">Key Highlights:</h4>
                  <ul className="space-y-1 text-portfolio-text-muted">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-portfolio-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-portfolio-accent border-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg transition-all duration-200 hover:scale-105"
                    >
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
  )
}

export default ProjectsSection