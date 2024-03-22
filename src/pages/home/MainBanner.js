import styled from "styled-components";
import { IMG_URL } from "../../constant/url";
import { spacing } from "../../components/GlobalStyled";

const Banner = styled.section`
  height: 80vh;
  background: url(${IMG_URL}${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  bottom: 200px;
  left: 50px;
  h3 {
    font-size: 80px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    opacity: 0.8;
    margin-top: 30px;
    max-width: 550px;
    width: 100%;
    line-height: 26px;
  }

  @media screen and (max-width: 450px) {
    left: ${spacing.padding_450};
    bottom: 120px;
    h3 {
      font-size: 50px;
    }
    p {
      width: 90%;
      font-size: 16px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.75) 53%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const MainBanner = ({ imgUrl }) => {
  const data = imgUrl[0];
  return (
    <Banner $bgUrl={data?.backdrop_path}>
      <BlackBg />
      <Title>
        <h3>{data.title}</h3>
        <p>{data.overview.slice(0, 100) + "..."}</p>
      </Title>
    </Banner>
  );
};
