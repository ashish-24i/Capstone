import { createVideo , fetchVideo } from "../Controller/video.controller.js";

export function routes(app){

    app.post('/app/videos', createVideo  );

    app.get("/app/fetch", fetchVideo)
}