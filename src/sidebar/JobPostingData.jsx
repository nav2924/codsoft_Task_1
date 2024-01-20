import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //convert date to string
  const twentyFourHoursAgoData = twentyFourHoursAgo.toISOString().slice(0, 10);
  const SevenDaysAgoData = SevenDaysAgo.toISOString().slice(0, 10);
  const ThirtyDaysAgoData = ThirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoData}
          title="Last 24 hours "
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={SevenDaysAgoData}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={ThirtyDaysAgoData}
          title="Last 30 days"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
