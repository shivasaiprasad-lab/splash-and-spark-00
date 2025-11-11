import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const operations = [
    { country: t('about.china1'), location: t('about.chinaLocation'), active: true },
    { country: t('about.china2'), location: t('about.HKLocation'), active: true },
    { country: t('about.india'), location: t('about.indiaLocation'), active: true },
    { country: t('about.eu'), location: t('about.euLocation'), active: true },
    { country: t('about.usa'), location: t('about.usaLocation'), active: true }
  ];

  const compliance = [
    { name: t('about.miit'), description: t('about.miitDesc') },
    { name: t('about.trai'), description: t('about.traiDesc') },
    { name: t('about.ce'), description: t('about.ceDesc') },
    { name: t('about.fcc'), description: t('about.fccDesc') }
  ];
  
  const values = [
    t('about.value1'),
    t('about.value2'),
    t('about.value3'),
    t('about.value4')
  ];
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            {t('about.subtitle1')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t('about.subtitle2')}
          </p>
        </div>

        {/* Operations Map */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t('about.globalOperations')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {operations.map((op, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-primary/30 hover:border-primary bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {op.country}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {op.location}
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {t('about.active')}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values & Compliance */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Our Values */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{t('about.ourValues')}</h2>
            </div>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Badges */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{t('about.compliance')}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {compliance.map((cert, index) => (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/*/!* CTA *!/*/}
        {/*<div className="text-center mt-16">*/}
        {/*  <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">*/}
        {/*    <CardContent className="p-8">*/}
        {/*      <h3 className="text-2xl font-bold text-foreground mb-4">*/}
        {/*        {t('about.ctaTitle')}*/}
        {/*      </h3>*/}
        {/*      <p className="text-muted-foreground mb-6">*/}
        {/*        {t('about.ctaDesc')}*/}
        {/*      </p>*/}
        {/*      <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">*/}
        {/*        {t('about.bookCall')}*/}
        {/*      </Button>*/}
        {/*    </CardContent>*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default About;
