export default function MemberPage() {
    return (
      <main className="p-10 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">เข้าสู่ระบบ / สมัครสมาชิก</h2>
        <p className="text-gray-600 mb-4">กรุณาเข้าสู่ระบบเพื่อใช้งานระบบตรวจสอบสลิป</p>
        <div className="grid gap-4">
          <input type="email" placeholder="อีเมล" className="border p-2 rounded w-full" />
          <input type="password" placeholder="รหัสผ่าน" className="border p-2 rounded w-full" />
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">เข้าสู่ระบบ</button>
          <p className="text-sm text-gray-500 mt-2">ยังไม่มีบัญชี? <a href="#" className="underline text-blue-600">สมัครที่นี่</a></p>
        </div>
      </main>
    );
  }
  