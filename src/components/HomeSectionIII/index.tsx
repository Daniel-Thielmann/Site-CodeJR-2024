"use client";

import { feedbackQuery, getFeedback } from "@/server/db/query/feedback/query";
import FeedbackCard from "../FeedbackCard";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState } from "react";
import { RichText } from "@/components/RichText/rich-text";

export default function HeroSectionIII() {
  const [feedbacks, setFeedbacks] = useState<feedbackQuery[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbackData = await getFeedback();
      if (feedbackData) {
        setFeedbacks(feedbackData);
      }
    };

    fetchFeedbacks();
  }, []);

  const [emblaRefMobile] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 3,
  });

  return (
    <div className="w-full flex justify-center flex-col py-8">
      <h1 className="text-center text-[#FEFFF5] font-bold text-4xl uppercase justify-center font-sans py-14">
        FEEDBACKS
      </h1>

      <div className="flex flex-col py-8 justify-center items-center lg:hidden">
        <div
          className="embla overflow-hidden w-full max-w-md gap-4"
          ref={emblaRefMobile}
        >
          <div className="embla__container flex">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="embla__slide flex justify-center w-full flex-shrink-0"
                >
                  <FeedbackCard
                    name={feedback.name}
                    description={<RichText content={feedback.feedbacks.raw} />}
                  />
                </div>
              ))
            ) : (
              <h1 className="px-4 md:px-9  text-[#FEFFF5] text-2xl sm:text-3xl lg:text-4xl lg:text-[44px] text-center uppercase sub-titulo">
                Nenhum feedback encontrado
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex py-8 w-full justify-center relative">
        <div
          className="embla w-full max-w-screen-lg overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex gap-4">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="embla__slide1 flex justify-center w-full flex-shrink-0"
                >
                  <FeedbackCard
                    name={feedback.name}
                    description={<RichText content={feedback.feedbacks.raw} />}
                  />
                </div>
              ))
            ) : (
              <h1 className="px-4 md:px-9 text-[#FEFFF5] text-2xl sm:text-3xl lg:text-4xl lg:text-[44px] text-center uppercase sub-titulo">
                Nenhum feedback encontrado
              </h1>
            )}
          </div>
        </div>

        <button
          className="hidden lg:block lg:absolute embla__prev left-12 top-1/2 transform -translate-y-1/2 p-4 bg-white text-black rounded-full z-10 lg:left-4 lgg:left-12"
          onClick={() => emblaApi?.scrollPrev()}
        >
          &lt;
        </button>
        <button
          className="hidden lg:block lg:absolute embla__next right-12 top-1/2 transform -translate-y-1/2 p-4 bg-white text-black rounded-full z-10 lg:right-4 lgg:right-12"
          onClick={() => emblaApi?.scrollNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
