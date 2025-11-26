import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle, Zap } from "lucide-react";

const SolutionSmsVoice = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('solutions.smsVoice')}
            </h1>
            <Badge variant="secondary" className="mb-6">
              {t('solutions.smsVoiceBenefit')}
            </Badge>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('solutions.smsVoiceDetail.overview')}
            </p>
          </div>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              {t('solutions.keyFeatures')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{t(`solutions.smsVoiceDetail.feature${num}`)}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('solutions.technicalSpecs')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="bg-background">
                  <CardHeader>
                    <CardDescription className="text-base">
                      {t(`solutions.smsVoiceDetail.spec${num}`)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('solutions.useCases')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3].map((num) => (
                <Card key={num} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t('solutions.comparison.useCase')} {num}
                    </CardTitle>
                    <CardDescription>
                      {t(`solutions.smsVoiceDetail.useCase${num}`)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {t('solutions.comparison.requestConsultation')}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {t('cta.description')}
            </p>
            <Button size="lg" variant="secondary" onClick={scrollToContact}>
              {t('hero.contactUs')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionSmsVoice;
