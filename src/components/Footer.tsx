import logo from "@/assets/iisl-logo.png";
import { Network, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="IISL Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">ISL</span>
            </div>
            <p className="text-muted-foreground">
              {t('footer.companyDesc')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.iotConnectivity')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.m2mSolutions')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.networkSecurity')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.dataManagement')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.partners')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-8">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:INCLUSIVE-SALES@inclusive.com.cn" className="hover:text-primary transition-colors">
                    INCLUSIVE-SALES@inclusive.com.cn
                </a>
              </li>
              {/*<li className="flex items-start gap-2 text-muted-foreground">*/}
              {/*  <Linkedin className="w-5 h-5 mt-0.5 flex-shrink-0" />*/}
              {/*  <a href="https://linkedin.com/company/isl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">*/}
              {/*    LinkedIn*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t('footer.chinaOffice')}</p>
                  <p>{t('footer.chinaLocation')}</p>
                </div>
              </div>
              {/*<div className="flex items-start gap-2 text-muted-foreground text-sm">*/}
              {/*  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />*/}
              {/*  <div>*/}
              {/*    <p className="font-medium text-foreground">{t('footer.indiaOffice')}</p>*/}
              {/*    <p>{t('footer.indiaLocation')}</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
