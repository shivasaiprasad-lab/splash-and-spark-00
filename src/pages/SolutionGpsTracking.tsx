import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone } from "lucide-react";

const SolutionGpsTracking = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4">{t('solutions.gpsTrackingBenefit')}</Badge>
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('solutions.gpsTracking')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('solutions.gpsTrackingDesc')}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('solutions.gpsTrackingDetail.overview')}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">{t('solutions.keyFeatures')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Card key={num}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {t(`solutions.gpsTrackingDetail.feature${num}`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">{t('solutions.technicalSpecs')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <Card key={num}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {t(`solutions.gpsTrackingDetail.spec${num}`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">{t('solutions.useCases')}</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <Card key={num}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {t(`solutions.gpsTrackingDetail.useCase${num}`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to learn more about our GPS Tracking solution
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionGpsTracking;
