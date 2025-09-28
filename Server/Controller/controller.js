import Counter from "../Database/KrishnaBase.js";

export const saveCounter = async (req, res) => {
  try {
    const { count, mala, date } = req.body;

    const newCounter = new Counter({ count, mala, date });
    await newCounter.save();

    res.status(201).json({ message: "Saved successfully!" });
  } catch (error) {
    console.error("Error saving counter:", error);
    res.status(500).json({ message: "Failed to save counter", error });
  }
};

export const editCounter = async (req, res) => {
  try {
    const { count, mala, date } = req.body;
    const updatedCounter = await Counter.findOneAndUpdate(
      { date },
      { $set: { count, mala } },
      { new: true, upsert: false }
    );
    res.status(200).json({ message: "Updated successfully!", updatedCounter });
  } catch (error) {
    console.error("Error saving counter:", error);
    res.status(500).json({ message: "Failed to save counter", error });
  }
};

export const todaysCounter = async (req, res) => {
  try {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    const date = `${month}/${day}/${year}`;

    const todaysData = await Counter.findOne({ date });

    if (!todaysData) {
      return res.status(404).json(null);
    }

    const { count, mala } = todaysData;
    res.status(200).json({ count, mala });
  } catch (error) {
    console.error("Error fetching today's counter:", error);
    res.status(500).json({ message: "Failed to fetch counter", error });
  }
};

export const allCounters = async (req, res) => {
  try {
    const allCounts = await Counter.find();
    res.status(200).json(allCounts);
  } catch (error) {
    console.error("Error fetching today's counter:", error);
    res.status(500).json({ message: "Failed to fetch counter", error });
  }
};
