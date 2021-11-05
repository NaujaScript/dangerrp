import React, { useState, useEffect } from 'react';

export default function Footer() {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear();
  }, [])
  return (
    <div className="border-t-2 text-sm border-yellow-400 py-4 text-center text-white">
      &copy; DangerRP - {date}
      <div>Designed by <a href="www.naujascript.com">NaujaScript</a></div>
    </div>
  );
}