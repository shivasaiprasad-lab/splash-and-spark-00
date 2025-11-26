import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, MessageSquare } from "lucide-react";

const SolutionComparisonTable = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      key: 'globalIotSim' as const,
      icon: Smartphone,
      title: t('solutions.globalIotSim'),
      benefit: t('solutions.globalIotSimBenefit')
    },
    {
      key: 'privateApn' as const,
      icon: Shield,
      title: t('solutions.privateApn'),
      benefit: t('solutions.privateApnBenefit')
    },
    {
      key: 'smsVoice' as const,
      icon: MessageSquare,
      title: t('solutions.smsVoice'),
      benefit: t('solutions.smsVoiceBenefit')
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[200px] sticky left-0 bg-background z-10 font-semibold text-foreground">
              {t('solutions.comparison.features')}
            </TableHead>
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <TableHead key={solution.key} className="text-center">
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                      <Badge variant="secondary" className="text-xs">{solution.benefit}</Badge>
                    </div>
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Overview Row */}
          <TableRow>
            <TableCell className="font-semibold sticky left-0 bg-background z-10 align-top">
              {t('solutions.comparison.overview')}
            </TableCell>
            {solutions.map((solution) => (
              <TableCell key={`${solution.key}-overview`} className="align-top">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`solutions.${solution.key}Detail.overview`)}
                </p>
              </TableCell>
            ))}
          </TableRow>

          {/* Key Features Rows */}
          <TableRow className="bg-muted/30">
            <TableCell colSpan={4} className="font-semibold text-foreground">
              {t('solutions.keyFeatures')}
            </TableCell>
          </TableRow>
          {[1, 2, 3, 4].map((num) => (
            <TableRow key={`feature-${num}`}>
              <TableCell className="sticky left-0 bg-background z-10 text-muted-foreground text-sm">
                {t('solutions.comparison.feature')} {num}
              </TableCell>
              {solutions.map((solution) => (
                <TableCell key={`${solution.key}-feature${num}`}>
                  <p className="text-sm">{t(`solutions.${solution.key}Detail.feature${num}`)}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}

          {/* Technical Specifications Rows */}
          <TableRow className="bg-muted/30">
            <TableCell colSpan={4} className="font-semibold text-foreground">
              {t('solutions.technicalSpecs')}
            </TableCell>
          </TableRow>
          {[1, 2, 3, 4].map((num) => (
            <TableRow key={`spec-${num}`}>
              <TableCell className="sticky left-0 bg-background z-10 text-muted-foreground text-sm">
                {t('solutions.comparison.spec')} {num}
              </TableCell>
              {solutions.map((solution) => (
                <TableCell key={`${solution.key}-spec${num}`}>
                  <p className="text-sm">{t(`solutions.${solution.key}Detail.spec${num}`)}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}

          {/* Use Cases Rows */}
          <TableRow className="bg-muted/30">
            <TableCell colSpan={4} className="font-semibold text-foreground">
              {t('solutions.useCases')}
            </TableCell>
          </TableRow>
          {[1, 2, 3].map((num) => (
            <TableRow key={`usecase-${num}`}>
              <TableCell className="sticky left-0 bg-background z-10 text-muted-foreground text-sm">
                {t('solutions.comparison.useCase')} {num}
              </TableCell>
              {solutions.map((solution) => (
                <TableCell key={`${solution.key}-usecase${num}`}>
                  <p className="text-sm">{t(`solutions.${solution.key}Detail.useCase${num}`)}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}

          {/* Action Buttons Row */}
          <TableRow>
            <TableCell className="sticky left-0 bg-background z-10"></TableCell>
            {solutions.map((solution) => (
              <TableCell key={`${solution.key}-action`} className="text-center py-6">
                <Button onClick={scrollToContact} className="w-full">
                  {t('solutions.comparison.requestConsultation')}
                </Button>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SolutionComparisonTable;
