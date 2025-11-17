import { Trophy } from "lucide-react";

interface AchievementItemProps {
  title: string;
  year: string;
}

const AchievementItem = ({ title, year }: AchievementItemProps) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 group">
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
        <Trophy className="w-6 h-6 text-accent" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{year}</p>
      </div>
    </div>
  );
};

export default AchievementItem;
