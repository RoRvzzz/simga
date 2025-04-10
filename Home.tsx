import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Globe, 
  Mail, 
  Youtube,
  Rocket,
  Terminal,
  Coffee
} from 'lucide-react';
import { usePageView } from '../hooks/usePageView';

function Home() {
  usePageView();

  return (
    <div className="starry-bg">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <main id="main" className="content-container">
        <section className="section min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="profile-image w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src="https://avatarfiles.alphacoders.com/174/174369.png"
                    alt="Profile"
                    className="responsive-image"
                  />
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold gradient-heading">
                    RoRvzzz
                  </h1>
                  
                  <p className="text-xl text-white/80">
                    <span className="gradient-text gradient-purple">Python</span>
                    {" & "}
                    <span className="gradient-text gradient-blue">Lua</span>
                    {" Developer"}
                  </p>

                  <p className="text-lg text-white/60 max-w-2xl">
                    Experienced developer focused on creating efficient and elegant solutions.
                    Specializing in automation, web applications, and innovative software solutions.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://github.com/rorvzzz" className="secondary-button">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <Link to="/projects" className="primary-button">
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.tiktok.com/@.rorvzzz"
                className="glass-card p-6 group focus-ring"
              >
                <Globe className="w-6 h-6 mb-3 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium">TikTok</h3>
                <p className="text-sm text-white/60 mt-1 group-hover:text-white/80">
                  Follow my coding journey
                </p>
              </a>

              <a
                href="https://slat.cc/rorvzzz"
                className="glass-card p-6 group focus-ring"
              >
                <Globe className="w-6 h-6 mb-3 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium">Slat</h3>
                <p className="text-sm text-white/60 mt-1 group-hover:text-white/80">
                  Check out my profile
                </p>
              </a>

              <a
                href="https://www.youtube.com/@RoRvzzz"
                className="glass-card p-6 group focus-ring"
              >
                <Youtube className="w-6 h-6 mb-3 text-red-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium">YouTube</h3>
                <p className="text-sm text-white/60 mt-1 group-hover:text-white/80">
                  Watch my tutorials
                </p>
              </a>

              <a
                href="mailto:rorvzzz@pm.me"
                className="glass-card p-6 group focus-ring"
              >
                <Mail className="w-6 h-6 mb-3 text-green-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-white/60 mt-1 group-hover:text-white/80">
                  Get in touch
                </p>
              </a>
            </div>

            <div className="mt-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Skills & Expertise
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="gradient-text gradient-purple">Python</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden skill-bar">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{width: '95%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="gradient-text gradient-blue">Lua</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden skill-bar">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-green-400">JavaScript</span>
                        <span>75%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden skill-bar">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-orange-400">HTML/CSS</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden skill-bar">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Rocket className="w-6 h-6 mr-2" />
                  Featured Projects
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="glass-card p-6 group">
                    <Terminal className="w-8 h-8 mb-4 text-purple-400" />
                    <h3 className="text-lg font-semibold mb-2">Automation Tools</h3>
                    <p className="text-sm text-white/60">Custom automation solutions for workflow optimization</p>
                  </div>
                  <div className="glass-card p-6 group">
                    <Code className="w-8 h-8 mb-4 text-blue-400" />
                    <h3 className="text-lg font-semibold mb-2">Web Applications</h3>
                    <p className="text-sm text-white/60">Modern web apps with responsive design</p>
                  </div>
                  <div className="glass-card p-6 group">
                    <Coffee className="w-8 h-8 mb-4 text-green-400" />
                    <h3 className="text-lg font-semibold mb-2">Developer Tools</h3>
                    <p className="text-sm text-white/60">Tools and utilities for developers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/projects" className="glass-card p-6 block group focus-ring">
                <h3 className="font-medium flex items-center">
                  View All Projects
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-all duration-300" />
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  Explore my complete portfolio of work
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;