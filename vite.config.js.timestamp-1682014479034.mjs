// vite.config.js
import UnoCSS from "file:///C:/Users/PC/Desktop/%D0%B8%D1%82%D0%BC%D0%BE/ITMO_WebDev_2023_YakovlevPavel/node_modules/unocss/dist/vite.mjs";
import { presetIcons, presetUno } from "file:///C:/Users/PC/Desktop/%D0%B8%D1%82%D0%BC%D0%BE/ITMO_WebDev_2023_YakovlevPavel/node_modules/unocss/dist/index.mjs";
import presetWebFonts from "file:///C:/Users/PC/Desktop/%D0%B8%D1%82%D0%BC%D0%BE/ITMO_WebDev_2023_YakovlevPavel/node_modules/@unocss/preset-web-fonts/dist/index.mjs";
var vite_config_default = {
  plugins: [
    UnoCSS({
      include: ["./index.html", "main.js", "./src/**/**.js"],
      presets: [
        presetUno({}),
        presetIcons({}),
        presetWebFonts({
          provider: "google",
          // default provider
          fonts: {
            // these will extend the default theme
            sans: "Roboto:400,700",
            mono: ["Fira Code", "Fira Mono:400,700"],
            // custom ones
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true
              },
              {
                name: "sans-serif",
                provider: "none"
              }
            ]
          }
        })
      ],
      // disable //default preset
      rules: [
        // your custom rules
      ]
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFx1MDQzOFx1MDQ0Mlx1MDQzQ1x1MDQzRVxcXFxJVE1PX1dlYkRldl8yMDIzX1lha292bGV2UGF2ZWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcXHUwNDM4XHUwNDQyXHUwNDNDXHUwNDNFXFxcXElUTU9fV2ViRGV2XzIwMjNfWWFrb3ZsZXZQYXZlbFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC8lRDAlQjglRDElODIlRDAlQkMlRDAlQkUvSVRNT19XZWJEZXZfMjAyM19ZYWtvdmxldlBhdmVsL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcudHNcblxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgeyBwcmVzZXRJY29ucywgcHJlc2V0VW5vIH0gZnJvbSAndW5vY3NzJztcbmltcG9ydCBwcmVzZXRXZWJGb250cyBmcm9tICdAdW5vY3NzL3ByZXNldC13ZWItZm9udHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IFtcbiAgICBVbm9DU1Moe1xuICAgICAgaW5jbHVkZTogWycuL2luZGV4Lmh0bWwnLCAnbWFpbi5qcycsICcuL3NyYy8qKi8qKi5qcyddLFxuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRVbm8oe30pLFxuICAgICAgICBwcmVzZXRJY29ucyh7fSksXG4gICAgICAgIHByZXNldFdlYkZvbnRzKHtcbiAgICAgICAgICBwcm92aWRlcjogJ2dvb2dsZScsIC8vIGRlZmF1bHQgcHJvdmlkZXJcbiAgICAgICAgICBmb250czoge1xuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBleHRlbmQgdGhlIGRlZmF1bHQgdGhlbWVcbiAgICAgICAgICAgIHNhbnM6ICdSb2JvdG86NDAwLDcwMCcsXG4gICAgICAgICAgICBtb25vOiBbJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm86NDAwLDcwMCddLFxuICAgICAgICAgICAgLy8gY3VzdG9tIG9uZXNcbiAgICAgICAgICAgIGxvYnN0ZXI6ICdMb2JzdGVyJyxcbiAgICAgICAgICAgIGxhdG86IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdMYXRvJyxcbiAgICAgICAgICAgICAgICB3ZWlnaHRzOiBbJzQwMCcsICc3MDAnXSxcbiAgICAgICAgICAgICAgICBpdGFsaWM6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLCAvLyBkaXNhYmxlIC8vZGVmYXVsdCBwcmVzZXRcblxuICAgICAgcnVsZXM6IFtcbiAgICAgICAgLy8geW91ciBjdXN0b20gcnVsZXNcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sWUFBWTtBQUNuQixTQUFTLGFBQWEsaUJBQWlCO0FBQ3ZDLE9BQU8sb0JBQW9CO0FBRTNCLElBQU8sc0JBQVE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxnQkFBZ0IsV0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxTQUFTO0FBQUEsUUFDUCxVQUFVLENBQUMsQ0FBQztBQUFBLFFBQ1osWUFBWSxDQUFDLENBQUM7QUFBQSxRQUNkLGVBQWU7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFVBQ1YsT0FBTztBQUFBO0FBQUEsWUFFTCxNQUFNO0FBQUEsWUFDTixNQUFNLENBQUMsYUFBYSxtQkFBbUI7QUFBQTtBQUFBLFlBRXZDLFNBQVM7QUFBQSxZQUNULE1BQU07QUFBQSxjQUNKO0FBQUEsZ0JBQ0UsTUFBTTtBQUFBLGdCQUNOLFNBQVMsQ0FBQyxPQUFPLEtBQUs7QUFBQSxnQkFDdEIsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsTUFBTTtBQUFBLGdCQUNOLFVBQVU7QUFBQSxjQUNaO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUE7QUFBQSxNQUVBLE9BQU87QUFBQTtBQUFBLE1BRVA7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
