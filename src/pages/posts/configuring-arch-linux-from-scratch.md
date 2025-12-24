---
layout: ../../layouts/PostLayout.astro
title: "Why do I use Arch?"
pubDate: 2025-12-23
description: "I share my experience using Arch Linux as my daily driver operating system, its advantages and why it's an environment I really enjoy."
author: "Jhon Arciniegas"
image:
  url: "https://example.com/image.jpg"
  alt: "Experience with Arch Linux"
tags: ["Arch Linux", "Experience", "Linux"]
---

Before talking about why I ended up using Arch, I have to say that I used several Linux distributions, including Fedora, which I used for over 2 years. However, I always wanted to have more control over my system and had heard about Arch several years ago but hadn't been motivated to install it.

I had already seen the "rices" that people posted with Arch and I found it extremely interesting, and I couldn't wait to have my own rice, so I started reading the Arch wiki and after several tests in virtual machines I created the bootable and set it as the first option in the BIOS.

Without going into too many details, the final reason that led me to have Arch was the Tiling Window Managers, like Hyprland which I found very beautiful, so I made a dual boot and left Arch as my development environment and Windows in case I needed compatibility and for university, but then I realized that I increasingly hated Windows and it was no longer useful to have both if I was only going to use one almost all the time.

More than a year has passed since then, I made my own dotfiles that are a bit abandoned but I left them on GitHub. Currently, after several changes and tests, I found a beautiful configuration that was created by JaKooLit, I took his configuration and made some changes for myself.

### Advantages I've found

The first thing I noticed was the freedom, you can install exactly what you need and nothing more. There are no preloaded programs that you'll never use taking up space, it's like building your own house from scratch instead of buying one already made with a bunch of things you don't want.

The AUR is one of the best things, practically any program you need is there and installation is very easy with yay or paru. I no longer have to go around looking for weird PPAs or downloading .deb files.

The Arch wiki is one of the most complete, the community has built great documentation. Every time I have a problem, the answer is there, well explained and updated.

Rolling release means I always have the latest without having to reinstall the system every six months or a year. I simply do a `pacman -Syu` and that's it, everything updated.

### The disadvantages

Not everything was going to be good, Arch can break if you don't know what you're doing. A badly done update or installing things without reading can leave the system unusable. I've had to use chroot from a USB more than once to fix things.

The initial installation is not for everyone. Although archinstall now exists which makes it easier, it's still intimidating compared to Ubuntu or Mint where you basically click next, next, next and you're done.

Some proprietary drivers can be a headache, especially with NVIDIA cards. Sometimes you have to do quite a bit of research to get everything working properly.

And well, the time. Configuring everything the way you want takes time, a lot of time. Between researching, testing, breaking, fixing and testing again, you can spend days until you have the perfect system. But for me it has been worth every minute.

### Would I recommend it?

If you're someone who likes to have total control over their system, learn how everything works inside and you don't mind reading documentation, definitely give Arch a try. But if you just want something that works without complications to use the browser and office, better stick with something more traditional.

For me, Arch became my digital home and I don't see myself going back to anything else anytime soon. Unless... it's NixOS. I've been researching declarative configuration and the idea of being able to reproduce exactly my system on any machine sounds tempting, but that's a story for another post.
