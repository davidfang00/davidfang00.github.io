import React from "react";

import headshot from "../../../assets/headshot.jpg";
import openai_audio from "../../../assets/openai/openai_audio_models.png";
import heartleaflogo from "../../../assets/heartleaf/heartleaflogofull.png";
import blobgsn from "../../../assets/blobgsn/scene_walk_3_long.gif";
import optical_flow from "../../../assets/optical_flow/optical_flow.png";
import recon3d from "../../../assets/cv_project/cv_thumbnail_cropped.png";
import recon3d_pdf from "../../../assets/cv_project/cv_project_paper.pdf";
import julia_routing from "../../../assets/julia_hashcode/paths_thumbnail.png";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header" id="projects">
        Things I've Built
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
          <h3>OpenAI GPT-4o Audio</h3>
          <p>
            New GPT-4o audio models for speech-to-text and text-to-speech in the
            OpenAI API. The speech-to-text model is SOTA on multilingual
            transcription benchmarks, while the TTS model brings better voice
            controllability and customization.
          </p>
          <p>
            {" "}
            <a
              href="https://platform.openai.com/docs/guides/audio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              api_guide
            </a>{" "}
            /{" "}
            <a
              href="https://www.openai.fm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              openai.fm
            </a>{" "}
            /{" "}
            <a
              href="https://openai.com/index/introducing-our-next-generation-audio-models/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              research_blog
            </a>{" "}
            /{" "}
            <a
              href="https://techcrunch.com/2025/03/20/openai-upgrades-its-transcription-and-voice-generating-ai-models/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              techcrunch
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
            these blobs in the latent space, corresponding objects can be edited
            in the rendered scene. This results in editable and customizable 3D
            scene generation and a self-supervised object representation.
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
            We explore multiple frameworks for unsupervised optical flow
            estimation to tackle challenges such as photometric error, occlusion
            handling, and flow smoothness. Additionally, we propose an
            unsupervised generative framework for optical flow diffusion from a
            single frame.
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
            Reconstructing 3D voxel shapes from 2D images is a challenging task
            for computer vision. We tackle this challenge using UNet
            encoder-decoder neural networks, with single-image and multi-image
            approaches. We use the ShapeNet Core55 dataset to train and evaluate
            our models.
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
      <div className="projects-item">
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
      </div>
    </div>
  );
};

export default Projects;
