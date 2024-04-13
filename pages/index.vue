<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import Autoplay from 'embla-carousel-autoplay'
import type { CarWithAlbum } from "@/server/api/car/all.get";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

type Testimonial = {
    name: string;
    comment: string;
    profile: string;
}

const { data } = await useFetch<CarWithAlbum[]>('/api/car/all');
const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Name 1",
        comment: "Exceptional car rental experience! The fleet offered a wide variety of clean and well-maintained vehicles to choose from. The entire process, from booking to returning the car, was seamless. The staff was friendly, knowledgeable, and efficient, making my trip stress-free and enjoyable. I highly recommend this service to anyone looking for a reliable and quality car rental option.",
        profile: "v1712082851/cld-sample-5.jpg",
    },
    {
        name: "Name 2",
        comment: "Outstanding car rental service! The selection of vehicles was impressive, and each car was in top-notch condition. The rental process was quick and straightforward, with a helpful and professional staff assisting at every step. This service truly enhanced my travel experience, and I would not hesitate to use them again.",
        profile: "v1712082851/cld-sample-5.jpg",
    },
    {
        name: "Name 3",
        comment: "Top-tier car rental experience! From the moment I booked online to the time I returned the vehicle, everything was handled with utmost professionalism. The cars were clean, modern, and well-equipped, and the customer service was exceptional. A definite go-to for anyone needing a reliable and quality car rental.",
        profile: "v1712082851/cld-sample-5.jpg",
    },
    {
        name: "Name 4",
        comment: "Fantastic car rental service all around! The convenience of booking, the quality of the vehicles, and the friendliness of the staff exceeded my expectations. The entire process was efficient and hassle-free, allowing me to focus more on enjoying my trip. Highly recommend this service for anyone in need of a dependable car rental solution.",
        profile: "v1712082851/cld-sample-5.jpg",
    }
]

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
</script>

