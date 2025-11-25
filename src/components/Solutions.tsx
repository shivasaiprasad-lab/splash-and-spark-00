import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, MessageSquare, FileCheck, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import SolutionDetailDialog from "./SolutionDetailDialog";

const Solutions = () => {
  const { t } = useLanguage();
  const [selectedSolution, setSelectedSolution] = useState<{
    key: 'globalIotSim' | 'privateApn' | 'smsVoice';
    icon: any;
    title: string;
    benefit: string;
  } | null>(null);
  
  const solutions = [
    {
      key: 'globalIotSim' as const,
      icon: Smartphone,
      title: t('solutions.globalIotSim'),
      description: t('solutions.globalIotSimDesc'),
      benefit: t('solutions.globalIotSimBenefit')
    },
    {
      key: 'privateApn' as const,
      icon: Shield,
      title: t('solutions.privateApn'),
      description: t('solutions.privateApnDesc'),
      benefit: t('solutions.privateApnBenefit')
    },
    {
      key: 'smsVoice' as const,
      icon: MessageSquare,
      title: t('solutions.smsVoice'),
      description: t('solutions.smsVoiceDesc'),
      benefit: t('solutions.smsVoiceBenefit')
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card flex flex-col"
              >
                <CardContent className="p-8 flex-1">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {solution.benefit}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedSolution({
                      key: solution.key,
                      icon: solution.icon,
                      title: solution.title,
                      benefit: solution.benefit
                    })}
                  >
                    {t('solutions.learnMore')}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedSolution && (
        <SolutionDetailDialog
          open={!!selectedSolution}
          onOpenChange={(open) => !open && setSelectedSolution(null)}
          solutionKey={selectedSolution.key}
          icon={selectedSolution.icon}
          title={selectedSolution.title}
          benefit={selectedSolution.benefit}
        />
      )}
    </section>
  );
};

export default Solutions;
