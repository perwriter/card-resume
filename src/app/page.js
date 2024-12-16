import Menu from "@/components/Menu";
import Side from "@/components/Side";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f8e3b5] flex p-4">
      {/* <Side className="flex-end"/> */}

      {/* Main Content */}
      <main className="flex-1 ml-4">
        {/* <Menu /> */}

        {/* Content */}
        <div className="bg-white rounded-xl p-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 relative inline-block">
              ABOUT ME
              <div className="absolute -right-12 top-1/2 w-40 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Results-driven professional with 5+ years of experience spanning
              project management, administrative support, operations assistance,
              industrial chemistry, and web development. I excel in quality
              control, process optimization, and time management, ensuring
              efficient and timely project completion. My strong leadership
              skills, coupled with critical and creative thinking, drive
              innovative solutions that consistently meet or exceed expectations
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8">What I do!</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Web Development"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Web Development</h4>
                </div>
                <p className="text-gray-600">
                  As a developer, I find myself most captivated by the power and
                  flexibility of NEXT.js. I'm always eager to dive into new
                  projects that leverage NEXT.js and discover innovative ways to
                  create fast, scalable, and user-friendly applications.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="App Development"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">App Development</h4>
                </div>
                <p className="text-gray-600">
                  With a focus on user-centric design and cutting-edge
                  technologies, I thrive on building intuitive and efficient
                  apps that make a positive impact on people's lives. Let's turn
                  ideas into reality and shape the future together.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="UI/UX Designing"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">UI/UX Designing</h4>
                </div>
                <p className="text-gray-600">
                  Crafting visually appealing and intuitive user interfaces that
                  offer a delightful user experience is something I'm truly
                  fanatic about.
                </p>
              </div>

              <div className="bg-orange-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Mentorship"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Mentorship</h4>
                </div>
                <p className="text-gray-600">
                  I have also found great joy in sharing my knowledge with
                  others. Being a technical mentor allows me to give back to the
                  community that has supported me throughout my career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
