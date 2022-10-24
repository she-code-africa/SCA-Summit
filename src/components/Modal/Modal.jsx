import React, { useContext } from "react";
import "./Modal.css";
import { CloseOutline } from "react-ionicons";
import Context from "../../context/context";

const Modal = () => {
  const { setOpenModal, openModal } = useContext(Context);
  return (
    <div className={openModal ? "modal-container" : "d-none"}>
      <section className="modal-box">
        <div className="d-flex justify-content-between w-100 my-2">
          <h2 className="text-white m-0">Odun Eweniyi</h2>
          <CloseOutline
            color={"#00000"}
            height="50px"
            width="50px"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <p className="fs-4 fw-bold">COO PiggyVest</p>
        <p className="text-break bio">
          Odunayo Eweniyi is the co-founder & Chief Operations Officer,
          PiggyVest, the largest digital savings and micro-investment platform
          in Nigeria. She previously co-founded pushcv.com, one of the foremost
          job sites in Africa with the largest database of pre-screened
          candidates. She has 8 years’ experience in Business Analysis and
          Operations. She’s an award winning fintech entrepreneur who is working
          for diversity equity and inclusion in fintech and technology as a
          whole. In January 2021, Odunayo cofounded First Check Africa, a
          female-led angel fund that invests “ridiculously early” in women in
          African tech to make it easier for them to raise venture-backed
          capital and invest in technology startups. She is a board member at
          Village Capital, the most active supporter of impact-driven,
          seed-stage entrepreneurs in the world. She was featured on Bloomberg
          Business Weekly’s 2020 Bloomberg50 list, an annual list of innovators,
          entrepreneurs, and leaders who have changed the global business
          landscape over the past year. In 2022, she was selected as a Bloomberg
          New Economy Catalyst; and she won the Forbes Africa Technology and
          Innovation award. She is also a 2021 TIME100 Next honoree. She was
          named one of Forbes Africa 30 under 30 Technology in 2019 and one of
          30 Quartz Africa Innovators 2019. In 2020, She cofounded The Feminist
          Coalition, a group of young Nigerian feminists who work to promote
          equality for women in Nigerian society, with a core focus on
          education, financial freedom and representation in public office. She
          was named one of the 2021 Class of Social Shapers by the Malala Fund.
          In 2019, she was named SME Entrepreneur of the Year West Africa by The
          Asian Banker’s Wealth and Society and she is the youngest Nigerian on
          Forbes Africa's list of 20 New Wealth Creators in Africa 2019. She was
          also one of the featured speakers at the World Bank-IMF Annual Meeting
          in 2019. She is one of Business Day’s Spark 2019 Women to Watch and
          made the World Women in Fintech Power List for 2017; the YNaija Most
          Influential People in Technology 2017, 2018, 2019 and 2020; she is a
          2018 Westerwelle Young Entrepreneurs fellow; and she is a recipient of
          The Future Africa Awards Prize in Technology 2018. In honour of her
          work, she was named one of the 100 most inspiring women in Nigeria
          2019 by Leading Ladies Africa, one of 50 most visible women in Tech by
          Tech Cabal in 2019. She is also included on the #YTech100 2019 list of
          the brightest Nigerian technocrats. She is the Her Network Technology
          Woman of The Year 2019. She was also voted The Most Influential Young
          Nigerian in Science and Technology 2019. In 2020, she was one of the
          Lord’s Achievers Awards Honorees, 2020 100 Most Influential Young
          Africans, one of OkayAfrica’s 100 Women 2020 as well as the ELOY Award
          for Technology 2020. She has been listed one of the most influential
          young Nigerians and Africans by several publications. She’s also been
          featured on several international publications including Vogue,New
          York Times, Elle among others. She is also the co-founder of the
          women’s community, Wine and Whine Nigeria.
        </p>
      </section>
    </div>
  );
};

export default Modal;
