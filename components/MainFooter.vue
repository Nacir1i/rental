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
        <NuxtImg class="object-cover w-full h-full" provider="cloudinary" src="v1712082851/pexels-mike-bird-112460_ipaint.jpg" />
        <div class="w-full h-full absolute top-0 left-0 bg-black/80 flex flex-col items-center justify-center gap-14 lg:gap-24">
            <div class="h-10 w-36 bg-red-300" />
            <div class="flex-col justify-center items-center hidden lg:flex">
                <p class="text-black uppercase">: SHOWROOM LOCATION :</p>
                <p class="text-white">32 Market St.128, Deeja Town, Florida, CA 12345</p>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-center justify-center gap-14">
                <p class="text-white"><span class="text-black uppercase">phone:</span> 06 XX XX XX XX</p>
                <p class="text-white"><span class="text-black uppercase">fax:</span> XX XX XX XX</p>
                <p class="text-white"><span class="text-black uppercase">email:</span> lolrandomxd@email.outllook</p>
                <p class="text-white"><span class="text-black uppercase">work hours:</span> never:26pm-again:-1am</p>
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