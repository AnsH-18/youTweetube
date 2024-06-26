import { Router } from "express";
import { VerifyJWT } from "../middlewares/auth.middleware.js";
import { getLikedVideos, getVideoLikeStatus, toggleCommentLike, toggleTweetLike, toggleVideoLike } from "../controllers/like.controller.js";

export const likesRouter = Router()

likesRouter.use(VerifyJWT)
likesRouter.patch("/video/:videoId", toggleVideoLike)
likesRouter.patch("/tweet/:tweetId", toggleTweetLike)
likesRouter.patch("/comment/:commentId", toggleCommentLike)
likesRouter.get("/get-all", getLikedVideos)
likesRouter.patch("/checkLikeStatus/:videoanduserid", getVideoLikeStatus)
