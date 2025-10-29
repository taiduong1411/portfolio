import { personalInfo } from "../../data/personal";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "Về tôi" },
    { href: "#projects", label: "Dự án" },
    { href: "#skills", label: "Kỹ năng" },
    { href: "#contact", label: "Liên hệ" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-blue-200 font-medium mb-3">
              {personalInfo.position}
            </p>
            <p className="text-blue-100 text-sm leading-relaxed">
              Digital Transformation, Data Analytics & System Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span className="break-all">{personalInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>HCM City, Vietnam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
