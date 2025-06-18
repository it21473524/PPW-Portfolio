import React, { useState, useEffect } from 'react';
import {
  User,
  BookOpen,
  Target,
  FileText,
  Award,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Star,
  ArrowUp
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'journal', 'career-plan', 'cv', 'certificates'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'introduction', label: 'Introduction', icon: User },
                { id: 'journal', label: 'Journal', icon: BookOpen },
                { id: 'career-plan', label: 'Career Plan', icon: Target },
                { id: 'cv', label: 'CV', icon: FileText },
                { id: 'certificates', label: 'Certificates', icon: Award }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${activeSection === id
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Introduction */}
      <section id="introduction" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-8 shadow-xl overflow-hidden border-4 border-white">
              <img
                src="myphoto.jpg"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
              My name is W. Nikini V. Abeywickrama, a final-year student at the Sri Lanka Institute of Information Technology, specializing in Data Science under the BSc (Hons) in Information Technology program. I’m currently in Year 4, Semester 2. I have a strong interest in data science, especially in using data for environmental and climate-related research. In my free time, I enjoy watching TV and observing nature, which inspires my passion for sustainability. My goal is to become a climate data scientist and contribute to solving global environmental issues through data-driven insights.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">Committed to achieving high academic standards while maintaining a growth mindset</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600">Setting clear objectives and working systematically towards achieving them</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Always seeking new opportunities to expand knowledge and skills</p>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('journal')}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Explore My Journey</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Reflective Journal Section */}
      <section id="journal" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reflective Journal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through the Professional Practice and Workplace (PPW) course, I developed essential professional and personal skills that shaped my career direction and mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Communication:</strong> I learned to communicate more clearly in group discussions, presentations, and professional settings.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Teamwork:</strong> Group activities taught me the value of collaboration, delegation, and mutual respect in achieving goals.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Ethics:</strong> I gained awareness of professional ethics, helping me make responsible decisions in both academic and workplace settings.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Time Management:</strong> I practiced prioritizing tasks and balancing study, teamwork, and personal commitments effectively.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Development</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Public Speaking:</strong> Initially, I was nervous speaking in front of others. I overcame this by preparing thoroughly and practicing presentations in small groups.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Confidence Building:</strong> Through classroom discussions and leadership roles in team tasks, I built self-confidence and a proactive mindset.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Real-World Application:</strong> During a role-play session on workplace conflict resolution, I applied negotiation techniques that mirrored real office dynamics.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Time Pressure:</strong> Working on group assignments under tight deadlines taught me how to stay organized and focused under pressure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reflection on Course Impact</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
              The PPW course has helped me transition from a student mindset to a more professional one. It encouraged me to think long-term about my goals and gave me the tools to pursue them effectively. Skills like communication, leadership, and emotional intelligence are now part of my daily routine. I particularly valued the peer feedback sessions which gave me real insight into how I work in teams.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The most important shift was in my attitude, I’ve grown more adaptable, confident, and focused. I now approach challenges with a mindset geared toward solutions, and I feel more prepared to enter the professional world. The PPW course has not only shaped my academic journey but has also laid a strong foundation for my career.
            </p>
          </div>
        </div>
      </section>



      {/* Career Development Plan Section */}
      <section id="career-plan" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Development Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My career plan outlines a clear vision to become a climate data scientist by strategically progressing through education, experience, and skill development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Short-term Goals (0–1 Year)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Complete my BSc (Hons) in Information Technology with a specialization in Data Science</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Improve technical and soft skills through online platforms such as Coursera and LinkedIn Learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mid-term Goals (1–3 Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Join an IT company as an intern or associate in a data science-related role</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Network with professionals on LinkedIn and attend IT and environmental tech webinars</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Complete certifications in climate data analysis and machine learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Vision (3+ Years)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Establish myself as a climate data scientist working on environmental sustainability projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Contribute to research and innovation in climate prediction using data-driven techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Pursue a master's or postgraduate qualification in data science or climate science</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeline & Tools</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
              To stay on track, I will set quarterly milestones for skill development and job applications. My timeline includes completing my degree by 2025, entering the IT workforce in 2026, and advancing toward a data scientist role by 2028.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              I will use tools such as LinkedIn for networking and mentorship, Coursera and edX for continuous learning, and maintain a professional portfolio on GitHub to showcase my progress and projects. Regular feedback from mentors and career advisors will guide my journey.
            </p>
          </div>
        </div>
      </section>


      {/* CV Section */}
      <section id="cv" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my educational background, experience, and qualifications.
            </p>

            <a
              href="/portfolio.pdf"
              download
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </a>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Education */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      BSc (Hons) in Information Technology, Specializing in Data Science
                    </h4>
                    <p className="text-gray-600">Sri Lanka Institute of Information Technology (SLIIT) | 2021 – Present (Y4S2)</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      BSc (Hons) in Marine and Freshwater Sciences Degree in Oceanography and Marine Geology
                    </h4>
                    <p className="text-gray-600">University of Ruhuna | 2022 – Present (Y4S1)</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">GCE Advanced Level – Physical Science Stream</h4>
                    <p className="text-gray-600">WP/JAYA/Bomiriya Central College, Kaduwela | 2020</p>
                    <p className="text-gray-700 mt-2">Results: 3C’s</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">GCE Ordinary Level – English Medium</h4>
                    <p className="text-gray-600">WP/JAYA/Bomiriya Central College, Kaduwela | 2016</p>
                    <p className="text-gray-700 mt-2">Results: 6A’s and 3B’s</p>
                  </div>
                </div>

              </div>

              {/* Experience */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-emerald-600 mr-3" />
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Data Science & Machine Learning Intern</h4>
                    <p className="text-gray-600">Bluechip Technologies Asia | June 10, 2024 – December 10, 2024</p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Assisted in developing machine learning models for business analytics and customer segmentation.
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Conducted data preprocessing, visualization, and analysis using Python and tools like Pandas and Scikit-learn.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="space-y-8">
              {/* Contact */}
              <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">nikinivandana01@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">0701539773</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Biyagama,Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-emerald-50 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Skills</h3>
                <div className="space-y-2">
                  {[
                    'Communication',
                    'Leadership',
                    'Time Management',
                    'Problem Solving',
                    'Teamwork',
                    'Critical Thinking'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-orange-50 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sinhala</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certificates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence of continuous learning and skill development through various courses and certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Tableau Certified Data Analyst Cert Prep</h3>
              <p className="text-gray-600 text-center mb-4">LinkedIn</p>
              <p className="text-gray-700 text-sm text-center mb-6">Completed: December 28, 2024 | Duration: 6h 34m</p>
              <div className="text-center">
                <a
                  href="/projects/docs/Tableau Certified Data Analyst Cert Prep.pdf"
                  download="Tableau_Certified_Data_Analyst.pdf"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"  >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>
              </div>

            </div>

            {/* Certificate 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Using Large Datasets with pandas</h3>
              <p className="text-gray-600 text-center mb-4">LinkedIn</p>
              <p className="text-gray-700 text-sm text-center mb-6">Completed: December 26, 2024 | Duration: 36m</p>
              <div className="text-center">
                <a
                  href="/projects/docs/Using Large Datasets with pandas.pdf"
                  download="Using Large Datasets with pandas.pdf"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"  >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>

              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Building Recommendation System</h3>
              <p className="text-gray-600 text-center mb-4">Great Learning Academy</p>
              <p className="text-gray-700 text-sm text-center mb-6">Completed: June, 2024</p>
              <div className="text-center">
                <a
                  href="/projects/docs/Building recommendation systems.pdf"
                  download="Building recommendation systems.pdf"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"  >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>

              </div>
            </div>

            {/* Certificate 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Power BI Projects</h3>
              <p className="text-gray-600 text-center mb-4">Great Learning Academy</p>
              <p className="text-gray-700 text-sm text-center mb-6">Completed: May, 2024 </p>
              <div className="text-center">
                <a
                  href="/projects/docs/Power Bi projects.pdf"
                  download="Power Bi projects.pdf"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"  >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>

              </div>
            </div>

            {/* Certificate 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Machine Learning Algorithms</h3>
              <p className="text-gray-600 text-center mb-4">Great Learning Academy</p>
              <p className="text-gray-700 text-sm text-center mb-6">Completed: May, 2024 </p>
              <div className="text-center">
                <a
                  href="/projects/docs/DataScience Foundations.jpg"
                  download="DataScience Foundations.jpg"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"  >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>

              </div>
            </div>
          </div>




          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learning Journey</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Throughout this academic year, I have actively pursued additional learning opportunities to complement
              my formal education. These certificates represent my commitment to continuous improvement and staying
              current with industry trends and best practices. Each course has contributed valuable skills and
              knowledge that I apply in both academic and professional contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Thank You for Viewing My Portfolio</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This portfolio represents my journey through the PPW course and my commitment to personal and
              professional development. I look forward to continuing this growth in my future endeavors.
            </p>
            <div className="flex justify-center space-x-6">

              <a
                href="mailto:nikinivandana01@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nikinivandana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;