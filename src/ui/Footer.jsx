import Links from "./Links";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-100 to-amber-200 pb-10">
      <div className="grid gap-10  px-10  py-5 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        <div className="space-y-5">
          <img src="cropped-v3.png" alt="simba_talents_logo" className="h-12" />
          <p>
            Simba Talents Group strives to connect Africa’s highly skilled and
            deeply motivated workforce with companies seeking talent from across
            the globe.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold capitalize">Quick links</h3>
          <div className="mb-3 h-[2px] w-16 bg-gradient-to-r from-amber-950 to-amber-400"></div>

          <Links />
        </div>
        <div>
          <h3 className="text-xl font-semibold capitalize">contact</h3>
          <div className="mb-3 h-[2px] w-16 bg-gradient-to-r from-amber-950 to-amber-400"></div>
          <div className="space-y-2">
            <p>
              Headquarters: <br></br> Fairfax, VA
            </p>
            <p>
              Uganda Branch<br></br> P.O. Box 118109, Kampala, Uganda, Plot 291
              Wabitembe-Matugga, Kampala, UGANDA
            </p>
            <p>
              Email:<br></br>{" "}
              <a href="mailTo:info@simbatalents.com">info@simbatalents.com</a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold capitalize">Connect with us</h3>
          <div className="mb-3 h-[2px] w-16 bg-gradient-to-r from-amber-950 to-amber-400"></div>
          <div className="flex justify-start">
            <svg className="hover:fill-amber-400 sm:h-8 sm:w-16">
              <use xlinkHref="sprite.svg#icon-x"></use>
            </svg>
            <svg className="hover:fill-amber-400 sm:h-8 sm:w-16">
              <use xlinkHref="sprite.svg#icon-instagram1"></use>
            </svg>
            <svg className="hover:fill-amber-400 sm:h-8 sm:w-16">
              <use xlinkHref="sprite.svg#icon-facebook"></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="m-auto w-[95%] rounded-2xl bg-amber-100 py-4 text-center">
        Copyright © {new Date().getFullYear()} Simbatalents | Powered by
        Simbatalents
      </div>
    </footer>
  );
}
