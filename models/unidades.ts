// src/models/Unidad.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para la definición de los datos de la unidad
export interface IUnidad extends Document {
  numero_unidad: string;
  id_contador: string;
  placas?: string;
  modelo_vehiculo?: string;
  capacidad_maxima?: number;
  estatus: 'Activa' | 'En Mantenimiento' | 'Fuera de Servicio';
  fecha_ultimo_ping?: Date;
}

// Esquema de Mongoose para la colección de Unidades
const UnidadSchema: Schema = new Schema({
  numero_unidad: { type: String, required: true },
  id_contador: { type: String, required: true, unique: true },
  placas: { type: String },
  modelo_vehiculo: { type: String },
  capacidad_maxima: { type: Number },
  estatus: {
    type: String,
    enum: ['Activa', 'En Mantenimiento', 'Fuera de Servicio'],
    default: 'Activa',
  },
  fecha_ultimo_ping: { type: Date },
}, {
  timestamps: true, // Agrega `createdAt` y `updatedAt` automáticamente
});

// Exporta el modelo para que puedas usarlo en tu API
export default mongoose.models.Unidad || mongoose.model<IUnidad>('Unidad', UnidadSchema);