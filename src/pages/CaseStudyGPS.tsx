import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, SatelliteDish, Shield, Zap, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudyGPS = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
            {t('caseStudy.backToHome')}
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <SatelliteDish className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">{t('caseStudy.GPS.badge')}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {t('caseStudy.GPS.title')}
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              {t('caseStudy.GPS.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">xxx</div>
                  <div className="text-muted-foreground">{t('caseStudy.GPS.metric1')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">xxx</div>
                  <div className="text-muted-foreground">{t('caseStudy.GPS.metric2')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">xxx</div>
                  <div className="text-muted-foreground">{t('caseStudy.GPS.metric3')}</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.theChallenge')}</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('caseStudy.GPS.challengeText1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('caseStudy.GPS.challengeText2')}
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.ourSolution')}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.GPS.solution1Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.GPS.solution1Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.GPS.solution2Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.GPS.solution2Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.GPS.solution3Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.GPS.solution2Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

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
                        {t('caseStudy.GPS.result1')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.GPS.result2')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.GPS.result3')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.GPS.result4')}
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('caseStudy.GPS.ctaTitle')}
                </h3>
                <p className="text-white/90 mb-6">
                  {t('caseStudy.GPS.ctaDesc')}
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

export default CaseStudyGPS;
