import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  try {
    const formatString = format(new Date(dateString), "MMMM, yyyy");
    return formatString;
  } catch (err) {
    console.log(err);
    return "";
  }
};
