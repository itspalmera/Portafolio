import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-6 px-4 border-t mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Pamela Vera</p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:pameveravigh16@gmail.com">
            <Button variant="ghost" size="icon">
              ✉️
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
