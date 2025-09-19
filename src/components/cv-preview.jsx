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
      className="flex flex-col border-2 border-gray-200 gap-4 p-4 rounded-lg bg-white shadow-sm print:shadow-none print:border-none"
      ref={ref}
      style={{
        minHeight: "297mm", // A4 height
        width: "210mm", // A4 width
        maxWidth: "210mm",
        margin: "0 auto",
        backgroundColor: "white",
        color: "black",
      }}
    >
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">
          {data.info[0]?.text?.toUpperCase().trim()}{" "}
          {data.info[1]?.text?.toUpperCase().trim()}
        </h2>
        <h2 className="text-lg mb-2">{data.info[2]?.text}</h2>
        <p className="text-sm mb-4">{data.info[3]?.text}</p>

        {/* Contact Info */}
        <div className="text-sm">
          {data.info[4]?.text && <span>{data.info[4].text}</span>}
          {data.info[4]?.text && data.info[5]?.text && <span> | </span>}
          {data.info[5]?.text && <span>{data.info[5].text}</span>}
          {(data.info[4]?.text || data.info[5]?.text) && data.info[6]?.text && (
            <span> | </span>
          )}
          {data.info[6]?.text && (
            <a
              href={
                data.info[6].text.startsWith("http")
                  ? data.info[6].text
                  : `https://${data.info[6].text}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
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
          <>
            <h4 className="text-sm font-bold mt-4">EDUCATION</h4>
            <hr className="border-gray-300" />
            <div>
              {data.education.map((element) => (
                <div className="p-2 flex flex-col" key={element.id}>
                  <div className="flex justify-between">
                    <h3 className="text-sm font-semibold">
                      {element.school?.trim()}
                    </h3>
                    <h4 className="text-sm">
                      {element.city?.trim()}
                      {element.city?.trim() && element.nation?.trim() && ", "}
                      {element.nation?.trim()}
                    </h4>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">{element.degree?.trim()}</h3>
                    <h4 className="text-sm">
                      {element.startEdu?.trim()}
                      {element.startEdu?.trim() &&
                        element.endEdu?.trim() &&
                        " - "}
                      {element.endEdu?.trim()}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      {/* Experience Section */}
      {data.experience &&
        data.experience.length > 0 &&
        data.experience.some((exp) => exp.position || exp.company) && (
          <>
            <h4 className="text-sm font-bold mt-4">EXPERIENCE</h4>
            <hr className="border-gray-300" />
            <div>
              {data.experience.map((element) => (
                <div className="p-2 flex flex-col" key={element.id}>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-sm">{element.position}</h3>
                    <h3 className="text-sm">{element.company}</h3>
                    <h4 className="text-sm">
                      {element.startDate}
                      {element.startDate && element.endDate && " - "}
                      {element.endDate}
                    </h4>
                  </div>

                  {element.jobDesc && (
                    <div className="text-sm p-2">
                      <ul className="list-disc list-outside space-y-1 ml-2">
                        {formatJobDescription(element.jobDesc).map(
                          (item, index) => (
                            <li key={index} className="text-sm leading-relaxed">
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      {/* Skills Section */}
      {data.skill &&
        data.skill.length > 0 &&
        data.skill.some((skill) => skill.skill) && (
          <>
            <h4 className="text-sm font-bold mt-4">SKILLS</h4>
            <hr className="border-gray-300" />
            <div className="grid grid-cols-3 gap-4 p-2 max-w-full">
              {data.skill
                .filter((skill) => skill.skill?.trim())
                .map((element) => (
                  <div className="p-2 flex flex-col" key={element.id}>
                    <h3 className="font-bold text-sm">{element.skill}</h3>
                  </div>
                ))}
            </div>
          </>
        )}
    </div>
  );
});

CvPreview.displayName = "CvPreview";

export default CvPreview;
