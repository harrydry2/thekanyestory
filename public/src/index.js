import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";

import ajaxVote from "./modules/ajaxVote";
import ajaxCommentVote from "./modules/ajaxCommentVote";

const upVoteForms = $$("form.upVoteButton");
upVoteForms.on("submit", ajaxVote);

const upVoteCommentForms = $$("form.commentButton");
upVoteCommentForms.on("submit", ajaxCommentVote);
