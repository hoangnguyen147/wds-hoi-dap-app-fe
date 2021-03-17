import moment from "moment";
import "moment/locale/vi";

moment.locale("vi");

export function parseTime(time) {
  return moment(new Date(time)).format("LL");
}
export function parseTimeShort(time) {
  return moment(new Date(time)).format("LLL");
}

export function parseFullTime(time) {
  return moment(new Date(time)).format("LLLL");
}

export function fromNow(time) {
  return moment(new Date(time)).fromNow();
}
