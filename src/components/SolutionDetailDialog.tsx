import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { LucideIcon } from "lucide-react";

interface SolutionDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  solutionKey: 'globalIotSim' | 'privateApn' | 'smsVoice' | 'iotPortal' | 'gpsTracking';
  icon: LucideIcon;
  title: string;
  benefit: string;
}

const SolutionDetailDialog = ({
  open,
  onOpenChange,
  solutionKey,
  icon: Icon,
  title,
  benefit,
}: SolutionDetailDialogProps) => {
  const { t } = useLanguage();
  
  const detailKey = `${solutionKey}Detail`;
  const overview = t(`solutions.${detailKey}.overview`);
  const features = [
    t(`solutions.${detailKey}.feature1`),
    t(`solutions.${detailKey}.feature2`),
    t(`solutions.${detailKey}.feature3`),
    t(`solutions.${detailKey}.feature4`),
  ];
  const specs = [
    t(`solutions.${detailKey}.spec1`),
    t(`solutions.${detailKey}.spec2`),
    t(`solutions.${detailKey}.spec3`),
    t(`solutions.${detailKey}.spec4`),
  ];
  const useCases = [
    t(`solutions.${detailKey}.useCase1`),
    t(`solutions.${detailKey}.useCase2`),
    t(`solutions.${detailKey}.useCase3`),
  ];

  const scrollToContact = () => {
    onOpenChange(false);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <Badge className="mb-2">{benefit}</Badge>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {overview}
            </p>
          </div>

          <Separator />

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              {t('solutions.keyFeatures')}
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Technical Specs */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              {t('solutions.technicalSpecs')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {specs.map((spec, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-sm text-foreground">{spec}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              {t('solutions.useCases')}
            </h3>
            <ul className="space-y-2">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="w-full"
              onClick={scrollToContact}
            >
              {t('cta.submitButton')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDetailDialog;
