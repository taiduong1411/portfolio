import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Rocket,
  BarChart3,
  GraduationCap,
  ExternalLink,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  Code,
  Database,
  Cloud,
  Layers,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { personalInfo } from "../../data/personal";
import { mainSkills, getProjectsBySkill } from "../../data/experiences";
import { skillCategories, softSkills } from "../../data/skills";

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState("lark-platform");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProjects = getProjectsBySkill(selectedSkill);
  const currentSkillInfo = mainSkills.find((s) => s.id === selectedSkill);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[72px_72px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full shadow-lg border border-green-400/50"
                data-aos="fade-down">
                <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">
                  Sẵn sàng cho cơ hội mới
                </span>
              </div>

              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="100">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                  Xin chào, tôi là{" "}
                  <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-300">
                  {personalInfo.position}
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  {personalInfo.bio.intro}
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-up"
                data-aos-delay="200">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Liên hệ với tôi</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all">
                  <Code className="w-5 h-5" />
                  <span>Xem dự án</span>
                </a>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-6 pt-8"
                data-aos="fade-up"
                data-aos-delay="300">
                {personalInfo.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1 border border-white/10">
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-200 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background circles */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div
                  className="absolute inset-4 bg-linear-to-tr from-indigo-400 to-pink-400 rounded-full opacity-15 blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                {/* Main image */}
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-gray-800/50 ring-4 ring-blue-500/30"
                />

                {/* Floating cards */}
                <div className="absolute top-10 -left-4 bg-gray-800/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-blue-500/50 animate-float hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      IT Operations
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-4 bg-gray-800/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-purple-500/50 animate-float-delay-1 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      Lark Expert
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-0 bg-gray-800/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-indigo-500/50 animate-float-delay-2 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      Data Analytics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 rounded-full text-sm font-bold mb-4 shadow-md border border-blue-500/30">
              GIỚI THIỆU
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Về tôi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="space-y-6 text-lg text-gray-200 leading-relaxed"
              data-aos="fade-right">
              <p className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl border-l-4 border-blue-500">
                {personalInfo.bio.vision}
              </p>
              <p className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl border-l-4 border-indigo-500">
                {personalInfo.bio.passion}
              </p>
              <p className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl border-l-4 border-purple-500">
                {personalInfo.bio.goal}
              </p>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              {personalInfo.highlights.map((highlight, index) => (
                <div
                  key={index}
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                  className="bg-linear-to-br from-gray-800/90 via-blue-900/50 to-indigo-900/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all">
                  <div className="text-5xl mb-3">{highlight.icon}</div>
                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-200 font-medium">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-bold mb-4 shadow-md border border-blue-500/30">
              DỰ ÁN & KỸ NĂNG
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Các dự án tiêu biểu
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
              Khám phá các dự án đã thực hiện qua từng kỹ năng chuyên môn của
              tôi
            </p>
          </div>

          {/* Skill Tabs */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            data-aos="fade-up">
            {mainSkills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill.id)}
                className={`group relative p-6 rounded-2xl transition-all ${
                  selectedSkill === skill.id
                    ? `bg-linear-to-br ${skill.color} text-white shadow-2xl shadow-blue-500/30 scale-105`
                    : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-700 hover:border-gray-600"
                }`}>
                <div className="w-16 h-16 mb-3 mx-auto">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                <p
                  className={`text-sm ${
                    selectedSkill === skill.id
                      ? "text-white/90"
                      : "text-gray-400"
                  }`}>
                  {skill.description}
                </p>
                {selectedSkill === skill.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="relative" data-aos="fade-up">
            <div className="mb-6 flex items-center gap-3">
              <div
                className={`w-14 h-14 bg-linear-to-br ${currentSkillInfo?.color} rounded-xl flex items-center justify-center p-2 shadow-lg`}>
                <img
                  src={currentSkillInfo?.icon}
                  alt={currentSkillInfo?.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {currentSkillInfo?.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {currentProjects.length} dự án
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all flex flex-col ${
                    project.featured
                      ? "border-2 border-blue-500 ring-2 ring-blue-500/30"
                      : "border border-gray-700"
                  }`}>
                  {/* Project Image */}
                  <div className="relative bg-linear-to-br from-blue-900/50 to-indigo-900/50 h-48 flex items-center justify-center p-4">
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-500 text-center">
                        <Layers className="w-12 h-12 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm">Hình ảnh dự án</p>
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span>Nổi bật</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.period}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies
                            ?.slice(0, 4)
                            .map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          {project.technologies?.length > 4 && (
                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-blue-400">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-auto w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 group">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 rounded-full text-sm font-bold mb-4 shadow-md border border-blue-500/30">
              NĂNG LỰC
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Kỹ năng chuyên môn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`p-6 rounded-2xl transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
                  category.featured
                    ? "bg-linear-to-br from-blue-900/50 via-indigo-900/50 to-purple-900/50 backdrop-blur-md border-2 border-blue-500 ring-2 ring-blue-500/30"
                    : "bg-gray-800/50 backdrop-blur-md border border-gray-700"
                }`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                        skill.expert
                          ? "bg-green-500/20 text-green-400 border border-green-500/50"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                      }`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="space-y-8" data-aos="fade-up">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
              Kỹ năng mềm
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex flex-col items-center gap-3 p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all border border-gray-700 hover:border-blue-500">
                  <span className="text-4xl">{skill.icon}</span>
                  <span className="text-center font-semibold text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-bold mb-4 shadow-md border border-blue-500/30">
              HỌC VẤN
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Quá trình đào tạo
            </h2>
          </div>

          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <div className="bg-gray-900/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all border-2 border-blue-500/50 hover:border-blue-400">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-20 h-20 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl ring-4 ring-blue-500/30">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-lg text-gray-200 italic mb-2">
                    Chuyên ngành: {personalInfo.education.major}
                  </p>
                  <p className="text-lg font-semibold text-blue-400 mb-2">
                    {personalInfo.education.school}
                  </p>
                  <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{personalInfo.education.period}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-bold mb-4 shadow-md border border-blue-500/30">
              LIÊN HỆ
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Kết nối với tôi
            </h2>
            <p className="text-lg text-gray-100 font-medium">
              Tôi luôn sẵn sàng kết nối và thảo luận về các cơ hội hợp tác mới
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href={`tel:${personalInfo.phone}`}
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all text-center border border-gray-700 hover:border-blue-500">
              <Phone className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-2">Điện thoại</h3>
              <p className="text-gray-100">{personalInfo.phone}</p>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all text-center border border-gray-700 hover:border-blue-500">
              <Mail className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-100 break-all">{personalInfo.email}</p>
            </a>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all text-center border border-gray-700">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-2">Địa chỉ</h3>
              <p className="text-gray-100 text-sm">
                451/38/9 Xo Viet Nghe Tinh
                <br />
                Ward 26, Binh Thanh District
                <br />
                HCM City
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all text-center border border-gray-700">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-2">Ngày sinh</h3>
              <p className="text-gray-100">{personalInfo.birthday}</p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="max-w-3xl mx-auto bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 rounded-3xl shadow-2xl text-white text-center border-4 border-white/20">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Sẵn sàng cho cơ hội mới
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Nếu bạn đang tìm kiếm một IT Operations Specialist với kinh nghiệm
              trong Digital Transformation, đặc biệt là Lark Platform, hãy liên
              hệ với tôi!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
              <Mail className="w-5 h-5" />
              <span>Gửi email cho tôi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}>
          <div
            className="bg-gray-900 rounded-xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 sm:p-6 flex items-start justify-between z-10">
              <div className="flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  {selectedProject.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-bold">
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                      Nổi bật
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-gray-400">
                    {selectedProject.period}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                  {selectedProject.company} • {selectedProject.role}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors shrink-0">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Project Images Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative bg-linear-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl overflow-hidden">
                  {/* Main Image */}
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className="w-full h-48 sm:h-64 md:h-96 object-contain bg-gray-800"
                  />

                  {/* Image Counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? selectedProject.images.length - 1
                              : prev - 1
                          )
                        }
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all">
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === selectedProject.images.length - 1
                              ? 0
                              : prev + 1
                          )
                        }
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all">
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                    </>
                  )}

                  {/* Thumbnail Gallery */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/70 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg sm:rounded-xl max-w-[90%] overflow-x-auto">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                            idx === currentImageIndex
                              ? "border-blue-500 scale-110"
                              : "border-transparent hover:border-gray-400"
                          }`}>
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                  Mô tả dự án
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                  Công nghệ sử dụng
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg text-xs sm:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              {selectedProject.highlights &&
                selectedProject.highlights.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                      Chi tiết thực hiện
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/50 backdrop-blur-md p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-gray-700">
                          {highlight.title && (
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                              {highlight.icon && (
                                <span className="text-2xl sm:text-3xl">
                                  {highlight.icon}
                                </span>
                              )}
                              <h4 className="text-base sm:text-lg font-bold text-white">
                                {highlight.title}
                              </h4>
                            </div>
                          )}
                          <ul className="space-y-2">
                            {highlight.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-300">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Metrics */}
              {selectedProject.metrics &&
                selectedProject.metrics.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                      Kết quả đạt được
                    </h3>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-blue-500/30 text-center">
                          <div className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                            {metric.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                    Liên kết
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm sm:text-base font-semibold transition-colors">
                        {link.type === "github" && (
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        {link.type === "live" && (
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-800 p-4 sm:p-6">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="w-full py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-colors">
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
