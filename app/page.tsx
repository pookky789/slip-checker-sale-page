
import Layout from './components/Layout';
export default function HomePage() {
  return (
    <Layout>

      {/* ✅ Section 1: ประโยชน์ของระบบ */}
      <section id="benefits" className="py-16 bg-gray-50 text-center">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6">ทำไมต้องใช้ระบบตรวจสอบสลิป?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            ระบบของเราช่วยลดการปลอมแปลง เพิ่มความน่าเชื่อถือ และตรวจสอบได้ทันที
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">ปลอดภัย</h3>
              <p className="text-gray-600">
                ระบบของเรามีการเข้ารหัสข้อมูลเพื่อป้องกันการปลอมแปลง
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">ตรวจสอบทันที</h3>
              <p className="text-gray-600">
                ตรวจสอบข้อมูลได้อย่างรวดเร็วภายในไม่กี่วินาที
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">รายงานครบถ้วน</h3>
              <p className="text-gray-600">
                รับรายงานผลการตรวจสอบที่ละเอียดและครบถ้วน
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/signup"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              เริ่มต้นใช้งานฟรี
            </a>
          </div>
        </div>

        <div className="mt-10 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition max-w-4xl mx-auto text-left">
          <div className="flex items-center mb-4">
            <div className="text-blue-600 text-5xl mr-4">🔍</div>
            <h3 className="text-2xl font-bold text-blue-700">หลักการตรวจสอบสลิป</h3>
          </div>
          <p className="text-gray-600 mb-4">
            ระบบตรวจสอบสลิปอัตโนมัติของเราจะใช้การสแกน <strong>QR Code ที่อยู่บนสลิปโอนเงิน</strong> ซึ่ง QR นี้มีข้อมูลที่ถูกดึงตรงจากธนาคารในขณะที่ทำรายการ
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>✅ ข้อมูลใน QR ไม่สามารถปลอมแปลงได้</li>
            <li>✅ ได้รับการเข้ารหัสโดยธนาคาร</li>
            <li>✅ แม้ภาพสลิปจะถูกแก้ไข QR ก็ยังคงเป็นข้อมูลจริง</li>
          </ul>
          <p className="text-gray-600">
            ด้วยหลักการนี้ ระบบสามารถตรวจจับสลิปปลอมได้อย่างแม่นยำและเชื่อถือได้สูงสุด
          </p>
        </div>

      </section>

      {/* ✅ Section 2: แพ็กเกจ */}
      <section id="packages" className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-10">เลือกแพ็กเกจที่เหมาะกับคุณ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Package */}
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition bg-gray-100">
              <div className="text-blue-600 text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Free</h3>
              <p className="text-gray-600 mb-4">เริ่มต้นใช้งานได้ฟรี</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">฿0/เดือน</p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✅ ใช้งานได้สูงสุด 10 ครั้ง/เดือน</li>
                <li>✅ รองรับการตรวจสอบพื้นฐาน</li>
                <li>✅ ไม่มีค่าใช้จ่าย</li>
              </ul>
              <a
                href="/signup"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
              >
                เริ่มต้นใช้งานฟรี
              </a>
            </div>

            {/* Starter Package */}
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition bg-white">
              <div className="text-blue-600 text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">เหมาะสำหรับผู้เริ่มต้น</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">฿199/เดือน</p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✅ ใช้งานได้สูงสุด 100 ครั้ง/เดือน</li>
                <li>✅ รองรับการตรวจสอบพื้นฐาน</li>
                <li>✅ รายงานผลแบบเรียลไทม์</li>
              </ul>
              <a
                href="/signup"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
              >
                เลือกแพ็กเกจ
              </a>
            </div>
      
            {/* Pro Package */}
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition bg-blue-50">
              <div className="text-blue-600 text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">สำหรับธุรกิจขนาดกลาง</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">฿499/เดือน</p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✅ ใช้งานได้สูงสุด 500 ครั้ง/เดือน</li>
                <li>✅ รองรับการตรวจสอบขั้นสูง</li>
                <li>✅ การสนับสนุนตลอด 24 ชั่วโมง</li>
              </ul>
              <a
                href="/signup"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
              >
                เลือกแพ็กเกจ
              </a>
            </div>
      
            {/* Enterprise Package */}
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition bg-white">
              <div className="text-blue-600 text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">รองรับระดับองค์กร</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">฿999/เดือน</p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>✅ ใช้งานได้ไม่จำกัด</li>
                <li>✅ การสนับสนุนเฉพาะทาง</li>
                <li>✅ การวิเคราะห์ข้อมูลเชิงลึก</li>
              </ul>
              <a
                href="/signup"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
              >
                เลือกแพ็กเกจ
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* ✅ Section 3: การใช้งานง่าย */}
      <section id="howto" className="py-16 bg-gradient-to-b from-white to-blue-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-10">ใช้งานง่ายใน 3 ขั้นตอน</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">📤</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">อัปโหลดสลิป</h3>
              <p className="text-gray-600">
                อัปโหลดภาพสลิปของคุณผ่านระบบที่รองรับทั้งเว็บและมือถือ
              </p>
            </div>
      
            {/* Step 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">ระบบตรวจสอบ</h3>
              <p className="text-gray-600">
                ระบบจะตรวจสอบข้อมูลในสลิปอย่างรวดเร็วและแม่นยำ
              </p>
            </div>
      
            {/* Step 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-6xl mb-4">📥</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">รับผลทันที</h3>
              <p className="text-gray-600">
                รับผลการตรวจสอบภายในไม่กี่วินาที พร้อมรายงานที่ครบถ้วน
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/signup"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              เริ่มต้นใช้งานฟรี
            </a>
          </div>
        </div>
      </section>

    {/* ✅ Section 4: การใช้งาน API ที่ง่าย */}
    <section id="api" className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">ใช้งาน API ได้ง่ายสุดๆ</h2>
        <p className="text-lg text-gray-700 mb-8">
          เราออกแบบ API ให้เรียบง่าย รองรับทั้งระบบ POS, เว็บ, และแอปมือถือ
        </p>
    
        <div className="bg-gray-900 rounded-lg p-6 text-left font-mono text-sm text-gray-100 overflow-x-auto shadow-lg">
          <p className="mb-4 text-blue-400 font-semibold">🔗 ตัวอย่างการใช้งาน API:</p>
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
    
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition">
            <div className="text-blue-600 text-5xl mb-4">📡</div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">เชื่อมต่อ API</h3>
            <p className="text-gray-600">
              ใช้งานง่ายด้วยการเชื่อมต่อผ่าน HTTP POST
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition">
            <div className="text-blue-600 text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">ปรับแต่งได้</h3>
            <p className="text-gray-600">
              รองรับการปรับแต่งตามความต้องการของธุรกิจ
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition">
            <div className="text-blue-600 text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">ผลลัพธ์ที่แม่นยำ</h3>
            <p className="text-gray-600">
              รับผลลัพธ์ที่แม่นยำและรวดเร็วภายใน 1-2 วินาที
            </p>
          </div>
        </div>
    
        <div className="mt-10">
          <a
            href="/docs"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            ดูเอกสาร API
          </a>
        </div>
      </div>
    </section>

         {/* ✅ Section 5: ติดต่อเรา */}
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">ติดต่อเรา</h2>
        <p className="text-lg text-gray-700 mb-10">
          หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราได้ผ่านช่องทางด้านล่าง
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
          {/* Phone */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-blue-600 text-5xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">โทรศัพท์</h3>
            <p className="text-gray-600">
              <a href="tel:+66930533311" className="text-blue-800 hover:underline">
                +66 930 533311
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
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            ติดต่อเราเพิ่มเติม
          </a>
        </div>
      </div>
    </section>

      


      </Layout>
  );
}
