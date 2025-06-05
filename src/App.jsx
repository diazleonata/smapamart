import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SmapaMart</h1>
        <button className="text-sm text-blue-600 hover:underline">Login</button>
      </nav>

      {/* Header */}
      <header className="text-center py-6">
        <h2 className="text-lg">Marketplace pelajar SMA Negeri X</h2>
        <p className="text-sm text-gray-500">Temukan makanan dan barang unik buatan siswa</p>
      </header>

      {/* Produk Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* ProdukCard */}
        <div className="bg-white rounded-xl shadow p-4">
          <img src="https://via.placeholder.com/300x200" alt="Donat" className="rounded mb-2" />
          <h3 className="text-lg font-semibold">Donat Coklat</h3>
          <p className="text-gray-600 mb-2">Rp5.000</p>
          <a href="https://wa.me/6281234567890" target="_blank"
             className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 inline-block">
            📲 Chat Penjual
          </a>
        </div>
        {/* Tambah produk lainnya di sini */}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        Made with ❤️ by siswa Smapa
      </footer>
    </div>
  )
}

export default App
