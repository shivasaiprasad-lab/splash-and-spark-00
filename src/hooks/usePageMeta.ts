import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

/**
 * 用于设置页面元数据（标题、描述、OG标签）的Hook
 */
export const usePageMeta = () => {
  const { t } = useLanguage(); // 直接从上下文获取元数据

  useEffect(() => {
    // 1. 修改页面标题
    document.title = t("meta.title");

    // 2. 修改meta描述标签
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", t("meta.description"));
    }

    // 3. 修改OG标签（社交分享用）
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", t("meta.ogTitle"));
    }
    if (ogDescTag) {
      ogDescTag.setAttribute("content", t("meta.ogDescription"));
    }
  });
};