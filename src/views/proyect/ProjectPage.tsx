import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

export default function ProjectPage() {
  return (

    <section className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
            title="Videojuego 3D con Unity"
            description="Juego tipo plataforma desarrollado como ayudante de Programación Avanzada. Incluye físicas personalizadas, enemigos y sistema de niveles."
            image="/projects/unity-2d.png"
            tech={["Unity", "C#", "3D"]}
            codeLink="https://github.com/itspalmera/Selene_vuelve_a_cada" />

        <ProjectCard
            title="Modelo Predictivo de Días de Pago - HackaDISC INSECAP"
            description="Desarrollamos un sistema de predicción usando Random Forest para estimar días de pago en procesos de comercialización. Se analizaron datos históricos de clientes, transformando JSON a DataFrame, aplicando codificación y validación cruzada. Además, se aplicó K-Means para segmentar perfiles de riesgo. El modelo logró un MAE < 7 días y R² > 0.85 con interpretación de variables clave."
            image="/projects/hackadisc-insecap.png"
            tech={[
                "Python",
                "RandomForest",
                "Pandas",
                "Sklearn",
                "KMeans",
                "Matplotlib",
                "Seaborn"
            ]}
            codeLink="https://github.com/tu-usuario/hackadisc-insecap" />

            <ProjectCard
            title="Ecommerce Web - Taller Desarrollo Web"
            description="Aplicación web completa desarrollada en Next.js con frontend moderno y consumo de una API REST en .NET. Implementa roles de administrador, cliente y usuario anónimo, con funcionalidades como gestión de productos, usuarios, carrito, perfil y autenticación."
            image="/projects/ecommerce-cover.png"
            tech={["Next.js", "TypeScript", "Shadcn/ui", "Zustand", "TanStack Query", ".NET API"]}
            codeLink="https://github.com/itspalmera/TallerIDWM_Frontend"
        />
    </section>
  );
}