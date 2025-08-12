import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-PSA-12345",
      verifyUrl: "#",
      skills: ["AWS", "Cloud Architecture", "System Design", "Security"],
      description: "Advanced certification demonstrating expertise in designing distributed systems on AWS."
    },
    {
      name: "Snowflake SnowPro Advanced: Data Engineer",
      issuer: "Snowflake",
      date: "January 2023", 
      credentialId: "SNF-ADE-67890",
      verifyUrl: "#",
      skills: ["Snowflake", "Data Engineering", "ETL", "Data Warehousing"],
      description: "Advanced certification for designing and implementing data engineering solutions on Snowflake."
    },
    {
      name: "Apache Airflow Fundamentals",
      issuer: "Apache Software Foundation",
      date: "November 2022",
      credentialId: "ASF-AF-11111",
      verifyUrl: "#",
      skills: ["Apache Airflow", "Workflow Management", "Python", "Data Orchestration"],
      description: "Certification covering workflow orchestration and data pipeline automation."
    },
    {
      name: "dbt Analytics Engineering",
      issuer: "dbt Labs",
      date: "September 2022",
      credentialId: "DBT-AE-22222",
      verifyUrl: "#",
      skills: ["dbt", "SQL", "Data Modeling", "Analytics Engineering"],
      description: "Certification in modern analytics engineering practices using dbt."
    },
    {
      name: "Tableau Desktop Certified Associate",
      issuer: "Tableau",
      date: "June 2022",
      credentialId: "TAB-DCA-33333", 
      verifyUrl: "#",
      skills: ["Tableau", "Data Visualization", "Business Intelligence", "Dashboard Design"],
      description: "Certification demonstrating proficiency in creating interactive data visualizations."
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