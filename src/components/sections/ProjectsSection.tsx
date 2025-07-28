import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Healthcare Data Analytics Platform",
      description: "Built a comprehensive data platform for healthcare analytics, processing EHR and claims data for over 500 providers. Implemented real-time patient cohorting and provider performance tracking.",
      technologies: ["Python", "Snowflake", "DBT", "Airflow", "AWS", "Power BI"],
      github: "#",
      demo: "#",
      highlights: [
        "Processed 10M+ patient records",
        "Reduced query response time by 60%",
        "HIPAA compliant architecture"
      ]
    },
    {
      title: "Real-time Data Pipeline",
      description: "Designed and implemented a real-time data processing pipeline using Apache Kafka and Spark Streaming to handle high-volume financial transactions.",
      technologies: ["Apache Kafka", "Spark", "Scala", "Redis", "Docker"],
      github: "#",
      demo: "#",
      highlights: [
        "Processes 1M+ transactions/day",
        "Sub-second latency",
        "99.9% uptime"
      ]
    },
    {
      title: "ML-Powered Analytics Dashboard",
      description: "Created an interactive dashboard with machine learning models for predictive analytics in the e-commerce domain, featuring customer behavior analysis and sales forecasting.",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      highlights: [
        "85% prediction accuracy",
        "Real-time visualizations",
        "Automated model retraining"
      ]
    }
  ]

  return (
    <section id="projects" className="py-16 lg:ml-80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8">Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-portfolio-surface border-portfolio-border hover:bg-portfolio-surface-hover transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-portfolio-text">{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-portfolio-text-muted hover:text-portfolio-accent">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-portfolio-text-muted hover:text-portfolio-accent">
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
                      className="text-portfolio-accent border-portfolio-accent"
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