export type Usuario_comision = {
    id: number;
    nombre: string;
    area_fk: number;
    responsable:boolean;
  };
  export type Area_comision = {
    id: number;
    nombre: string;
  };
  export type Actividad_area_comision = {
    id: number;
    nombre: string;
    area: number;
  };
  export type Usuario_area = {
    id: number;
    nombre: string;
    area: string;
    responsable:boolean;
  };