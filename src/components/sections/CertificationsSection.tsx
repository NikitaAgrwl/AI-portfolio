import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const CertificationsSection = () => {
  const certifications = [
    {
      name: "SnowFlake - The Complete Masterclass",
      issuer: "Udemy",
      date: "October, 2023",
      credentialId: "UC-77d4aba6-632d-4652-9b63-0b67f452c004",
      verifyUrl: "https://www.udemy.com/certificate/UC-77d4aba6-632d-4652-9b63-0b67f452c004/",
      skills: ["Snowflake", "Cloud Architecture", "MySql", "Data Warehousing"],
      description: "I learnt how to use Snowflake from the ground up, mastering both fundamental and advanced features in a structured, hands-on way. The course provided clear explanations, best practices, and plenty of practical exercises to deepen my understanding. It has equipped me with the skills to confidently work with Snowflake for modern cloud-based data engineering and analytics tasks."
    },
    {
      name: "Data Analysis | SQL, Tableau, PowerBi and Excel | Real Projects",
      issuer: "Udemy",
      date: "July, 2025",
      credentialId: "UC-3abe489a-9da7-4c2b-9a65-9d8ae16da85f",
      verifyUrl: "https://www.udemy.com/certificate/UC-3abe489a-9da7-4c2b-9a65-9d8ae16da85f/",
      skills: ["SQL", "PowerBi", "Tableau", "Data Analysis", "Excel"],
      description: "I learnt how to analyze and visualize data using key tools like SQL, Excel, Tableau, and Power BI (Windows only), along with how to use ChatGPT to boost productivity. Through hands-on projects, I developed practical skills in writing SQL queries, cleaning and transforming data, and building interactive dashboards. This course gave me a strong foundation in data analysis and prepared me to pursue opportunities in the data analytics field with confidence."
    },
    {
      name: "Certificate Of Internship",
      issuer: "Antares Tech (Terracode Systems Private Limited)",
      date: "1 MAR, 2022 - 30 AUG, 2022",
      credentialId: "#", 
      verifyUrl: "https://www.linkedin.com/in/nikita-agarwal23",
      skills: ["JavaScript", "Reactjs", "Nodejs", "MongoDB"],
      description: "I participated in a live Antares project for an enterprise SaaS (Software as a Service) company in the agriculture industry based in Missouri, USA as a full-stack developer."
    }
  ]

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8 animate-fade-in-up">Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-surface border-portfolio-border hover:bg-portfolio-surface-hover transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-portfolio-accent mt-1" />
                    <div>
                      <CardTitle className="text-lg text-portfolio-text group-hover:text-portfolio-accent transition-colors duration-300">
                        {cert.name}
                      </CardTitle>
                      <p className="text-portfolio-accent font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-portfolio-text-muted hover:text-portfolio-accent">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-portfolio-text-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="text-portfolio-text-muted">ID: {cert.credentialId}</span>
                </div>
                
                <p className="text-portfolio-text-muted text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-portfolio-text mb-2 text-sm">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs text-portfolio-accent border-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection