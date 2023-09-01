import { Slide } from "react-slideshow-image";

export default function SlideShow() {
  return (
    <section className="mb-20 py-10">
      <h2 className="mb-10 bg-gradient-to-r from-amber-950 to-amber-400 bg-clip-text text-center text-3xl font-semibold text-transparent">
        Technologies used
      </h2>
      <Slide autoplay slidesToShow={4} arrows={false} duration={1000}>
        <div className="each-slide-effect">
          <svg className="h-14 sm:h-28">
            <use xlinkHref="sprite.svg#icon-javascript"></use>
          </svg>
        </div>
        <div className="each-slide-effect">
          <svg className="h-14 sm:h-28">
            <use xlinkHref="sprite.svg#icon-node-dot-js"></use>
          </svg>
        </div>
        <div className="each-slide-effect">
          <svg className="h-14 sm:h-28">
            <use xlinkHref="sprite.svg#icon-react"></use>
          </svg>
        </div>
        <div className="each-slide-effect">
          <svg className="h-14 sm:h-28">
            <use xlinkHref="sprite.svg#icon-amazonaws"></use>
          </svg>
        </div>
      </Slide>
    </section>
  );
}
