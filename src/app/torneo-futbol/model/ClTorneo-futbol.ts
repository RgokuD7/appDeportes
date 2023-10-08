export class ClToreno_futbol {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    id: number;
    nombre: string;
    tipo_torneo: string;
    fase_grupos: boolean;
    cantidad_equipos: number;
  
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.nombre = obj && obj.nombre || null
          this.tipo_torneo = obj && obj.tipo_torneo || null
          this.fase_grupos = obj && obj.fase_grupos || null
          this.cantidad_equipos = obj && obj.cantidad_equipos || null
      }
  }
  