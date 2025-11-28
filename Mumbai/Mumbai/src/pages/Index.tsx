import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity, TrendingUp, Bell, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80" />
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-balance mb-6 text-primary-foreground">
              Predict respiratory surges — act before the emergency.
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              AirMed AI monitors air quality and health signals to give hospitals a 7-day head start. Reduce queues, prevent stockouts, and protect patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/dashboard">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive respiratory health monitoring and forecasting for hospital preparedness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl mb-2">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous air quality tracking with PM2.5, PM10, and AQI metrics from multiple city locations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl mb-2">7-Day Forecast</h3>
                <p className="text-muted-foreground">
                  AI-powered predictions of respiratory ER caseload with 85%+ accuracy and confidence intervals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-xl mb-2">Action Recommendations</h3>
                <p className="text-muted-foreground">
                  Prioritized checklists for staff, beds, oxygen, and medical supplies based on risk level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-xl mb-2">Citizen Alerts</h3>
                <p className="text-muted-foreground">
                  Automated public health advisories via SMS and WhatsApp for vulnerable populations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl mb-2">Integration Ready</h3>
                <p className="text-muted-foreground">
                  RESTful API connects with existing hospital management and EMR systems seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl mb-2">Map Visualization</h3>
                <p className="text-muted-foreground">
                  Geographic risk mapping across city neighborhoods with color-coded threat levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three-step process from data collection to actionable recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-3">Sense</h3>
              <p className="text-muted-foreground">
                Continuous monitoring of air quality data from OpenAQ and city sensors across multiple neighborhoods.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-warning text-warning-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-3">Forecast</h3>
              <p className="text-muted-foreground">
                AI models predict respiratory case surges 7 days ahead using historical patterns and current trends.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-success text-success-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-3">Recommend</h3>
              <p className="text-muted-foreground">
                Automated action plans for resource allocation, staffing, and public health communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Expected Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Target improvements in hospital preparedness and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-muted-foreground">Reduction in ER wait times during surge events</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-success mb-2">85%+</div>
                <p className="text-muted-foreground">Prediction accuracy for 7-day forecasts</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-warning mb-2">3-5 days</div>
                <p className="text-muted-foreground">Advanced warning time for hospital preparation</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Decrease in medical supply stockouts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study / Quote */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-xl text-center mb-6 italic text-foreground">
                "With AirMed AI, we reduced emergency overflow by 45% during high pollution days. The 7-day forecasts gave us time to prepare staff schedules and oxygen supplies — preventing the chaos we used to face."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-foreground">Dr. Aisha Kapoor</p>
                <p className="text-sm text-muted-foreground">Chief Medical Officer, Delhi Metro Hospital</p>
                <p className="text-xs text-muted-foreground mt-1">(Simulated case study for demonstration)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-primary-foreground">Ready to Protect Your Patients?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join leading hospitals using predictive health intelligence for respiratory surge preparedness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/dashboard">Request Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/api-docs">View API Docs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
