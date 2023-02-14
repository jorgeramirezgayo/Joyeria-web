✨ Actualización [(Puedes ver la lista de cambios aquí)](https://github.com/jorgeramirezgayo/joyeria-web#-actualización)

# Joyería web
Este proyecto es un trabajo de clase con fines educativos. En este, se pedía 
hacer una página web corporativa para una empresa de temática a elegir. La 
página tiene que contar con una maquetación de 12 columnas, 4 páginas con 
diferentes secciones inventadas y su respectivo diseño responsive con mobile 
first. Además, hay que diseñar su prototipo y maquetación con Figma.

## Tecnologías usadas
![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/HTML.png "HTML.")
![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/CSS.png "CSS.")
![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/SASS.png "SASS.")
![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/JS.png "JavaScript.")

## Proceso
Como tema a elegir se me ocurrió hacerlo sobre una joyería. Pensé que una idea
fácil sería elegir un oficio tradicional. Buscando durante una semana, al final
la idea me encontró a mí . Vi una foto de un anillo en Instagram y decidí que 
esta podía ser buena idea, porque las joyas como concepto pretenden ser bonitas. 

El diseño lo tenía claro, quería una página luminosa y limpia, a la vez que 
elegante y colorida, por lo que el color principal sería el blanco.

Para desarrollar las secciones fui a buscar referencia a páginas que ya existen,
para ello busqué en Google Maps "joyería" y las tiendas que me salían alrededor 
iba cotilleando sus páginas web, porque muchas de estas están más orientadas a
ser un portfolio que un e-commerce.

A partir de aquí, empecé a desarrollar el prototipo en Figma. Desde el principio,
me apoyé en la cuadrícula que ofrece para dibujar las 12 columnas y establecer
las proporciones.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Prototipo%20Inicio.jpg "Prototipo página Inicio.")

Una vez acabado el prototipo, pasé a simular como sería su resultado final.
Aquí, tuve que trabajar especialmente el storytelling para que el contenido 
tuviera coherencia y encontrar fotos que estuvieran relacionados con este.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Maquetaci%C3%B3n%20Inicio.jpg "Maquetación página Inicio.")

Durante el proceso de conseguir imágenes, tuve que optar por editar muchas de 
estas con Photoshop para que se ajustaran a lo que buscaba.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Edit%201.jpg "Foto editada 1.")

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Edit%202.png "Foto editada 2.")

El diseño completo en Figma se puede consultar 
[aquí](https://www.figma.com/file/poqAdfQ4QqWc9Lu13ZJDg1/Untitled?node-id=0%3A1&t=Zh3dswX4Cdqk8QhB-1).

En cuanto al resultado final, me puse como reto que tenía que quedar exactamente
igual a la maquetación, ya fuera para bien o para mal. Con esto quería conseguir
que si no me sale, buscarme la vida hasta conseguirlo.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Resultado%20final.jpg "Resultado final.")

*Versión en ordenador.*

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Resultado%20final%20mobile.jpg "Resultado final móvil")

*Versión en móvil.*

El logo de la marca es el de la foto original de Instagram pero en este caso, en 
vez de poner su foto me molesté en reconstruirlo con puro HTML y CSS, respetando
su tipografía y proporciones.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Logo.jpg "Logo.")

Una vez acabada, me animé a meterle un poco de JavaScript a la galería para 
aprender un poco más y que se pareciera al formato de Instagram.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Lightbox.jpg "Lightbox.")

La página final se puede ver 
[aquí](https://jorgeramirezgayo.github.io/joyeria-web/).

Como conclusión, esta página ha sido la primera página real que he hecho y he
aprendido una barbaridad con ella. La acabé a últimos de Noviembre. Analizándolo
ahora, después de haber aprendido cosas más avanzadas, me gustaría hacer una 
segunda versión con buenas prácticas.

Si has llegado hasta aquí, espero que te haya gustado. Con esto me 
despido, muchas gracias por tu interés 😄, ¡un saludo!

## ✨ Actualización
Esta es la segunda versión de la página en la cual me he centrado en implementar las buenas prácticas que he ido aprendiendo.
- BEM -> Mayor especificidad y escalabilidad.
Esta es una comparativa de la especificidad antes de utilizar bem y después. Cuanto mayor especificidad, mayor escalabilidad tendrá la página y más fácil será de mantener. Menos picos indican mejor resultado.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/CSS%20Specificity%20Graph.jpg "CSS Specificity Graph")

- Todos los tamaños en px ahora en em/rem para que se adapte al tamaño de la letra del dispositivo.
- Altura de la imagen principal y banner de ayuda corregidas. El problema era que la imagen no se adaptaba bien al tamaño de la página, solucionado con object-fit. Alternativa más compatible con navegadores antiguos -> utilizar background: url().
- Trabajos recientes con display grid. Al ser una cuadrícula en 2D viene mejor grid que flex.
- Formulario con el mismo tamaño y espacio de letra. Por defecto, los <input>, los <textarea> y otros elementos de formulario tienen diferente tamaño de letra entre ellos.

![](https://github.com/jorgeramirezgayo/joyeria-web/blob/main/images/README/Form%20font.jpg "Formulario tamaño letra")

- Labels "invisibles" en los input para los lectores de pantalla. Label vinculado al checkbox.
- Js inline -> Externo, dividido en partes y actualizado.
- Formulario con sencilla validación.
- Animaciones con scroll (con reduced-motion para quienes no quieran animaciones). 
- Mini-rework footer.
- Scroll behaviour: smooth.
- Todas las etiquetas img tienen su respectivo alt.
- Rutas relativas, cambio de nombre de carpeta images->img, estilos.css->index.css.
