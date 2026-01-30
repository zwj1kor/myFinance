import { useState } from "react";
import { ChevronDown, ChevronRight, TrendingUp, TrendingDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MainKPI, SubKPI } from "@/data/countryKPIs";
import { cn } from "@/lib/utils";

interface KPITableProps {
  kpis: MainKPI[];
  onSubKPIClick: (mainName: string, subKPI: SubKPI) => void;
  onChatClick: (e: React.MouseEvent, kpiName: string) => void;
}

export default function KPITable({ kpis, onSubKPIClick, onChatClick }: KPITableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (kpiName: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(kpiName)) {
        next.delete(kpiName);
      } else {
        next.add(kpiName);
      }
      return next;
    });
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> = {
      primary: { border: "border-primary/40", bg: "bg-primary/10", text: "text-primary" },
      warning: { border: "border-warning/40", bg: "bg-warning/10", text: "text-warning" },
      accent: { border: "border-accent/40", bg: "bg-accent/10", text: "text-accent" },
      success: { border: "border-success/40", bg: "bg-success/10", text: "text-success" },
      info: { border: "border-info/40", bg: "bg-info/10", text: "text-info" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <Card className="glass-card border border-border/40 rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          {/* Main column headers */}
          <TableRow className="border-b border-border/30 hover:bg-transparent">
            <TableHead rowSpan={2} className="w-[40px] align-middle"></TableHead>
            <TableHead rowSpan={2} className="font-display font-bold text-foreground align-middle">KPI</TableHead>
            <TableHead colSpan={3} className="text-center font-display font-bold text-foreground border-l border-border/30">Actual</TableHead>
            <TableHead colSpan={3} className="text-center font-display font-bold text-foreground border-l border-border/30">Plan</TableHead>
            <TableHead colSpan={3} className="text-center font-display font-bold text-foreground border-l border-border/30">Previous Year</TableHead>
            <TableHead rowSpan={2} className="text-right font-display font-bold text-foreground border-l border-border/30 align-middle">Variance</TableHead>
            <TableHead rowSpan={2} className="w-[50px] align-middle"></TableHead>
          </TableRow>
          {/* Sub-column headers */}
          <TableRow className="border-b border-border/30 hover:bg-transparent">
            <TableHead className="text-right text-xs text-muted-foreground border-l border-border/30">Actual</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">QTD</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">YTD</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground border-l border-border/30">Actual</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">QTD</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">YTD</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground border-l border-border/30">Actual</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">QTD</TableHead>
            <TableHead className="text-right text-xs text-muted-foreground">YTD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {kpis.map((kpi) => {
            const isExpanded = expandedRows.has(kpi.name);
            const colorClasses = getColorClasses(kpi.color);

            return (
              <>
                {/* Main KPI Row */}
                <TableRow
                  key={kpi.name}
                  className={cn(
                    "cursor-pointer transition-colors border-b border-border/20",
                    isExpanded ? colorClasses.bg : "hover:bg-muted/30"
                  )}
                  onClick={() => toggleRow(kpi.name)}
                >
                  <TableCell className="py-4">
                    {isExpanded ? (
                      <ChevronDown className={cn("w-5 h-5", colorClasses.text)} />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{kpi.icon}</span>
                      <span className="font-display font-bold text-foreground text-lg">{kpi.name}</span>
                    </div>
                  </TableCell>
                  {/* Actual sub-columns */}
                  <TableCell className="text-right py-4 border-l border-border/20">
                    <span className="font-display font-bold text-foreground">
                      {kpi.subKPIs[0]?.value || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="font-display font-semibold text-foreground">
                      {kpi.subKPIs[0]?.details.qtd || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="font-display font-semibold text-foreground">
                      {kpi.subKPIs[0]?.details.ytd || "-"}
                    </span>
                  </TableCell>
                  {/* Plan sub-columns */}
                  <TableCell className="text-right py-4 border-l border-border/20">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.target || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.planQtd || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.planYtd || "-"}
                    </span>
                  </TableCell>
                  {/* Previous Year sub-columns */}
                  <TableCell className="text-right py-4 border-l border-border/20">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.lastMonth || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.pyQtd || "-"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="text-muted-foreground">
                      {kpi.subKPIs[0]?.details.pyYtd || "-"}
                    </span>
                  </TableCell>
                  {/* Variance */}
                  <TableCell className="text-right py-4 border-l border-border/20">
                    {kpi.subKPIs[0] && (
                      <div className={cn(
                        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium",
                        kpi.subKPIs[0].variance >= 0 
                          ? "bg-success/10 text-success" 
                          : "bg-destructive/10 text-destructive"
                      )}>
                        {kpi.subKPIs[0].variance >= 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {Math.abs(kpi.subKPIs[0].variance)}%
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="py-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        onChatClick(e, kpi.name);
                      }}
                      className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all hover:scale-110"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Expanded Sub-KPI Rows */}
                {isExpanded && kpi.subKPIs.map((subKPI, index) => (
                  <TableRow
                    key={`${kpi.name}-${subKPI.name}`}
                    className={cn(
                      "cursor-pointer transition-colors border-b border-border/10",
                      "hover:bg-muted/20",
                      colorClasses.bg,
                      "opacity-90"
                    )}
                    onClick={() => onSubKPIClick(kpi.name, subKPI)}
                  >
                    <TableCell className="py-3"></TableCell>
                    <TableCell className="py-3 pl-12">
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {subKPI.name}
                      </span>
                    </TableCell>
                    {/* Actual sub-columns */}
                    <TableCell className="text-right py-3 border-l border-border/10">
                      <span className="font-display font-semibold text-foreground">
                        {subKPI.value}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-foreground">
                        {subKPI.details.qtd || "-"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-foreground">
                        {subKPI.details.ytd || "-"}
                      </span>
                    </TableCell>
                    {/* Plan sub-columns */}
                    <TableCell className="text-right py-3 border-l border-border/10">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.target}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.planQtd || "-"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.planYtd || "-"}
                      </span>
                    </TableCell>
                    {/* Previous Year sub-columns */}
                    <TableCell className="text-right py-3 border-l border-border/10">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.lastMonth}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.pyQtd || "-"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right py-3">
                      <span className="text-sm text-muted-foreground">
                        {subKPI.details.pyYtd || "-"}
                      </span>
                    </TableCell>
                    {/* Variance */}
                    <TableCell className="text-right py-3 border-l border-border/10">
                      <div className={cn(
                        "inline-flex items-center gap-1 text-xs",
                        subKPI.variance >= 0 ? "text-success" : "text-destructive"
                      )}>
                        {subKPI.variance >= 0 ? "↑" : "↓"}
                        {Math.abs(subKPI.variance)}%
                      </div>
                    </TableCell>
                    <TableCell className="py-3"></TableCell>
                  </TableRow>
                ))}
              </>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
