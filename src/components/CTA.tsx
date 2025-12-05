import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

// Form check
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
});

const CTA = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  // Use mailto
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Target email address
      const targetEmail = "Inclusive-Sales@inclusive.com.cn";

      // Title
      const subject = "New Contact Form Submission";

      // Content
      const body = `
        Message from contact form:
        Name: ${values.name}
        User's Email: ${values.email}
        Company: ${values.company}
        `.trim();

      // mailto link
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open mail App
      window.location.href = mailtoUrl;

      // Hint
      toast({
        title: "Ready to send!",
        description: "Your email client will open with the details. Please click send.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error opening email client:', error);
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95" />

        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>

            {/* Contact form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                    placeholder={t('cta.namePlaceholder')}
                                    className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
                                    {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-white" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                    type="email"
                                    placeholder={t('cta.emailPlaceholder')}
                                    className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
                                    {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-white" />
                            </FormItem>
                        )}
                    />
                  </div>
                  <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                  placeholder={t('cta.companyPlaceholder')}
                                  className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
                                  {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-white" />
                          </FormItem>
                      )}
                  />
                  <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    {isSubmitting ? "Preparing..." : t('cta.submitButton')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact info */}
            <div className="mt-12 text-white/80">
              <p>{t('cta.reachUs')}</p>
              <p className="text-xl font-semibold text-white mt-2">
                {t('cta.contactInfo')}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CTA;