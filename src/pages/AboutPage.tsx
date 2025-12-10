import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Building, Users, Cpu, MessageSquare, ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Partner logo imports
import tele2Logo from "@/assets/partners/tele2.jpg";
import tmobileLogo from "@/assets/partners/tmobile.jpg";
import airtelLogo from "@/assets/partners/airtel.jpg";
import idemiaLogo from "@/assets/partners/idemia.jpg";
import ciscoLogo from "@/assets/partners/cisco.jpg";
import inclusiverPlatform from "@/assets/inclusiver-platform.jpg";

const AboutPage = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: "T-Mobile USA",
      logo: tmobileLogo,
      description: t("aboutPage.tmobileDesc"),
    },
    {
      name: "TELE2 Sverige",
      logo: tele2Logo,
      description: t("aboutPage.tele2Desc"),
    },
    {
      name: "Airtel",
      logo: airtelLogo,
      description: t("aboutPage.airtelDesc"),
    },
    {
      name: "IDEMIA",
      logo: idemiaLogo,
      description: t("aboutPage.idemiaDesc"),
    },
    {
      name: "Cisco",
      logo: ciscoLogo,
      description: t("aboutPage.ciscoDesc"),
    },
  ];

  const operations = [
    { location: t("aboutPage.shanghai"), year: "2014", type: t("aboutPage.founded") },
    { location: t("aboutPage.hongkong"), year: "", type: t("aboutPage.operations") },
    { location: t("aboutPage.chicago"), year: "", type: t("aboutPage.operations") },
    { location: t("aboutPage.fujian"), year: "", type: t("aboutPage.rdCenter") },
  ];

  const inclusiverFeatures = [
    t("aboutPage.inclusiverFeature1"),
    t("aboutPage.inclusiverFeature2"),
    t("aboutPage.inclusiverFeature3"),
    t("aboutPage.inclusiverFeature4"),
  ];

  const inclusivaFeatures = [
    t("aboutPage.inclusivaFeature1"),
    t("aboutPage.inclusivaFeature2"),
    t("aboutPage.inclusivaFeature3"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              {t("aboutPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t("aboutPage.heroTitle")}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t("aboutPage.heroTagline")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("aboutPage.operationsTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {operations.map((op, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/30 hover:border-primary bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {index === 0 ? (
                      <Building className="w-6 h-6 text-white" />
                    ) : index === 3 ? (
                      <Cpu className="w-6 h-6 text-white" />
                    ) : (
                      <MapPin className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {op.location}
                  </h3>
                  {op.year && (
                    <p className="text-sm text-primary font-semibold mb-1">{op.year}</p>
                  )}
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {op.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            {t("aboutPage.partnersTitle")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("aboutPage.partnersSubtitle")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary bg-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{partner.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIVER Platform Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                {t("aboutPage.platformBadge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                INCLUSIVER
              </h2>
              <p className="text-lg text-primary font-semibold mb-4">
                {t("aboutPage.inclusiverTagline")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("aboutPage.inclusiverDesc")}
              </p>
              <ul className="space-y-3">
                {inclusiverFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={inclusiverPlatform} 
                alt="INCLUSIVER Platform" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIVA Robot Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
              {t("aboutPage.aiBadge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              INCLUSIVA
            </h2>
            <p className="text-lg text-primary font-semibold mb-4">
              {t("aboutPage.inclusivaTagline")}
            </p>
            <p className="text-muted-foreground mb-8">
              {t("aboutPage.inclusivaDesc")}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {inclusivaFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                      {index === 0 ? (
                        <Cpu className="w-6 h-6 text-white" />
                      ) : index === 1 ? (
                        <Globe className="w-6 h-6 text-white" />
                      ) : (
                        <MessageSquare className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <p className="text-foreground font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("aboutPage.ctaTitle")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("aboutPage.ctaDesc")}
              </p>
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  {t("aboutPage.ctaButton")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
