# Por qué retomé mi proyecto de aprender frontend

Cuando empecé a programar, mi primer contacto fue con HTML, CSS y algo de javascript. Estaba en mi la ilusión de hacer páginas web que cualquiera pudiera visitar y crear una por cada idea que tuviera. También proyectaba tenerlo como oficio, haciendo páginas web para terceros y cobrando por eso.

Con el tiempo me fue frustrando la dificultad de aplicar estilos css para lograr la disposición de elementos que quería, y sobre todo que funcione para todos los browsers.

El momento de inflexión fue cuando para un trabajo de facultad estuve trasnochando para acomodar dos imágenes encima de un div para que ante el hover, cambiaran de opacidad y resaltaran visualmente. Después de horas de googlear, debuggear, fallar y reintentar terminó quedando como yo quería.

De curioso nomás, lo probé en otro explorador para ver cómo se veía. El resultado fue espantoso. Resulta que estaba usando una propiedad exclusiva de Google Chrome que en Microsoft Edge se ignoraba y el resultado era una imagen que cubría el 70% de la pantalla. Recuerdo vivamente que en ese momento decidí no dedicarme a la programación web. El trabajo práctico lo aprobé (La demo obviamente la hice con Chrome) y desde ahí no volví a hacer frontend hasta hace unos pocos meses.

## Por qué el cambio?

Si nunca fui bueno para el desarrollo de frontend, por qué insistir? En principio porque soy bastante obstinado, en el 90% de la vida esto es un problema, pero resulta que para la programación es una propiedad de la personalidad bastante útil.

Empecé queriendo personalizar `GraphiQL` con React pero eran demasiados conceptos que absorber y no me generó el suficiente entusiasmo como para hacerlo y abandoné ese proyecto. 

Después se me ocurrió retomar esa tarea pendiente de hacer un blog personal para aprender Django y de paso aprender Frontend. 

Justo en ese momento, dos personas distintas que se dedican a la programación me hablaron muy bien de Vue.js. Así que mi plan era hacer un blog personal, con una API GraphQL en Django+Strawberry y el front en Vue.js.

Tal cual me comentaron Edu y Segio, Vue.js estaba muy bueno, era fácil de aprender y en poco tiempo pude personalizar  un par de plantillas para darle la apariencia minimalista que quería para mi blog. Incluyendo internacionalización y tema oscuro de la mano de Tailwind (Que dicho sea de paso se merece su propio blogpost)

En síntesis, retomé la idea de aprenderlo porque sé que es una herramienta muy útil a la hora de entender los productos de software de manera holística y también porque quería demostrarme que podía superar esa curva de aprendizaje que en su momento se me había hecho muy empinada. 

## Observaciones

A veces las cosas no salen a la primera, ni a la segunda ni a la undécima. La programación tiene mucho de eso y aprender a lidiar con ello es muy útil para seguir aprendiendo cosas nuevas.

Frontend tiene MUY buen tooling. Desde el desarrollo hasta el despliegue de la aplicación ofrecen una experiencia sin grandes obstáculos. 

Javascript es el lenguaje más ubicuo hoy en día. Al correr en el browser es una gran herramienta para todo desarrollador de software

`npm` como package manager + task manager ofrece una integración superior a `pip` e incluso está más maduro que alternativas más parecidas como `poetry`

`Javascript` es menos declarativo que `Python` en algoritmos accesorios a la lógica de negocios. Por nombrar algunos: Obtener el conjunto sin repetidos de una lista, Uso de la herencia, determinar la falsedad de un objeto de forma genérica, etc.

Tener el intérprete de javascript en el browser es muy poderoso. Permite debuggear rápidamente.

A veces la cantidad de tools puede abrumar un poco, todo lo necesario para minificar, comprimir, compatibilizar, optimizar el código puede ser mayor a lo que uno está acostumbrado en Python.

 Javascript es al desarrollo Web lo que el Inglés es al desarrollo de Software. Podés hacerlo sin saberlo, pero si lo sabés, tenés abierto otro abánico de recursos para hacer todo más fácil