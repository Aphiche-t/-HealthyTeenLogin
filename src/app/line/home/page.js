<<<<<<< Updated upstream
"use client";

=======
'use client';
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import Image from "next/image";
import BottomMenu from "@/app/line/components/menu";
import Link from "next/link";
<<<<<<< Updated upstream
import CalorieSummary from "@/app/line/components/CalorieSummary";

export default function HomePage() {
  return (
    <div className="page">
=======
import BottomMenu from "../components/menu";
import CalorieSummary from "../components/CalorieSummary";
import MenuPopup from "../components/MenuPopup"; // ✅ ใช้ path เดียวกับหน้า Me

import { auth, db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const toYMD = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export default function HomePage() {
  const [uid, setUid] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ state สำหรับป๊อปอัป

  // รอสถานะล็อกอิน
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUid(u?.uid ?? null));
    return () => unsub();
  }, []);

  // ดึงเมนูของ "วันนี้" ตาม uid + ymd
  useEffect(() => {
    const load = async () => {
      if (!uid) {
        setItems([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const ymd = toYMD(new Date());
        const qRef = query(
          collection(db, "food"),
          where("uid", "==", uid),
          where("ymd", "==", ymd)
        );
        const snap = await getDocs(qRef);
        const rows = snap.docs.map((d) => {
          const x = d.data();
          return {
            name: x.name || x.item || "",
            img: "/test.png", // รูปโลคัล
            calText:
              x.qty && Number(x.qty) > 1
                ? `${Number(x.calories || 0)}x${Number(x.qty)}`
                : `${Number(x.calories || 0)}`,
          };
        });
        setItems(rows);
      } catch (e) {
        console.error("load today menu error:", e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [uid]);

  return (
    <div className="page">
      {/* รีเซ็ตขอบขาวรอบนอก */}
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #f3faee;
        }
      `}</style>

>>>>>>> Stashed changes
      {/* Header */}
      <div className="header">
        <div className="profile">
          <Image src="/test.png" alt="profile" width={72} height={72} />
        </div>

        <div className="header-icons">
          <Link href="/line/notification" aria-label="การแจ้งเตือน">
            <Image src="/Doorbell.png" alt="doorbell" width={28} height={40} />
          </Link>

          {/* 🔽 เปลี่ยนจาก Link ไป /editmenu เป็นปุ่มเปิดเมนู */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              width: 44,
              height: 44,
              cursor: "pointer",
              display: "grid",
              placeItems: "center"
            }}
          >
            <Image src="/Menu.png" alt="เมนู" width={28} height={40} />
          </button>
        </div>
<<<<<<< Updated upstream
        {/* Summary Box (ใช้ Component) */}
        <div style={{ margin: "24px 0" }}>
          <CalorieSummary
            date="20/07/68"
            dailyCalorie={250}
            weeklyCalorie={500}
            bunnyImage="/bunny.png"
          />
        </div>
=======

        {/* Summary Box: floating */}
        <CalorieSummary variant="floating" />
>>>>>>> Stashed changes
      </div>

      {/* เมนูไอคอน 4 วงกลม */}
      <div className="circle-menu">
<<<<<<< Updated upstream
        {[ 
          { label: "บันทึกอาหาร", href: "/line/food" },
          { label: "แนะนำอาหาร", href: "/line/recommend" },
          { label: "พูดคุย", href: "/line/chat" },
          { label: "วิดีโอสุขภาพ", href: "/line/video" },
=======
        {[
          { label: "บันทึกอาหาร", href: "/line/food",      img: "/m1.png" },
          { label: "แนะนำอาหาร", href: "/line/recommend",  img: "/m2.png" },
          { label: "พูดคุย",     href: "/line/chat",       img: "/m3.png" },
          { label: "วิดีโอสุขภาพ", href: "/line/lookvideo", img: "/m4.png" },
>>>>>>> Stashed changes
        ].map((item) => (
          <Link href={item.href} key={item.label} className="circle-menu-item">
            <div className="circle-icon">
              <Image src="/test.png" alt={item.label} width={36} height={36} />
            </div>
            <div className="circle-label">{item.label}</div>
          </Link>
        ))}
      </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      {/* เมนูวันนี้ */}
      <div className="menu-today">
        <div className="menu-table">
          <div className="menu-header-row">
            <div className="menu-header-img">เมนูวันนี้</div>
            <div className="menu-header-name">เมนู</div>
            <div className="menu-header-cal">แคลอรี่</div>
          </div>
<<<<<<< Updated upstream
          {[ 
            { name: "ยำคอหมูย่าง", cal: "250", img: "/test.png" },
            { name: "ข้าวมันไก่", cal: "500", img: "/test.png" },
            { name: "น้ำเปล่า", cal: "300x4", img: "/test.png" },
            { name: "แตงโม", cal: "30x5", img: "/test.png" },
          ].map((item, index) => (
            <div className="menu-row" key={index}>
              <div className="menu-col-img">
                <Image src={item.img} alt={item.name} width={50} height={50} />
=======

          {loading ? (
            <div className="menu-row">
              <div className="empty">กำลังโหลด...</div>
            </div>
          ) : items.length === 0 ? (
            <div className="menu-row">
              <div className="empty">ยังไม่มีบันทึกในวันนี้</div>
            </div>
          ) : (
            items.map((it, idx) => (
              <div className="menu-row" key={`${it.name}-${idx}`}>
                <div className="menu-col-img">
                  <Image src={it.img} alt={it.name} width={50} height={50} />
                </div>
                <div className="menu-col-name">{it.name}</div>
                <div className="menu-col-cal">{it.calText}</div>
>>>>>>> Stashed changes
              </div>
              <div className="menu-col-name">{item.name}</div>
              <div className="menu-col-cal">{item.cal}</div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< Updated upstream
      <BottomMenu />
      <style>{`
        .page {
          background-color: #f3faee;
          min-height: 100vh;
          padding-bottom: 100px;
        }
        .header {
          background-color: #3ABB47;
          position: relative;
          height: 200px;
        }
        .header-icons {
          position: absolute;
          top: 10px;
          right: 20px;
          display: flex;
          gap: 16px;
          z-index: 20;
        }
        .profile {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 50%;
          overflow: hidden;
          width: 72px;
          height: 72px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          z-index: 20;
        }
        .summary-container {
          position: absolute;
          top: 130px;
          left: 50%;
          transform: translateX(-50%);
          width: 332px;
          height: 145px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.20);
          padding: 16px;
          z-index: 10;
          text-align: center;
        }
        .title {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 8px;
        }
        .summary-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
        }
        .summary-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .summary-date {
          font-size: 14px;
        }
        .summary-value {
          font-size: 24px;
          font-weight: bold;
        }
        .summary-unit {
          font-size: 14px;
        }
        .divider {
          width: 1px;
          height: 40px;
          background: #ccc;
        }
        .circle-menu {
          display: flex;
          justify-content: space-around;
          margin-top: 130px;
          padding: 0 16px;
        }
        .circle-menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .circle-icon {
          background: white;
          border-radius: 50%;
          padding: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          width: 64px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .circle-label {
          font-size: 12px;
          color: #333;
          margin-top: 4px;
        }
        .menu-today {
          margin-top: 24px;
          padding: 0 16px;
        }
        .menu-table {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          margin-top: 16px;
        }
        .menu-header-row {
          display: flex;
          background-color: #ffffff;
          padding: 12px 16px;
          font-weight: bold;
          font-size: 14px;
          color: #333;
          border-bottom: 1px solid #ddd;
        }
        .menu-header-img {
          width: 80px;
          text-align: center;
        }
        .menu-header-name {
          flex: 1;
          text-align: center;
        }
        .menu-header-cal {
          width: 80px;
          text-align: center;
        }
        .menu-row {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-top: 1px solid #eee;
          background-color: white;
        }
        .menu-col-img {
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .menu-col-name {
          flex: 1;
          font-size: 14px;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .menu-col-cal {
          width: 80px;
          font-size: 14px;
          font-weight: bold;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .menu-row:last-child {
          border-bottom: none;
        }
=======

      {/* ✅ วางป๊อปอัปก่อน BottomMenu ให้ซ้อนทับได้ */}
      <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <BottomMenu />

      <style>{`
        .page { background-color:#f3faee; min-height:100vh; padding-bottom:100px; }

        .header { background-color:#3ABB47; position:relative; height:240px; }
        .header-icons { position:absolute; top:10px; right:20px; display:flex; gap:16px; z-index:20; }
        .profile { position:absolute; top:16px; left:50%; transform:translateX(-50%); background:#fff; border-radius:50%; overflow:hidden; width:72px; height:72px; box-shadow:0 2px 6px rgba(0,0,0,.2); z-index:20; }

        .summary-container { position:absolute; top:120px; left:50%; transform:translateX(-50%); width:90vw; max-width:300px; background:#fff; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,.1); padding:20px 16px; text-align:center; z-index:10; }
        .bunny-img { position:absolute; top:-24px; right:-12px; width:72px; }

        .summary-box { background:#f8fafc; border-radius:12px; padding:12px 8px; display:flex; justify-content:space-between; margin-top:10px; box-shadow:0 1px 4px rgba(0,0,0,.04); }
        .title { font-weight:700; font-size:18px; margin-bottom:8px; }
        .summary-item { flex:1; text-align:center; }
        .summary-date { margin:0; font-weight:600; color:#3ABB47; font-size:15px; }
        .summary-value { margin:4px 0; font-size:20px; font-weight:700; color:#222; }
        .summary-unit { margin:0; font-size:13px; color:#888; }
        .divider { width:1px; background:#e5e7eb; margin:0 8px; }

        .circle-menu { display:flex; justify-content:space-around; margin-top:100px; padding:0 16px; }
        .circle-menu-item { display:flex; flex-direction:column; align-items:center; text-decoration:none; }
        .circle-icon { background:#fff; border-radius:50%; padding:12px; box-shadow:0 4px 10px rgba(0,0,0,.15); width:44px; height:44px; display:flex; justify-content:center; align-items:center; }
        .circle-label { font-size:12px; color:#333; margin-top:4px; }

        .menu-today { margin-top:24px; padding:0 16px; }
        .menu-table { background:#fff; border-radius:12px; box-shadow:0 2px 6px rgba(0,0,0,.05); overflow:hidden; margin-top:16px; }
        .menu-header-row { display:flex; background:#fff; padding:12px 16px; font-weight:700; font-size:14px; color:#333; border-bottom:1px solid #ddd; }
        .menu-header-img { width:80px; text-align:center; }
        .menu-header-name { flex:1; text-align:center; }
        .menu-header-cal { width:80px; text-align:center; }
        .menu-row { display:flex; align-items:center; padding:12px 16px; border-top:1px solid #eee; background:#fff; }
        .menu-col-img { width:80px; display:flex; justify-content:center; align-items:center; }
        .menu-col-name { flex:1; font-size:14px; color:#333; display:flex; justify-content:center; align-items:center; text-align:center; }
        .menu-col-cal { width:80px; font-size:14px; font-weight:700; color:#333; display:flex; justify-content:center; align-items:center; }
        .menu-row:last-child { border-bottom:none; }
        .empty { width:100%; text-align:center; color:#6b7280; }
>>>>>>> Stashed changes
      `}</style>
    </div>
  );
}
