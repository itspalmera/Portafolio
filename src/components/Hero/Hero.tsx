import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <Image
        src="/pamela.jpg"
        alt="Avatar Pamela"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold">Pamela Vera</h1>
      <p className="text-lg text-muted-foreground mt-2">
        Estudiante de Ingeniería Civil en Computación e Informática
      </p>
      <p className="max-w-xl mt-4 text-sm text-muted-foreground">
        Soy estudiante de Ingeniería Civil en Computación e Informática en la Universidad Católica del Norte. Me apasiona el desarrollo de software con impacto real, especialmente en soluciones tecnológicas aplicadas al sector productivo. He participado en hackatones, ayudantías y mentorías, fortaleciendo tanto mis habilidades técnicas como mi compromiso con la colaboración y el aprendizaje continuo.
      </p>
    </section>
  );
}
