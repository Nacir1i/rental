<script setup lang="ts">
    import type { NavLink, SocialMediaLink } from '@/types';

    const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
        {
            icon: 'i-fa6-brands-facebook-f',
            href: '/',
            label: "Facebook"
        },
        {
            icon: 'i-fa6-brands-x-twitter',
            href: '/',
            label: "Twitter"
        },
        {
            icon: 'i-fa6-brands-instagram',
            href: '/',
            label: "Instagram"
        },
    ]
    const LINKS: NavLink[] = [
        {
            label: "home",
            href: "/"
        },
        {
            label: "our cars",
            href: "/cars/listing"
        },
        {
            label: "our news",
            href: "/"
        },
        {
            label: "contact",
            href: "/"
        }
    ]
</script>

<template>
    <section class="bg-slate-100">
        <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2 uppercase">
                <div class="px-5 py-2" v-for="(link, index) in LINKS" :key="index">
                    <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                </div>
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
                <span v-for="(link, index) in SOCIAL_MEDIA_LINKS" :key="index" class="text-gray-400 hover:text-gray-500 cursor-pointer">
                    <span class="sr-only">{{ link.label }}</span>
                    <Icon class="w-5 h-5" :name="link.icon" />
                </span>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                © 2024 Bzoula, Inc. All rights reserved.
            </p>
        </div>
    </section>
</template>