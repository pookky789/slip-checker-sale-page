export default function HomePage() {
  return (
    <div>
      {/* ✅ Top Bar */}
      <header className="bg-blue-800 text-white p-4 shadow-md h-16">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <img src="/header-logo.png" alt="SlipChecker Logo" className="h-full w-auto" />
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#benefits" className="hover:underline text-gray-200">ประโยชน์</a></li>
            <li><a href="#packages" className="hover:underline text-gray-200">แพ็กเกจ</a></li>
            <li><a href="#howto" className="hover:underline text-gray-200">วิธีใช้งาน</a></li>
            <li><a href="#faq" className="hover:underline text-gray-200">คำถามที่พบบ่อย</a></li>
            <li><a href="#contact" className="hover:underline text-gray-200">ติดต่อเรา</a></li>
            <li><a href="/member" className="hover:underline font-semibold text-yellow-300">สมาชิก</a></li>
          </ul>
        </nav>
      </header>

      {/* ✅ Section 1: ประโยชน์ของระบบ */}
      <section id="benefits" className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">ทำไมต้องใช้ระบบตรวจสอบสลิป?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ลดการปลอมแปลง เพิ่มความน่าเชื่อถือ ตรวจสอบได้ทันที
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">🔒 ปลอดภัย</div>
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">⚡ ตรวจสอบทันที</div>
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">📊 รายงานครบถ้วน</div>
          </div>
        </div>
      </section>

      {/* ✅ Section 2: แพ็กเกจ */}
      <section id="packages" className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">เลือกแพ็กเกจที่เหมาะกับคุณ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-700">Starter</h3>
              <p className="my-4 text-gray-600">เหมาะสำหรับผู้เริ่มต้น</p>
              <p className="text-2xl font-semibold text-blue-600">฿199/เดือน</p>
            </div>
            <div className="border rounded-lg p-6 shadow-lg bg-blue-50">
              <h3 className="text-xl font-bold text-blue-700">Pro</h3>
              <p className="my-4 text-gray-600">สำหรับธุรกิจขนาดกลาง</p>
              <p className="text-2xl font-semibold text-blue-600">฿499/เดือน</p>
            </div>
            <div className="border rounded-lg p-6 shadow hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-700">Enterprise</h3>
              <p className="my-4 text-gray-600">รองรับระดับองค์กร</p>
              <p className="text-2xl font-semibold text-blue-600">฿999/เดือน</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Section 3: การใช้งานง่าย */}
      <section id="howto" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">ใช้งานง่ายใน 3 ขั้นตอน</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">📤 อัปโหลดสลิป</div>
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">🔍 ระบบตรวจสอบ</div>
            <div className="p-4 bg-white rounded shadow text-blue-600 font-semibold">📥 รับผลทันที</div>
          </div>
        </div>
      </section>

      {/* ✅ Section 4: การใช้งาน API ที่ง่าย */}
<section id="api" className="py-16 bg-gray-100 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-800 mb-6">ใช้งาน API ได้ง่ายสุดๆ</h2>
    <p className="text-lg text-gray-700 mb-8">
      เราออกแบบ API ให้เรียบง่าย รองรับทั้งระบบ POS, เว็บ, และแอปมือถือ
    </p>

    <div className="bg-gray-600 rounded-lg p-6 text-left font-mono text-sm overflow-x-auto shadow">
      <p className="mb-2 text-gray-400 font-semibold">🔗 ตัวอย่าง:</p>
      <pre>
{`POST https://api.slipchecker.com/verify

Headers:
  Authorization: Bearer YOUR_API_KEY

Body:
  {
    "imageUrl": "https://example.com/slip.jpg"
  }`}
      </pre>
    </div>

    <p className="mt-6 text-gray-600">
      ตอบกลับภายใน <strong className="text-blue-600">1-2 วินาที</strong> พร้อมข้อมูลการตรวจสอบแบบละเอียด
    </p>
  </div>
</section>


      {/* ✅ Footer */}
      <footer className="bg-blue-800 text-white text-center py-6 mt-10">
        <p className="text-sm font-light">&copy; {new Date().getFullYear()} SlipChecker - All rights reserved.</p>
      </footer>
    </div>
  );
}
