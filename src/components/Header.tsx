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
import logo from "@/assets/iisl-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
// 导入本地合作伙伴数据
import partnersData from "@/data/partners.json";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 模拟数据加载过程
  useEffect(() => {
    const loadPartners = async () => {
      try {
        // 模拟网络请求延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        setPartners(partnersData);
      } catch (error) {
        console.error("Error loading partners:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPartners();
  }, []);

  // 按类别分组合作伙伴
  const partnersByCategory = partners?.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {});

  // @ts-expect-error
  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="IISL Logo" className="h-10 w-10" />
              <span className="font-bold text-lg text-foreground hidden sm:inline-block">
              ISL
            </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {t('header.home')}
              </a>

              {/* Partners Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  {t('header.partners')}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover">
                  {isLoading ? (
                      <DropdownMenuItem disabled>{t('header.loading')}</DropdownMenuItem>
                  ) : partnersByCategory && Object.keys(partnersByCategory).length > 0 ? (
                      <>
                        {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
                            categoryPartners.map((partner) => (
                                <DropdownMenuItem
                                    key={partner.id}
                                    className="cursor-pointer"
                                    onClick={() => partner.website_url && window.open(partner.website_url, '_blank')}
                                >
                                  {partner.name} - {category}
                                </DropdownMenuItem>
                            ))
                        ))}
                      </>
                  ) : (
                      <DropdownMenuItem disabled>{t('header.noPartners')}</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  {t('header.solutions')}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover">
                  <DropdownMenuItem className="cursor-pointer">
                    {t('header.iotConnectivity')}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    {t('header.m2mPlatform')}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    {t('header.deviceManagement')}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    {t('header.analytics')}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    {t('header.customSolutions')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {t('header.about')}
              </a>
              <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">
                {t('header.caseStudies')}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {t('header.contact')}
              </a>
            </nav>

            {/* Language Switch */}
            <div className="hidden md:flex items-center gap-2">
              <Label htmlFor="language-switch" className="text-sm text-foreground">
                EN
              </Label>
              <Switch
                  id="language-switch"
                  checked={language === 'zh'}
                  onCheckedChange={(checked) => setLanguage(checked ? 'zh' : 'en')}
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
                  <SheetTitle className="text-left">{t('header.home')}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a
                      href="#home"
                      className="text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.home')}
                  </a>

                  {/* Partners Section */}
                  <div className="py-2">
                    <p className="font-semibold text-foreground mb-2">{t('header.partners')}</p>
                    <div className="flex flex-col gap-2 pl-4">
                      {isLoading ? (
                          <span className="text-sm text-muted-foreground">{t('header.loading')}</span>
                      ) : partnersByCategory && Object.keys(partnersByCategory).length > 0 ? (
                          Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
                              categoryPartners.map((partner) => (
                                  <a
                                      key={partner.id}
                                      href={partner.website_url || '#'}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-foreground hover:text-primary transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {partner.name} - {category}
                                  </a>
                              ))
                          ))
                      ) : (
                          <span className="text-sm text-muted-foreground">{t('header.noPartners')}</span>
                      )}
                    </div>
                  </div>

                  {/* Solutions Section */}
                  <div className="py-2">
                    <p className="font-semibold text-foreground mb-2">{t('header.solutions')}</p>
                    <div className="flex flex-col gap-2 pl-4">
                      <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('header.iotConnectivity')}
                      </a>
                      <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('header.m2mPlatform')}
                      </a>
                      <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('header.deviceManagement')}
                      </a>
                      <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('header.analytics')}
                      </a>
                      <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('header.customSolutions')}
                      </a>
                    </div>
                  </div>

                  <a
                      href="#about"
                      className="text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.about')}
                  </a>
                  <a
                      href="#case-studies"
                      className="text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.caseStudies')}
                  </a>
                  <a
                      href="#contact"
                      className="text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.contact')}
                  </a>

                  {/* Language Toggle */}
                  <div className="flex items-center gap-2 py-4 border-t border-border mt-4">
                    <Label htmlFor="mobile-language-switch" className="text-sm text-foreground">
                      EN
                    </Label>
                    <Switch
                        id="mobile-language-switch"
                        checked={language === 'zh'}
                        onCheckedChange={(checked) => setLanguage(checked ? 'zh' : 'en')}
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