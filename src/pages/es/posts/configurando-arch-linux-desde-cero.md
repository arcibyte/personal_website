---
layout: ../../../layouts/PostLayout.astro
title: "Por qué uso Arch?"
pubDate: 2025-12-23
description: "Cuento mi experiencia usando Arch Linux como mi sistema operativo de uso diario, sus ventajas y porqué es un entorno que me gusta mucho."
author: "Jhon Arciniegas"
image:
  url: "https://example.com/image.jpg"
  alt: "Experiencia con Arch Linux"
tags: ["Arch Linux", "Experiencia", "Linux"]
---

Antes de hablar porqué terminé usando Arch tengo que decir que usé varias distribuciones de Linux, entre esas Fedora, que la utilicé por más de 2 años sin embargo, siempre quise tener más control sobre mi sistema y ya había oído de Arch varios años atrás pero no me había animado a instalarlo.

Ya había visto los "rices" que publicaban con arch y realmente me pareció supremamente interesante y no veía el momento de tener mi propio arroz, asi que comencé a leer la wiki de Arch y tras varias pruebas en máquinas virtuales cree el ejecutable y lo puse como primera opción desde la BIOS.

Sin dar tantos detalles, la razón final que me llevó a tener Arch fue los Tiling Window Managers, como Hyprland que me pareció muy bonito, entonces hice un dual boot y dejé a Arch como entorno de desarrollo y a Windows por si llegaba a necesitar compatibilidad y para la universidad pero luego me di cuenta que cada vez aborrecía más a Windows y ya no me resultaba útil tener ambos si solo iba a usar casi todo el tiempo uno.

Ya ha pasado más de un año desde entonces, he hecho mis propios dotfiles que están un poco abandonados pero ahí los dejé en GitHub, actualmente, tras varios cambios y pruebas encontré una configuración hermosa que fue creada por JaKooLit, tomé su configuración y le hice algunos cambios para mí.

### Ventajas que he encontrado

Lo primero que noté fue la libertad, puedes instalar exactamente lo que necesitas y nada más. No hay programas precargados que nunca vas a usar ocupando espacio, es como construir tu propia casa desde cero en lugar de comprar una ya hecha con un montón de cosas que no quieres.

El AUR es de lo mejor, prácticamente cualquier programa que necesites está ahí y la instalación es muy fácil con yay o paru. Ya no tengo que andar buscando PPAs raros o descargando archivos .deb.

La wiki de Arch es una de las más completa, la comunidad ha formado una gran docuemntación. Cada vez que tengo un problema, ahí está la respuesta, bien explicada y actualizada.

El rolling release significa que siempre tengo lo último sin tener que reinstalar el sistema cada seis meses o un año. Simplemente hago un `pacman -Syu` y listo, todo actualizado.

### Las desventajas

No todo iba a ser bueno, Arch puede romperse si no sabes lo que estás haciendo. Una actualización mal hecha o instalar cosas sin leer puede dejar el sistema inusable. He tenido que usar el chroot desde un USB más de una vez para arreglar cosas.

La instalación inicial no es para todo el mundo. Aunque ahora existe archinstall que lo hace más fácil, sigue siendo intimidante comparado con un Ubuntu o Mint donde básicamente das siguiente, siguiente, siguiente y ya.

Algunos drivers propietarios pueden ser un dolor de cabeza, especialmente con tarjetas NVIDIA. A veces toca investigar bastante para que todo funcione correctamente.

Y bueno, el tiempo. Configurar todo como quieres toma tiempo, mucho tiempo. Entre investigar, probar, romper, arreglar y volver a probar, puedes pasar días hasta tener el sistema perfecto. Pero para mí ha valido cada minuto.

### ¿Lo recomendaría?

Si eres alguien a quien le gusta tener control total sobre su sistema, aprender cómo funciona todo por dentro y no te aburre leer documentación, definitivamente dale una oportunidad a Arch. Pero si solo quieres algo que funcione sin complicaciones para usar el navegador y office, mejor quédate con algo más tradicional.

Para mí, Arch se convirtió en mi hogar digital y no me veo volviendo a otra cosa pronto. A menos... que sea NixOS. He estado investigando sobre configuración declarativa y la idea de poder reproducir exactamente mi sistema en cualquier máquina suena tentadora, pero esa es historia para otro post.
