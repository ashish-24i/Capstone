import Video from "../Model/video.model.js";

export async function createVideo(req, res) {

    try{
        const video= new Video(req.body);
        await video.save();
        res.status(201).send(video);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}





export async function fetchVideo(req, res) {
  try {
    const videos = await Video.find(); 
    res.status(200).json(videos);       
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error: error.message });
  }
}
