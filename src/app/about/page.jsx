export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8 md:p-12">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Tentang Kami
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Platform pembelajaran yang dibuat untuk membantu mahasiswa
          memahami konsep pengembangan web modern menggunakan Next.js.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-blue-50">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
               Visi
            </h2>
            <p className="text-gray-700">
              Menjadi sumber belajar yang mudah dipahami, praktis, dan relevan
              dengan kebutuhan pengembangan website.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-green-50">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Misi
            </h2>
            <p className="text-gray-700">
              Menyediakan contoh studi kasus, dan praktikum belajar agar
              pembelajaran lebih efektif dan menyenangkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
