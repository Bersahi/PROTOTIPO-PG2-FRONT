// Constantes del sistema de envíos

export const DEPARTAMENTOS_GUATEMALA = [
  { value: 'guatemala', label: 'Guatemala', region: 'Metropolitana' },
  { value: 'quetzaltenango', label: 'Quetzaltenango', region: 'Occidente' },
  { value: 'sacatepequez', label: 'Sacatepéquez', region: 'Central' },
  { value: 'chimaltenango', label: 'Chimaltenango', region: 'Central' },
  { value: 'escuintla', label: 'Escuintla', region: 'Sur' },
  { value: 'santa_rosa', label: 'Santa Rosa', region: 'Sur' },
  { value: 'jutiapa', label: 'Jutiapa', region: 'Oriente' },
  { value: 'jalapa', label: 'Jalapa', region: 'Oriente' },
  { value: 'zacapa', label: 'Zacapa', region: 'Oriente' },
  { value: 'chiquimula', label: 'Chiquimula', region: 'Oriente' },
  { value: 'izabal', label: 'Izabal', region: 'Norte' },
  { value: 'alta_verapaz', label: 'Alta Verapaz', region: 'Norte' },
  { value: 'baja_verapaz', label: 'Baja Verapaz', region: 'Norte' },
  { value: 'peten', label: 'Petén', region: 'Norte' },
  { value: 'huehuetenango', label: 'Huehuetenango', region: 'Occidente' },
  { value: 'quiche', label: 'Quiché', region: 'Occidente' },
  { value: 'solola', label: 'Sololá', region: 'Occidente' },
  { value: 'totonicapan', label: 'Totonicapán', region: 'Occidente' },
  { value: 'retalhuleu', label: 'Retalhuleu', region: 'Occidente' },
  { value: 'san_marcos', label: 'San Marcos', region: 'Occidente' },
  { value: 'suchitepequez', label: 'Suchitepéquez', region: 'Sur' }
];

export const PAISES_DISPONIBLES = [
  { value: 'gt', label: 'Guatemala' },
  { value: 'mx', label: 'México' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'es', label: 'España' },
  { value: 'ni', label: 'Nicaragua' },
  { value: 'cr', label: 'Costa Rica' },
  { value: 'hn', label: 'Honduras' },
  { value: 'sv', label: 'El Salvador' },
  { value: 'pa', label: 'Panamá' },
  { value: 'co', label: 'Colombia' },
  { value: 've', label: 'Venezuela' }
];

export const MONEDAS_DISPONIBLES = [
  { value: 'gtq', label: 'Quetzal Guatemalteco', symbol: 'Q' },
  { value: 'usd', label: 'Dólar Estadounidense', symbol: '$' },
  { value: 'eur', label: 'Euro', symbol: '€' },
  { value: 'mxp', label: 'Peso Mexicano', symbol: '$' },
  { value: 'cad', label: 'Dólar Canadiense', symbol: 'C$' }
];

export const TARIFAS_MOCK = [
  { id: '1', servicio: 'Express Nacional', precio: 'Q25', descripcion: 'Entrega en 24 horas', tipo: 'nacional' as const, tiempoEstimado: '24 horas' },
  { id: '2', servicio: 'Estándar Nacional', precio: 'Q15', descripcion: 'Entrega en 48 horas', tipo: 'nacional' as const, tiempoEstimado: '48 horas' },
  { id: '3', servicio: 'Express Internacional', precio: '$35', descripcion: 'Entrega en 3-5 días', tipo: 'internacional' as const, tiempoEstimado: '3-5 días' },
  { id: '4', servicio: 'Estándar Internacional', precio: '$25', descripcion: 'Entrega en 7-10 días', tipo: 'internacional' as const, tiempoEstimado: '7-10 días' }
];

export const ORDENES_MOCK_INICIAL = [
  {
    id: "PKG001",
    descripcion: "Orden #001",
    estado: "enviado" as const,
    fecha: "18 Jul 2025",
    destino: "Barcelona, España"
  },
  {
    id: "PKG002",
    descripcion: "Orden #002",
    estado: "entregado" as const,
    fecha: "15 Jul 2025",
    destino: "Ciudad de Guatemala, Guatemala"
  },
  {
    id: "PKG003",
    descripcion: "Orden #003",
    estado: "pendiente" as const,
    fecha: "20 Jul 2025",
    destino: "Managua, Nicaragua"
  }
];
