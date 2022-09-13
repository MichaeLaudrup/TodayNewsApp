<h1>Bienvenido a New's App</h1>
<p>A continuación te dejo algunas consideraciones a tener en cuenta</p>
<h2>Proceso de instalación</h2>
<ol>
    <h3>BACK_END</h3>
    <li>Tener instalado y bien configurado docker y docker-compose</li>
    <li>Abrir carpeta today-news-back y desde la raiz ejecutar el comando "docker-compose build" y posteriormente "docker-compose up</li>
    <p>En este punto ya se debería tener el back-end montado y escuchando</p>
</ol>
<hr>
<h3>CONTRATOS FRONT-END - BACK-END</h3>
<p>La colección de llamadas se puede obtener en la carpeta contratos front-back</p>
<hr>
<ol>
    <h3>FRONT_END</h3>
    <li>Tener instalada ultima versión de Angular-cli y de nodejs</li>
    <li>Ejecutar el comando "ng serve" en el directorio raiz de la carpeta "today-news-front</li>
     <li>Tener instalado un plug-in en el navegador que permita llamada cors</li>
</ol>
<hr>
<h2>Consideraciones técnicas</h2>
<ul>
    <li>Los componentes de front deberían ser tontos y no comunicarse directamente con servicios que hacen peticiones al back, lo ideal sería implementar un patrón
    arquitectónico Flux en el front con NGRX pero dado lo pequeña que es la aplicación y se sabe de antemano que no va a crecer se ha omitido este desarrollo haciendo los componentes más acoplados con servicios de comunicación back</li>
    <li>El back-end si fuera a crecer mucho debería fragmentarse en sub-proyectos independientes (uno para autenticación) otro para (noticias) y en un futuro más lejano        otros micro-servicios para otras funcionalidades. </li>
    <li>Falta más desarrollo de una programación robusta que permita hacer al software más resistente a los fallos</li> 
</ul>
