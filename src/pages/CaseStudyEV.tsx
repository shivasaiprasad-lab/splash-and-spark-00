import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Car, MapPin, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudyEV = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('caseStudy.backToHome')}
          </Button>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">{t('caseStudy.ev.badge')}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {t('caseStudy.ev.title')}
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              {t('caseStudy.ev.subtitle')}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">{t('caseStudy.ev.metric2')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">{t('caseStudy.ev.metric3')}</div>
                </CardContent>
              </Card>
            </div>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.theChallenge')}</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('caseStudy.ev.challengeText1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('caseStudy.ev.challengeText2')}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.ourSolution')}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.ev.solution1Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.ev.solution1Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.ev.solution2Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.ev.solution2Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.ev.solution3Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.ev.solution3Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.results')}</h2>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.ev.result1')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.ev.result2')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.ev.result3')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.ev.result4')}
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('caseStudy.ev.ctaTitle')}
                </h3>
                <p className="text-white/90 mb-6">
                  {t('caseStudy.ev.ctaDesc')}
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
                  {t('caseStudy.contactUs')}
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

export default CaseStudyEV;
