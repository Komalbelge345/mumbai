import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AirMed AI" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary">AirMed AI</span>
                <span className="text-xs text-muted-foreground">Respire</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Hospital-grade respiratory surge early-warning system. Predict, prepare, and protect with 7-day forecasting powered by air quality monitoring.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-accent transition-colors">Dashboard</Link></li>
              <li><Link to="/api-docs" className="text-muted-foreground hover:text-accent transition-colors">API Documentation</Link></li>
              <li><Link to="/alerts" className="text-muted-foreground hover:text-accent transition-colors">Public Alerts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 AirMed AI. All rights reserved. Demo system using simulated data.
            </p>
            <p className="text-xs text-muted-foreground">
              Data Privacy: All displayed data is anonymized and simulated for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
