import React, { useContext } from "react";
import "../resource/servicePage.css";
import { ThemeContext } from "../themeContext/ThemeContext";


const Postcard = ({ color, imgSrc, title, date, previewText, duration,theme }) => (
  
  <article className={`${theme==='dark'?`postcard dark ${color}`:`postcard ${color}`}`}>
    <a className="postcard__img_link servicePageAnchor" href="#">
      <img className="postcard__img" src={imgSrc} alt="Image Title" />
    </a>
    <div className={`${theme==='dark'?'postcard__text':'postcard__text text-black'}`}>
      <h1 className={`postcard__title ${color}`}>
        <a href="#" className="servicePageAncho">
          {title}
        </a>
      </h1>
      <div className="postcard__subtitle small">
        <time datetime="2020-05-25 12:00:00">
          <i className="fas fa-calendar-alt mr-2"></i>
          {date}
        </time>
      </div>
      <div className="postcard__bar"></div>
      <div className="postcard__preview-txt">{previewText}</div>
    </div>
  </article>
);

const ServicePage = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme==='dark'?'p-8 md:p-16 dark':'p-8 md:p-16'}>
      <div className="containerService py-4">
        <h1 className={`${theme==='dark'?'h1 text-center text-white':'h1 text-center text-dark'}`} id="pageHeaderTitle">
          Our Services
        </h1>

        <Postcard
          color={theme === "dark" ? "blue" : "green"}
          imgSrc="/serviceSEO.jpeg"
          title="Search Engine Optimization (SEO)"
          date="Social Minds"
          previewText="Improve your online visibility and attract organic traffic with our expert SEO services. From keyword research to on-page and off-page optimization, we ensure your website ranks higher on search engines."
          duration="55"
          theme={theme}
        />

        <Postcard
          color={theme === "dark" ? "red" : "yellow"}
          imgSrc="/serviceSocialAds.jpeg"
          title="Social Media Ads"
          date="Social Minds"
          previewText="Drive your brand’s growth with highly targeted social media ads that deliver maximum ROI. Our team crafts engaging campaigns designed to reach the right audience and achieve measurable results for your business."
          duration="55"
          theme={theme}
        />

        <Postcard
          color={theme === "dark" ? "green" : "blue"}
          imgSrc="/serviceGraphicDesign.jpg"
          title="Graphic Designing"
          date="Social Minds"
          previewText="Stand out with creative and visually striking designs that leave a lasting impression. Our graphic design team brings your ideas to life with custom visuals that align with your brand identity."
          duration="55"
          theme={theme}
        />

        <Postcard
          color={theme === "dark" ? "yellow" : "red"}
          imgSrc="/serviceSocialHandling.jpg"
          title="Social Media Handling"
          date="Social Minds"
          previewText="Build a strong online presence with our professional social media management services. We create and schedule engaging posts, interact with your audience, and grow your follower base organically."
          duration="55"
          theme={theme}
        />
        <Postcard
          color={theme === "dark" ? "blue" : "green"}
          imgSrc="/serviceWebD.jpg"
          title="Website Creation & Devlopment"
          date="Social Minds"
          previewText="Get a responsive, fast, and user-friendly website designed to enhance your online presence. We specialize in building websites that are visually appealing and optimized for performance."
          duration="55"
          theme={theme}
        />
        <Postcard
          color={theme === "dark" ? "red" : "yellow"}
          imgSrc="/servicePerformanceMarketing.jpg"
          title="Performance Marketing"
          date="Social Minds"
          previewText="Maximize your returns with data-driven performance marketing strategies. We focus on tracking, analyzing, and optimizing campaigns to ensure measurable and consistent results for your business."
          duration="55"
          theme={theme}
        />

        <Postcard
          color={theme === "dark" ? "green" : "blue"}
          imgSrc="/serviceContentWriting.jpeg"
          title="Content Writing"
          date="Social Minds"
          previewText="Keep your audience engaged with captivating social media content that drives interaction. We create tailored, high-quality posts to align with your brand and audience preferences."
          duration="55"
          theme={theme}
        />
      </div>
    </section>
  );
};

export default ServicePage;
