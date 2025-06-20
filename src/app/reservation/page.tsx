"use client";

import React, { useState, useCallback } from "react";
import Stepper from "../components/maincomponents/Stepper";
import { SectionTitle } from "../components/maincomponents/SectionTitle";

// --- Type Definitions ---
type Step = {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
};

interface ReservationFormData {
  fullName: string;
  email: string;
  dateTime: string;
  contactNumber: string;
  otp: string;
  guests: string;
  specialRequests: string;
}

enum VerificationStatus {
  UNVERIFIED = "UNVERIFIED",
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  FAILED = "FAILED",
}

const initialFormData: ReservationFormData = {
  fullName: "",
  email: "",
  dateTime: "",
  contactNumber: "",
  otp: "",
  guests: "",
  specialRequests: "",
};

const stepsData: Step[] = [
  {
    id: 1,
    title: "Make A Reservation",
    description: "Your details here",
    status: "completed",
  },
  {
    id: 2,
    title: "Select A Table",
    description: "Your details here",
    status: "current",
  },
  {
    id: 3,
    title: "Place Order",
    description: "Your details here",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Reservation Summary",
    description: "Your details here",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Successful",
    description: "Your details here",
    status: "upcoming",
  },
];

const Page: React.FC = () => {
  const [formData, setFormData] =
    useState<ReservationFormData>(initialFormData);
  const [contactVerificationStatus, setContactVerificationStatus] =
    useState<VerificationStatus>(VerificationStatus.UNVERIFIED);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleVerifyContact = useCallback(async () => {
    if (!formData.contactNumber) {
      alert("Please enter a contact number.");
      return;
    }
    setContactVerificationStatus(VerificationStatus.PENDING);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setContactVerificationStatus(VerificationStatus.VERIFIED);
    alert(
      "Contact number verified (simulated). You can now enter the OTP if one was sent."
    );
  }, [formData.contactNumber]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage(null);

      console.log("Form Data Submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const success = Math.random() > 0.2;
      if (success) {
        setSubmitMessage("Reservation booked successfully!");
        setFormData(initialFormData);
        setContactVerificationStatus(VerificationStatus.UNVERIFIED);
      } else {
        setSubmitMessage("Failed to book reservation. Please try again.");
      }
      setIsSubmitting(false);
    },
    [formData]
  );

  const getVerifyButtonText = () => {
    switch (contactVerificationStatus) {
      case VerificationStatus.PENDING:
        return "Verifying...";
      case VerificationStatus.VERIFIED:
        return "Verified";
      default:
        return "Verify";
    }
  };

  const inputBaseClasses =
    "w-full p-3 bg-[#103E4F] border border-transparent rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none placeholder-gray-500 text-gray-100 transition-colors duration-150";
  const labelBaseClasses = "block text-sm font-medium text-gray-300 mb-1.5";

  return (
    <div className="min-h-screen bg-[#0B1517] flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full mt-30 -mr-10 -mb-10 max-w-6xl">
        <div className="flex items-center w-full">
          <SectionTitle title={"Reservation"} />
        </div>
      </div>

      <div className="w-full mr-70 max-w-6xl flex flex-col md:flex-row bg-[#06090c] overflow-hidden">
        <div className="w-full md:w-[20%] lg:w-1/3 bg-[#0B1517] p-1 sm:p-2 md:p-5 flex md:justify-center">
          <div className=" mt-10 max-w-xs w-full">
            <Stepper steps={stepsData} />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="bg-[#0B1517] p-6 sm:p-8 md:p-10 flex-grow">
            {submitMessage && (
              <div
                className={`p-3 mb-6 rounded-md text-sm ${
                  submitMessage.includes("successfully")
                    ? "bg-green-700/40 text-green-300 border border-green-600"
                    : "bg-red-700/40 text-red-300 border border-red-600"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              id="reservationFormMain"
              className="space-y-5"
            >
              <div>
                <label htmlFor="fullName" className={labelBaseClasses}>
                  Customer's Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputBaseClasses}
                  placeholder="e.g., Jane Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelBaseClasses}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBaseClasses}
                  placeholder="info@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="dateTime" className={labelBaseClasses}>
                  Date & Time{" "}
                  <span className="text-xs text-gray-400 ml-1">
                    (Max session: 1 hour)
                  </span>
                </label>
                <input
                  type="text"
                  name="dateTime"
                  id="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className={inputBaseClasses}
                  placeholder="DD/MM/YYYY - HH:MM e.g., 27/03/2025 - 13:40"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactNumber" className={labelBaseClasses}>
                  Contact Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={`${inputBaseClasses} pr-[7.5rem]`}
                    placeholder="+94 712 345 678"
                    required
                    disabled={
                      contactVerificationStatus === VerificationStatus.PENDING
                    }
                  />
                  <button
                    type="button"
                    onClick={handleVerifyContact}
                    disabled={
                      contactVerificationStatus ===
                        VerificationStatus.PENDING ||
                      contactVerificationStatus === VerificationStatus.VERIFIED
                    }
                    className={`
                      absolute right-1 top-1/2 -translate-y-1/2 px-4 py-2 text-sm rounded-md font-semibold transition-all duration-200 ease-in-out whitespace-nowrap
                      ${
                        contactVerificationStatus ===
                        VerificationStatus.VERIFIED
                          ? "bg-green-600 text-white cursor-default"
                          : contactVerificationStatus ===
                            VerificationStatus.PENDING
                          ? "bg-gray-500 text-white cursor-wait"
                          : "bg-teal-600/10 text-white hover:bg-white/60 hover:text-teal-700 hover:border-teal-600/60"
                      }
                    `}
                  >
                    {getVerifyButtonText()}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="otp" className={labelBaseClasses}>
                  OTP code
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${
                    contactVerificationStatus !== VerificationStatus.VERIFIED
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter OTP (if applicable)"
                  disabled={
                    contactVerificationStatus !== VerificationStatus.VERIFIED
                  }
                />
              </div>

              <div>
                <label htmlFor="guests" className={labelBaseClasses}>
                  Number of Guests
                </label>
                <input
                  type="text"
                  name="guests"
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={inputBaseClasses}
                  placeholder="e.g., 2 Persons"
                  required
                />
              </div>

              <div>
                <label htmlFor="specialRequests" className={labelBaseClasses}>
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputBaseClasses} resize-none`}
                  placeholder="Please let us know if you have any special requests"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="bg-[#0B1517] p-6 text-center shadow-inner">
            <button
              type="submit"
              form="reservationFormMain"
              disabled={isSubmitting}
              className={`
                w-full md:w-3/4 lg:w-[40vw] py-3 px-6 text-lg font-medium rounded-[10px]
                transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#040608]
                ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-wait"
                    : "bg-[#1F2937] text-white hover:bg-[#374151] hover:scale-105 hover:shadow-lg"
                }
              `}
            >
              {isSubmitting ? "Submitting..." : "book reservation"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
