<<<<<<< Updated upstream
import React from 'react';
import Header from '@/app/line/components/header';
import CalorieAlertCard from '@/app/line/components/CalorieAlertCard';
=======
"use client";

import React from "react";
import Header from "../components/header";
import CalorieAlertCard from "../components/CalorieAlertCard";
>>>>>>> Stashed changes

export default function NotificationPage() {
  return (
    <div className="wrapper">
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #f3faee;
        }
        * { box-sizing: border-box; }
        .wrapper {
          min-height: 100vh;
          background-color: #f3faee;
          display: flex;
          flex-direction: column;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          margin-top: 32px;
          padding: 0 16px;
          padding-bottom: 120px;
        }
      `}</style>

      <Header title="ปริมาณแคลลอรี่วันนี้" cartoonImage="/8.png" />

      <div className="content">
        <CalorieAlertCard level="over" title="ปริมาณแคลอรี่ของคุณเกินกำหนด" calorie={2500} maxCalorie={2400} icon={<img src="/full.png" alt="full" style={{ width: 80 }} />} />
        <CalorieAlertCard level="normal" title="ปริมาณแคลอรี่ของคุณพอดี" calorie={800} maxCalorie={2400} icon={<img src="/enough.png" alt="enough" style={{ width: 80 }} />} />
        <CalorieAlertCard level="near" title="วันนี้ปริมาณแคลอรี่ของคุณใกล้เต็ม" calorie={1200} maxCalorie={2400} icon={<img src="/nearfull.png" alt="nearfull" style={{ width: 80 }} />} />
      </div>
    </div>
  );
}
