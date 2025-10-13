export default function Features() {
  const sections = [
    {
      title: "I. Core Mechanics & Immersive ASMR",
      features: [
        {
          title: "Ultimate Sensory Satisfaction",
          desc: <>Experience the deepest level of chill with our signature <strong  className="text-black">&quot;Slide & Glide&quot;</strong> mechanics. The continuous, fluid motion, paired with rich <strong  className="text-black">ASMR</strong> soundscapes and <strong className="text-black">haptic vibration feedback</strong>, delivers unparalleled tactile and auditory comfort.</>
        },
        {
          title: "Simple & Intuitive Play",
          desc: <>Engage with the world through easy-to-master interactions: just <strong  className="text-black">Tap, Drag, Slide, and Draw</strong> your way to perfect order and serenity.</>
        }
      ]
    },
    {
      title: "II. Therapeutic Value & Mental Well-being",
      features: [
        {
          title: "Creative Art Therapy",
          desc: <>Go beyond simple cleanup. Unleash your inner artist by freely arranging and decorating spaces with cute items, fun toys, and various elements to foster <strong className="text-black">creativity and self-expression</strong>.</>
        },
        {
          title: "Find Your Control & Calm",
          desc: <>Our satisfying and precise sorting/tidying puzzles provide clear goals and a controlled pace, potentially helping to ease symptoms of <strong className="text-black">OCD and anxiety</strong> by creating a sense of mastery and order.</>
        }
      ]
    },
    {
      title: "III. Diverse Content & Brain Health",
      features: [
        {
          title: "Vast Categories of Play",
          desc: <>Enjoy a wide range of content, including <strong className="text-black">stress-relief puzzles, strategic sorting challenges, detailed organizing tasks, and playful toy interactions</strong>.</>
        },
        {
          title: "Brain-Boosting Eco-Challenges",
          desc: <>Engage in unique <strong className="text-black">environmental-friendly levels</strong> that cleverly blend the tidying theme with <strong className="text-black">recycling and brain health</strong> content, allowing you to sharpen your mind while practicing virtual eco-responsibility.</>
        },
        {
          title: "ASMR Fostering",
          desc: <>Cultivate your sensitivity to <strong className="text-black">ASMR</strong>, providing a better quality of spiritual life and a unique pathway to <strong className="text-black">de-stress and mental renewal</strong>.</>
        }
      ]
    }
  ];

  return (
    <section className="bg-[#f0f4f8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Perfect Tidy: Key Features
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover what makes <strong>Perfect Tidy</strong> the most engaging and innovative puzzle game experience
          </p>
        </div>

        {/* 特性区域 */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* 部分标题 */}
              <div className="bg-blue-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>
              
              {/* 特性网格 */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="border-l-4 border-blue-600 pl-4 py-2"
                    >
                      <div className="flex items-start mb-3">
                        <div className="bg-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {sectionIndex + 1}.{featureIndex + 1}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-blue-600">{feature.title}</h4>
                      </div>
                      <p className="text-amber-700 pl-11">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}