"use client";

export default function Quote() {
  return (
    <section
      className="relative py-16 md:py-20 px-4 md:px-8 lg:px-16"
      style={{
        height: "423.975px",
        fontFamily: "freight-sans-pro",
        fontSize: "18.4038px",
        fontWeight: "300",
        lineHeight: "33.1269px",
        color: "rgb(65, 65, 63)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgb(243, 240, 232)", opacity: 0.5 }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-center h-full">
        <blockquote
          className="mb-8"
          style={{
            color: "rgb(0, 0, 0)",
            fontFamily: "freight-display-pro",
            fontSize: "30.423px",
            fontWeight: "300",
            lineHeight: "40.5478px",
            textAlign: "center",
            marginBottom: "32px",
            maxWidth: "610.65px",
            margin: "0 auto 32px auto",
          }}
        >
          "I have come to believe that caring for myself is not self-indulgent.
          Caring for myself is an act of survival."
        </blockquote>
        <cite
          style={{
            color: "rgb(65, 65, 63)",
            fontFamily: "freight-sans-pro",
            fontSize: "18.4038px",
            fontWeight: "300",
            lineHeight: "33.1269px",
            textAlign: "center",
            marginTop: "16px",
            maxWidth: "610.65px",
            margin: "16px auto 0 auto",
          }}
        >
          —Audre Lorde
        </cite>
      </div>
    </section>
  );
}
