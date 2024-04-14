<script setup lang="ts">
import type { CarWithAlbum } from "@/server/api/car/all.get";

const { data } = await useFetch<CarWithAlbum[]>('/api/car/all');

const modifiers = {
    gravity: 'center',
}
</script>

<template>
    <section class="relative w-full h-[500px]">
        <NuxtImg class="object-cover w-full h-full" width="1100" height="500" fit="fill" provider="cloudinary"
            :modifiers="modifiers" src="v1712082851/listing-1" alt="listing" />
        <div
            class="w-full h-full absolute top-0 bg-black/55 left-0 flex gap-8 flex-col items-center justify-center text-center">
            <h1 class="text-white text-6xl font-bold uppercase">Vehicle Listings</h1>
            <div class="space-y-2 flex flex-col items-center">
                <div class=" w-24 border-t border-white group-hover:border-white" />
                <div class="w-32 border-t border-white group-hover:border-white" />
            </div>
            <div
                class="absolute bottom-0 w-full [clip-path:polygon(50%_100%,_100%_0,_100%_100%,_0_100%,_0_0%)] h-[150px] bg-white" />
        </div>
    </section>
    <div class="flex flex-col items-center px-4 md:px-0 my-16">
        <div class="w-full md:w-[900px] space-y-4">
            <div class="w-full py-4 col-start-1 col-end-7 lg:col-end-5 flex gap-8 items-center relative">
                <span class="h-10 border-l-4 border-red-500" />
                <p class="text-2xl font-semibold uppercase">Filters ???</p>
                <div
                    class="pattern-wavy pattern-slate-900 pattern-bg-slate-200 pattern-size-2 pattern-opacity-10 absolute top-0 left-0 w-full h-full" />
            </div>
            <div class="w-full gap-5 flex flex-wrap justify-center items-center">
                <CardsListCar v-for="(car, index) in data" :key="index" :car="car" />
            </div>
        </div>
    </div>
</template>