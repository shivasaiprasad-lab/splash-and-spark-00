import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gauge, Battery, DollarSign, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudySmartMeter = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">{t('caseStudy.smartMeter.badge')}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {t('caseStudy.smartMeter.title')}
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              {t('caseStudy.smartMeter.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10 Years</div>
                  <div className="text-muted-foreground">{t('caseStudy.smartMeter.metric2')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-muted-foreground">{t('caseStudy.smartMeter.metric3')}</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('caseStudy.theChallenge')}</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('caseStudy.smartMeter.challengeText1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('caseStudy.smartMeter.challengeText2')}
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
                        <Battery className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.smartMeter.solution1Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.smartMeter.solution1Desc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t('caseStudy.smartMeter.solution2Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.smartMeter.solution2Desc')}
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
                          {t('caseStudy.smartMeter.solution3Title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('caseStudy.smartMeter.solution3Desc')}
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
                        {t('caseStudy.smartMeter.result1')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.smartMeter.result2')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.smartMeter.result3')}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        {t('caseStudy.smartMeter.result4')}
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('caseStudy.smartMeter.ctaTitle')}
                </h3>
                <p className="text-white/90 mb-6">
                  {t('caseStudy.smartMeter.ctaDesc')}
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

export default CaseStudySmartMeter;
