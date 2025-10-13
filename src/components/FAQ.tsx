"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  const faqData = {
    "faq_title": "Perfect Tidy: Frequently Asked Questions (FAQ)",
    "categories": [
      {
        "name": "Long-Term Strategy & Mental Well-being",
        "questions": [
          {
            "question": "How can I maximize relaxation and improve my spiritual life quality?",
            "answer": "For the best experience, combine focused and creative play. Prioritize levels with clear organizing goals for a sense of achievement and order. Balance this with open-ended creative toy interactions to foster pure, stress-free relaxation."
          },
          {
            "question": "Does the game offer daily challenges or a progression system?",
            "answer": "Yes. Perfect Tidy includes a system of time-limited challenges and a robust achievement system. We continually update the game with new levels and mechanics to ensure a steady stream of diverse ASMR and therapeutic experiences."
          }
        ]
      },
      {
        "name": "ASMR & Sensory Experience",
        "questions": [
          {
            "question": "How can I customize the ASMR sound effects and background music volumes?",
            "answer": "The game includes built-in volume sliders. We recommend adjusting them to your most comfortable ratio. Ensure the ASMR details are crisp while the background music remains a soothing, peaceful backdrop to maximize relaxation."
          },
          {
            "question": "What are the three most popular ASMR interactive scenes?",
            "answer": "Players consistently rate sand pouring, stacking objects, and cleaning/wiping off dirt as the most satisfying. These scenes feature particularly delicate and intricate sound effects that generate a strong sense of psychological contentment."
          }
        ]
      },
      {
        "name": "Gameplay Tips & Techniques",
        "questions": [
          {
            "question": "What is the quickest way to sort in the classification puzzles?",
            "answer": "A great tip is to group similar items first, then gradually fine-tune their positions. This systematic approach prevents cluttering the screen and helps maintain a smooth, relaxing flow while ensuring efficiency."
          },
          {
            "question": "How do I distinguish between puzzle items and pure decorative items?",
            "answer": "Puzzle items are typically constrained, often having specific target locations or outlines. Decorative items are generally free to be placed as you like, allowing you to exercise your artistic creativity without mission constraints."
          }
        ]
      },
      {
        "name": "New Player Pain Points & Troubleshooting",
        "questions": [
          {
            "question": "What are the top 3 common mistakes new players make?",
            "answer": "1) Over-focusing on perfection, which causes anxiety. 2) Ignoring the background music, thus missing the peaceful rhythm. 3) Rushing the interactions and neglecting the satisfying tactile and sound feedback."
          },
          {
            "question": "How can I use the vibration feedback to enhance my sense of tidiness?",
            "answer": "Pay close attention to the subtle differences in vibration for distinct items. The haptic feedback, combined with visual confirmation, is key to building a mindful and rhythmic sense of organization."
          },
          {
            "question": "How do I balance enjoying the process vs. completing the goal?",
            "answer": "Focus on breaking down the task into smaller steps. While keeping the final goal in mind, remind yourself to pause and appreciate the intermediate steps (e.g., the sound of things clicking into place). This prevents feeling overwhelmed."
          }
        ]
      },
      {
        "name": "Technical & Troubleshooting",
        "questions": [
          {
            "question": "I'm experiencing lag or sound delay. What should I do?",
            "answer": "This is usually due to multiple background apps or device performance limitations. We advise closing unnecessary applications and ensuring your game is updated to the latest version for optimal performance."
          },
          {
            "question": "Does keeping the vibration on affect battery life? Any optimization tips?",
            "answer": "Vibration will slightly increase power consumption. For extended playtime, we recommend using a lower vibration intensity setting or using haptics intermittently."
          },
          {
            "question": "My progress for unlocking new content isn't syncing. What can I do?",
            "answer": "First, verify your network connection. Try relaunching the game or using the in-game manual refresh option. If the issue persists, please contact our support team."
          }
        ]
      }
    ]
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isQuestionOpen = (categoryIndex: number, questionIndex: number) => {
    return openItems[`${categoryIndex}-${questionIndex}`] || false;
  };

  return (
    <section className="bg-[#f0f4f8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            {faqData.faq_title}
          </h2>
          <p className="text-xl text-amber-700">
            Find answers to common questions about Perfect Tidy gameplay and features
          </p>
        </div>
        
        {/* FAQ分类容器 */}
        <div className="space-y-8">
          {faqData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              {/* 分类标题 */}
              <h3 className="text-2xl font-bold text-blue-600 mb-6 pb-4 border-b border-gray-200">
                {category.name}
              </h3>
              
              {/* 问题列表 - 可折叠 */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const isOpen = isQuestionOpen(categoryIndex, questionIndex);
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      {/* 问题标题 - 可点击 */}
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                            {questionIndex + 1}
                          </span>
                          <span className="font-bold text-lg text-blue-600">{item.question}</span>
                        </div>
                        <svg
                          className={`w-5 h-5 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* 答案内容 - 可折叠 */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-4 bg-white border-t border-gray-200">
                          <p className="text-amber-700">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}