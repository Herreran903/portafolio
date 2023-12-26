import {sourceCodePro} from "@/app/fonts";

export default function Home() {
  return (
      <div className="h-full">
          <span className={`text-yellow-200 ${sourceCodePro.className} w-[2%]`}>{'<html>'}</span>
          <section className="flex flex-row h-[96%]">
              <span className="text-[#cb7731] text-9xl font-bold self-center">{'<'}</span>
              <div className="flex flex-col w-[60%] justify-center ">
                  <div className="flex flex-row justify-center h-full">
                      <div className="h-[70%] self-center">
                          <span className={`text-yellow-200 ${sourceCodePro.className}`}>{'<body>'}</span>
                          <div className="flex-shrink-0 h-full w-px bg-gray-500 mx-4 opacity-[0.3]"></div>
                          <span className={`text-yellow-200 ${sourceCodePro.className}`}>{'</body>'}</span>
                      </div>
                      <div className="h-[60%] self-center">
                          <span className={`text-yellow-200 ${sourceCodePro.className}`}>{'<h1>'}</span>
                          <div className="flex-shrink-0 h-full w-px bg-gray-500 mx-4 opacity-[0.3]"></div>
                          <span className={`text-yellow-200 ${sourceCodePro.className}`}>{'</h1>'}</span>
                      </div>
                      <div className="h-[50%] self-center">
                          <h1 className="text-9xl font-bold text-white mb-2">Nicolas Herrera</h1>
                          <h2 className="text-5xl text-white mb-4">Software Developer</h2>
                          <p className="text-xl text-white">
                              Hi, I'm Nicolas Herrera, a software developer from Colombia. I'm currently studying at the Universidad de Antioquia. I'm passionate about technology and I love learning new things.
                          </p>
                      </div>
                  </div>
              </div>
              <span className="text-[#cb7731] text-9xl font-bold self-center">{'/>'}</span>

              <div className="flex-shrink-0 h-full w-px bg-gray-500 mx-4"></div>
              <div className="flex flex-col w-[40%] justify-center text-center">
                  <h1 className={`text-[500px] font-bold text-white ${sourceCodePro.className}`}>
                      N
                  </h1>
              </div>
          </section>
            <span className={`text-yellow-200 ${sourceCodePro.className} w-[2%]`}>{'</html>'}</span>
      </div>

  )
}
