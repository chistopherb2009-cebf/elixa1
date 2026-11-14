

const PERFIL = (s, f, m) => ({
  sensacion: s,
  familia: f,
  momento: m
});

const V = {
  nombre: "",
  imagen: "",
  precio: "",
  familia: "",
  salida: [],
  corazon: [],
  fondo: [],
  descripcion: "",
  compra: "#"
};

const PERFUMES = {
  // ---------- 10 FRAGANCIAS FEMENINAS ----------
  m1: {
    ...V,
    nombre: "Alba Floral",
    familia: "Floral",
    salida: ["bergamota", "pera"],
    corazon: ["jazmín", "peonía"],
    fondo: ["almizcle", "madera suave"],
    descripcion: "Una fragancia serena y elegante, con flores delicadas y un fondo limpio.",
    genero: "mujer",
    perfil: PERFIL(
      ["elegancia"],
      ["floral"],
      ["trabajo", "especial"]
    )
  },

  m2: {
    ...V,
    nombre: "Jardín de Seda",
    familia: "Floral",
    salida: ["mandarina", "litchi"],
    corazon: ["rosa", "fresia"],
    fondo: ["vainilla suave", "almizcle"],
    descripcion: "Un aroma tierno y luminoso que acompaña los días tranquilos.",
    genero: "mujer",
    perfil: PERFIL(
      ["calidez"],
      ["floral"],
      ["diario"]
    )
  },

  m3: {
    ...V,
    nombre: "Brisa Verde",
    familia: "Cítrico",
    salida: ["limón", "mandarina"],
    corazon: ["té verde", "neroli"],
    fondo: ["almizcle blanco"],
    descripcion: "Fresco y ligero, como una mañana despejada entre jardines.",
    genero: "mujer",
    perfil: PERFIL(
      ["frescura"],
      ["citrico"],
      ["diario"]
    )
  },

  m4: {
    ...V,
    nombre: "Luz Serena",
    familia: "Cítrico",
    salida: ["bergamota", "pomelo"],
    corazon: ["flor de azahar", "té blanco"],
    fondo: ["cedro suave"],
    descripcion: "Una mezcla limpia y sofisticada ideal para acompañar tu rutina.",
    genero: "mujer",
    perfil: PERFIL(
      ["frescura", "elegancia"],
      ["citrico"],
      ["trabajo"]
    )
  },

  m5: {
    ...V,
    nombre: "Cedro Elegante",
    familia: "Amaderado",
    salida: ["bergamota", "pimienta rosa"],
    corazon: ["iris", "madera de cedro"],
    fondo: ["sándalo", "almizcle"],
    descripcion: "Maderas suaves y notas refinadas para una presencia equilibrada.",
    genero: "mujer",
    perfil: PERFIL(
      ["elegancia"],
      ["amaderado"],
      ["trabajo"]
    )
  },

  m6: {
    ...V,
    nombre: "Noche de Ámbar",
    familia: "Amaderado",
    salida: ["ciruela", "pimienta"],
    corazon: ["rosa oscura", "cedro"],
    fondo: ["ámbar", "sándalo"],
    descripcion: "Profundo y envolvente, pensado para una noche especial.",
    genero: "mujer",
    perfil: PERFIL(
      ["sensualidad"],
      ["amaderado"],
      ["noche"]
    )
  },

  m7: {
    ...V,
    nombre: "Vainilla Lunar",
    familia: "Dulce",
    salida: ["pera", "mandarina"],
    corazon: ["vainilla", "heliotropo"],
    fondo: ["ámbar suave", "almizcle"],
    descripcion: "Dulce sin ser intenso, con una calidez íntima y delicada.",
    genero: "mujer",
    perfil: PERFIL(
      ["sensualidad"],
      ["dulce"],
      ["noche"]
    )
  },

  m8: {
    ...V,
    nombre: "Dulce Calma",
    familia: "Dulce",
    salida: ["durazno", "bergamota"],
    corazon: ["flor de almendro", "vainilla"],
    fondo: ["sándalo cremoso"],
    descripcion: "Una fragancia acogedora que transmite suavidad y bienestar.",
    genero: "mujer",
    perfil: PERFIL(
      ["calidez"],
      ["dulce"],
      ["especial", "diario"]
    )
  },

  m9: {
    ...V,
    nombre: "Rosa Misteriosa",
    familia: "Floral",
    salida: ["frambuesa", "bergamota"],
    corazon: ["rosa", "jazmín"],
    fondo: ["ámbar", "almizcle"],
    descripcion: "Floral y magnética, con un carácter elegante para la noche.",
    genero: "mujer",
    perfil: PERFIL(
      ["sensualidad"],
      ["floral"],
      ["noche", "especial"]
    )
  },

  m10: {
    ...V,
    nombre: "Madera de Luna",
    familia: "Amaderado",
    salida: ["mandarina", "cardamomo"],
    corazon: ["iris", "cedro"],
    fondo: ["vainilla", "sándalo"],
    descripcion: "Un perfume cálido y sofisticado que deja una huella serena.",
    genero: "mujer",
    perfil: PERFIL(
      ["calidez", "elegancia"],
      ["amaderado"],
      ["especial"]
    )
  },

  // ---------- 10 FRAGANCIAS MASCULINAS ----------
  h1: {
    ...V,
    nombre: "Cedro Noble",
    familia: "Amaderado",
    salida: ["bergamota", "pimienta negra"],
    corazon: ["cedro", "salvia"],
    fondo: ["vetiver", "ámbar"],
    descripcion: "Elegante y equilibrado, con maderas nobles y una estela discreta.",
    genero: "hombre",
    perfil: PERFIL(
      ["elegancia"],
      ["amaderado"],
      ["trabajo"]
    )
  },

  h2: {
    ...V,
    nombre: "Agua Clara",
    familia: "Cítrico",
    salida: ["limón", "mandarina"],
    corazon: ["menta", "neroli"],
    fondo: ["almizcle blanco"],
    descripcion: "Una sensación fresca y limpia para todos los días.",
    genero: "hombre",
    perfil: PERFIL(
      ["frescura"],
      ["citrico"],
      ["diario"]
    )
  },

  h3: {
    ...V,
    nombre: "Horizonte",
    familia: "Cítrico",
    salida: ["pomelo", "bergamota"],
    corazon: ["jengibre", "té verde"],
    fondo: ["vetiver suave"],
    descripcion: "Energía fresca con un acabado pulido y moderno.",
    genero: "hombre",
    perfil: PERFIL(
      ["frescura", "elegancia"],
      ["citrico"],
      ["trabajo"]
    )
  },

  h4: {
    ...V,
    nombre: "Noche de Cedro",
    familia: "Amaderado",
    salida: ["pimienta", "bergamota"],
    corazon: ["cuero suave", "cedro"],
    fondo: ["ámbar", "vetiver"],
    descripcion: "Intenso y misterioso, ideal para citas y ocasiones nocturnas.",
    genero: "hombre",
    perfil: PERFIL(
      ["sensualidad"],
      ["amaderado"],
      ["noche"]
    )
  },

  h5: {
    ...V,
    nombre: "Ámbar Profundo",
    familia: "Dulce",
    salida: ["mandarina", "cardamomo"],
    corazon: ["haba tonka", "vainilla"],
    fondo: ["ámbar", "madera"],
    descripcion: "Cálido y envolvente, con una dulzura elegante.",
    genero: "hombre",
    perfil: PERFIL(
      ["sensualidad"],
      ["dulce"],
      ["noche"]
    )
  },

  h6: {
    ...V,
    nombre: "Miel Serena",
    familia: "Dulce",
    salida: ["bergamota", "manzana"],
    corazon: ["lavanda", "tonka"],
    fondo: ["vainilla suave"],
    descripcion: "Una composición cálida que invita a la calma.",
    genero: "hombre",
    perfil: PERFIL(
      ["calidez"],
      ["dulce"],
      ["especial"]
    )
  },

  h7: {
    ...V,
    nombre: "Bosque Suave",
    familia: "Amaderado",
    salida: ["hojas verdes", "limón"],
    corazon: ["ciprés", "salvia"],
    fondo: ["cedro", "almizcle"],
    descripcion: "Un aroma natural y tranquilo inspirado en un bosque fresco.",
    genero: "hombre",
    perfil: PERFIL(
      ["calidez"],
      ["amaderado"],
      ["diario"]
    )
  },

  h8: {
    ...V,
    nombre: "Iris Clásico",
    familia: "Floral",
    salida: ["bergamota", "neroli"],
    corazon: ["iris", "lavanda"],
    fondo: ["cedro", "almizcle"],
    descripcion: "Refinado y limpio, con una elegancia discreta.",
    genero: "hombre",
    perfil: PERFIL(
      ["elegancia"],
      ["floral"],
      ["especial", "trabajo"]
    )
  },

  h9: {
    ...V,
    nombre: "Brisa Azul",
    familia: "Floral",
    salida: ["limón", "hojas verdes"],
    corazon: ["lavanda", "flor de azahar"],
    fondo: ["almizcle"],
    descripcion: "Fresco y ligero, con notas suaves que no abruman.",
    genero: "hombre",
    perfil: PERFIL(
      ["frescura"],
      ["floral"],
      ["diario"]
    )
  },

  h10: {
    ...V,
    nombre: "Especias de Seda",
    familia: "Dulce",
    salida: ["bergamota", "pimienta rosa"],
    corazon: ["cardamomo", "ámbar"],
    fondo: ["vainilla", "sándalo"],
    descripcion: "Una fragancia cálida con carácter para momentos especiales.",
    genero: "hombre",
    perfil: PERFIL(
      ["elegancia", "sensualidad"],
      ["dulce"],
      ["especial"]
    )
  }
};


