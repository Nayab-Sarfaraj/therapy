"use client";

export default function AreaOfFocus() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#F3F0E8]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[#41413f] text-3xl md:text-4xl font-serif mb-12 text-center">
          Areas of Focus
        </h3>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Anxiety & Stress Management */}
          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')`,
                }}
              ></div>
            </div>
            <h4 className="text-[#41413f] text-2xl font-serif mb-4 md:mb-6 leading-tight px-4">
              Anxiety & Stress Management
            </h4>
            <p className="text-[#41413f] leading-relaxed text-base px-4">
              Learn effective strategies to manage anxiety and stress through
              evidence-based techniques including cognitive-behavioral therapy,
              mindfulness practices, and personalized coping strategies tailored
              to your specific needs and lifestyle.
            </p>
          </div>

          {/* Relationship Counseling */}
          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')`,
                }}
              ></div>
            </div>
            <h4 className="text-[#41413f] text-2xl font-serif mb-4 md:mb-6 leading-tight px-4">
              Relationship Counseling
            </h4>
            <p className="text-[#41413f] leading-relaxed text-base px-4">
              Strengthen your relationships through improved communication,
              conflict resolution, and deeper understanding. Whether working on
              romantic partnerships, family dynamics, or friendships, develop
              healthier connection patterns.
            </p>
          </div>

          {/* Trauma Recovery */}
          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')`,
                }}
              ></div>
            </div>
            <h4 className="text-[#41413f] text-2xl font-serif mb-4 md:mb-6 leading-tight px-4">
              Trauma Recovery
            </h4>
            <p className="text-[#41413f] leading-relaxed text-base px-4">
              Process and heal from traumatic experiences in a safe, supportive
              environment. Using trauma-informed approaches, work toward
              recovery, resilience, and reclaiming your sense of safety and
              empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
