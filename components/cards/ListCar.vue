<script setup lang="ts">
import type { CarWithAlbum } from "@/server/api/car/all.get";
import { Separator } from '@/components/ui/separator'

defineProps<{ car: CarWithAlbum }>();
</script>

<template>
    <div class="w-full grid grid-cols-6 gap-4 shadow-md p-6 md:grid-rows-6 relative">
        <div class="py-2 px-4 bg-red-600 text-white text-center absolute top-10 left-10">
            <p>{{ car.price }} MAD/ per day</p>
        </div>
        <NuxtImg class="col-span-6 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-7" width="420" height="280"
            fit="fill" provider="cloudinary" :src="car.album[0]?.url" alt="#" />
        <div
            class="col-span-6 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-2 flex flex-col justify-center items-center">
            <p class="text-lg font-bold uppercase">{{ car.mark }} {{ car.model }}</p>
        </div>
        <div
            class="col-span-6 md:col-start-4 md:col-end-7 md:row-start-2 md:row-end-6 flex flex-col md:flex-row gap-1 md:gap-6">
            <div class="flex-1 flex flex-col justify-around">
                <span class="w-full flex gap-2 items-center">
                    <p>Mark:</p>
                    <p class="uppercase text-gray-500">{{ car.mark }}</p>
                </span>
                <Separator />
                <span class="w-full flex gap-2 items-center">
                    <p>Model:</p>
                    <p class="uppercase text-gray-500">{{ car.model }}</p>
                </span>
                <Separator />
                <span class="w-full flex gap-2 items-center">
                    <p>Release year:</p>
                    <p class="text-gray-500">{{ car.release_year }}</p>
                </span>
            </div>
            <Separator class="md:hidden" />
            <div class="flex-1 flex flex-col justify-around">
                <span class="w-full flex gap-2 items-center">
                    <p>Fuel:</p>
                    <p class="text-gray-500">{{ car.fuel }}</p>
                </span>
                <Separator />
                <span class="w-full flex gap-2 items-center">
                    <p>Transmission:</p>
                    <p class="text-gray-500">{{ car.transmission }}</p>
                </span>
                <Separator />
                <span class="w-full flex gap-2 items-center">
                    <p>Distance traveled:</p>
                    <p class="text-gray-500">{{ car.distance_traveled }}</p>
                </span>
            </div>
        </div>
        <div
            class="col-span-6 md:col-start-4 md:col-end-7 md:row-start-6 md:row-end-7 flex items-center justify-end gap-2">
            <NuxtLink class="uppercase text-red-600" :to="`/cars/${car.id}`">read more</NuxtLink>
            <Icon class="text-base text-red-600" name="i-material-symbols-double-arrow-rounded" />
        </div>
    </div>
</template>