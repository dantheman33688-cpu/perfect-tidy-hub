export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* 顶部标题区域 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Perfect Tidy</h2>
        <p className="text-xl text-amber-700">
        It&rsquo;s time to escape the hustle and bustle and enjoy ultimate relaxation and tranquility! <strong>Perfect Tidy</strong> is a soothing game that calms your mind in the most magical way, tidying up the chaos and relieving your stress 🍀.
        </p>
      </div>

      {/* 数据卡片区域 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+1,000W+</p>
          <p className="text-amber-700">Active Players</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+150</p>
          <p className="text-amber-700">Countries</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+200</p>
          <p className="text-amber-700">Levels</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">4.4/5</p>
          <p className="text-amber-700">User Rating</p>
        </div>
      </div>

      {/* 底部内容区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
          <p className="text-amber-700 leading-relaxed">
           Perfect Tidy is a casual puzzle game designed to bring peace and joy to your life. With its simple yet engaging gameplay, our game invites players to clear clutter, organize spaces, and experience the satisfaction of tidying up—all in a relaxing and stress-free environment.Perfect Tidy offers a refreshing escape from the chaos of everyday life.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-amber-700 leading-relaxed">
            To provide a space for relaxation, mindfulness, and fun through the art of organization. Our goal is to create games that not only entertain but also promote mental well-being by encouraging players to declutter their environment and their minds. We are committed to delivering experiences that offer both satisfaction and relaxation, one tidy space at a time.
          </p>
        </div>
      </div>
    </section>
  );
}