import { AdminAuth } from '../../Data';   // your static credential object

const TOKEN_KEY = 'admin_token';
const EXPIRY_KEY = 'admin_expiry';

// login
// --- login مع تسجيل وقت الانتهاء ---
export const login = (email, password) => {
  if (email === AdminAuth.email && password === AdminAuth.password) {
    localStorage.setItem(TOKEN_KEY, 'authenticated');
    // حفظ الوقت الحالي + 12 ساعة (بالمللي ثانية)
    const expiry = Date.now() + 12 * 60 * 60 * 1000;
    localStorage.setItem(EXPIRY_KEY, expiry.toString());
    return true;
  }
  return false;
};

// logout
// --- logout مع مسح المؤقت ---
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRY_KEY);
  window.location.href = '/AdminLogin';
};

// check if currently logged in
// --- التحقق من صلاحية الجلسة ---
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = parseInt(localStorage.getItem(EXPIRY_KEY) || '0', 10);
  if (!token || Date.now() > expiry) {
    logout();        // تسجيل الخروج التلقائي
    return false;
  }
  return true;
};
// --- تحديث وقت الانتهاء عند أي نشاط (اختياري) ---
export const touchSession = () => {
  const expiry = Date.now() + 12 * 60 * 60 * 1000;
  localStorage.setItem(EXPIRY_KEY, expiry.toString());
};
// guard HOC
export const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    window.location.href = '/AdminLogin';
    return null;
  }
  return children;
};

