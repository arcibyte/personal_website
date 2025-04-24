
export interface Project {
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  span: string;
  slug: string;
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    bgColor: "bg-neutral-800",
    hoverColor: "hover:border-neutral-700",
    span: "col-span-2 row-span-1",
    slug: "proyecto-1",
    details: "ishgoneñlgdsnñgsalngñaewlsnsgakñjzxngasñonjñaglsngñjoweqangrñojqewnañsjogk nerñjkagsbgñaewuobsjsgka hweñuoafebsnlgkhebadsvnño iw woehafsknñguoqejkrabñqewrabgspuo bewhqpiqeglhu34qwpeuibgeqpasidulbgeaiupgbleiugqbwgrli"
  },
  {
    title: "Proyecto 2",
    description: "Adaptación de equipos",
    bgColor: "bg-red-600",
    hoverColor: "hover:border-red-800",
    span: "col-span-1 row-span-1",
    slug: "proyecto-2",
    details: "Detalles del Proyecto 2"
  },
  {
    title: "Proyecto 3",
    description: "Sincronización y coordinación del equipo.",
    bgColor: "bg-green-700",
    hoverColor: "hover:border-green-900",
    span: "col-span-1 row-span-2",
    slug: "proyecto-3"
  },
  {
    title: "Proyecto 4",
    description: "Descripción breve.",
    bgColor: "bg-neutral-800",
    hoverColor: "hover:border-neutral-700",
    span: "col-span-1 row-span-1",
    slug: "proyecto-4"
  },
  {
    title: "Proyecto 5",
    description: "Conectando personas y soluciones.",
    bgColor: "bg-rose-600",
    hoverColor: "hover:border-rose-800",
    span: "col-span-2 row-span-1",
    slug: "proyecto-5"
  },
  {
    title: "Proyecto 6",
    description: "Hola, ¿dónde estás?",
    bgColor: "bg-emerald-700",
    hoverColor: "hover:border-emerald-900",
    span: "col-span-2 md:col-span-4 row-span-1",
    slug: "proyecto-6"
  },

];