<template>
    <Hero />
    <div class="w-full">
        <div class="w-full flex justify-center items-center py-16">
            <div class="w-full md:w-2/3 px-4 flex flex-col md:flex-row justify-center items-center gap-5">
                <div
                    class="flex-1 p-10 flex flex-col justify-center items-center gap-10 shadow-lg text-center group hover:bg-primary">
                    <div class="w-full text-center">
                        <Icon class="text-red-500 text-9xl group-hover:text-white" name="i-ion-md-speedometer" />
                        <p class="font-semibold text-xl group-hover:text-white">Fast & Easy Booking</p>
                    </div>
                    <div class="w-20 border-t border-black group-hover:border-white" />
                    <p class="text-black group-hover:text-white">Semper aibers vestibulum fringil voluptate velit esse
                        cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore.</p>
                </div>
                <div
                    class="flex-1 p-10 flex flex-col justify-center items-center gap-10 shadow-lg text-center group hover:bg-primary">
                    <div class="w-full text-center">
                        <Icon class="text-red-500 text-9xl group-hover:text-white" name="i-ph-steering-wheel" />
                        <p class="font-semibold text-xl group-hover:text-white">Many Pickup Locations</p>
                    </div>
                    <div class="w-20 border-t border-black group-hover:border-white" />
                    <p class="group-hover:text-white">Semper aibers vestibulum fringil voluptate velit esse cillum Lorem
                        ipsum dolor sit conse incididunt ut labore et dolore.</p>
                </div>
                <div
                    class="flex-1 p-10 flex flex-col justify-center items-center gap-10 shadow-lg text-center group hover:bg-primary">
                    <div class="w-full text-center">
                        <Icon class="text-red-500 text-9xl group-hover:text-white"
                            name="i-ic-baseline-money-off-csred" />
                        <p class="font-semibold text-xl group-hover:text-white">No Booking Charges</p>
                    </div>
                    <div class="w-20 border-t border-black group-hover:border-white" />
                    <p class="group-hover:text-white">Semper aibers vestibulum fringil voluptate velit esse cillum Lorem
                        ipsum dolor sit conse incididunt ut labore et dolore.</p>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center bg-gray-100 gap-16 p-16 px-4">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="uppercase font-thin text-lg">euismod ullamcorper tortor</h1>
                <h1 class="uppercase font-bold text-3xl md:text-5xl">our rental fleets</h1>
                <div class="space-y-2 flex flex-col items-center">
                    <div class="w-36 border-t border-gray-400 group-hover:border-white" />
                    <div class="w-44 border-t border-gray-400 group-hover:border-white" />
                </div>
            </div>
            <div class="w-full md:w-4/5 gap-5 flex flex-wrap justify-center items-center">
                <CardsHomeCar v-for="(car, index) in data" :key="index" :car="car" />
            </div>
        </div>
        <div class="w-full h-[50rem] lg:h-[30rem] flex justify-center items-center relative">
            <NuxtImg class="object-cover w-full h-full" provider="cloudinary"
                src="v1712082851/pexels-jeshootscom-13861_pfywfk.jpg" />
            <div
                class="w-full h-full bg-black/85 absolute top-0 left-0 bottom-0 right-0 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-36 py-16 lg:pb-0">
                <div class="text-white text-center space-y-5">
                    <p>Call Today For Booking Your Next Ride</p>
                    <span class="flex justify-center items-center gap-4">
                        <Icon class="text-red-600 text-4xl lg:text-5xl" name="i-fa6-solid-phone" />
                        <p class="font-bold text-4xl lg:text-5xl">06 XX XX XX XX</p>
                    </span>
                    <p class="italic">Operators available 24/7</p>
                </div>
                <NuxtImg class="h-full" provider="cloudinary" src="v1712082851/oie_ctpWdW5twMJL_k0507f.png" />
                <div class="text-white text-center space-y-5">
                    <p>Upto 35% Discounts & Special Offers</p>
                    <p class="font-bold text-4xl lg:text-5xl">Rent a Car for 7 Days</p>
                    <p class="italic">and get 3 days extra absolutely FREE</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-start gap-3">
            <div class="flex-1 border-b border-gray-400"></div>
            <Icon class="text-xl text-gray-400" name="i-fa6-solid-angle-down" />
            <div class="flex-1 border-b border-gray-400"></div>
        </div>
        <div class="w-full flex flex-col justify-center items-center gap-16 py-16 px-4">
            <div class="flex flex-col justify-center items-center gap-5">
                <h1 class="uppercase font-thin text-lg">euismod ullamcorper tortor</h1>
                <h1 class="uppercase font-bold text-3xl md:text-5xl">customer reviews</h1>
                <div class="space-y-2 flex flex-col items-center">
                    <div class="w-36 border-t border-gray-400 group-hover:border-white" />
                    <div class="w-44 border-t border-gray-400 group-hover:border-white" />
                </div>
            </div>
            <div class="w-full flex flex-col items-center">
                <Carousel class="relative w-full max-w-4xl" :plugins="[Autoplay({ delay: 7_000 })]">
                    <CarouselContent>
                        <CarouselItem v-for="(testimonial, index) in TESTIMONIALS" :key="index">
                            <div class="p-1">
                                <Card>
                                    <CardContent
                                        class="flex flex-col items-center justify-center gap-14 p-6 text-center">
                                        <Icon class="text-5xl text-red-600" name="i-fa6-solid-quote-right" />
                                        <p class="text-xl leading-loose italic text-gray-500">{{ testimonial.comment }}
                                        </p>
                                        <div class="text-center space-y-2">
                                            <NuxtImg width="80" height="80" fit="thumbnail"
                                                :modifiers="{ roundCorner: 'max' }" provider="cloudinary"
                                                :src="testimonial.profile" :alt="testimonial.name" />
                                            <p>{{ testimonial.name }}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="absolute top-1/2 left-0 transform -translate-y-1/2" />
                    <CarouselNext class="absolute top-1/2 right-0 transform -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    </div>
</template>