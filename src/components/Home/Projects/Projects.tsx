import React from "react";

import headshot from "../../../assets/headshot.jpg";
import blobgsn from "../../../assets/blobgsn/scene_walk_3_long.gif";
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
            We combined BlobGAN with Generative Scene Networks to generate
            editable 3D scenes. Namely, we use Gaussian “blobs” as input to
            generating a 2-D floorplan that is then used to locally condition a
            neural radiance field. The Gaussian blobs represent objects in a
            scene; by moving, shifting, scaling, removing, and adding the blobs
            in the latent space we are able to make corresponding changes in the
            rendered images. The result is a customizable and editable 3D scene,
            and a self-suprevised way of identifying and representing the
            objects in it.
          </p>
          <p>
            {" "}
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

      {/* CV Project */}
      <div className="projects-item">
        <div className="projects-left">
          <img src={recon3d} alt="" className="projects-img" />
        </div>
        <div className="projects-right">
          <h3>Single-Image 3D Object Reconstruction</h3>
          <p>
            The 3D shape reconstruction from 2D images problem is an extremely
            challenging task for computer vision because of its ill-posed
            nature. However, it is also a crucial task that has been used to the
            advantage of many fields including medical imaging, autonomous
            driving and object detection. Many recent advances in both the
            quality of datasets and models have enabled rapid progress for this
            problem. We explore tackling this challenge using UNet
            encoder-decoder neural network architectures, with single-image and
            multi-image approaches. We use the ShapeNet Core55 dataset from the
            2017 ICCV shape reconstruction challenge to train and evaluate our
            models. Our best proposed model achieves an average
            intersection-over-union of 0.41 and a mostly smooth latent space.
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
            A Julia package with a collection of graph pathfinding algorithms
            and optimal greedy/lookahead routing algorithms. Given a network of
            roads, a fleet of cars, and a time limit, what is the set of vehicle
            paths that maximizes the distance covered within the time limit?
            This package seeks to answer this problem with a set of path routing
            algorithms including Dijkstra’s, greedy BFS solutions, and lookahead
            trees. The package includes full documentation, CI pipelines, and
            100% unit test code coverage.
          </p>
          <p>
            {" "}
            <a
              href="https://davidfang00.github.io/Julia_Hashcode2014.jl/dev/"
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
