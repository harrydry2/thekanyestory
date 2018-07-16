import axios from "axios";
import { $, $$ } from "./bling";

export default function ajaxCommentVote(e) {
  e.preventDefault();
  axios.post(this.action).then(res => {
    this.querySelector(".uvcIcon").classList.toggle("votedTrue");
    this.nextSibling.textContent = res.data.upVotes.length;
  });
}
