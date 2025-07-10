import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaComments, FaUsers, FaRocket, FaShieldAlt, FaCloud, FaArrowRight, FaPlay, FaCheck, FaStar } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaEdit className="text-3xl text-blue-600" />,
      title: "Real-time Document Editing",
      description: "Collaborate on documents in real-time with live cursor tracking and instant synchronization.",
      image: "https://images.unsplash.com/photo-1733381919300-e49929a82a5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxkb2N1bWVudCUyMGVkaXRpbmd8ZW58MHx8fHwxNzUyMTYxOTAzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <FaComments className="text-3xl text-green-600" />,
      title: "Live Chat Integration",
      description: "Stay connected with your team through integrated chat while working on documents.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc1MjE2MTg5N3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <FaUsers className="text-3xl text-purple-600" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based access and collaborative workspaces.",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
    }
  ];

  const benefits = [
    "Increase productivity by 40%",
    "Real-time collaboration",
    "Secure cloud storage",
    "24/7 support",
    "Multi-device sync",
    "Version control"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp",
      text: "CollabBoard has revolutionized how our team works together. The real-time editing is seamless!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      text: "The best collaboration tool we've ever used. Our productivity has increased significantly.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Design Lead",
      company: "Creative Agency",
      text: "Love the intuitive interface and the live chat feature. Makes remote work feel connected.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <FaEdit className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CollabBoard
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            </nav>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/auth?mode=login')}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/auth?mode=signup')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Collaborate in
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Real-time
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your team's productivity with CollabBoard's real-time document editing, 
                  live chat, and seamless collaboration features.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/auth?mode=signup')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span className="text-lg font-semibold">Start Free Trial</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <FaPlay className="text-blue-600" />
                  <span className="text-lg font-semibold">Watch Demo</span>
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-green-600" />
                  <span className="text-sm text-gray-600">Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCloud className="text-blue-600" />
                  <span className="text-sm text-gray-600">Cloud Sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRocket className="text-purple-600" />
                  <span className="text-sm text-gray-600">Lightning Fast</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1651563688824-a853587bfb2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlfGVufDB8fHxibHVlfDE3NTIxNjE4NTh8MA&ixlib=rb-4.1.0&q=85"
                alt="CollabBoard Interface"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to collaborate effectively in one platform
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-blue-200">
                  <div className="mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <div className="flex items-center space-x-4">
                      {feature.icon}
                      <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose CollabBoard?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-green-600 text-lg" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/auth?mode=signup')}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7562452/pexels-photo-7562452.jpeg"
                alt="Team Collaboration"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h3>
            <p className="text-xl text-gray-600">
              Join thousands of teams who trust CollabBoard
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team's Collaboration?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams who are already collaborating more effectively with CollabBoard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/auth?mode=signup')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors shadow-lg font-semibold text-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate('/auth?mode=login')}
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Login to Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaEdit className="text-white" />
                </div>
                <h4 className="text-xl font-bold">CollabBoard</h4>
              </div>
              <p className="text-gray-400">
                The ultimate real-time collaboration platform for modern teams.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CollabBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;