import React from "react";

const CTASection = () => {
  return (
    <section className="cta-section py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Projenizi Hayata Geçirin
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Profesyonel web tasarım ve geliştirme hizmetlerimizle işinizi büyütün
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Hemen Başlayın
        </button>
      </div>
    </section>
  );
};

export default CTASection;