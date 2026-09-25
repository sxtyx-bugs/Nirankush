import type { NextConfig } from "next";

const authorityRoutes = [
  ["/", "/authority-static/index.html"],
  ["/nirankush", "/authority-static/nirankush/index.html"],
  ["/sahyajinashi", "/authority-static/sahyajinashi/index.html"],
  ["/lekh", "/authority-static/lekh/index.html"],
  ["/media", "/authority-static/media/index.html"],
  ["/lekh/ghalu-mujare-raigadi-kavita", "/authority-static/lekh/ghalu-mujare-raigadi-kavita/index.html"],
  ["/lekh/mi-maratha-tya-jaticha-kavita", "/authority-static/lekh/mi-maratha-tya-jaticha-kavita/index.html"],
  ["/lekh/nirankush-marathi-kavi-lekhak", "/authority-static/lekh/nirankush-marathi-kavi-lekhak/index.html"],
  ["/lekh/pavankhind-marathi-kavita", "/authority-static/lekh/pavankhind-marathi-kavita/index.html"],
  ["/lekh/sahyadri-maharashtra-marathi-kavita", "/authority-static/lekh/sahyadri-maharashtra-marathi-kavita/index.html"],
  ["/lekh/sahyajinashi-dusari-avritti", "/authority-static/lekh/sahyajinashi-dusari-avritti/index.html"],
  ["/lekh/sahyajinashi-marathi-kavyasangrah", "/authority-static/lekh/sahyajinashi-marathi-kavyasangrah/index.html"],
] as const;

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: authorityRoutes.map(([source, destination]) => ({ source, destination })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
