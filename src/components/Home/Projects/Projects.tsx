import React from "react";

import headshot from "../../../assets/headshot.jpg";
import blobgsn from "../../../assets/blobgsn/scene_walk_3_long.gif";
import optical_flow from "../../../assets/optical_flow/optical_flow.jpg";
import recon3d from "../../../assets/cv_project/cv_thumbnail.jpg";
import recon3d_pdf from "../../../assets/cv_project/cv_project_paper.pdf";
import julia_routing from "../../../assets/julia_hashcode/path_thumbnail.jpg";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header" id="projects">
        Projects
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
            We use Gaussian "blobs" to generate a 2D latent floorplan to locally
            condition a neural radiance field. By moving, shifting, scaling,
            removing, and adding these blobs in the latent space, users can edit
            corresponding objects in the rendered scene. This results in
            editable and customizable 3D scene generation and a self-supervised
            object representation.
          </p>
          <p>
            {" "}
            <a
              href="https://dspace.mit.edu/handle/1721.1/156987"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Thesis
            </a>{" "}
            /{" "}
            <a
              href="https://ilonadem.github.io/blobgsn-demo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Project Page
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/BlobGSN"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Code
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
            Unsupervised optical flow estimation, which does not require ground
            truth data, could leverage any video data for training. We explore
            multiple frameworks for unsupervised optical flow estimation to
            tackle challenges such as photometric error, occlusion handling, and
            flow smoothness. Additionally, we propose an unsupervised generative
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
              Thesis
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/opticalflowdiffusion"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Code
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
          <h3>Single-Image 3D Object Reconstruction</h3>
          <p>
            Reconstructing 3D shapes from 2D images is a challenging task for
            computer vision because of its ill-posed nature. We tackle this
            challenge using UNet encoder-decoder neural networks, with
            single-image and multi-image approaches. We use the ShapeNet Core55
            dataset to train and evaluate our models.
          </p>
          <p>
            {" "}
            <a
              href={recon3d_pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Paper
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/img2voxel"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Code
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
          <h3>Optimal Vehicle Path Routing</h3>
          <p>
            Given a network of roads, a fleet of cars, and a time limit, how do
            we maximize the distance covered? This Julia package seeks to answer
            this problem with a collection of graph pathfinding algorithms and
            optimal greedy/lookahead routing algorithms, including Dijkstra’s,
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
              Docs
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/davidfang00/Julia_Hashcode2014.jl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE" }}
            >
              Code
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
