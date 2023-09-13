import { DateTime } from "luxon";
export function updateTime() {
  const time = DateTime.now();
  const formattedTime = time.toFormat("LLL dd, yyyy, h:mm:ss a");
  document.getElementById('dateTime').textContent = formattedTime;
}
