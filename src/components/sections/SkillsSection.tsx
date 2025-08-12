import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      category: "Data Engineering",
      skills: ["Apache Airflow", "DBT", "Snowflake", "Kafka", "ETL/ELT"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS S3", "AWS Glue"]
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Tableau", "matplotlib"]
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "GitHub", "React"]
    }
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-portfolio-surface border-portfolio-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-text mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-portfolio-accent/10 text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg"
                    >
                      {skill}
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

export default SkillsSection