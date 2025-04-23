<template>
    <div>
        冬季棉被
        <Carousel :images="productImages" :autoplayInterval="5000" :arrowvalue="hover" :height="height"></Carousel>
    </div>
</template>
<script>
import image from "../../public/LogoImage/53.jpeg"
import image1 from "../../public/LogoImage/54.jpeg"
import image2 from "../../public/LogoImage/55.jpeg"
export default {
    name: "Winterquilt",
    data() {
        return {
            height: "95vh",
            hover: "hover",
            productImages:[
                image,
                image1,
                image2,
            ],
        }
    }
}
</script>