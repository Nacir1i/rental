<script setup lang="ts">
import type { SocialMediaLink } from '@/types';

    const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
        {
            icon: 'i-fa6-brands-facebook-f',
            href: '/'
        },
        {
            icon: 'i-fa6-brands-x-twitter',
            href: '/'
        },
        {
            icon: 'i-fa6-brands-instagram',
            href: '/'
        },
    ]
</script>

<template>
    <div class="w-full flex justify-center p-4 bg-black/60 border-b border-white">
        <div class="w-[1170px] flex justify-center lg:justify-between items-center">
            <div class="flex items-center gap-3 text-white">
                <Icon name="i-fa6-solid-phone" class="text-white text-xs" />
                <p>06 XX XX XX XX</p>
                <Icon name="i-fa6-solid-envelope" class="text-white text-xs" />
                <p>lol.false@email.fr</p>
            </div>
            <div class="hidden items-center gap-5 lg:flex">
                <Icon class="text-white cursor-pointer" v-for="(link, index) in SOCIAL_MEDIA_LINKS" :key="index" :name="link.icon" />
            </div>
        </div>
    </div>
</template>