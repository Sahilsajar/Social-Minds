import React from "react";
import "../resource/servicePage.css";

const Postcard = ({ color, imgSrc, title, date, previewText, duration }) => (
  <article className={`postcard dark ${color}`}>
    <a className="postcard__img_link servicePageAnchor" href="#">
      <img className="postcard__img" src={imgSrc} alt="Image Title" />
    </a>
    <div className="postcard__text">
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
  return (
    <section className="dark p-8 md:p-16">
      <div className="containerService py-4">
        <h1 className="h1 text-center text-white" id="pageHeaderTitle">
          Our Services
        </h1>

        <Postcard
          color="blue"
          imgSrc="/serviceSEO.jpeg"
          title="Search Engine Optimization (SEO)"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />

        <Postcard
          color="red"
          imgSrc="/serviceSocialAds.jpeg"
          title="Social Media Ads"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />

        <Postcard
          color="green"
          imgSrc="/serviceGraphicDesign.jpg"
          title="Graphic Designing"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />

        <Postcard
          color="yellow"
          imgSrc="/serviceSocialHandling.jpg"
          title="Social Media Handling"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />
        <Postcard
          color="blue"
          imgSrc="/serviceWebD.png"
          title="Website Creation & Devlopment"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />
        <Postcard
          color="red"
          imgSrc="/servicePerformanceMarketing.jpg"
          title="Performance Marketing"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />

        <Postcard
          color="green"
          imgSrc="/serviceContentWriting.jpeg"
          title="Content Writing"
          date="Mon, May 25th 2020"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero."
          duration="55"
        />
      </div>
    </section>
  );
};

export default ServicePage;
