# XC Gradient · Technical Overview — Guion palabra por palabra (ES)

> 5 minutos · Santander X · Definición arquitectónica del problema y de nuestra solución.
> Leer en voz natural, pausado. Cada bloque corresponde a una diapositiva del deck.

---

## Slide 1 · Portada (0:00 – 0:30)
**En pantalla:** TECHNICAL OVERVIEW · XC Gradient para Santander X

> "Hola, soy Oriol Farrés, CEO de XC Gradient.
>
> En este vídeo os quiero responder a tres preguntas muy sencillas.
>
> Primera: por qué la IA hoy es imprescindible para cualquier empresa.
>
> Segunda: si es tan imprescindible, por qué la mayoría de empresas todavía no la están usando de verdad.
>
> Y tercera: por qué nosotros sí podemos resolverlo."

*(Pausa breve. Avanzar.)*

---

## Slide 2 · 01 · La IA es clave, pero no lo es todo (0:30 – 1:15)
**Objetivo en pantalla:** La IA es imprescindible, pero tiene sus casos de uso — no sustituye a todo.

> "Lo primero que os voy a decir es que todo lo que estamos escuchando sobre la IA es verdad. Es importantísima. Implementarla ya no es una opción, es clave para cualquier empresa que quiera seguir siendo competitiva en los próximos años.
>
> Pero ojo: que sea clave no significa que nos vaya a sustituir en todos los ámbitos. Como toda tecnología, tiene sus casos de uso.
>
> El ejemplo más claro son los algoritmos deterministas. Cuando necesitas encontrar siempre la mejor solución posible, con garantías matemáticas, ahí la IA no puede competir. Porque la IA, por naturaleza, no es determinista: no te garantiza darte dos veces la misma respuesta.
>
> Entonces, ¿dónde aporta valor de verdad? Ahí es donde quería llegar."

---

## Slide 2.1 · Dónde brilla la IA — y por qué las pymes se quedan fuera (1:15 – 2:15)
**En pantalla:** Contexto automático · Vigilancia proactiva · Las pymes: nadie entra.

> "Pensad en cómo usa hoy la IA la mayoría de la gente. Abrís ChatGPT, le tenéis que pasar el contexto cada vez, copiar y pegar un correo, un documento, un manual... y en la siguiente pregunta ya se ha olvidado la mitad. Es frustrante, y al final acabas desconfiando.
>
> Ahora imaginaos otra cosa completamente distinta.
>
> ¿Qué pasa si tienes toda la información de tu empresa organizada, y un sistema al que tú le preguntas algo y él solo recupera automáticamente la información relevante? Sin copiar, sin pegar, sin olvidos.
>
> Y vamos un paso más allá: ¿qué pasa si encima tienes a la IA vigilando por ti? Avisándote, por ejemplo, de que esa máquina concreta está fallando últimamente mucho por el mismo motivo. O diciéndote: oye, este año viene la auditoría ISO y piden esta documentación nueva que tú todavía no tienes preparada.
>
> Ahí es donde la IA brilla de verdad. Ahí es donde deja de ser un juguete y se convierte en una ventaja real.
>
> Y aquí está el problema, y es el que nosotros hemos visto: a las pymes, nadie les entra a hacer esto. Es demasiado costoso, y cada caso es diferente. Nadie quiere meterse dentro de cada planta, con máquinas distintas, protocolos distintos, veinte años de papeles acumulados. No les sale rentable.
>
> Y ahí es exactamente donde entramos nosotros."

---

## Slide 3 · 02 · El Producto — Un sistema vivo que aprende con el tiempo (2:15 – 3:15)
**Objetivo en pantalla:** Qué pasa cuando montas un sistema de documentación y le haces ingesta continua de información.
**En pantalla:** Documentación centralizada · Ingesta continua · Se vuelve más inteligente con el tiempo.

> "Entonces, ¿qué hacemos nosotros? Imaginaos que a esa pyme le montamos un sistema donde toda su documentación vive de forma centralizada, organizada, accesible.
>
> Pero no nos quedamos ahí. Una vez está montado, hacemos una ingesta continua de la información de la empresa. Todo lo que va pasando en el día a día entra en el sistema: incidencias nuevas, protocolos actualizados, decisiones, cambios, aprendizajes de los operarios.
>
> Y aquí es donde está la magia. Obviamente, cuanto más tiempo pasa, más inteligente se vuelve el sistema. No es una herramienta estática que instalas y se queda igual. Es un sistema vivo que cada semana sabe más que la anterior. Cada mes entiende mejor esa fábrica concreta, sus máquinas, sus procesos, sus particularidades.
>
> Al cabo de unos meses, lo que tienes dentro de la empresa ya no es una base de datos: es algo muy parecido a un cerebro interno, moldeado al detalle por la realidad de esa planta."

---

## Slide 4 · 03 · El Motor — Cómo funciona realmente, RAG para negocios (2:30 – 3:15)
**Objetivo en pantalla:** Mostrar profundidad técnica con una analogía que cualquier inversor entienda.
**En pantalla:** Fuentes → Embeddings → RAG.

