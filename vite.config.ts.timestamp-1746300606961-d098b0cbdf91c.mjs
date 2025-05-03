// vite.config.ts
import analog from "file:///D:/abhisheksah.github.io/node_modules/.pnpm/@analogjs+platform@1.16.0_f5e886417772cb9750d9adae61fc7ed5/node_modules/@analogjs/platform/src/index.js";
import { defineConfig } from "file:///D:/abhisheksah.github.io/node_modules/.pnpm/vite@5.4.19_@types+node@22._3095bec8fa74d5025ebd97b2fba0ef46/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"]
  },
  resolve: {
    mainFields: ["module"]
  },
  plugins: [
    analog({
      static: true,
      vite: { experimental: { supportAnalogFormat: true } },
      prerender: {
        routes: ["/", "/about"]
      }
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"]
  },
  define: {
    "import.meta.vitest": mode !== "production"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhYmhpc2hla3NhaC5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFiaGlzaGVrc2FoLmdpdGh1Yi5pb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYWJoaXNoZWtzYWguZ2l0aHViLmlvL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IGFuYWxvZyBmcm9tICdAYW5hbG9nanMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogWydlczIwMjAnXSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIG1haW5GaWVsZHM6IFsnbW9kdWxlJ10sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBhbmFsb2coe1xyXG4gICAgICBzdGF0aWM6IHRydWUsXHJcbiAgICAgIHZpdGU6IHsgZXhwZXJpbWVudGFsOiB7IHN1cHBvcnRBbmFsb2dGb3JtYXQ6IHRydWUgfSB9LFxyXG4gICAgICBwcmVyZW5kZXI6IHtcclxuICAgICAgICByb3V0ZXM6IFsnLycsICcvYWJvdXQnXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogWydzcmMvdGVzdC1zZXR1cC50cyddLFxyXG4gICAgaW5jbHVkZTogWycqKi8qLnNwZWMudHMnXSxcclxuICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgICdpbXBvcnQubWV0YS52aXRlc3QnOiBtb2RlICE9PSAncHJvZHVjdGlvbicsXHJcbiAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxZQUFZO0FBQ25CLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsT0FBTztBQUFBLElBQ0wsUUFBUSxDQUFDLFFBQVE7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLFFBQVE7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsTUFBTSxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsS0FBSyxFQUFFO0FBQUEsTUFDcEQsV0FBVztBQUFBLFFBQ1QsUUFBUSxDQUFDLEtBQUssUUFBUTtBQUFBLE1BQ3hCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDeEIsV0FBVyxDQUFDLFNBQVM7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sc0JBQXNCLFNBQVM7QUFBQSxFQUNqQztBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
