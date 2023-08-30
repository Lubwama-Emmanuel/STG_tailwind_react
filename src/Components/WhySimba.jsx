export default function WhySimba() {
  return (
    <section className="bg-stone-100 py-10">
      <h2 className=" mb-4 bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text text-center text-3xl font-semibold text-transparent">
        Why Simba Talents?
      </h2>
      <div className="m-auto grid max-w-6xl grid-cols-3 gap-7 py-10">
        <Reason
          title={"Access to top talent in Africa"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"earth"}
        />
        <Reason
          title={"Social impact"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"group"}
        />{" "}
        <Reason
          title={"HIGH-QUALITY WORK AT COMPETITIVE"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"check-square"}
        />{" "}
        <Reason
          title={"DIVERSE RANGE OF SERVICES"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"move-up"}
        />{" "}
        <Reason
          title={"COMMITMENT TO SELFLESS AMBITION"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"line-chart"}
        />{" "}
        <Reason
          title={"EXPANSIVE AFRICAN NETWORKS."}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"network"}
        />
      </div>
    </section>
  );
}

function Reason({ title, svg, desc }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <svg className="h-4 w-4 fill-amber-500">
          <use xlinkHref={`sprite.svg#icon-${svg}`} />
        </svg>
        <h3 className="bg-clip-text font-semibold uppercase hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-transparent">
          {title}
        </h3>
      </div>
      <p>{desc}</p>
    </div>
  );
}