> "Vamos un nivel por debajo. Técnicamente, usamos un marco que se llama RAG, Retrieval Augmented Generation. En lenguaje de negocio: convertimos el desorden documental de la fábrica en decisiones accionables.
>
> La analogía: una base de datos tradicional es de dos dimensiones, filas y columnas. Eso sirve para una contabilidad, no para capturar el contexto de una planta industrial.
>
> Lo que hacemos nosotros es coger manuales, registros y notas, trocearlos en fragmentos pequeños, y convertirlos en embeddings. Eso crea una base de datos de muchas dimensiones, donde cada fragmento se posiciona según su significado, no según su orden."

---

## Slide 5 · Un caso concreto: qué vive el operario (3:15 – 3:50)
**En pantalla:** Ejemplo real de consulta en planta.

> "Para que esto no se quede en abstracto, os pongo un caso concreto.
>
> Imaginaos a un operario en planta. La máquina se para y le aparece en pantalla un error, pongamos el E-47. Hoy, sin nosotros, ese operario coge el teléfono, llama al técnico de mantenimiento, y si no está, espera. O se pone a buscar en un manual de quinientas páginas que no sabe ni dónde está.
>
> Con nuestro sistema, lo que hace es preguntárselo directamente. Y el sistema le responde algo como:
>
> *'No te preocupes. Este error E-47 ya apareció hace cinco años en esta misma máquina. Se solucionó recalibrando el sensor de presión del eje 2. Si después de recalibrarlo sigue fallando, verifica también que la válvula de refrigeración no esté obstruida, porque en el histórico aparece como causa secundaria.'*
>
> Fijaos en lo que acaba de pasar. El operario no ha llamado a nadie, no ha perdido media jornada, y además tiene la respuesta con el contexto exacto de esa fábrica. No una respuesta genérica de internet: la respuesta concreta de su planta, basada en su historial real."

---

## Slide 6 · 04 · Nuestra barrera defensiva — La ventaja del tiempo (3:50 – 4:45)
**Objetivo en pantalla:** Por qué ningún competidor puede replicarnos de un día para otro.
**En pantalla:** Línea temporal Mes 1 → Mes 3 → Mes 6 → Mes 12.
**Banner negro:** Barrera defensiva = aprendizaje local acumulado + integración en la operativa real.

> "Aquí llega la pregunta clave: ¿por qué no puede otro competidor entrar mañana y hacer exactamente lo mismo que nosotros? Y esta es nuestra ventaja estructural, nuestra verdadera barrera defensiva.
>
> Centralizar todo el conocimiento operativo de una empresa no se logra en una tarde, ni en un mes. Es un proceso progresivo. Y precisamente en esa progresión está lo valioso.
>
> Nuestra solución no es una herramienta estática que instalas y se queda igual. Es un sistema vivo, que aprende mientras la fábrica opera. Cada incidencia resuelta, cada protocolo revisado, cada ajuste de proceso entra al instante en la base de conocimiento.
>
> Con los meses, el sistema se vuelve exponencialmente más inteligente y, sobre todo, hiper-especializado en esa planta concreta. Al cabo de un año, es literalmente irremplazable: nadie desde fuera puede reproducir lo que el sistema ya ha aprendido dentro.
>
> En Estados Unidos hay empresas haciendo algo parecido, pero para oficinas: agilizan trabajo administrativo, gestión documental de despacho. Nosotros jugamos en un terreno completamente distinto: la planta industrial, donde se crea el valor real de la empresa.
>
> Una inteligencia artificial genérica, por muy potente que sea, no puede competir con un sistema local que ha absorbido durante meses el funcionamiento real, los vicios y las particularidades de una fábrica concreta. Ese aprendizaje acumulado es nuestra barrera. Y cada mes que pasa, es más alta."

---

## Slide 7 · Cierre (4:45 – 5:00)
**En pantalla:** NO VENDEMOS CHATBOTS. Construimos el cerebro operativo de la pyme industrial.

> "Y si tuviera que resumirlo todo en una frase, sería esta:
>
> No vendemos asistentes conversacionales. Construimos el cerebro operativo de la pyme industrial.
>
> Inteligencia artificial aplicada donde realmente se crea el valor: dentro de la planta.
>
> Muchas gracias."

---

## Notas de entrega

- **Ritmo:** ~160 palabras por minuto. Respirar en cada punto.
- **Énfasis fuerte:** "predictor de tokens", "determinista y verificable", "no vendemos chatbots", "insustituible".
- **Pausa larga (2s):** tras "se lo inventa" (Slide 2), tras "el downtime es solo el gancho" (Slide 3), y antes de "Gracias" (Slide 7).
- **Tono:** seguro y directo. Es una definición arquitectónica, no un pitch emocional.
- **Si hay preguntas sobre RAG:** tienes el Slide 4 como anclaje visual — señala el flujo Fuentes → Embeddings → RAG.
