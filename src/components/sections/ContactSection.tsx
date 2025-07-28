import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:ml-80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-portfolio-text mb-8">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">
                Let's work together
              </h3>
              <p className="text-portfolio-text-muted leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-portfolio-accent" />
                <span className="text-portfolio-text">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-portfolio-accent" />
                <span className="text-portfolio-text">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-portfolio-accent" />
                <span className="text-portfolio-text">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-portfolio-surface border-portfolio-border">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-portfolio-text mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-portfolio-bg border-portfolio-border text-portfolio-text"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-portfolio-text mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-portfolio-bg border-portfolio-border text-portfolio-text"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-portfolio-text mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-portfolio-bg border-portfolio-border text-portfolio-text"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-portfolio-text mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Collaboration" 
                    className="bg-portfolio-bg border-portfolio-border text-portfolio-text"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-portfolio-text mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-portfolio-bg border-portfolio-border text-portfolio-text"
                  />
                </div>
                
                <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-bg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection