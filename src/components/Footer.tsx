import logo from "@/assets/iisl-logo.png";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePartnersMenu } from "@/contexts/PartnersMenuContext";

const Footer = () => {
  const { language, t } = useLanguage();
  const { openPartnersMenu } = usePartnersMenu();

  // 处理 Partners 链接点击（兼容数据加载延迟）
  const handlePartnersClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 2. 延迟触发菜单
    setTimeout(() => {
      openPartnersMenu();
    }, 300);
  };

  const addressInfo = {
    name: t('footer.chinaOffice'),
    location: t('footer.chinaLocation'),
    googleUrl: 'https://maps.app.goo.gl/c2CDSEYzwN3FohW1A',
    amapUrl: 'https://ditu.amap.com/place/B0J2G1AGC1',
  }

  const mapUrl = language === 'en' ? addressInfo.googleUrl : addressInfo.amapUrl;

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
            <h3 className="font-semibold text-foreground mb-4">{t('header.solutions')}</h3>
            <ul className="space-y-2">
              <li><a href="/solutions/global-iot-sim" className="text-muted-foreground hover:text-primary transition-colors">{t("solutions.globalIotSim")}</a></li>
              <li><a href="/solutions/private-apn" className="text-muted-foreground hover:text-primary transition-colors">{t("solutions.privateApn")}</a></li>
              <li><a href="/solutions/sms-voice" className="text-muted-foreground hover:text-primary transition-colors">{t('solutions.smsVoice')}</a></li>
              <li><a href="/solutions/iot-portal" className="text-muted-foreground hover:text-primary transition-colors">{t('solutions.iotPortal')}</a></li>
              <li><a href="/solutions/gps-tracking" className="text-muted-foreground hover:text-primary transition-colors">{t('solutions.gpsTracking')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={handlePartnersClick}>{t('footer.partners')}</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-8">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@inclusive.com.cn" className="hover:text-primary transition-colors">
                  sales@inclusive.com.cn
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
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{addressInfo.name}</p>
                  <p>{addressInfo.location}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p><a
            href="https://beian.miit.gov.cn/#/Integrated/recordQuery">
            沪ICP备2024094413号-1</a> | {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
