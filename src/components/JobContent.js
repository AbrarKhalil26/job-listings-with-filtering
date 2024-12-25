import React from "react";

const JobContent = ({ filterData, listSearch, setListSearch }) => {
  const searchTags = (tags) => {
    if (!listSearch.includes(tags)) {
      setListSearch((prev) => [...prev, tags]);
    }
  };
  return (
    <div className="py-12 grid gap-9 md:gap-5">
      {filterData.map((job) => (
        <div
          key={job.id}
          className={`relative border-primary ${
            job.featured && "border-l-4"
          } bg-white shadow-custom-cyan rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 pt-8 pb-4 md:py-4`}
        >
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full absolute -top-6 left-6 md:static md:w-20 md:h-20 md:-top-6"
              src={job.logo}
              alt={job.company}
            />
            <div className="flex flex-col gap-2 w-full border-b-[1px] md:border-0 pb-3 md:pb-0">
              <div className="flex items-center gap-6">
                <p className="text-primary text-sm font-semibold">
                  {job.company}
                </p>
                <div className="flex items-center gap-2">
                  {job.new && (
                    <span className="new_feature bg-primary">New!</span>
                  )}
                  {job.featured && (
                    <span className="new_feature bg-veryDarkGrayishCyan">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold cursor-pointer duration-300 hover:text-primary">{job.position}</h3>
              <div className="text-gray-500 text-[12px] flex items-center gap-2">
                <p>{job.postedAt}</p>
                <p>.</p>
                <p>{job.contract}</p>
                <p>.</p>
                <p>{job.location}</p>
              </div>
            </div>
          </div>

          <div>
            <ul className="flex flex-wrap items-center gap-2 md:justify-end">
              {job.role && (
                <li className="tags" onClick={() => searchTags(job.role)}>
                  {job.role}
                </li>
              )}
              {job.level && (
                <li className="tags" onClick={() => searchTags(job.level)}>
                  {job.level}
                </li>
              )}
              {job.languages.map((language) => (
                <li
                  key={language}
                  className="tags"
                  onClick={() => searchTags(language)}
                >
                  {language}
                </li>
              ))}
              {job.tools.map((tool) => (
                <li
                  key={tool}
                  className="tags"
                  onClick={() => searchTags(tool)}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobContent;
