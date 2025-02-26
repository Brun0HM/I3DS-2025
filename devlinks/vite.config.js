import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true, //Abre automaticamente o navegador e incia o server
    port:3000, // Porta para conexão, altere quando necessario
    host: true, // Habilitar rede externa
  }
})