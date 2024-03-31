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
    <footer class="relative w-full h-[600px]">
        <NuxtImg class="object-cover w-full h-full" src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div class="w-full h-full absolute top-0 left-0 bg-red-500/15 flex flex-col items-center justify-center gap-14 lg:gap-24">
            <div class="h-10 w-36 bg-red-300" />
            <div class="flex-col justify-center items-center hidden lg:flex">
                <p class="text-slate-400 uppercase">: SHOWROOM LOCATION :</p>
                <p class="text-white">32 Market St.128, Deeja Town, Florida, CA 12345</p>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-center justify-center gap-14">
                <p class="text-white"><span class="text-slate-700 uppercase">phone:</span> 06 XX XX XX XX</p>
                <p class="text-white"><span class="text-slate-700 uppercase">fax:</span> XX XX XX XX</p>
                <p class="text-white"><span class="text-slate-700 uppercase">email:</span> lolrandomxd@email.outllook</p>
                <p class="text-white"><span class="text-slate-700 uppercase">work hours:</span> never:26pm-again:-1am</p>
            </div>
            <div class="flex items-center justify-center gap-4">
                <span v-for="(link, index) in SOCIAL_MEDIA_LINKS" :key="index" class="bg-slate-300 flex justify-center items-center p-0.5 rounded-full cursor-pointer">
                    <span class="bg-slate-700 flex justify-center items-center rounded-full p-2">
                        <Icon class="text-white" :name="link.icon" />
                    </span>
                </span>
            </div>
        </div>
    </footer>
</template>