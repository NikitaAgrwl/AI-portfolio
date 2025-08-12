import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import profileImage from "@/assets/profile-image.jpg"

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h1 className="text-5xl lg:text-5xl font-bold text-portfolio-text mb-4 animate-fade-in-up">
                Nikita Agarwal
              </h1>
              <h2 className="text-xl lg:text-2xl text-portfolio-text-muted mb-6 animate-fade-in-up [animation-delay:0.2s]">
                Software Engineer
              </h2>
            </div>
            
            <div className="space-y-4 animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-lg text-portfolio-text-muted leading-relaxed">
                I build scalable data pipelines that transform raw data into actionable insights. 
                I have worked in 
              <span className="inline-block text-portfolio-accent font-medium animate-glow">&nbsp; Snowflake | Apache Airflow | Python | Data Build Tool</span>
              </p>
            </div>

            <div className="pt-8 animate-fade-in-up [animation-delay:0.6s]">
              <div className="space-y-3">
                {[
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Education", href: "#education" },
                  { name: "Certifications", href: "#certifications" }
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
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-portfolio-text font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/nikita-agarwal23" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/NikitaAgrwl" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a  href="mailto:nikita.agarwal208@gmail.com" className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" viewBox="0 0 45 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.6 20.5H24v7.1h11.3C33.8 32.4 29.5 35 24 35c-6.1 0-11.3-5.2-11.3-11.3S17.9 12.3 24 12.3c2.7 0 5.2 1 7.1 2.7l5.3-5.3C32.6 6.6 28.5 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19c9.8 0 18.1-7 18.1-19 0-1.2-.1-2.1-.3-3.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <Avatar className="w-80 h-80 lg:w-96 lg:h-96 hover:scale-105 transition-transform duration-300">
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