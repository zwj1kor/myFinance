import { Button } from "@/components/ui/button";
import { Country, countries } from "@/data/countryKPIs";
import { cn } from "@/lib/utils";

export type Entity = "BGSW" | "Mobility" | "SX" | "SDS";

export const entities: { code: Entity; name: string }[] = [
  { code: "BGSW", name: "BGSW" },
  { code: "Mobility", name: "Mobility" },
  { code: "SX", name: "SX" },
  { code: "SDS", name: "SDS" },
];

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
  selectedEntity: Entity;
  onEntityChange: (entity: Entity) => void;
}

export default function CountrySelector({ 
  selectedCountry, 
  onCountryChange,
  selectedEntity,
  onEntityChange 
}: CountrySelectorProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Entity Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <span className="text-sm font-medium text-muted-foreground mr-2">Entity:</span>
        <div className="flex items-center gap-2">
          {entities.map((entity) => (
            <Button
              key={entity.code}
              variant={selectedEntity === entity.code ? "default" : "outline"}
              onClick={() => onEntityChange(entity.code)}
              size="sm"
              className={cn(
                "px-4 py-2 h-auto transition-all duration-300",
                selectedEntity === entity.code
                  ? "bg-gradient-primary border-primary/50 shadow-glow scale-105"
                  : "hover:scale-105 hover:border-primary/40"
              )}
            >
              <span className="font-medium">{entity.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Geography Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <span className="text-sm font-medium text-muted-foreground mr-2">Geography:</span>
        <div className="flex items-center gap-2">
          {countries.map((country) => (
            <Button
              key={country.code}
              variant={selectedCountry === country.code ? "default" : "outline"}
              onClick={() => onCountryChange(country.code)}
              size="sm"
              className={cn(
                "flex items-center gap-2 px-4 py-2 h-auto transition-all duration-300",
                selectedCountry === country.code
                  ? "bg-gradient-primary border-primary/50 shadow-glow scale-105"
                  : "hover:scale-105 hover:border-primary/40"
              )}
            >
              <span className="text-xl">{country.flag}</span>
              <span className="hidden sm:inline font-medium">{country.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
