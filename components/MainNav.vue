<script setup lang="ts">
    import { useWindowScroll } from '@vueuse/core'
    import type { NavLink } from '@/types';
    import { Button } from '@/components/ui/button'

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

    const { y } = useWindowScroll()
    const isContactNavVisible = computed(() => {
        return y.value <= 150;
    })
</script>

<template>
    <div class="w-full fixed top-0 left-0 z-50">
        <ContactNav v-if="isContactNavVisible" />
        <div class="w-full flex justify-center items-center p-6 px-8 bg-gradient-to-b from-black/60 to-transparent">
            <div class="w-[1170px] flex justify-between items-center">
                <div class="w-32 h-10 bg-red-400" />
                <ul class="hidden items-center gap-5 uppercase text-sm lg:flex text-white">
                    <li v-for="(link, index) in LINKS" :key="index">
                        <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                    </li>
                    <li class="">
                        <Button variant="secondary" >+(212)6 xx xx xx xx</Button>
                    </li>
                </ul>
                <span class="lg:hidden">
                    <Icon class="text-white text-xl" name="i-fa6-solid-align-justify" />
                </span>
            </div>
        </div>
    </div>
</template>