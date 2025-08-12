import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import profileImage from "@/assets/profile-image.jpg"

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen pt-20 lg:ml-80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-portfolio-text mb-4 animate-fade-in-up">
                Your Name
              </h1>
              <h2 className="text-xl lg:text-2xl text-portfolio-text-muted mb-6 animate-fade-in-up [animation-delay:0.2s]">
                Software Engineer
              </h2>
            </div>
            
            <div className="space-y-4 animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-lg text-portfolio-text-muted leading-relaxed">
                I build scalable data pipelines that transform raw data into actionable insights. 
                I have worked in
              </p>
              <span className="inline-block text-portfolio-accent font-medium animate-glow">Snowflake</span>
            </div>

            <div className="pt-8 animate-fade-in-up [animation-delay:0.6s]">
              <div className="space-y-3">
                {[
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Certifications", href: "#certifications" },
                  { name: "Education", href: "#education" },
                  { name: "Projects", href: "#projects" }
                ].map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 border-l-2 border-transparent hover:border-portfolio-accent pl-4 py-1 hover:translate-x-2 transform"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <Avatar className="w-80 h-80 lg:w-96 lg:h-96 animate-float hover:scale-105 transition-transform duration-300">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
              <AvatarFallback className="text-4xl bg-portfolio-surface">YN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection