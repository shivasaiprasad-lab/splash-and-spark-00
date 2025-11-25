import { useEffect } from "react";
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
import mermaid from "mermaid";

interface SolutionDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  solutionKey: 'globalIotSim' | 'privateApn' | 'smsVoice';
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

  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#2563eb',
        primaryTextColor: '#fff',
        primaryBorderColor: '#1e40af',
        lineColor: '#64748b',
        secondaryColor: '#10b981',
        tertiaryColor: '#f59e0b',
      }
    });
    if (open) {
      setTimeout(() => {
        mermaid.run();
      }, 100);
    }
  }, [open, solutionKey]);
  
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

  const getDiagram = () => {
    switch (solutionKey) {
      case 'globalIotSim':
        return `graph TD
    A[IoT Device] -->|Global Coverage| B[IISL Global SIM]
    B --> C{Network Selection}
    C -->|Auto Switch| D[Carrier A]
    C -->|Auto Switch| E[Carrier B]
    C -->|Auto Switch| F[Carrier C]
    D --> G[Internet/Cloud]
    E --> G
    F --> G
    G --> H[Your Application]
    
    style B fill:#2563eb,stroke:#1e40af,color:#fff
    style H fill:#10b981,stroke:#059669,color:#fff`;
      
      case 'privateApn':
        return `graph LR
    A[IoT Devices] -->|Encrypted| B[Private APN]
    B -->|Isolated Network| C[Security Layer]
    C -->|VPN Tunnel| D[Corporate Network]
    D --> E[Internal Systems]
    
    F[Public Internet] -.->|Blocked| B
    
    style B fill:#2563eb,stroke:#1e40af,color:#fff
    style C fill:#f59e0b,stroke:#d97706,color:#fff
    style E fill:#10b981,stroke:#059669,color:#fff`;
      
      case 'smsVoice':
        return `sequenceDiagram
    participant D as IoT Device
    participant P as IISL Platform
    participant C as Carrier Network
    participant U as User/System
    
    D->>P: Send Alert/Data
    P->>C: Route SMS/Voice
    C->>U: Deliver Message
    U->>C: Response/Command
    C->>P: Route Response
    P->>D: Execute Command
    
    Note over D,U: Two-Way Communication`;
    }
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

          {/* Architecture Diagram */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              {t('solutions.architecture')}
            </h3>
            <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
              <div className="mermaid-diagram">
                {getDiagram()}
              </div>
            </div>
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
