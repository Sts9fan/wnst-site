import { useState, useEffect } from 'react'
import { COURSES } from '../config.js'
import styles from './BookPage.module.css'
import pageStyles from './Page.module.css'

export default function BookPage() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0])

  useEffect(() => {
    // Remove any existing Cal embed script
    const existing = document.getElementById('cal-script')
    if (existing) existing.remove()

    // Reset Cal
    window.Cal = undefined

    const script = document.createElement('script')
    script.id = 'cal-script'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if(typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["-", ar]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "${selectedCourse.calLink}",
        layout: "month_view"
      });
      Cal("ui", {
        styles: { branding: { brandColor: "#4a6e50" } },
        hideEventTypeDetails: false,
      });
    `
    document.body.appendChild(script)

        return () => {
          const s = document.getElementById('cal-script')
          if (s) s.remove()
        }
      }, [selectedCourse])
    
      return <div id="cal-embed" />
    
    }