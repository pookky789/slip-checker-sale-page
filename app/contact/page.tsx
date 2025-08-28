import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-center min-h-[60vh]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6">ติดต่อเรา</h1>
          <p className="text-lg text-gray-700 mb-10">
            หากคุณมีคำถาม ข้อเสนอแนะ หรือปัญหาเกี่ยวกับการใช้งาน กรุณาติดต่อเราผ่านช่องทางด้านล่าง ทีมงานของเรายินดีให้บริการคุณในเวลาทำการ
          </p>
          <div className="grid grid-cols-1 gap-8">
            {/* Email */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">อีเมล</h3>
              <p className="text-gray-600">
                <a href="mailto:support@slip-checker.com" className="text-blue-800 hover:underline">
                  support@slip-checker.com
                </a>
              </p>
            </div>
            {/* LINE@ */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-green-500 text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">LINE Official</h3>
              <p className="text-gray-600">
                <a
                  href="https://line.me/R/ti/p/@slipchecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline font-semibold"
                >
                  @slipchecker
                </a>
              </p>
            </div>
            {/* Website */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">เว็บไซต์</h3>
              <p className="text-gray-600">
                <a href="https://www.slip-checker.com" className="text-blue-800 hover:underline">
                  www.slip-checker.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-10 text-gray-500 text-sm">
            เวลาทำการ: จันทร์ – ศุกร์ 09:00 – 17:00 น.
          </div>
        </div>
      </section>
    </Layout>
  );
}