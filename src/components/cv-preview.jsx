import "./App.css";

function CvPreview({ data }) {
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
    <>
      <div className="flex flex-col border-2 border-gray-200 gap-4 p-4 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-bold">
          {data.info[0].text.toUpperCase().trim()}{" "}
          {data.info[1].text.toUpperCase().trim()}
        </h2>
        <h2 className="text-lg">{data.info[2].text}</h2>
        <p className="text-sm mb-4 text-justify">{data.info[3].text}</p>

        <h4 className="text-sm font-bold">EDUCATION</h4>
        <hr className="border-gray-300" />
        <div>
          {data.education.map((element) => (
            <div className="p-2 flex flex-col" key={element.id}>
              <div className="flex justify-between">
                <h3 className="text-sm font-semibold">
                  {element.school.trim()}
                </h3>
                <h4 className="text-sm">
                  {element.city.trim()}
                  {", "} {element.nation.trim()}
                </h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-sm">{element.degree.trim()}</h3>
                <h4 className="text-sm">
                  {element.startEdu.trim()} {"- "}
                  {element.endEdu.trim()}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-bold">EXPERIENCE</h4>
        <hr className="border-gray-300" />
        <div>
          {data.experience.map((element) => (
            <div className="p-2 flex flex-col" key={element.id}>
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-sm">{element.position}</h3>
                <h3 className="text-sm">{element.company}</h3>
                <h4 className="text-sm">
                  {element.startDate} {" - "} {element.endDate}
                </h4>
              </div>

              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {formatJobDescription(element.jobDesc).map((item, index) => (
                    <li key={index} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CvPreview;
