<script setup lang="ts">
import type { CarWithAlbum } from "@/server/api/car/all.get";

const props = defineProps<{ car: CarWithAlbum }>();

onMounted(() => {
    console.log("props", props);
})
</script>

<template>
    <div class="w-[380px] h-[450px] grid grid-cols-1 grid-rows-10 border border-slate-500">
        <div class="col-span-1 row-span-6 relative">
            <NuxtImg class="w-full h-full object-cover absolute top-0 left-0 z-40" provider="cloudinary" :src="car.album[0]?.url" alt="#" />
            <div class="bg-red-600 p-2 absolute bottom-5 right-5 z-50 text-center">
                <p class="text-white text-md">{{ car.price }} $</p>
                <p class="text-white text-md">/ per day</p>
            </div>
        </div>
        <div class="col-span-1 row-span-3 flex flex-col justify-center items-center gap-5">
            <p class="font-extrabold text-xl uppercase">{{ `${car.mark} ${car.model}` }}</p>
            <div class="w-full grid grid-cols-5 grid-rows-2">
                <div class="col-stat-2 col-end-3 text-center">
                    <Icon class="col-stat-2 col-end-3 text-xl text-slate-600" name="i-streamline-steering-wheel"/>
                </div>
                <div class="col-stat-3 col-end-4 text-center">
                    <Icon class="col-stat-3 col-end-4 text-xl text-slate-600" name="i-game-icons-road"/>
                </div>
                <div class="col-stat-4 col-end-5 text-center">
                    <Icon class="col-stat-4 col-end-5 text-xl text-slate-600" name="i-material-symbols-swap-driving-apps-wheel-outline"/>
                </div>
                <div class="col-stat-2 col-end-3 row-start-2 text-center mt-1 border-l border-slate-600">
                    <p class="text-sm text-slate-600">{{ car.release_year }}</p>
                </div>
                <div class="col-stat-3 col-end-4 row-start-2 text-center mt-1 border-l border-slate-600">
                    <p class="text-sm text-slate-600">{{ car.distance_traveled }}</p>
                </div>
                <div class="col-stat-4 col-end-5 row-start-2 text-center mt-1 border-x border-slate-600">
                    <p class="text-sm text-slate-600">{{ car.fuel }}</p>
                </div>
            </div>
        </div>
        <div class="col-span-1 row-span-1">
            <Button class="w-full h-full col-span-1 row-span-1 rounded-none">
                Read more
                <Icon class="text-base text-white" name="i-material-symbols-double-arrow-rounded"/>
            </Button>
        </div>
    </div>
</template>