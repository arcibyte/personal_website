---
layout: ../../layouts/PostLayout.astro
title: "Configurando Arch Linux desde cero"
pubDate: 2022-07-01
description: "Exploring the intricacies of setting up Arch Linux from scratch in my inaugural blog post."
author: "Jhon Arciniegas"
image:
  url: "https://example.com/image.jpg"
  alt: "Arch Linux Installation"
tags: ["Arch Linux", "installation", "Linux"]
---
## Guía Paso a Paso: Instalación de Arch Linux
7 de enero de 2024

### 1. Preparar tu Sistema

Antes de sumergirte en la instalación de Arch Linux, asegúrate de contar con el hardware necesario y una conexión a internet confiable. Realiza una copia de seguridad de datos importantes, ya que el proceso de instalación implica particionar.

### 2. Arrancar desde el Medio de Instalación de Arch Linux

Inserta el medio de instalación de Arch Linux (USB, CD, etc.) en tu sistema. Arranca desde el medio para acceder al entorno en vivo de Arch Linux.

### 3. Conectar a Internet

Establece una conexión a internet mediante Ethernet o Wi-Fi. Para Wi-Fi, puedes usar comandos como wifi-menu o iwctl para conectarte a una red.

### 4. Actualizar el Reloj del Sistema

Sincroniza el reloj del sistema con internet utilizando el comando timedatectl:

```bash
timedatectl set-ntp true
```

### 5. Particionar el Disco

Utiliza una herramienta de particionado como cfdisk, fdisk o parted para particionar tu disco. Crea particiones para 
`root (/), home (/home) y swap`

### 6. Formatear Particiones

```bash Formatea las particiones utilizando los sistemas de archivos adecuados.
# Formatear la partición root
mkfs.ext4 /dev/sdX1
# Formatear la partición home
mkfs.ext4 /dev/sdX2 
# Formatear la partición swap    
mkswap /dev/sdX3
# Habilitar swap      
swapon /dev/sdX3        
```

### 7. Montar Particiones

```bash Monta la partición root en /mnt y la partición home en /mnt/home:
# Montar la partición root
mount /dev/sdX1 /mnt 
# Crear directorio home    
mkdir /mnt/home 
# Montar la partición home         
mount /dev/sdX2 /mnt/home 
```

### 8. Instalar el Sistema Base

Instala el sistema base utilizando el comando pacstrap: ```pacstrap /mnt base linux linux-firmware```

### 9. Configurar el Sistema

Genera un archivo fstab para montar las particiones:
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Chroot al sistema instalado:
```bash
arch-chroot /mnt
```
### 10. Instalar el Cargador de Arranque

Instala un cargador de arranque como GRUB:
```bash
pacman -S grub
# Reemplaza sdX por tu disco 
grub-install --target=i386-pc /dev/sdX  
grub-mkconfig -o /boot/grub/grub.cfg
```
### 11. Configurar la Configuración Regional del Sistema

Edita /etc/locale.gen y descomenta la configuración regional deseada. Genera la configuración regional:

```bash locale-gen
echo "LANG=es_ES.UTF-8">/etc/locale.conf
```

### 12. Establecer el Nombre de Host y Configuración de Red
Establece un nombre de host y configura las opciones de red en /etc/hostname y /etc/hosts.

### 13. Crear Contraseña de Root
Establece la contraseña de root:
```bash
passwd
```
### 14. Crear Cuenta de Usuario

```bash Crea una cuenta de usuario y agrégala al grupo wheel para privilegios de sudo:
useradd -m -G wheel nombreusuario
passwd nombreusuario
```

### 15. Instalar Software Adicional
Instala software adicional según sea necesario, incluyendo un servidor de visualización, entorno de escritorio y otros paquetes deseados.

### 16. Reiniciar
Sal del entorno chroot, desmonta las particiones y reinicia:
```bash
exit
umount -R /mnt
reboot
```
¡Felicidades! Has instalado exitosamente Arch Linux. Explora y personaliza tu sistema según tus preferencias.

