import styled from "styled-components";
import { IMG_URL_500 } from "../../constant/url";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { spacing } from "../../components/GlobalStyled";

const Section = styled.section`
  padding: 100px 0 50px 100px;

  @media screen and (max-width: 640px) {
    padding: 100px 0 50px ${spacing.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: 60px 0 0px ${spacing.padding_450};
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 640px) {
    font-size: 26px;
  }
`;

const Bg = styled.div`
  height: 370px;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 640px) {
    height: 280px;
  }
  @media screen and (max-width: 450px) {
    height: 160px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  @media screen and (max-width: 640px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const params = {
  slidesPerView: 5.2,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ movieData, titleText }) => {
  return (
    <Section>
      <Title>{titleText}</Title>

      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Bg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
