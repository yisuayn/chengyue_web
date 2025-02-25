<template>
    <div>
        冬季棉被
        <Carousel :images="productImages" :autoplayInterval="5000" :arrowvalue="hover" :height="height"></Carousel>
    </div>
</template>
<script>
export default {
    name: "Winterquilt",
    data() {
        return {
            height: "50vh",
            hover: "hover",
            productImages:[
                "https://www.topthink.com/uploads/assistant/20250220/a1c597330e471fe3bec54fe0a056c410.png",
                "https://www.topthink.com/uploads/assistant/20250220/a1c597330e471fe3bec54fe0a056c410.png",
                "https://www.topthink.com/uploads/assistant/20250220/a1c597330e471fe3bec54fe0a056c410.png"
            ],
        }
    }
}
</script>