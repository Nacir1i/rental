<script setup lang="ts">
import type { CarWithAlbum } from '~/server/api/car/[id]';
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const route = useRoute()

const { data } = await useFetch<CarWithAlbum>(`/api/car/${route.params.id}`)
const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value)
        return
    emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi)
        return

    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
})

const album = data.value?.album!;
const randomImageIndex = Math.floor(Math.random() * (album.length - 1));

console.log(randomImageIndex);

</script>


<template>
    <section class="relative w-full h-[500px]">
        <NuxtImg class="object-cover w-full h-full" provider="cloudinary" :src="album[randomImageIndex].url" />
        <div
            class="w-full h-full absolute top-0 bg-black/55 left-0 flex gap-8 flex-col items-center justify-center text-center">
            <h1 class="text-white text-6xl font-bold uppercase">{{ data?.mark }} {{ data?.model }}</h1>
            <div class="space-y-2 flex flex-col items-center">
                <div class=" w-24 border-t border-white group-hover:border-white" />
                <div class="w-32 border-t border-white group-hover:border-white" />
            </div>
            <div
                class="absolute bottom-0 w-full [clip-path:polygon(50%_100%,_100%_0,_100%_100%,_0_100%,_0_0%)] h-[150px] bg-white" />
        </div>
    </section>
    <div class="w-full flex justify-center">
        <div class="grid grid-cols-6 flex-col gap-5 py-16 px-4 w-[1170px]">
            <div class="w-full py-4 col-start-1 col-end-7 lg:col-end-5 flex gap-8 items-center relative">
                <span class="h-10 border-l-4 border-red-500" />
                <p class="text-2xl font-semibold uppercase">{{ data?.mark }} {{ data?.model }}</p>
                <div
                    class="pattern-wavy pattern-slate-900 pattern-bg-slate-200 pattern-size-2 pattern-opacity-10 absolute top-0 left-0 w-full h-full" />
            </div>
            <div class="w-full space-y-2 col-start-1 col-end-7 lg:col-end-5">
                <Carousel class="relative w-full" @init-api="(val) => emblaMainApi = val">
                    <CarouselContent>
                        <CarouselItem v-for="(image, index) in album" :key="index">
                            <div class="">
                                <Card>
                                    <CardContent class="flex items-center justify-center p-0 relative">
                                        <NuxtImg provider="cloudinary" :src="image.url" />
                                        <div class="bg-red-600 py-2 px-4 absolute top-0 right-0 flex items-center justify-center lg:hidden">
                                            <p class="text-white text-sm"><span class="text-lg font-bold">{{ data?.price }}</span> MAD / day</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

                <Carousel class="relative w-full" @init-api="(val) => emblaThumbnailApi = val">
                    <CarouselContent class="flex gap-1 ml-0">
                        <CarouselItem v-for="(image, index) in album" :key="index" class="pl-0 basis-1/4 cursor-pointer"
                            @click="onThumbClick(index)">
                            <div class="" :class="index === selectedIndex ? '' : 'opacity-50'">
                                <Card>
                                    <CardContent class="flex items-center justify-center p-0">
                                        <NuxtImg provider="cloudinary" :src="image.url" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <div class="col-start-1 col-end-7 lg:col-start-5 lg:col-end-7 lg:row-span-5 lg:row-start-1 space-y-5">
                <div class="w-full h-[72px] justify-center items-center bg-red-600 hidden lg:flex">
                    <p class="text-white text-xl font-light"><span class="text-2xl font-bold">{{ data?.price }}</span> MAD / day</p>
                </div>
                <div class="w-full py-2 flex gap-4 items-center relative col-start-1 col-end-7 lg:col-end-5">
                    <span class="h-6 border-l-4 border-red-500" />
                    <p class="text-base lg:text-lg font-semibold uppercase text-red-500">specifications</p>
                    <div
                        class="pattern-zigzag pattern-slate-900 pattern-bg-slate-200 pattern-size-6 pattern-opacity-10 absolute top-0 left-0 w-full h-full" />
                </div>
                <ul class="text-base shadow-md text-gray-500 p-4 col-start-1 col-end-7 lg:col-end-5 divide-y">
                    <li class="w-full flex justify-between items-center pb-3">
                        <p>Mark:</p>
                        <p class="uppercase">{{ data?.mark }}</p>
                    </li>
                    <li class="w-full flex justify-between items-center py-3">
                        <p>Model:</p>
                        <p>{{ data?.model }}</p>
                    </li>
                    <li class="w-full flex justify-between items-center py-3">
                        <p>Release year:</p>
                        <p>{{ data?.release_year }}</p>
                    </li>
                    <li class="w-full flex justify-between items-center py-3">
                        <p>Fuel:</p>
                        <p>{{ data?.fuel }}</p>
                    </li>
                    <li class="w-full flex justify-between items-center py-3">
                        <p>Transmission:</p>
                        <p>{{ data?.transmission }}</p>
                    </li>
                    <li class="w-full flex justify-between items-center pt-3">
                        <p>Distance traveled:</p>
                        <p>{{ data?.distance_traveled }}</p>
                    </li>
                </ul>
            </div>
            <div class="w-full py-2 flex gap-4 items-center relative col-start-1 col-end-7 lg:col-end-5">
                <span class="h-6 border-l-4 border-red-500" />
                <p class="text-base lg:text-lg font-semibold uppercase text-red-500">vehicle description</p>
                <div
                    class="pattern-isometric pattern-slate-900 pattern-bg-slate-200 pattern-size-6 pattern-opacity-10 absolute top-0 left-0 w-full h-full" />
            </div>
            <div class="text-base font-light shadow-md text-slate-500 p-4 space-y-2 col-start-1 col-end-7 lg:col-end-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, nulla perspiciatis quod, culpa quos corrupti autem velit nesciunt, quam molestias saepe optio. Doloremque, rerum sequi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia nemo repellendus earum iure expedita atque id fugit tempora culpa.</p>
            </div>
        </div>
    </div>
</template>