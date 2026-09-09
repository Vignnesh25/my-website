import React, { useState } from 'react';
import { Award, CheckCircle, ShieldCheck, X } from 'lucide-react';
import { CREDENTIALS } from '../data/portfolioData';
import { CredentialItem } from '../types';

export const CredentialsSection: React.FC = () => {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);

  return (
    <section id="credentials" className="flex flex-col space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-[#1c1b1b] pb-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#a73918]" />
          <h2 className="font-heading text-lg sm:text-xl text-[#1c1b1b] uppercase font-bold tracking-tight">
            04 // Verified Credentials
          </h2>
        </div>
        <span className="font-mono text-xs text-[#747878] font-semibold">
          ACADEMIC
        </span>
      </div>

      {/* Education Degree Card */}
      <div className="bg-white border-2 border-[#1c1b1b] p-4 brutal-shadow-sm flex flex-col space-y-1">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs text-[#a73918] font-bold uppercase">
            {CREDENTIALS[0].issuerBadge}
          </span>
          <span className="font-mono text-[10px] bg-[#f0eee9] px-2 py-0.5 border border-[#1c1b1b] font-bold">
            {CREDENTIALS[0].period}
          </span>
        </div>
        <h3 className="font-heading text-base sm:text-lg text-[#1c1b1b] font-bold">
          {CREDENTIALS[0].title}
        </h3>
        <p className="font-body text-sm text-[#444748]">
          {CREDENTIALS[0].issuer}
        </p>
        <p className="font-mono text-[11px] text-[#747878] pt-1">
          {CREDENTIALS[0].emphasis}
        </p>
      </div>

      {/* Certifications Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {CREDENTIALS.slice(1).map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCred(cert)}
            className="bg-white border-2 border-[#1c1b1b] p-3 flex items-center justify-between cursor-pointer brutal-shadow-sm hover:bg-[#f6f3ee] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#1c1b1b] bg-[#eae8e3] flex items-center justify-center font-mono text-[#1c1b1b] font-bold text-xs shrink-0">
                {cert.issuerBadge}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-[14px] font-bold text-[#1c1b1b] uppercase truncate">
                  {cert.title}
                </span>
                <span className="font-mono text-[11px] text-[#444748] truncate">
                  {cert.issuer}
                </span>
              </div>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] bg-[#ffdbd1] text-[#3b0900] border border-[#1c1b1b] px-2 py-0.5 uppercase font-bold shrink-0">
              {cert.status}
            </span>
          </div>
        ))}
      </div>

      {/* Credential Verification Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 bg-[#1c1b1b]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#1c1b1b] w-full max-w-md p-5 brutal-shadow-lg flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b-2 border-[#1c1b1b] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#a73918]" />
                <h3 className="font-heading text-base font-bold text-[#1c1b1b] uppercase">
                  VERIFIED CERTIFICATION RECORD
                </h3>
              </div>
              <button
                onClick={() => setSelectedCred(null)}
                className="w-7 h-7 border border-[#1c1b1b] bg-[#f0eee9] hover:bg-[#1c1b1b] hover:text-white flex items-center justify-center font-bold text-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="text-[#747878] text-[10px] uppercase">Title</div>
                <div className="font-heading text-base font-bold text-[#1c1b1b]">{selectedCred.title}</div>
              </div>

              <div>
                <div className="text-[#747878] text-[10px] uppercase">Issuer</div>
                <div className="text-[#1c1b1b]">{selectedCred.issuer}</div>
              </div>

              {selectedCred.verificationId && (
                <div>
                  <div className="text-[#747878] text-[10px] uppercase">Credential ID</div>
                  <div className="bg-[#f0eee9] p-2 border border-[#1c1b1b] font-bold text-[#a73918]">
                    {selectedCred.verificationId}
                  </div>
                </div>
              )}

              <div>
                <div className="text-[#747878] text-[10px] uppercase mb-1">Key Competencies</div>
                <div className="flex flex-wrap gap-1">
                  {selectedCred.skillsAcquired.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#eae8e3] border border-[#1c1b1b] text-[10px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedCred(null)}
              className="w-full py-2 bg-[#1c1b1b] text-white border-2 border-[#1c1b1b] font-mono text-xs uppercase font-bold"
            >
              CLOSE RECORD
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
