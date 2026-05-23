import React from "react";

import blobgsn from "../../../assets/blobgsn/scene_walk_3_long.gif";
import recon3d_pdf from "../../../assets/cv_project/cv_project_paper.pdf";
import recon3d from "../../../assets/cv_project/cv_thumbnail_cropped.png";
import headshot from "../../../assets/headshot.jpg";
import heartleaflogo from "../../../assets/heartleaf/heartleaflogofull.png";
import julia_routing from "../../../assets/julia_hashcode/paths_thumbnail.png";
import openai_audio from "../../../assets/openai/openai_audio_models.png";
import openai_gpt_realtime_2 from "../../../assets/openai/openai_gpt_realtime_2.webp";
import openai_gpt_realtime from "../../../assets/openai/openai_gpt_realtime.png";
import optical_flow from "../../../assets/optical_flow/optical_flow.png";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-header" id="projects">
        Selected Work
      </h2>

      {/* OpenAI GPT-Realtime-2/Translate/Whisper */}
      <div className="projects-item">
        <div className="projects-left">
          <img
            src={openai_gpt_realtime_2}
            alt=""
            className="projects-img projects-img-openai-wide"
          />
        </div>
        <div className="projects-right">
          <h3>OpenAI GPT Realtime-2/Translate/Whisper</h3>
          <p>
            Three new realtime audio models:
            <strong> gpt-realtime-2 </strong> for voice agents with GPT-5-class
            reasoning, <strong> gpt-realtime-translate </strong> for live
            translation, and <strong> gpt-realtime-whisper </strong> for
            low-latency streaming transcription.
          </p>
          <p>
            {" "}
            <a
              href="https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              release_blog
            </a>{" "}
          </p>
        </div>
      </div>

      {/* OpenAI Realtime GA */}
      <div className="projects-item">
        <div className="projects-left">
          <img
            src={openai_gpt_realtime}
            alt=""
            className="projects-img"
            style={{ backgroundColor: "#07200a" }}
          />
        </div>
        <div className="projects-right">
          <h3>OpenAI GPT-Realtime</h3>
          <p>
            Realtime API is now generally available with a new
            <strong> gpt-realtime </strong> speech-to-speech model, along with
            two new voices and other new API features. Additionally, a{" "}
            <strong> gpt-realtime-mini </strong> model is available (announced
            at DevDay 2025).
          </p>
          <p>
            {" "}
            <a
              href="https://openai.com/index/introducing-gpt-realtime/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              release_blog
            </a>{" "}
            {/* <a
              href="https://platform.openai.com/docs/guides/realtime"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              api_guide
            </a>{" "}
            /{" "} */}
          </p>
        </div>
      </div>

      {/* OpenAI Audio models */}
      <div className="projects-item">
        <div className="projects-left">
          <img
            src={openai_audio}
            alt=""
            className="projects-img"
            style={{ backgroundColor: "#07200a" }}
          />
        </div>
        <div className="projects-right">
          <h3>OpenAI GPT-4o Transcribe/TTS</h3>
          <p>New GPT-4o audio models for transcription and text-to-speech.</p>
          <p>
            {" "}
            <a
              href="https://openai.com/index/introducing-our-next-generation-audio-models/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              release_blog
            </a>{" "}
            /{" "}
            {/* <a
              href="https://platform.openai.com/docs/guides/audio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              api_guide
            </a>{" "}
            /{" "} */}
            <a
              href="https://www.openai.fm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              openai.fm
            </a>{" "}
          </p>
        </div>
      </div>

      {/* Heartleaf Studios */}
      <div className="projects-item">
        <div className="projects-left">
          <img
            src={heartleaflogo}
            alt=""
            className="projects-img"
            style={{ backgroundColor: "#07200a" }}
          />
        </div>
        <div className="projects-right">
          <h3>Heartleaf Studios</h3>
          <p>
            Building the next generation of animation studios using our suite of
            image/video generative AI tools for animators, including tools for
            frame interpolation, sketch colorization, character turnarounds,
            object references, etc.
          </p>
          <p>
            {" "}
            <a
              href="https://heartleaf.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              heartleaf.studio
            </a>{" "}
          </p>
        </div>
      </div>

      {/* BlobGSN */}
      <div className="projects-item">
        <div className="projects-left">
          <img src={blobgsn} alt="" className="projects-img" />
        </div>
        <div className="projects-right">
          <h3>
            BlobGSN: Generative Neural Radiance Fields with Mid-Level Blob
            Representations
          </h3>
          <p>
            We use Gaussian blobs and GANs to generate a 2D latent floorplan to
            locally condition a NeRF. By moving, scaling, removing, and adding
            blobs in the latent space, corresponding objects can be edited in
            the rendered scene, resulting in editable 3D scene generation and a
            self-supervised object representation.
          </p>
          <p>
            {" "}
            <a
              href="https://dspace.mit.edu/handle/1721.1/156987"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              thesis
            </a>{" "}
            /{" "}
            <a
              href="https://ilonadem.github.io/blobgsn-demo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              project_page
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/BlobGSN"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              code
            </a>{" "}
          </p>
        </div>
      </div>

      {/* Optical Flow */}
      <div className="projects-item">
        <div className="projects-left">
          <img src={optical_flow} alt="" className="projects-img" />
        </div>
        <div className="projects-right">
          <h3>Optical Flow Estimation & Diffusion</h3>
          <p>
            We explore frameworks for unsupervised optical flow estimation to
            tackle challenges such as photometric error, occlusion handling, and
            flow smoothness. Also, we propose an unsupervised generative
            framework for optical flow diffusion from a single frame.
          </p>
          <p>
            {" "}
            <a
              href="https://dspace.mit.edu/handle/1721.1/156987"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              thesis
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/opticalflowdiffusion"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              code
            </a>{" "}
          </p>
        </div>
      </div>

      {/* CV Project */}
      <div className="projects-item">
        <div className="projects-left">
          <img src={recon3d} alt="" className="projects-img" />
        </div>
        <div className="projects-right">
          <h3>Image-to-3D Object Reconstruction</h3>
          <p>
            We propose a 3D voxel reconstruction pipeline from 2D images using
            UNet encoder-decoder neural networks, with single-image and
            multi-view approaches.
          </p>
          <p>
            {" "}
            <a
              href={recon3d_pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              paper
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/img2voxel"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              code
            </a>{" "}
          </p>
        </div>
      </div>

      {/* Julia Routing */}
      {/* <div className="projects-item">
        <div className="projects-left">
          <img src={julia_routing} alt="" className="projects-img" />
        </div>
        <div className="projects-right">
          <h3>Optimal Fleet Routing</h3>
          <p>
            Given a network of roads, a fleet of cars, and a time limit, how do
            we maximize the distance covered? This Julia package contains a
            collection of routing/pathfinding algorithms, including Dijkstra’s,
            greedy BFS solutions, and lookahead trees. The package includes full
            documentation, CI pipelines, and 100% unit test code coverage.
          </p>

          <p>
            {" "}
            <a
              href="https://davidsfang.com/Julia_Hashcode2014.jl/dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              docs
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/Julia_Hashcode2014.jl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              code
            </a>{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
