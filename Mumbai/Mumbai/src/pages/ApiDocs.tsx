import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Book, Database, Zap } from "lucide-react";

const ApiDocs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">API Documentation</h1>
          <p className="text-muted-foreground">
            RESTful API endpoints for integrating AirMed AI with your hospital systems
          </p>
        </div>

        <Alert className="mb-8 border-accent/30 bg-accent/5">
          <Database className="h-5 w-5 text-accent" />
          <AlertDescription className="text-foreground">
            <strong>Demo API:</strong> These endpoints currently return mock data. In production, they connect to real OpenAQ feeds and trained ML models.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Base URL */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Base URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <code className="block p-3 bg-muted rounded-md font-mono text-sm">
                https://api.AirMed AI-respire.health/v1
              </code>
              <p className="text-sm text-muted-foreground mt-3">
                All API requests should be made to this base URL. Authentication required for production use.
              </p>
            </CardContent>
          </Card>

          {/* Get AQI Endpoint */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                GET /api/aqi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Description</h4>
                <p className="text-sm text-muted-foreground">
                  Retrieve current air quality index and pollutant measurements for a specified city.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Parameters</h4>
                <div className="bg-muted p-3 rounded-md text-sm space-y-1">
                  <div><code className="text-accent">city</code> (string, required) - City name (e.g., "Delhi", "Mumbai")</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Request</h4>
                <code className="block p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
                  curl -X GET "https://api.AirMed AI-respire.health/v1/api/aqi?city=Delhi"
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Response</h4>
                <pre className="p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
{`{
  "city": "New Delhi",
  "timestamp": "2025-10-01T10:00:00+05:30",
  "aqi": 315,
  "pm2_5": 210,
  "pm10": 380,
  "source": "mock"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Get Predictions Endpoint */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                GET /api/predict
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Description</h4>
                <p className="text-sm text-muted-foreground">
                  Get 7-day respiratory case predictions with risk levels and confidence scores.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Parameters</h4>
                <div className="bg-muted p-3 rounded-md text-sm space-y-1">
                  <div><code className="text-accent">city</code> (string, required) - City name</div>
                  <div><code className="text-accent">horizon</code> (integer, required) - Forecast days (1-7)</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Request</h4>
                <code className="block p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
                  curl -X GET "https://api.AirMed AI-respire.health/v1/api/predict?city=Delhi&horizon=7"
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Response</h4>
                <pre className="p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
{`{
  "city": "New Delhi",
  "generated_at": "2025-10-01T10:00:00+05:30",
  "horizon_days": 7,
  "predictions": [
    {"date":"2025-10-02","pred_cases":120,"risk":"moderate","confidence":0.78},
    {"date":"2025-10-03","pred_cases":180,"risk":"high","confidence":0.86},
    {"date":"2025-10-04","pred_cases":200,"risk":"high","confidence":0.90},
    {"date":"2025-10-05","pred_cases":175,"risk":"high","confidence":0.88},
    {"date":"2025-10-06","pred_cases":140,"risk":"moderate","confidence":0.80},
    {"date":"2025-10-07","pred_cases":110,"risk":"low","confidence":0.72},
    {"date":"2025-10-08","pred_cases":90,"risk":"low","confidence":0.68}
  ],
  "notes": "This is simulated prediction data for demo purposes."
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Post Alerts Endpoint */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                POST /api/alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Description</h4>
                <p className="text-sm text-muted-foreground">
                  Create and queue health alerts for hospital staff or public distribution.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Request Body</h4>
                <div className="bg-muted p-3 rounded-md text-sm space-y-1">
                  <div><code className="text-accent">target</code> (string, required) - "hospital" or "public"</div>
                  <div><code className="text-accent">message</code> (string, required) - Alert text content</div>
                  <div><code className="text-accent">severity</code> (string, required) - "info", "warning", or "critical"</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Request</h4>
                <pre className="p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
{`curl -X POST "https://api.AirMed AI-respire.health/v1/api/alerts" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "hospital",
    "message": "ALERT: Predicted respiratory surge (High) on 2025-10-03",
    "severity": "critical"
  }'`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Example Response</h4>
                <pre className="p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
{`{
  "status": "queued",
  "id": "alert_0001",
  "sent_at": null,
  "mock": true
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Integration Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Integration Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Replacing Mock Data with Real OpenAQ</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  To connect to real air quality data, update the data ingestion agent:
                </p>
                <code className="block p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
                  {`# In backend/agents/ingest_agent.py
import requests

def fetch_real_aqi(city: str):
    response = requests.get(
        f"https://api.openaq.org/v2/latest?city={city}"
    )
    data = response.json()
    return {
        "city": data["results"][0]["city"],
        "aqi": calculate_aqi(data["results"][0]["measurements"]),
        "pm2_5": data["results"][0]["measurements"][0]["value"],
        "source": "OpenAQ"
    }`}
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Replacing Mock Model with Real ML</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  To use trained LightGBM/Prophet models instead of mock predictions:
                </p>
                <code className="block p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto">
                  {`# In backend/agents/predictive_agent.py
import joblib

model = joblib.load("models/respiratory_forecast.pkl")

def predict_cases(city: str, horizon: int):
    features = prepare_features(city)  # Get AQI, weather, etc.
    predictions = model.predict(features)
    return format_predictions(predictions, horizon)`}
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Rate Limits</h4>
                <p className="text-sm text-muted-foreground">
                  Production API: 1000 requests/hour per API key. Contact support for enterprise limits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocs;
