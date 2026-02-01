
export const getDailyInspiration = async () => {
  return {
    verse: "For I know the plans I have for you, declares the Lord.",
    reference: "Jeremiah 29:11",
    reflection: "God has a unique purpose for your journey. Trust in His timing and grace today."
  };
};

export const getSermonSummary = async (title: string, speaker: string) => {
  return ["Connecting with God's word", "Applying faith to daily life", "Growing in community"];
};
