export default function WhySimba() {
  return (
    <section
      style={{
        clipPath: "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      className="m-auto mb-20 bg-stone-100 pt-28"
    >
      <h2 className="mb-2 bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text text-center text-3xl font-semibold text-transparent">
        Why Simba Talents?
      </h2>
      <div className="m-auto grid max-w-6xl grid-cols-3 gap-16 py-10">
        <Reason
          title={"Access to top talent in Africa"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"africa"}
        />
        <Reason
          title={"Social impact"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"social_impact"}
        />{" "}
        <Reason
          title={"HIGH-QUALITY WORK AT COMPETITIVE"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"quality"}
        />{" "}
        <Reason
          title={"DIVERSE RANGE OF SERVICES"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"networks"}
        />{" "}
        <Reason
          title={"COMMITMENT TO SELFLESS AMBITION"}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"selfless"}
        />{" "}
        <Reason
          title={"EXPANSIVE AFRICAN NETWORKS."}
          desc={
            "Clients can benefit from the expertise and skills of exceptionalgraduates from top universities in Africa."
          }
          svg={"networks"}
        />
      </div>
    </section>
  );
}

function Reason({ title, svg, desc }) {
  return (
    <div className="space-y-4">
      <div>
        <div>
          <img src={`${svg}.svg`} alt="africa" className="h-20" />
        </div>
        <h3 className="bg-clip-text font-semibold uppercase hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-transparent">
          {title}
        </h3>
      </div>
      <p>{desc}</p>
    </div>
  );
}
