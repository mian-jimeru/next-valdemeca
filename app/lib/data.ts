import pool from '@/app/lib/db';
import { Usuario_comision } from './definitions';
import { Area_comision } from './definitions';

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