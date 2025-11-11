import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {ArrowRight, Car, Gauge, CreditCard, Heart, Bike, SatelliteDish} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const logoLinks: Record<string, string> = {
  "AWS": "https://aws.amazon.com",
  "Airtel": "https://www.airtel.in",
  "Tele2": "https://www.tele2.com",
  "TATA": "https://www.tatacommunications.com",
  "ZEEKR": "https://www.zeekrlife.com",
  "LEAPMOTOR": "https://www.leapmotor.com",
  "YUTONG": "https://en.yutong.com",
  "SMART": "https://www.smart.com"
};

const CaseStudies = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();
  const caseStudies = [
      {
          icon: Car,
          title: t('caseStudy.ev.shortTitle'),
          industry: t('caseStudy.ev.badge'),
          metric: t('caseStudy.ev.metric4'),
          description: t('caseStudy.ev.subtitle'),
          highlight: t('caseStudy.ev.highlight'),
          color: "from-blue-500 to-cyan-500",
          link: "/case-study/ev-telematics"
      },
      {
          icon: Gauge,
          title: t('caseStudy.smartMeter.shortTitle'),
          industry: t('caseStudy.smartMeter.badge'),
          metric: t('caseStudy.smartMeter.metric4'),
          description: t('caseStudy.smartMeter.subtitle'),
          highlight: t('caseStudy.smartMeter.highlight'),
          color: "from-green-500 to-emerald-500",
          link: "/case-study/smart-meter"
      },
      {
          icon: SatelliteDish,
          title: t('caseStudy.GPS.shortTitle'),
          industry: t('caseStudy.GPS.badge'),
          metric: t('caseStudy.GPS.metric4'),
          description: t('caseStudy.GPS.subtitle'),
          highlight: t('caseStudy.GPS.highlight'),
          color: "from-purple-500 to-pink-500",
          link: "/case-study/GPS-terminal"
      },
      // {
      //     icon: Heart,
      //     title: t('caseStudy.medical.shortTitle'),
      //     industry: t('caseStudy.medical.badge'),
      //     metric: t('caseStudy.medical.metric4'),
      //     description: t('caseStudy.medical.subtitle'),
      //     highlight: t('caseStudy.medical.highlight'),
      //     color: "from-red-500 to-orange-500",
      //     link: "/case-study/medical-device"
      // },
      // {
      //     icon: Bike,
      //     title: t('caseStudy.mobility.shortTitle'),
      //     industry: t('caseStudy.mobility.badge'),
      //     metric: t('caseStudy.mobility.metric4'),
      //     description: t('caseStudy.mobility.subtitle'),
      //     highlight: t('caseStudy.mobility.highlight'),
      //     color: "from-indigo-500 to-blue-500",
      //     link: "/case-study/shared-mobility"
      // }
      ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('caseStudy.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('caseStudy.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {study.industry}
                    </Badge>
                  </div>

                  {/* Title and Metric */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    {study.metric}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Highlight */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">
                        {study.highlight}
                      </span>
                    </div>
                    <Link to={study.link}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary group-hover:translate-x-1 transition-transform"
                      >
                        {t('caseStudy.readMore')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Logos Section */}
        <div className="text-center overflow-hidden">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div 
            className="relative flex overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div 
              className="flex animate-scroll-left gap-16 whitespace-nowrap"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {["AWS", "Airtel", "Tele2", "ZEEKR", "LEAPMOTOR", "SMART"].map((logo, index) => (
                <a
                  key={index}
                  href={logoLinks[logo]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100 cursor-pointer"
                >
                  {logo}
                </a>
              ))}
              {/* Duplicate for seamless loop */}
              {["AWS", "Airtel", "Tele2", "ZEEKR", "LEAPMOTOR", "SMART"].map((logo, index) => (
                <a
                  key={`dup-${index}`}
                  href={logoLinks[logo]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100 cursor-pointer"
                >
                  {logo}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
