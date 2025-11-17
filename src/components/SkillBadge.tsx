import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium",
        "text-accent hover:border-primary hover:bg-cardHover transition-all duration-300",
        "hover:scale-105 hover:glow-border cursor-default",
        className
      )}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