/* ============================================================
   2) MOTOR DEL TEST — puntúa cada fragancia del género elegido.
   Pesos ajustables: la familia olfativa manda, luego sensación y momento.
   ============================================================ */

const PESOS = {
  familia: 4,
  sensacion: 3,
  momento: 2
};

function recomendar([genero, sensacion, familia, momento]) {
  let mejor = null;
  let max = -1;

  for (const [id, p] of Object.entries(PERFUMES)) {
    if (p.genero !== genero) continue;

    const s =
      (p.perfil.familia.includes(familia) ? PESOS.familia : 0) +
      (p.perfil.sensacion.includes(sensacion) ? PESOS.sensacion : 0) +
      (p.perfil.momento.includes(momento) ? PESOS.momento : 0);

    if (s > max) {
      max = s;
      mejor = id;
    }
  }

  return mejor;
}


const ETIQ = {
  elegancia: "elegancia y sofisticación",
  frescura: "frescura y energía",
  sensualidad: "sensualidad y misterio",
  calidez: "calidez y dulzura",
  floral: "florales",
  citrico: "cítricos y frutales",
  amaderado: "amaderados y especiados",
  dulce: "dulces y ambarinos",
  diario: "el día a día",
  trabajo: "el trabajo y ocasiones especiales",
  noche: "citas y noches",
  especial: "momentos especiales"
};


