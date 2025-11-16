# React + Vite

# مشروع عرض المنتحات
يقوم بعرض المنتجات مع امكانية التصفية والبحث مع مراعاة اهادة استخدام الcompmonent ,والclean code 
---
## المزايا 
 عرض المنتجات -
 - البحث مع ميزة **debounce**
 - استخدام useCallback لتحسين الاداء
 - استخدام useMemo لمنع اعادة احساب
 ## installation
 ``bash
 npm install
 npm run dev
 ``
  
 ---
 #hooks debounce
 `` 
 import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}


 ``