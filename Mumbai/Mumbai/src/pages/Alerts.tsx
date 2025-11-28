import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertCircle, Info, Users } from "lucide-react";

const Alerts = () => {
  const faqs = [
    {
      question: "What should I do during high pollution days?",
      answer: "Stay indoors as much as possible, use air purifiers, wear N95 masks outdoors, avoid strenuous outdoor activities, and keep windows closed. If you have respiratory conditions, keep your medications handy."
    },
    {
      question: "Who is most at risk during respiratory surge events?",
      answer: "Children under 5, elderly adults over 65, pregnant women, and individuals with asthma, COPD, heart disease, or other chronic respiratory conditions are most vulnerable to air pollution-related health impacts."
    },
    {
      question: "When should I seek medical attention?",
      answer: "Seek immediate medical care if you experience severe shortness of breath, persistent chest pain, bluish lips or face, high fever with breathing difficulty, or worsening of chronic respiratory symptoms."
    },
    {
      question: "How accurate are the air quality predictions?",
      answer: "Our 7-day forecasts achieve 85%+ accuracy using advanced AI models that analyze historical patterns, weather data, and real-time air quality measurements from multiple monitoring stations."
    },
    {
      question: "How can I receive personalized alerts?",
      answer: "Contact your local health authority or hospital to register for SMS/WhatsApp alerts. You can specify your risk category (elderly, asthma, child) to receive tailored health recommendations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">Public Health Alerts</h1>
          <p className="text-muted-foreground">
            Stay informed about air quality and respiratory health advisories for New Delhi
          </p>
        </div>

        {/* Current Advisory */}
        <Alert className="mb-8 border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-destructive">
            <strong>City Advisory:</strong> High air pollution expected Oct 3–5. Vulnerable residents should avoid outdoor exertion; wear N95 masks. Call your clinic if you have breathing difficulty.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Health Recommendations */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Health Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="pb-4 border-b border-border">
                <h3 className="font-semibold mb-2 text-foreground">For General Public</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Monitor local AQI levels throughout the day</li>
                  <li>Limit outdoor activities between 6 AM - 10 AM when pollution peaks</li>
                  <li>Use public transportation to reduce emissions</li>
                  <li>Keep indoor air clean with plants and air purifiers</li>
                  <li>Stay hydrated and eat antioxidant-rich foods</li>
                </ul>
              </div>

              <div className="pb-4 border-b border-border">
                <h3 className="font-semibold mb-2 text-foreground">For Vulnerable Groups</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Children, elderly, and those with respiratory conditions should stay indoors</li>
                  <li>Keep rescue inhalers and medications easily accessible</li>
                  <li>Wear N95 masks if outdoor travel is necessary</li>
                  <li>Avoid cooking with open flames or wood stoves</li>
                  <li>Monitor symptoms closely and contact healthcare provider if worsening</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">Emergency Guidelines</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Call emergency services (102) for severe breathing difficulty</li>
                  <li>Visit nearest hospital if symptoms persist despite medication</li>
                  <li>Keep emergency contacts and medical history readily available</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Personalized Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Personalized Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold text-sm mb-2 text-foreground">For Elderly (65+)</h4>
                <p className="text-xs text-muted-foreground">
                  Avoid all outdoor activities Oct 3-5. Keep windows closed and use air purifiers. 
                  Monitor for shortness of breath or chest tightness. Emergency contact: 102
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold text-sm mb-2 text-foreground">For Children (0-12)</h4>
                <p className="text-xs text-muted-foreground">
                  Keep children indoors during high AQI days. Cancel outdoor sports and activities. 
                  Watch for coughing, wheezing, or difficulty breathing. Contact pediatrician if symptoms appear.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold text-sm mb-2 text-foreground">For Asthma Patients</h4>
                <p className="text-xs text-muted-foreground">
                  High risk period ahead. Ensure adequate supply of rescue inhalers. Follow your asthma action plan. 
                  Seek immediate care if peak flow drops below personal threshold.
                </p>
              </div>

              <p className="text-xs text-muted-foreground pt-4 border-t border-border">
                <strong>Note:</strong> These are example personalized alerts for demonstration purposes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <Alert className="mt-8 border-accent/30 bg-accent/5">
          <Info className="h-5 w-5 text-accent" />
          <AlertDescription className="text-foreground">
            <strong>Demo Page:</strong> This is a demonstration of the citizen-facing alerts system. 
            All advisories and alerts shown are simulated examples for New Delhi.
          </AlertDescription>
        </Alert>
      </main>

      <Footer />
    </div>
  );
};

export default Alerts;
