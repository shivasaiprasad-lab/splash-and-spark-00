// src/types/translation.types.ts

// 1. 元数据类型
export interface MetaTranslation {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

// 2. 头部导航类型
export interface HeaderTranslation {
  home: string;
  partners: string;
  solutions: string;
  about: string;
  caseStudies: string;
  contact: string;
  getStarted: string;
  loading: string;
  noPartners: string;
}

// 3. 英雄区类型
export interface HeroTranslation {
  companyName: string;
  title1: string;
  title2: string;
  description: string;
  iotSolutions: string;
  m2mConnectivity: string;
  support: string;
  scrollDown: string;
}

// 4. 关于页（首页about板块）类型
export interface AboutTranslation {
  title: string;
  subtitle1: string;
  subtitle2: string;
  globalOperations: string;
  active: string;
  ourValues: string;
  compliance: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  miit: string;
  miitDesc: string;
  trai: string;
  traiDesc: string;
  ce: string;
  ceDesc: string;
  fcc: string;
  fccDesc: string;
  ctaTitle: string;
  ctaDesc: string;
  bookCall: string;
  china1: string;
  chinaLocation: string;
  china2: string;
  HKLocation: string;
  india: string;
  indiaLocation: string;
  eu: string;
  euLocation: string;
  usa: string;
  usaLocation: string;
}

// 5. 关于页面（独立about页）类型
export interface AboutPageTranslation {
  badge: string;
  heroTitle: string;
  heroTagline: string;
  heroDescription: string;
  operationsTitle: string;
  founded: string;
  operations: string;
  rdCenter: string;
  partnersTitle: string;
  partnersSubtitle: string;
  tmobileDesc: string;
  tele2Desc: string;
  airtelDesc: string;
  idemiaDesc: string;
  ciscoDesc: string;
  platformBadge: string;
  inclusiverTagline: string;
  inclusiverDesc: string;
  inclusiverFeature1: string;
  inclusiverFeature2: string;
  inclusiverFeature3: string;
  inclusiverFeature4: string;
  aiBadge: string;
  inclusivaTagline: string;
  inclusivaDesc: string;
  inclusivaFeature1: string;
  inclusivaFeature2: string;
  inclusivaFeature3: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
}

// 6. CTA板块类型
export interface CtaTranslation {
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder: string;
  submitButton: string;
  reachUs: string;
  contactInfo: string;
}

// 7. 解决方案详情子类型
export interface SolutionDetailTranslation {
  overview: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  spec1: string;
  spec2: string;
  spec3: string;
  spec4: string;
  useCase1: string;
  useCase2: string;
  useCase3: string;
  contactHint?: string; // 可选字段（GPS Tracking独有）
}

// 8. 解决方案对比类型
export interface SolutionComparisonTranslation {
  features: string;
  overview: string;
  feature: string;
  spec: string;
  useCase: string;
  requestConsultation: string;
}

// 9. 解决方案主类型
export interface SolutionsTranslation {
  title: string;
  subtitle: string;
  globalIotSim: string;
  globalIotSimDesc: string;
  globalIotSimBenefit: string;
  privateApn: string;
  privateApnDesc: string;
  privateApnBenefit: string;
  smsVoice: string;
  smsVoiceDesc: string;
  smsVoiceBenefit: string;
  iotPortal: string;
  iotPortalDesc: string;
  iotPortalBenefit: string;
  gpsTracking: string;
  gpsTrackingDesc: string;
  gpsTrackingBenefit: string;
  learnMore: string;
  keyFeatures: string;
  technicalSpecs: string;
  useCases: string;
  comparison: SolutionComparisonTranslation;
  globalIotSimDetail: SolutionDetailTranslation;
  privateApnDetail: SolutionDetailTranslation;
  smsVoiceDetail: SolutionDetailTranslation;
  iotPortalDetail: SolutionDetailTranslation;
  gpsTrackingDetail: SolutionDetailTranslation;
}

// 10. 页脚类型
export interface FooterTranslation {
  companyDesc: string;
  company: string;
  aboutUs: string;
  careers: string;
  partners: string;
  contact: string;
  contactUs: string;
  chinaOffice: string;
  chinaLocation: string;
  copyright: string;
}

// 11. 案例研究子类型（单个案例）
export interface CaseStudyItemTranslation {
  badge: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metric2: string;
  metric3: string;
  metric4: string;
  highlight: string;
  challengeText1: string;
  challengeText2: string;
  solution1Title: string;
  solution1Desc: string;
  solution2Title: string;
  solution2Desc: string;
  solution3Title: string;
  solution3Desc: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  ctaTitle: string;
  ctaDesc: string;
}

// 12. 案例研究主类型
export interface CaseStudyTranslation {
  title: string;
  subtitle: string;
  backToHome: string;
  theChallenge: string;
  ourSolution: string;
  results: string;
  contactUs: string;
  readMore: string;
  slogan: string;
  ev: CaseStudyItemTranslation;
  smartMeter: CaseStudyItemTranslation;
  GPS: CaseStudyItemTranslation;
}

// 13. 根翻译类型（整合所有子类型）
export interface TranslationSchema {
  meta: MetaTranslation;
  header: HeaderTranslation;
  hero: HeroTranslation;
  about: AboutTranslation;
  aboutPage: AboutPageTranslation;
  cta: CtaTranslation;
  solutions: SolutionsTranslation;
  footer: FooterTranslation;
  caseStudy: CaseStudyTranslation;
}