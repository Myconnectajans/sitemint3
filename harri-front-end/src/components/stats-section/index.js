import React from "react";

const StatsSection = () => {
  return (
    <section className="stats-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-600">Başarılı Proje</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Uzman Ekip</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-600">Destek</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;