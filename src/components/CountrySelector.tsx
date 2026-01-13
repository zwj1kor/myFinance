import { Button } from "@/components/ui/button";
import { Country, countries } from "@/data/countryKPIs";
import { cn } from "@/lib/utils";

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
}

export default function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
      {countries.map((country) => (
        <Button
          key={country.code}
          variant={selectedCountry === country.code ? "default" : "outline"}
          onClick={() => onCountryChange(country.code)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 h-auto transition-all duration-300",
            selectedCountry === country.code
              ? "bg-gradient-primary border-primary/50 shadow-glow scale-105"
              : "hover:scale-105 hover:border-primary/40"
          )}
        >
          <span className="text-xl sm:text-2xl">{country.flag}</span>
          <span className="hidden sm:inline font-medium">{country.name}</span>
        </Button>
      ))}
    </div>
  );
}
