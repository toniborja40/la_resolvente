// src/models/RegistroConteo.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para la definición de los datos de los registros de conteo
export interface IRegistroConteo extends Document {
  unidad_id: mongoose.Schema.Types.ObjectId;
  pasajeros_suben: number;
  pasajeros_bajan: number;
  pasajeros_a_bordo: number;
  timestamp: Date;
  localizacion?: {
    latitud: number;
    longitud: number;
  };
  tipo_evento?: string;
}

// Esquema de Mongoose para la colección de RegistrosConteo
const RegistroConteoSchema: Schema = new Schema({
  unidad_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unidad',
    required: true,
  },
  pasajeros_suben: { type: Number, required: true },
  pasajeros_bajan: { type: Number, required: true },
  pasajeros_a_bordo: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  localizacion: {
    latitud: { type: Number },
    longitud: { type: Number },
  },
  tipo_evento: { type: String },
}, {
  timestamps: true,
});

// Exporta el modelo
export default mongoose.models.RegistroConteo || mongoose.model<IRegistroConteo>('RegistroConteo', RegistroConteoSchema);