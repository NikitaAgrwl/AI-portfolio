import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2019 - 2021",
      gpa: "3.8/4.0",
      coursework: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Cloud Computing"],
      achievements: ["Dean's List", "Graduate Research Assistant"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA", 
      period: "2015 - 2019",
      gpa: "3.7/4.0",
      coursework: ["Software Architecture", "Data Engineering", "Statistics", "Systems Design"],
      achievements: ["Summa Cum Laude", "Computer Science Excellence Award"]
    }
  ]

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8 animate-fade-in-up">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-surface border-portfolio-border hover:bg-portfolio-surface-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-6 h-6 text-portfolio-accent mt-1" />
                    <div>
                      <CardTitle className="text-xl text-portfolio-text">{edu.degree}</CardTitle>
                      <p className="text-portfolio-accent font-medium">{edu.school}</p>
                      <p className="text-portfolio-text-muted">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-portfolio-text-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-portfolio-text-muted">GPA:</span>
                  <span className="text-portfolio-text font-medium">{edu.gpa}</span>
                </div>
                
                <div>
                  <h4 className="font-medium text-portfolio-text mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex} 
                        variant="outline" 
                        className="text-portfolio-accent border-portfolio-accent"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-portfolio-text mb-2">Achievements:</h4>
                  <ul className="space-y-1 text-portfolio-text-muted">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <span className="text-portfolio-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection