import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const ProjectCard = ({ title, description, tags, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "p-6 bg-card border border-border rounded-xl",
        "hover:border-primary/50 hover:bg-cardHover transition-all duration-300",
        "hover:scale-105 hover:shadow-xl hover:shadow-primary/10",
        "group cursor-pointer",
        className
      )}
    >
      <h3 className="text-xl font-bold text-accent mb-3 group-hover:glow-text transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
