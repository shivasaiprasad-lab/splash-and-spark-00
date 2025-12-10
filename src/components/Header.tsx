import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/iisl-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useCallback } from "react";
import partnersData from "@/data/partners.json";
import { usePartnersMenu } from "@/contexts/PartnersMenuContext";

// 类型定义
interface Partner {
  id: string;
  name: string;
  category: string;
  website_url: string;
}

interface PartnersByCategory {
  [key: string]: Partner[];
}

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const homePath = "/";

  // 接入全局合作伙伴菜单状态
  const { isPartnersMenuOpen, openPartnersMenu, closePartnersMenu, togglePartnersMenu } = usePartnersMenu();

  // Partners 数据加载逻辑
  useEffect(() => {
    const loadPartners = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setPartners(partnersData);
      } catch (error) {
        console.error("Error loading partners:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPartners();
  }, []);

  // 点击页面其他区域关闭下拉菜单（兼容所有页面）
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const dropdownContainer = document.querySelector('.partners-dropdown-container');
      if (isPartnersMenuOpen && dropdownContainer && !dropdownContainer.contains(e.target as Node)) {
        closePartnersMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPartnersMenuOpen, closePartnersMenu]);

  // 按类别分组合作伙伴
  const partnersByCategory = partners.reduce<PartnersByCategory>((acc, partner) => {
    if (!acc[partner.category]) acc[partner.category] = [];
    acc[partner.category].push(partner);
    return acc;
  }, {});

  // 锚点滚动逻辑
  const scrollToAnchorForce = useCallback((anchorId: string) => {
    const timerIds: number[] = [];
    const doScroll = () => {
      const target = document.getElementById(anchorId);
      if (target) {
        const headerHeight = document.querySelector("header")?.clientHeight || 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetTop,
          behavior: "smooth"
        });
        timerIds.forEach(id => clearTimeout(id));
        return true;
      }
      return false;
    };

    if (!doScroll()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      timerIds.push(setTimeout(doScroll, 50));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      timerIds.push(setTimeout(doScroll, 100));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      timerIds.push(setTimeout(doScroll, 300));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      timerIds.push(setTimeout(doScroll, 500));
    }

    return () => timerIds.forEach(id => clearTimeout(id));
  }, []);

  // 导航逻辑
  const navigateToHomeAnchor = useCallback((anchorId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === homePath) {
      scrollToAnchorForce(anchorId);
      return;
    }
    const goToHome = async () => {
      navigate(`${homePath}#${anchorId}`, {replace: true});

      setTimeout(() => {
        scrollToAnchorForce(anchorId);
      }, 100)
    }
    goToHome();
  }, [location.pathname, navigate, scrollToAnchorForce]);

  // 路由监听逻辑
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (location.pathname === homePath && hash) {
      scrollToAnchorForce(hash);
    }
  }, [location.pathname, scrollToAnchorForce]);

  // 移动端锚点处理
  const handleMobileAnchorClick = (anchorId: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateToHomeAnchor(anchorId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border ${
      isPartnersMenuOpen ? 'bg-background shadow-lg' : 'bg-background/80'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo 区域 */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="IISL Logo" className="h-10 w-10" />
            <span className="font-bold text-lg text-foreground hidden sm:inline-block">
              ISL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* 首页按钮 */}
            <button
              onClick={() => navigateToHomeAnchor("home")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer select-none bg-transparent border-0 p-0"
            >
              {t("header.home")}
            </button>

            {/* 修复后的 Partners Dropdown：支持手动点击 + Footer 触发 */}
            <div className="partners-dropdown-container">
              <DropdownMenu open={isPartnersMenuOpen} onOpenChange={(open) => {
                // 同步 DropdownMenu 原生状态和全局状态
                if (open) openPartnersMenu();
                else closePartnersMenu();
              }}>
                <DropdownMenuTrigger
                  className="partners-dropdown-trigger flex items-center gap-1 text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  // 手动点击时切换菜单状态
                  onClick={(e) => {
                    e.stopPropagation(); // 防止触发外部关闭逻辑
                    togglePartnersMenu();
                  }}
                >
                  {t("header.partners")}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover">
                  {isLoading ? (
                    <DropdownMenuItem disabled>{t("header.loading")}</DropdownMenuItem>
                  ) : Object.keys(partnersByCategory).length > 0 ? (
                    Object.entries(partnersByCategory).map(([category, categoryPartners]) =>
                      categoryPartners.map((partner) => (
                        <DropdownMenuItem
                          key={partner.id}
                          className="cursor-pointer"
                          onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                            partner.website_url && window.open(partner.website_url, "_blank");
                            closePartnersMenu(); // 点击选项后关闭
                          }}
                        >
                          {partner.name} - {category}
                        </DropdownMenuItem>
                      ))
                    )
                  ) : (
                    <DropdownMenuItem disabled>{t("header.noPartners")}</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors cursor-pointer select-none">
                {t("header.solutions")}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/solutions/global-iot-sim" className="cursor-pointer">
                    {t("solutions.globalIotSim")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/private-apn" className="cursor-pointer">
                    {t("solutions.privateApn")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/sms-voice" className="cursor-pointer">
                    {t("solutions.smsVoice")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/iot-portal" className="cursor-pointer">
                    {t("solutions.iotPortal")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/gps-tracking" className="cursor-pointer">
                    {t("solutions.gpsTracking")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Link */}
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors cursor-pointer select-none"
            >
              {t("header.about")}
            </Link>
            <button
              onClick={() => navigateToHomeAnchor("case-studies")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer select-none bg-transparent border-0 p-0"
            >
              {t("header.caseStudies")}
            </button>
            <button
              onClick={() => navigateToHomeAnchor("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer select-none bg-transparent border-0 p-0"
            >
              {t("header.contact")}
            </button>
          </nav>

          {/* Language Switch */}
          <div className="hidden md:flex items-center gap-2">
            <Label htmlFor="language-switch" className="text-sm text-foreground">
              EN
            </Label>
            <Switch
              id="language-switch"
              checked={language === "zh"}
              onCheckedChange={(checked) => setLanguage(checked ? "zh" : "en")}
            />
            <Label htmlFor="language-switch" className="text-sm text-foreground">
              中文
            </Label>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">{t("header.home")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer select-none"
                  onClick={(e) => handleMobileAnchorClick("home", e)}
                >
                  {t("header.home")}
                </a>

                {/* Partners Section */}
                <div className="py-2">
                  <p className="font-semibold text-foreground mb-2">{t("header.partners")}</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {isLoading ? (
                      <span className="text-sm text-muted-foreground">{t("header.loading")}</span>
                    ) : Object.keys(partnersByCategory).length > 0 ? (
                      Object.entries(partnersByCategory).map(([category, categoryPartners]) =>
                        categoryPartners.map((partner) => (
                          <a
                            key={partner.id}
                            href={partner.website_url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {partner.name} - {category}
                          </a>
                        ))
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground">{t("header.noPartners")}</span>
                    )}
                  </div>
                </div>

                {/* Solutions Section */}
                <div className="py-2">
                  <p className="font-semibold text-foreground mb-2">{t("header.solutions")}</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      to="/solutions/global-iot-sim"
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("solutions.globalIotSim")}
                    </Link>
                    <Link
                      to="/solutions/private-apn"
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("solutions.privateApn")}
                    </Link>
                    <Link
                      to="/solutions/sms-voice"
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("solutions.smsVoice")}
                    </Link>
                    <Link
                      to="/solutions/iot-portal"
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("solutions.iotPortal")}
                    </Link>
                    <Link
                      to="/solutions/gps-tracking"
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("solutions.gpsTracking")}
                    </Link>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer select-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("header.about")}
                </Link>
                <a
                  href="#case-studies"
                  className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer select-none"
                  onClick={(e) => handleMobileAnchorClick("case-studies", e)}
                >
                  {t("header.caseStudies")}
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors py-2 cursor-pointer select-none"
                  onClick={(e) => handleMobileAnchorClick("contact", e)}
                >
                  {t("header.contact")}
                </a>

                {/* Language Toggle */}
                <div className="flex items-center gap-2 py-4 border-t border-border mt-4">
                  <Label htmlFor="mobile-language-switch" className="text-sm text-foreground">
                    EN
                  </Label>
                  <Switch
                    id="mobile-language-switch"
                    checked={language === "zh"}
                    onCheckedChange={(checked) => setLanguage(checked ? "zh" : "en")}
                  />
                  <Label htmlFor="mobile-language-switch" className="text-sm text-foreground">
                    中文
                  </Label>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;