import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/alerts", label: "Public Alerts" },
    
    
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="AirMed AI" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-primary">AirMed AI</span>
              <span className="text-xs text-muted-foreground">Respire</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild variant="default" size="sm">
            <Link to="/dashboard">Request Demo</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
