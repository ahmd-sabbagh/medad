interface ScheduleProps {
  id: string;
  title: string;
  appointment: {
    title_ar: string;
    from: string;
    to: string;
  }[];
}