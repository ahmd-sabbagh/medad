import HijriDate, { toHijri } from 'hijri-date/lib/safe';

// import { toHijri } from "hijri-converter"; // Ensure you have this library installed

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

export const formatHijriDate = (targetDate) => {
    if (!targetDate) {
        throw new Error("Target date is required");
    }

    const nowGreg = new Date(targetDate); // Use targetDate instead of data?.data?.date
    const nowHijri = toHijri(nowGreg);

    // Extract Hijri date components
    const hijriDay = nowHijri.day;
    const hijriMonth = nowHijri.month - 1; // Adjust 1-based index to 0-based
    const hijriYear = nowHijri.year;

    const hijriMonths = [
        "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
        "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
    ];

    // Return formatted Hijri date
    return `${hijriDay} ${hijriMonths[hijriMonth]} ${hijriYear}`;
};
