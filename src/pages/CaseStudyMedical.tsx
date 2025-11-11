import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Globe, CheckCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudyMedical = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">Healthcare</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Medical Device Success Story
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              Remote patient monitoring across US and China markets
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">FDA</div>
                  <div className="text-muted-foreground">Approved</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">MIIT</div>
                  <div className="text-muted-foreground">Certified</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Dual</div>
                  <div className="text-muted-foreground">Market Access</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A medical device manufacturer developing remote patient monitoring equipment needed to obtain regulatory approval and deploy devices in both the United States and China - two of the world's most stringent medical device markets.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The challenge required navigating complex FDA and MIIT certification processes, ensuring data privacy compliance (HIPAA and China's data localization laws), and providing reliable connectivity for life-critical applications.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Regulatory Support & Type-Approval
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Provided comprehensive regulatory consulting and technical documentation to support FDA clearance and MIIT type-approval processes, including network security attestations and data flow diagrams.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Region-Specific Connectivity
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Deployed dual-region connectivity solution with separate SIM profiles for US and China markets, ensuring data localization compliance and meeting local carrier requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          HIPAA-Compliant Infrastructure
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented secure, encrypted connectivity with HIPAA-compliant data handling protocols, including business associate agreements and audit logging capabilities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Results</h2>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">FDA clearance</span> and MIIT certification achieved within 8 months
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Dual market deployment</span> with unified device platform
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">99.9% uptime</span> for critical patient monitoring data
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Full compliance</span> with HIPAA and China data localization requirements
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Launching a Medical IoT Device?
                </h3>
                <p className="text-white/90 mb-6">
                  Get expert guidance on regulatory compliance and global connectivity
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    navigate('/#contact');
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'instant' }); // "auto" | "instant" | "smooth"
                      }
                    }, 50);
                  }}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyMedical;
