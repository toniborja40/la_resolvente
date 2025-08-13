// src/models/Viaje.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para la definición de los datos de los viajes
export interface IViaje extends Document {
  unidad_id: mongoose.Schema.Types.ObjectId;
  ruta_id: mongoose.Schema.Types.ObjectId;
  fecha_inicio: Date;
  fecha_fin?: Date;
  registros_conteo: mongoose.Schema.Types.ObjectId[];
}

// Esquema de Mongoose para la colección de Viajes
const ViajeSchema: Schema = new Schema({
  unidad_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unidad',
    required: true,
  },
  ruta_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruta',
    required: true,
  },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date },
  registros_conteo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RegistroConteo',
  }],
}, {
  timestamps: true,
});

// Exporta el modelo
export default mongoose.models.Viaje || mongoose.model<IViaje>('Viaje', ViajeSchema);