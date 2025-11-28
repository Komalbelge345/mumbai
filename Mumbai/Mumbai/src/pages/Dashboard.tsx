import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity, AlertTriangle, TrendingUp, Users, Wind, Droplets } from "lucide-react";

const Dashboard = () => {
  // Mock data - simulating API response
  const currentAQI = 315;
  const riskLevel = "high";
  const todayPrediction = 180;
  const city = "New Delhi";

  const predictions = [
    { date: "Oct 2", cases: 120, risk: "moderate", confidence: 0.78 },
    { date: "Oct 3", cases: 180, risk: "high", confidence: 0.86 },
    { date: "Oct 4", cases: 200, risk: "high", confidence: 0.90 },
    { date: "Oct 5", cases: 175, risk: "high", confidence: 0.88 },
    { date: "Oct 6", cases: 140, risk: "moderate", confidence: 0.80 },
    { date: "Oct 7", cases: 110, risk: "low", confidence: 0.72 },
    { date: "Oct 8", cases: 90, risk: "low", confidence: 0.68 },
  ];

  const recommendations = [
    { action: "Add 2 respiratory nurses to night shift", priority: "high", cost: "₹12,000" },
    { action: "Stock additional 200L oxygen reserves", priority: "high", cost: "₹8,500" },
    { action: "Open 10 spare beds in respiratory wing", priority: "high", cost: "₹15,000" },
    { action: "Schedule respiratory therapist on-call", priority: "medium", cost: "₹5,000" },
    { action: "Prepare N95 mask inventory (500 units)", priority: "medium", cost: "₹7,500" },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "text-destructive";
      case "moderate": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadge = (risk: string): "destructive" | "warning" | "success" | "secondary" => {
    switch (risk) {
      case "high": return "destructive";
      case "moderate": return "warning";
      case "low": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">Hospital Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time respiratory surge monitoring and 7-day forecast for {city}
          </p>
        </div>

        {/* Alert Banner */}
        {riskLevel === "high" && (
          <Alert className="mb-6 border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              High Risk Alert: Predicted respiratory surge on Oct 3-5. Review action recommendations below.
            </AlertDescription>
          </Alert>
        )}

        {/* Current Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current AQI</CardTitle>
              <Wind className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{currentAQI}</div>
              <p className="text-xs text-muted-foreground mt-1">Hazardous - PM2.5: 210 µg/m³</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Risk</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive capitalize">{riskLevel}</div>
              <p className="text-xs text-muted-foreground mt-1">Predicted cases: {todayPrediction}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bed Capacity</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">78%</div>
              <p className="text-xs text-muted-foreground mt-1">47 of 60 respiratory beds</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Oxygen Stock</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">850L</div>
              <p className="text-xs text-muted-foreground mt-1">Recommended: 1,200L</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 7-Day Forecast */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                7-Day Prediction Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((pred, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground">{pred.date}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div 
                          className="h-8 bg-chart-grid rounded"
                          style={{ width: `${(pred.cases / 200) * 100}%` }}
                        >
                          <div 
                            className={`h-full rounded ${
                              pred.risk === 'high' ? 'bg-destructive' :
                              pred.risk === 'moderate' ? 'bg-warning' : 'bg-success'
                            }`}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12">{pred.cases}</span>
                        <Badge variant={getRiskBadge(pred.risk)} className="w-20 justify-center">
                          {pred.risk}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Confidence: {(pred.confidence * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 border-t pt-4">
                <strong>Note:</strong> This is simulated prediction data for demo purposes. Mock data generated for {city}.
              </p>
            </CardContent>
          </Card>

          {/* Action Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Action Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-medium">{rec.action}</p>
                      <Badge 
                        variant={rec.priority === "high" ? "destructive" : "secondary"}
                        className="shrink-0"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Est. cost: {rec.cost}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold">Total estimated cost: ₹48,000</p>
                <p className="text-xs text-muted-foreground mt-1">Preparation time: 24-48 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Notice */}
        <Alert className="mt-8 border-accent/30 bg-accent/5">
          <Activity className="h-5 w-5 text-accent" />
          <AlertDescription className="text-foreground">
            <strong>Demo Dashboard:</strong> This interface displays simulated data for demonstration purposes. 
            All predictions, AQI values, and recommendations are mock data. In production, this would connect to real OpenAQ data and trained ML models.
          </AlertDescription>
        </Alert>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
