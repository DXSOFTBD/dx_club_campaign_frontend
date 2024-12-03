import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import AdBanner from './AdBanner'; // Import the AdBanner component
import { Autoplay } from 'swiper';

const AdSlider = () => {
  const ads = [
    {
      imageSrc: '/images/ads/14c.jpg',
      altText: 'Ad 1',
      linkUrl: 'https://www.facebook.com/DXTelLtd',
    },
    {
      imageSrc: '/images/ads/dxg_1.jpg',
      altText: 'Ad 2',
      linkUrl: 'https://godxg.com/',
    },
    {
      imageSrc: '/images/ads/dxg_2.jpg',
      altText: 'Ad 3',
      linkUrl: 'https://godxg.com/',
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay:4000,
        // disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {ads.map((ad, index) => (
        <SwiperSlide key={index}>
          <AdBanner
            imageSrc={ad.imageSrc}
            altText={ad.altText}
            linkUrl={ad.linkUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdSlider;