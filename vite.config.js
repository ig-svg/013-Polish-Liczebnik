XDirection Width 
		Racking XDirection Axis Length + XDirection Offset To End
		Racking XDirection Axis Length + 2 * XDirection Offset To End
ZDirection Width
		Racking Axis Width * Amount Of Blocks + Aisle Axis Width * (Amount Of Blocks - 1)
		
FOT
left
5214115370
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Основная настройка для работы React через Vite
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Папка, куда Vite положит готовый сайт
  },
})