const resp = [];

const pasos = document.querySelectorAll(".paso");

const barra = document.getElementById("barra");
const cont = document.getElementById("cont");


document.querySelectorAll(".op").forEach(op => {
  op.addEventListener("click", () => {
    const paso = op.closest(".paso");
    const i = +paso.dataset.p;

    paso
      .querySelectorAll(".op")
      .forEach(o => o.classList.remove("sel"));

    op.classList.add("sel");

    resp[i] = op.dataset.v;

    gsap.to(paso, {
      opacity: 0,
      y: -26,
      duration: 0.55,
      delay: 0.25,

      onComplete: () => {
        paso.classList.remove("activo");

        gsap.set(paso, {
          opacity: 1,
          y: 0
        });

        if (i < pasos.length - 1) {
          const sig = pasos[i + 1];

          sig.classList.add("activo");

          barra.style.width =
            ((i + 2) / pasos.length * 100) + "%";

          cont.textContent =
            "0" + (i + 2) + " / 0" + pasos.length;

          gsap.from(
            sig.querySelectorAll(".pregunta,.op"),
            {
              opacity: 0,
              y: 34,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out"
            }
          );
        } else {
          mostrarResultado();
        }
      }
    });
  });
});


function mostrarResultado() {
  const id = recomendar(resp);
  const p = PERFUMES[id] || {};

  const v = (x, f) =>
    (x && x.length) ? x : f;


  document.getElementById("rNombre").textContent =
    v(p.nombre, "Perfume pendiente de configurar");

  document.getElementById("rFamilia").textContent =
    v(p.familia, "Familia olfativa");

  document.getElementById("rDesc").innerHTML =
    p.descripcion ||
    '<span class="pend">Añade la descripción en el objeto PERFUMES.</span>';

  document.getElementById("rPrecio").textContent =
    v(p.precio, "Precio por consultar");

  document.getElementById("rPorque").textContent =
    `Buscabas ${ETIQ[resp[1]]}, te atraen los aromas ${ETIQ[resp[2]]} y lo quieres para ${ETIQ[resp[3]]}. ` +
    `Entre nuestras 10 fragancias ${resp[0] === "mujer" ? "femeninas" : "masculinas"}, esta es la que mejor responde a esa combinación.`;

  const notas = [
    ...(p.salida || []),
    ...(p.corazon || []),
    ...(p.fondo || [])
  ];

  document.getElementById("rNotas").innerHTML =
    notas
      .map(n => `<span class="nota">${n}</span>`)
      .join("");

  document.getElementById("rComprar").href =
    p.compra || "#";


  const box = document.getElementById("quizBox");
  const res = document.getElementById("resultado");

  gsap.to(box, {
    opacity: 0,
    duration: 0.6,

    onComplete: () => {
      box.style.display = "none";
      res.style.display = "block";

      gsap.from("#resIntro", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.from("#resFrasco", {
        opacity: 0,
        scale: 0.82,
        duration: 1.6,
        delay: 0.4,
        ease: "power3.out"
      });

      gsap.from(".res-card > div:last-child > *", {
        opacity: 0,
        y: 28,
        duration: 1,
        delay: 0.8,
        stagger: 0.09,
        ease: "power3.out"
      });

      res.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
}


document.getElementById("reset").addEventListener("click", (event) => {
  event.preventDefault();
  resp.length = 0;

  document
    .querySelectorAll(".op")
    .forEach(o => o.classList.remove("sel"));

  pasos.forEach((p, i) =>
    p.classList.toggle("activo", i === 0)
  );

  barra.style.width = "25%";
  cont.textContent = "01 / 04";

  document.getElementById("resultado").style.display = "none";

  const box = document.getElementById("quizBox");

  box.style.display = "block";

  gsap.to(box, {
    opacity: 1,
    duration: 0.6
  });
});


/* ============================================================
   3) COLECCIÓN generada desde PERFUMES
   ============================================================ */

function pintarColeccion(g) {
  document.getElementById("prods").innerHTML =
    Object.entries(PERFUMES)
      .filter(([k, p]) => p.genero === g)
      .map(([k, p]) => `
        <div class="card">
          <div class="foto">
            <div class="frasco">
              <span class="halo"></span>
              <div class="tapa"></div>
              <div class="cuello"></div>
              <div class="cuerpo"></div>
            </div>
          </div>

          <div class="cont">
            <p class="eyebrow">
              ${p.familia || "Familia olfativa"}
            </p>

            <h3>${p.nombre || "Por definir"}</h3>

            <div class="notas">
              ${
                [
                  ...(p.salida || []),
                  ...(p.corazon || [])
                ]
                  .slice(0, 3)
                  .map(n => `<span class="nota">${n}</span>`)
                  .join("") ||
                '<span class="pend">Notas pendientes</span>'
              }
            </div>

            <p
              class="precio"
              style="font-size:1.4rem;margin:14px 0 18px"
            >
              ${p.precio || "Precio por consultar"}
            </p>

            <a
              class="btn"
              href="${p.compra || "#"}"
            >
              Descubrir
            </a>
          </div>
        </div>
      `)
      .join("");

  gsap.fromTo(
    ".card",
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.07,
      ease: "power3.out"
    }
  );
}


pintarColeccion("mujer");


document
  .querySelectorAll("#genTabs button")
  .forEach(b => {
    b.addEventListener("click", () => {
      document
        .querySelectorAll("#genTabs button")
        .forEach(x => x.classList.remove("on"));

      b.classList.add("on");

      pintarColeccion(b.dataset.g);
    });
  });


/* ============================================================
   4) FAMILIAS
   ============================================================ */

const FAM = {
  floral: {
    t: "Floral",
    d: "Pétalos abiertos al amanecer: una estela luminosa, romántica y envolvente.",
    c: "t1"
  },

  citrico: {
    t: "Cítrico",
    d: "Chispa fresca y vibrante, de energía inmediata y luz mediterránea.",
    c: "t3"
  },

  amaderado: {
    t: "Amaderado",
    d: "Maderas nobles y especias cálidas: profundidad, carácter y elegancia serena.",
    c: "t2"
  },

  dulce: {
    t: "Dulce",
    d: "Vainilla, ámbar y resinas: una piel cálida, magnética y adictiva.",
    c: "t4"
  }
};


document
  .querySelectorAll("#famTabs button")
  .forEach(b => {
    b.addEventListener("click", () => {
      document
        .querySelectorAll("#famTabs button")
        .forEach(x => x.classList.remove("on"));

      b.classList.add("on");

      const f = FAM[b.dataset.f];
      const img = document.getElementById("famImg");

      gsap.to(
        [img, "#famTit", "#famTxt"],
        {
          opacity: 0,
          duration: 0.4,

          onComplete: () => {
            img.className = "inner tex " + f.c;
            img.style.height = "100%";

            document.getElementById("famTit").textContent =
              f.t;

            document.getElementById("famTxt").textContent =
              f.d;

            gsap.to(
              [img, "#famTit", "#famTxt"],
              {
                opacity: 1,
                duration: 0.8,
                stagger: 0.06
              }
            );
          }
        }
      );
    });
  });


/* ============================================================
   5) ANIMACIONES GSAP + SCROLLTRIGGER
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);


// partículas del hero
const hero = document.querySelector(".hero");

for (let i = 0; i < 26; i++) {
  const s = document.createElement("span");

  s.className = "particula";

  s.style.left =
    Math.random() * 100 + "%";

  s.style.top =
    Math.random() * 100 + "%";

  s.style.opacity =
    0.15 + Math.random() * 0.5;

  hero.appendChild(s);

  gsap.to(s, {
    y: -60 - Math.random() * 140,
    x: (Math.random() - 0.5) * 80,
    opacity: 0,
    duration: 8 + Math.random() * 10,
    repeat: -1,
    delay: Math.random() * 8,
    ease: "none"
  });
}


// entrada hero
gsap
  .timeline({
    defaults: {
      ease: "power3.out"
    }
  })

  .from("#heroFloat", {
    opacity: 0,
    scale: 0.85,
    y: 40,
    duration: 1.8
  })

  .from(
    ".hero h1",
    {
      opacity: 0,
      y: 50,
      duration: 1.4
    },
    "-=1.1"
  )

  .from(
    ".hero .sub,.hero .desc,.hero .cta",
    {
      opacity: 0,
      y: 30,
      duration: 1.1,
      stagger: 0.14
    },
    "-=.9"
  )

  .set(".hero .reveal", {
    opacity: 1
  })

  .call(() => {

    // flotación suave e infinita: llama la atención sin ser brusca
    gsap.to("#heroFloat", {
      y: -16,
      rotate: 0.6,
      duration: 3.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // pulso de luz alrededor del frasco
    gsap.to("#heroFrasco .halo", {
      scale: 1.16,
      opacity: 0.75,
      duration: 2.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // barrido de brillo cruzando el vidrio, en bucle con pausa
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 2.2
      })

      .fromTo(
        "#heroFrasco .brillo",
        {
          left: "-45%"
        },
        {
          left: "115%",
          duration: 1.6,
          ease: "power2.inOut"
        }
      );
  });


// inclinación 3D del frasco siguiendo el ratón/dedo — sensación de volumen real
(function () {
  const zona = document.querySelector(".hero");
  const frasco = document.getElementById("heroFrasco");

  if (!zona || !frasco) return;

  const rx = gsap.quickTo(
    frasco,
    "rotationX",
    {
      duration: 0.9,
      ease: "power3.out"
    }
  );

  const ry = gsap.quickTo(
    frasco,
    "rotationY",
    {
      duration: 0.9,
      ease: "power3.out"
    }
  );

  const tz = gsap.quickTo(
    frasco,
    "z",
    {
      duration: 0.9,
      ease: "power3.out"
    }
  );


  function mover(cx, cy) {
    const r = zona.getBoundingClientRect();

    const px =
      (cx - r.left) / r.width - 0.5;

    const py =
      (cy - r.top) / r.height - 0.5;

    rx(py * -16);
    ry(px * 20);
    tz(18);
  }


  zona.addEventListener(
    "mousemove",
    e => mover(e.clientX, e.clientY)
  );

  zona.addEventListener(
    "mouseleave",
    () => {
      rx(0);
      ry(0);
      tz(0);
    }
  );

  zona.addEventListener(
    "touchmove",
    e => {
      if (e.touches[0]) {
        mover(
          e.touches[0].clientX,
          e.touches[0].clientY
        );
      }
    },
    {
      passive: true
    }
  );

  zona.addEventListener(
    "touchend",
    () => {
      rx(0);
      ry(0);
      tz(0);
    }
  );
})();


// parallax multicapa
gsap.to("#heroBg", {
  yPercent: 18,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


gsap.to("#niebla", {
  yPercent: 34,
  opacity: 0.3,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


gsap.to("#heroFloat", {
  yPercent: -38,
  scale: 1.18,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});


// imágenes que se expanden suavemente con el scroll (revelado + escala + profundidad)
document
  .querySelectorAll("[data-exp]")
  .forEach(box => {

    const el = box.querySelector(".inner");

    // 1. revelado cinematográfico: el marco se abre desde el centro
    gsap.fromTo(
      box,
      {
        clipPath: "inset(14% 18% 14% 18% round 2px)"
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 2px)",
        ease: "power2.out",

        scrollTrigger: {
          trigger: box,
          start: "top 92%",
          end: "top 38%",
          scrub: 1.4
        }
      }
    );


    // 2. expansión continua y lenta de la imagen interior
    gsap.fromTo(
      el,
      {
        scale: 1.42,
        yPercent: -7,
        filter: "brightness(.55) saturate(.8)"
      },
      {
        scale: 1,
        yPercent: 7,
        filter: "brightness(1) saturate(1)",
        ease: "none",

        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6
        }
      }
    );


    // 3. velo dorado que se disuelve al entrar en cuadro
    const velo = document.createElement("span");

    velo.style.cssText =
      "position:absolute;inset:0;pointer-events:none;z-index:2;background:linear-gradient(180deg,rgba(10,9,8,.85),rgba(201,162,39,.12))";

    box.style.position = "relative";

    box.appendChild(velo);

    gsap.to(velo, {
      opacity: 0,
      ease: "power2.out",

      scrollTrigger: {
        trigger: box,
        start: "top 88%",
        end: "top 42%",
        scrub: 1.4
      }
    });
  });


// bloques de texto con deriva parallax opuesta a la imagen
gsap.utils.toArray(".grid2").forEach(g => {

  const txt = g.querySelector("div:not(.media)");

  if (!txt) return;

  gsap.fromTo(
    txt,
    {
      yPercent: 9
    },
    {
      yPercent: -9,
      ease: "none",

      scrollTrigger: {
        trigger: g,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8
      }
    }
  );
});


// frascos de la colección: flotación lenta con el scroll
gsap.utils.toArray(".card .frasco").forEach((f, i) => {

  gsap.fromTo(
    f,
    {
      yPercent: 12
    },
    {
      yPercent: -12,
      ease: "none",

      scrollTrigger: {
        trigger: f.closest(".card"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5 + i * 0.1
      }
    }
  );
});


// aparición progresiva de textos
gsap.utils.toArray(".reveal").forEach(el => {

  if (el.closest(".hero")) return;

  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 36
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: el,
        start: "top 88%"
      }
    }
  );
});


// frasco final
gsap.from("#finFrasco", {
  opacity: 0,
  scale: 0.8,
  duration: 1.6,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#contacto",
    start: "top 65%"
  }
});


gsap.to("#finFrasco", {
  yPercent: -16,
  ease: "none",

  scrollTrigger: {
    trigger: "#contacto",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});


// header adaptativo
ScrollTrigger.create({
  start: 60,

  onUpdate: s =>
    document
      .getElementById("hdr")
      .classList.toggle("sticky", s.scroll() > 60),

  onRefresh: s =>
    document
      .getElementById("hdr")
      .classList.toggle("sticky", s.scroll() > 60)
});


// menú móvil
const links = document.getElementById("links");

document
  .getElementById("burger")
  .addEventListener(
    "click",
    () => links.classList.toggle("open")
  );

links
  .querySelectorAll("a")
  .forEach(a =>
    a.addEventListener(
      "click",
      () => links.classList.remove("open")
    )
  );
  