import pool from '@/app/lib/db';
import { Usuario_comision } from './definitions';

export async function getUsuariosComision(){
    try
    {
      const user = await pool.query(`SELECT * FROM usuarios-comision`);
      return user.rows as Usuario_comision[];
    }
    catch(error)
    {
      console.log('Failed to fetch customer:', error);
    }
  }