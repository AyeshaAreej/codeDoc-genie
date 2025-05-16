'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
  <span className="text-2xl font-bold" style={{ color: '#4e91c1' }}>CodeDoc Genie</span>
</div>

            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition font-medium">How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition font-medium">About</a>
              <Link href="/signin" className="text-blue-600 hover:text-blue-700 font-semibold transition">
                Sign In
              </Link>
              <Link
  href="/signup"
  className="text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-900 transition shadow-md hover:shadow-lg"
  style={{
    background: 'linear-gradient(145deg, #4e91c1, #134574)',
  }}
>
  <span className="text-white">Sign Up</span>
</Link>



            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen 
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg z-40 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition py-2 font-medium" onClick={() => setIsMenuOpen(false)}>How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition py-2 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <hr className="border-gray-200" />
              <Link href="/signin" className="text-blue-600 hover:text-blue-700 font-semibold transition py-2" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
              <Link href="/signup" className="bg-blue-800 text-white font-bold px-4 py-2.5 rounded-lg text-center hover:bg-blue-900 transition font-semibold shadow-md" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 flex flex-col justify-center items-center text-center min-h-[calc(100vh-80px)] pt-10 pb-20 md:pt-16 md:pb-24">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
  Document Your Code Like <span className="text-blue-600" style={{ color: '#4e91c1' }}>Magic</span>
</h1>

        <p className="text-lg md:text-xl text-gray-600 md:w-3/4 mx-auto mb-10">
          CodeDoc Genie helps you generate clear, comprehensive documentation for your code using AI. 
          No more struggling with undocumented code or writing tedious comments.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
  <Link
    href="/signup"
    className="bg-[#4195d1] text-white font-bold px-8 py-3.5 rounded-lg text-lg hover:bg-[#2f678f] transition w-full md:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
  >
    <span className="text-white">Get Started — It's Free</span>
  </Link>

  <Link
    href="/chat"
    className="border-2 border-[#4e91c1] text-[#4e91c1] bg-white font-bold px-8 py-3.5 rounded-lg text-lg hover:bg-blue-50 transition w-full md:w-auto shadow-md hover:shadow-lg transform hover:scale-105"
  >
    Try Demo
  </Link>
</div>

      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 md:py-24 bg-white rounded-none shadow-none my-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Powerful Features</h2>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Smart Documentation</h3>
            <p className="text-gray-600 text-center">
              Our AI understands your code context and generates relevant, meaningful documentation that actually helps developers.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Export Options</h3>
            <p className="text-gray-600 text-center">
              Copy the generated documentation directly or download it as a file for easy integration into your codebase.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Automatic Language Detection</h3>
            <p className="text-gray-600 text-center">
              Our smart AI automatically detects your code's programming language, saving you time and reducing errors.
            </p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="bg-blue-50 py-16 md:py-24 my-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#134574] text-white rounded-full w-14 h-14 flex items-center justify-center mb-6 text-2xl font-bold">1</div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Paste/Upload Your Code</h3>
              <p className="text-gray-600">Simply paste your code or upload a file into our editor.</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#134574] text-white rounded-full w-14 h-14 flex items-center justify-center mb-6 text-2xl font-bold">2</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Generate Documentation</h3>
              <p className="text-gray-600">Click a button and let our AI analyze and document your code.</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#134574] text-white rounded-full w-14 h-14 flex items-center justify-center mb-6 text-2xl font-bold">3</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Copy or Download</h3>
              <p className="text-gray-600">Get your documentation instantly and use it however you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About CodeDoc Genie</h2>
              <p className="text-gray-600 mb-6 text-lg">
                CodeDoc Genie was built by developers for developers. We know the pain of working with undocumented code
                and the time it takes to write proper documentation.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our tool uses advanced AI to understand code context and generate meaningful documentation
                that saves time and improves code quality.
              </p>
              <Link
  href="/signup"
  className="inline-block bg-[#4195d1] font-bold px-8 py-3.5 rounded-lg hover:bg-[#2f678f] transition shadow-md hover:shadow-lg transform hover:scale-105"
>
  <span className="text-white !text-white">Join Our Community</span>
</Link>

            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#4e91c1] to-[#134574] flex items-center justify-center p-12">

              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Start Documenting Today</h3>
                <p className="mb-6 text-lg">Join thousands of developers who are saving time with CodeDoc Genie.</p>
                <p className="text-4xl font-bold">✨ Magic for Your Code ✨</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <span className="text-2xl font-bold text-white">CodeDoc Genie</span>
              <p className="text-slate-400 mt-2">Your AI code documentation assistant</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">© 2025 CodeDoc Genie. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
