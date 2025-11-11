import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bike, MessageSquare, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudyMobility = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">Transportation</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Shared Mobility Success Story
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              India DLT promotional SMS for bike-sharing platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30M</div>
                  <div className="text-muted-foreground">Messages/Month</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
                  <div className="text-muted-foreground">Deployment Time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">TRAI</div>
                  <div className="text-muted-foreground">Compliant</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A rapidly growing bike-sharing platform in India needed to launch promotional SMS campaigns to engage users with ride offers and promotions. However, India's new DLT (Distributed Ledger Technology) regulations required complex registration and approval processes that were blocking their marketing initiatives.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The company lacked in-house expertise to navigate TRAI's DLT requirements and needed to launch campaigns within weeks to capitalize on seasonal demand, but faced a 4-6 week registration timeline with traditional approaches.
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
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Fast-Track DLT Registration
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Leveraged our pre-established relationships with Indian carriers and DLT platforms to complete entity registration, sender ID approval, and template registration within 48 hours instead of weeks.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          SMS API Integration
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Provided simple RESTful API for SMS delivery with automatic DLT compliance handling, template matching, and delivery reporting - eliminating technical complexity for the development team.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Multi-Carrier Routing
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented intelligent routing across multiple carrier networks to ensure optimal delivery rates and cost efficiency, with automatic failover for high-volume campaigns.
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
                        <span className="font-semibold">48-hour deployment</span> from registration to first campaign launch
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">30M messages/month</span> with 98%+ delivery rate
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">40% increase</span> in user engagement through targeted promotions
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">100% TRAI compliance</span> with zero regulatory issues
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need SMS Campaigns in India?
                </h3>
                <p className="text-white/90 mb-6">
                  Launch TRAI-compliant promotional SMS in 48 hours
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

export default CaseStudyMobility;
