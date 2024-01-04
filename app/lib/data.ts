import 'server-only';
import pool from '@/app/lib/db';
import { Usuario_comision } from './definitions';
import { Area_comision } from './definitions';
import { Usuario_area } from './definitions';

export async function getUsuariosComision(){
    try
    {
      const user = await pool.query(`SELECT * FROM "usuarios-comision"`);
      return user.rows as Usuario_comision[];
    }
    catch(error)
    {
      throw('Failed to fetch customer.');
    }
  }

  export async function getAreasComision(){
    try
    {
      const areas = await pool.query(`SELECT * FROM "area-comision"`);
      return areas.rows as Area_comision[];
    }
    catch(error)
    {
      throw('Failed to fetch customer.');
    }
  }
  
  export async function getUsuarioArea(idUsuario: number){
    try
    {
      const Usuario_area = await pool.query(`SELECT uc.id, uc.nombre, ac.nombre, uc.responsable
                                        FROM "usuarios-comision" as uc
                                        LEFT JOIN "area-comision" as ac ON uc.area_fk = ac.id
                                        WHERE uc.id = $1`, [idUsuario]);

      return Usuario_area.rows as Usuario_area;
    }
    catch(error)
    {
      throw('Failed to fetch customer.');
    }
    
  }
