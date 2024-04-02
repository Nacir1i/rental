<script setup lang="ts">
    import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from '@/components/ui/select'
    import DatePicker from "@/components/ui/datePicker/DatePicker.vue"
</script>

<template>
    <section class="relative w-full h-[800px]">
        <NuxtImg class="object-cover w-full h-full" provider="cloudinary" src="v1712082851/pexels-hassan-ouajbir-804128_unjgub.jpg" />
        <div class="w-full h-full absolute top-0 bg-black/50 left-0 flex flex-col items-center justify-center text-center">
            <h1 class="text-white text-6xl font-bold">Best Auto Rental Prices</h1>
            <p class="text-slate-300 text-lg mb-12">Practical & Convenient Auto Hire, As Low As $15 / day</p>
            <div class="flex flex-col lg:flex-row justify-center items-center gap-8">
                <DatePicker title="Start date" />
                <DatePicker title="End date" />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a mark" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="BMW">
                                BMW
                            </SelectItem>
                            <SelectItem value="Mercedes">
                                Mercedes
                            </SelectItem>
                            <SelectItem value="Dacia">
                                Dacia
                            </SelectItem>
                            <SelectItem value="Fiat">
                                Fiat
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div class="absolute bottom-0 w-full [clip-path:polygon(50%_100%,_100%_0,_100%_100%,_0_100%,_0_0%)] h-[150px] bg-white" />
        </div>
    </section>
</template>