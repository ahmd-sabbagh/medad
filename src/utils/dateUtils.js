export const calculateTimeDifference = (targetDate) => {
    const now = new Date(); // Current date
    const target = new Date(targetDate); // Target date

    // Calculate difference in milliseconds
    const diffMs = target - now;

    if (diffMs <= 0) {
        return [
            { value: "٠", label: "يوم" },
            { value: "٠", label: "ساعة" },
            { value: "٠", label: "دقيقة" },
            { value: "٠", label: "ثانية" }
        ];
    }

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return [
        { value: diffDays.toLocaleString("ar-EG"), label: "يوم" },
        { value: diffHours.toLocaleString("ar-EG"), label: "ساعة" },
        { value: diffMinutes.toLocaleString("ar-EG"), label: "دقيقة" },
        { value: diffSeconds.toLocaleString("ar-EG"), label: "ثانية" }
    ];
};
