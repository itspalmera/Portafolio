import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink?: string;
  codeLink?: string;
}

export function ProjectCard({ title, description, image, tech, demoLink, codeLink }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={title} width={400} height={200} className="rounded-lg object-cover" />
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="bg-muted px-2 py-1 rounded text-sm">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoLink && (
          <Button asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          </Button>
        )}
        {codeLink && (
          <Button variant="outline" asChild>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">Código</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
