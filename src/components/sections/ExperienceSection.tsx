import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ExperienceSection = () => {
  const experiences = [
    {
      period: "MAR 2023 - Present",
      role: "Software Engineer",
      company: "TrieDatum",
      description: "As a Software Engineer at TrieDatum, I specialize in healthcare data analytics, focusing on integrating EHR, claims, and lab data using DBT, Snowflake, and Python. My role involves developing scalable patient cohorting algorithms and provider performance models, which support value-based care analytics for over 500 healthcare providers.",
      achievements: [
        "Led end-to-end data engineering efforts across analytics platforms",
        "Developed scalable patient cohorting algorithms",
        "Optimized data workflows achieving significant performance improvements",
        "Ensured HIPAA compliance standards"
      ]
    },
    {
      period: "FEB 2022 - AUG 2022",
      role: "Intern",
      company: "Antares Tech",
      description: "Developed Picture-in-Picture functionality using React and JavaScript APIs, which improved user experience by 35%.",
      achievements: [
        "Collaborated with frontend and UX teams",
        "Optimized video playback performance",
        "Ensured cross-browser compatibility across multiple devices"
      ]
    },
    {
      period: "MAY 2018 - JUN 2018",
      role: "Intern",
      company: "IIT Guwahati",
      description: "Implemented ARIMA time series models using Python for historical data analysis and forecasting.",
      achievements: [
        "Implemented statistical forecasting models using Python for time series analysis and predictive modelling",
        "Developed performance optimized C components for data transformation",
        "Conducted rigorous model validation techniques"
      ]
    }
  ]

  return (
    <section id="experience" className="py-5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-portfolio-surface border-portfolio-border hover:bg-portfolio-surface-hover transition-colors">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="text-portfolio-accent border-portfolio-accent mb-2">
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-semibold text-portfolio-text">{exp.role}</h3>
                      <p className="text-portfolio-accent font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-portfolio-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-portfolio-text">Key Achievements:</h4>
                    <ul className="space-y-1 text-portfolio-text-muted">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-portfolio-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection