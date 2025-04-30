
export interface Project {
  title: string;
  description: string;
  span: string;
  slug: string;
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    span: "col-span-2 row-span-1",
    slug: "proyecto-1",
    details: "ishgoneñlgdsnñgsalngñaewlsnsgakñjzxngasñonjñaglsngñjoweqangrñojqewnañsjogk nerñjkagsbgñaewuobsjsgka hweñuoafebsnlgkhebadsvnño iw woehafsknñguoqejkrabñqewrabgspuo bewhqpiqeglhu34qwpeuibgeqpasidulbgeaiupgbleiugqbwgrli"
  },
  {
    title: "Proyecto 2",
    description: "Adaptación de equipos",
    span: "col-span-1 row-span-1",
    slug: "proyecto-2",
    details: "Detalles del Proyecto 2"
  },
  {
    title: "Proyecto 3",
    description: "Sincronización y coordinación del equipo.",
    span: "col-span-1 row-span-2",
    slug: "proyecto-3"
  },
  {
    title: "Proyecto 4",
    description: "Descripción breve.",
    span: "col-span-1 row-span-1",
    slug: "proyecto-4"
  },
  {
    title: "Proyecto 5",
    description: "Conectando personas y soluciones.",
    span: "col-span-2 row-span-1",
    slug: "proyecto-5"
  },
  {
    title: "Proyecto 6",
    description: "Hola, ¿dónde estás?",
    span: "col-span-2 md:col-span-4 row-span-1",
    slug: "proyecto-6"
  },

];
