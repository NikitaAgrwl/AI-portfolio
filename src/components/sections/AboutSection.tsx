import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import profileImage from "@/assets/profile-image.jpg"

const AboutSection = () => {
  return (
    <section className="py-16 lg:ml-80">
      <div className="container mx-auto px-6">
        <Card className="bg-portfolio-surface border-portfolio-border animate-fade-in-up hover:shadow-lg hover:shadow-portfolio-accent/10 transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Profile image */}
              <div className="flex justify-center animate-scale-in">
                <Avatar className="w-48 h-48 hover:scale-110 transition-transform duration-300">
                  <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
                  <AvatarFallback className="text-2xl bg-portfolio-bg">YN</AvatarFallback>
                </Avatar>
              </div>

              {/* About content */}
              <div className="lg:col-span-2 space-y-6 animate-slide-in-right [animation-delay:0.2s]">
                <h3 className="text-2xl font-bold text-portfolio-text">About</h3>
                
                <div className="space-y-4 text-portfolio-text-muted leading-relaxed">
                  <p className="animate-fade-in-up [animation-delay:0.4s]">
                    With over two years of experience as a Software Engineer specializing in Data Engineering 
                    and Cloud Analytics, I have developed a strong expertise in creating scalable ETL/ELT 
                    pipelines using technologies like Apache Airflow, DBT, and Snowflake.
                  </p>
                  
                  <p className="animate-fade-in-up [animation-delay:0.6s]">
                    My work at TrieDatum has involved integrating complex healthcare data to enhance clinical 
                    reporting and ensure compliance with HIPAA standards. I have successfully optimized data 
                    workflows, achieving significant performance improvements and maintaining high pipeline reliability.
                  </p>
                  
                  <p className="animate-fade-in-up [animation-delay:0.8s]">
                    My technical skills include proficiency in AWS services, Python, SQL, and data visualization 
                    tools such as Power BI and Tableau. I am passionate about continuous learning and applying 
                    new technologies to build innovative solutions. Beyond my professional life, I enjoy exploring 
                    new tech advancements and contributing to impactful projects.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection