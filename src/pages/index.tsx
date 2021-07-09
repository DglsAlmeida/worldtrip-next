import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../services/api";

export default function Home() {
  const [continents, setContinents] = useState<any[]>([]);

  useEffect(() => {
    async function getDatas() {
      const res = await api.get(`continents`);
      setContinents(res.data);
    }
    getDatas();
  }, []);

  return (
    <Flex alignItems="center" justifyContent="space-be" flexDirection="column">
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image src="banner.png" alt="Banner Img" width="100%" height="450px" />
        <Image
          src="travelTypes.png"
          alt="Travel types"
          width="70%"
          mt="100px"
        />
        <Text mt="200px" fontSize="4xl" color="#47585B">
          Vamos nessa ?
        </Text>
        <Text fontSize="4xl" color="#47585B">
          Então escolha seu continente
        </Text>
      </Box>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Image
              src={continent.image}
              alt="Banner Img"
              width="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
