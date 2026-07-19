"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const services = ["무대", "포토존", "음향", "조명", "LED", "트러스", "기타"];

const inputClass = "w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-lord-orange focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      eventName: String(formData.get("eventName") ?? ""),
      eventDate: String(formData.get("eventDate") ?? ""),
      location: String(formData.get("location") ?? ""),
      indoorOutdoor: String(formData.get("indoorOutdoor") ?? ""),
      attendees: String(formData.get("attendees") ?? ""),
      services: formData.getAll("services").map(String),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      // Google Apps Script 웹 앱은 fetch 응답에 CORS 헤더를 안정적으로 내려주지 않으므로
      // no-cors로 전송하고, 요청 자체가 실패(네트워크 오류 등)한 경우만 에러로 처리합니다.
      await fetch(site.contactFormEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-lord-orange bg-lord-cream p-8 text-center">
        <p className="text-lg font-extrabold text-lord-black">상담 신청이 접수되었습니다.</p>
        <p className="mt-2 text-sm text-[#4a4a4a]">
          담당자 확인 후 빠르게 연락드리겠습니다. 급한 경우 전화 또는 카카오톡으로 문의해주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이름" name="name" required />
        <Field label="회사명" name="company" />
        <Field label="연락처" name="phone" type="tel" required />
        <Field label="이메일" name="email" type="email" />
        <Field label="행사명" name="eventName" />
        <Field label="행사일" name="eventDate" type="date" />
        <Field label="설치 장소" name="location" />
        <div>
          <Label>실내/야외</Label>
          <select name="indoorOutdoor" className={`${inputClass} mt-2`}>
            <option value="indoor">실내</option>
            <option value="outdoor">야외</option>
            <option value="both">미정</option>
          </select>
        </div>
        <Field label="예상 참석 인원" name="attendees" type="number" />
        <Field label="예산 범위" name="budget" />
      </div>

      <div>
        <Label>필요한 서비스</Label>
        <div className="mt-2 flex flex-wrap gap-3">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm">
              <input type="checkbox" name="services" value={service} />
              {service}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label>문의 내용</Label>
        <textarea name="message" rows={5} className={`${inputClass} mt-2`} placeholder="행사 목적, 참고 이미지 링크, 기타 요청 사항을 자유롭게 남겨주세요." />
      </div>

      {status === "error" && (
        <p className="text-sm font-bold text-red-600">
          접수 중 오류가 발생했습니다. 전화 또는 카카오톡으로 문의해주세요.
        </p>
      )}

      <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "접수 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-bold text-lord-black">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-lord-orange"> *</span>}
      </Label>
      <input name={name} type={type} required={required} className={`${inputClass} mt-2`} />
    </div>
  );
}
