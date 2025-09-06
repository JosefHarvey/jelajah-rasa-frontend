export default function AboutPage() {
  return (
    <main className="">
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        
        {/* Judul Utama */}
        <header className="text-center mb-10">
          <h1 className="font-Lora font-bold text-4xl md:text-5xl text-[#4A3521]">
            Tentang Jelajah Rasa
          </h1>
          <div className="w-20 h-1 bg-[#D71515] mx-auto mt-4"></div>
        </header>

        {/* Konten Teks */}
        <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Jelajah Rasa adalah ensiklopedia citarasa, sebuah peta pusaka kuliner Indonesia. Kami mendokumentasikan hidangan tradisional, bahan baku lokal, serta cerita otentik di baliknya.
          </p>
          <p>
            Ribuan resep warisan tersebar di seluruh Nusantara, banyak di antaranya terancam dilupakan. Misi kami adalah meneliti dan memetakan setiap rasa yang populer, maupun yang nyaris terlupakan dari setiap kota, daerah, dan desa di Indonesia.
          </p>
          <p>
            Jelajahi, cicipi, dan resapi. Temukan dan hargai setiap hidangan lokal, hormati para penjaga resepnya.
          </p>
          <p>
            Bagikan ceritamu bersama kami. Selamatkan resep nenek moyang dari kepunahan, dan perkenalkan hidangan masa kecilmu ke dalam peta rasa Nusantara.
          </p>
          <p>
            Bergabunglah dalam petualangan seru ini untuk melestarikan rasa otentik Indonesia.
          </p>
        </div>

        {/* Bagian Penutup */}
        <footer className="mt-10 pt-6 border-t border-gray-200">
          <p className="font-sans text-lg font-bold text-gray-800">
            Tim Jelajah Rasa
          </p>
          <a 
            href="mailto:kontak@jelajahrasa.id" 
            className="font-sans text-lg text-[#D71515] hover:underline"
          >
            kontak@jelajahrasa.id
          </a>
        </footer>

      </div>
    </main>
  );
}