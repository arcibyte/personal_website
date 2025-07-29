---
layout: ../../../layouts/PostLayout.astro
title: "Setting Up Arch Linux from Scratch"
pubDate: 2022-07-01
description: "Exploring the intricacies of setting up Arch Linux from scratch in my inaugural blog post."
author: "Jhon Arciniegas"
image:
  url: "https://example.com/image.jpg"
  alt: "Arch Linux Installation"
tags: ["Arch Linux", "installation", "Linux"]
---

## Step-by-Step Guide: Installing Arch Linux  
January 7, 2024

### 1. Prepare Your System

Before diving into the Arch Linux installation, make sure you have the required hardware and a reliable internet connection. Back up any important data, as the installation process involves partitioning.

### 2. Boot from the Arch Linux Installation Media

Insert the Arch Linux installation media (USB, CD, etc.) into your system. Boot from it to access the Arch Linux live environment.

### 3. Connect to the Internet

Establish an internet connection via Ethernet or Wi-Fi. For Wi-Fi, you can use commands like `wifi-menu` or `iwctl` to connect to a network.

### 4. Update the System Clock

Synchronize the system clock with the internet using the following command:

```bash
timedatectl set-ntp true
```

### 5. Partition the Disk
Use a partitioning tool like `cfdisk`, `fdisk` o `parted` po partition your disk. Create partitions for
`root (/), home (/home) y swap`

### 6. Format the Partitions
```bash
mkfs.ext4 /dev/sdX1
#### Format the swap partition    
mkswap /dev/sdX3
#### Enable swap      
swapon /dev/sdX3  
```

### 7. Mount the Partitions
Mount the root partition:
```bash
mount /dev/sdX1 /mnt 
#### Create home directory    
mkdir /mnt/home 
#### Mount the home partition         
mount /dev/sdX2 /mnt/home 
```

### 8. Install the Base System
```bash
`pacstrap` /mnt base linux linux-firmware
```

### 9. Configure the System
Generate an fstab file to mount the partitions:
```bash
`genfstab -U /mnt >> /mnt/etc/fstab`
Chroot into the installed system:
`arch-chroot /mnt`
```
### 10. Install the Bootloader
Install a bootloader like GRUB:
```bash
pacman -S grub
#### Replace sdX with your disk 
grub-install --target=i386-pc /dev/sdX  
grub-mkconfig -o /boot/grub/grub.cfg
```

### 11. Configure System Locale
```bash
locale-gen
echo "LANG=es_ES.UTF-8" > /etc/locale.conf
```

### 12. Set Hostname and Network Configuration
Set a hostname and configure the network settings in `/etc/hostname and /etc/hosts`

### 13. Set Root Password
Set the root password:
```bash
passwd
```

### 14. Create a User Account
Create a user account and add it to the wheel group for sudo privileges
```bash
useradd -m -G wheel username
passwd username
```

### 15. Install Additional Software
Install any additional software as needed, including a display server, desktop environment, and other desired packages.

### 16. Reboot
Exit the chroot environment, unmount the partitions, and reboot:
```bash
exit
umount -R /mnt
reboot
```
