import "./App.css";
import { forwardRef } from "react";

const CvPreview = forwardRef((props, ref) => {
  const { data } = props;

  const formatJobDescription = (jobDesc) => {
    if (!jobDesc) return [];

    const items = jobDesc
      .split(/[•\n\r-]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    if (items.length === 1) {
      return jobDesc
        .split(".")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    }

    return items;
  };

  return (
    <div
      className="w-full bg-white text-black print:shadow-none print:border-none"
      ref={ref}
      style={{
        // Hanya apply dimensi A4 saat print
        minHeight: window.matchMedia
          ? window.matchMedia("print").matches
            ? "297mm"
            : "auto"
          : "auto",
      }}
    >
      <div className="p-6 space-y-4">
        {/* Header Section */}
        <div className="text-center border-b border-gray-300 pb-6 mb-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 tracking-wide">
            {data.info[0]?.text?.toUpperCase().trim()}{" "}
            {data.info[1]?.text?.toUpperCase().trim()}
          </h1>
          <h2 className="text-base font-normal mb-4 text-gray-600">
            {data.info[2]?.text}
          </h2>
          <p className="text-sm mb-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {data.info[3]?.text}
          </p>

          {/* Contact Info */}
          <div className="text-sm text-gray-600 flex flex-wrap justify-center gap-3">
            {data.info[4]?.text && (
              <span className="font-medium">{data.info[4].text}</span>
            )}
            {data.info[4]?.text && data.info[5]?.text && (
              <span className="text-gray-400">•</span>
            )}
            {data.info[5]?.text && (
              <span className="font-medium">{data.info[5].text}</span>
            )}
            {(data.info[4]?.text || data.info[5]?.text) &&
              data.info[6]?.text && <span className="text-gray-400">•</span>}
            {data.info[6]?.text && (
              <a
                href={
                  data.info[6].text.startsWith("http")
                    ? data.info[6].text
                    : `https://${data.info[6].text}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Github
              </a>
            )}
          </div>
        </div>

        {/* Education Section */}
        {data.education &&
          data.education.length > 0 &&
          data.education.some((edu) => edu.school || edu.degree) && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider border-b-2 border-slate-800 pb-2">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {data.education.map((element) => (
                  <div className="space-y-1" key={element.id}>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-base font-bold text-gray-900">
                        {element.school?.trim()}
                      </h3>
                      <span className="text-sm text-gray-600 font-medium">
                        {element.city?.trim()}
                        {element.city?.trim() && element.nation?.trim() && ", "}
                        {element.nation?.trim()}
                      </span>
                    </div>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-sm text-gray-700 italic">
                        {element.degree?.trim()}
                      </h4>
                      <span className="text-sm text-gray-600 font-medium">
                        {element.startEdu?.trim()}
                        {element.startEdu?.trim() &&
                          element.endEdu?.trim() &&
                          " - "}
                        {element.endEdu?.trim()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Experience Section */}
        {data.experience &&
          data.experience.length > 0 &&
          data.experience.some((exp) => exp.position || exp.company) && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider border-b-2 border-slate-800 pb-2">
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {data.experience.map((element) => (
                  <div className="space-y-2" key={element.id}>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div className="flex flex-col gap-1 flex-1">
                        <h3 className="text-base font-bold text-gray-900">
                          {element.position}
                        </h3>
                        <h4 className="text-sm text-gray-600 italic">
                          {element.company}
                        </h4>
                      </div>
                      <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                        {element.startDate}
                        {element.startDate && element.endDate && " - "}
                        {element.endDate}
                      </span>
                    </div>

                    {element.jobDesc && (
                      <div className="ml-2 mt-3">
                        <ul className="space-y-2">
                          {formatJobDescription(element.jobDesc).map(
                            (item, index) => (
                              <li
                                key={index}
                                className="text-sm leading-relaxed text-gray-700 flex"
                              >
                                <span className="text-gray-400 mr-3 flex-shrink-0">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Skills Section */}
        {data.skill &&
          data.skill.length > 0 &&
          data.skill.some((skill) => skill.skill) && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider border-b-2 border-slate-800 pb-2">
                SKILLS
              </h2>
              <div className="grid grid-cols-3 gap-x-6 gap-y-3 mt-2">
                {data.skill
                  .filter((skill) => skill.skill?.trim())
                  .map((element) => (
                    <div key={element.id} className="flex items-center">
                      <span className="text-gray-400 mr-2 text-xs">•</span>
                      <span className="text-sm font-medium text-gray-800">
                        {element.skill}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
});

CvPreview.displayName = "CvPreview";

export default CvPreview;
