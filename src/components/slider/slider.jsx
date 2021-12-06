import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        customPaging: function(i) {
            return (
                <a>
                    <img src={`../../img/catalog/product-${i + 1}.jpg`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <img src={"../../img/catalog/product-1.jpg"} />
                <img src={"../../img/catalog/product-2.jpg"} />
                <img src={"../../img/catalog/product-3.jpg"} />
            </Slider>
        </>
    );
}
