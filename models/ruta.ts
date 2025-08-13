// src/models/Ruta.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para la definición de los datos de las rutas
export interface IRuta extends Document {
  nombre_ruta: string;
  descripcion?: string;
  paradas?: string[];
  duracion_estimada?: number; // En minutos
}

// Esquema de Mongoose para la colección de Rutas
const RutaSchema: Schema = new Schema({
  nombre_ruta: { type: String, required: true, unique: true },
  descripcion: { type: String },
  paradas: { type: [String] },
  duracion_estimada: { type: Number },
}, {
  timestamps: true,
});

// Exporta el modelo
export default mongoose.models.Ruta || mongoose.model<IRuta>('Ruta', RutaSchema);