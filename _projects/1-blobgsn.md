---
title: "BlobGSN: Generative Scene Networks with Mid-Level Blob Representations"
excerpt: "Generative adversarial network with mid-level blob representations based off of BlobGAN and Generative Scene Networks (GSN) <br/><img src='/files/blobgsn/scene_walk_3_long.gif'>"
collection: projects
---

[Project Page](https://ilonadem.github.io/blobgsn-demo/)

We combined BlobGAN with Generative Scene Networks to generate editable 3D scenes. Namely, we use Gaussian "blobs" as input to generating a 2-D floorplan that is then used to locally condition a radiance field. The Gaussian blobs represent objects in a scene; by moving, shifting, scaling, removing, and adding the blobs in the latent space we are able to make corresponding changes in the rendered images. The result is a customizable and editable 3D scene, and a self-suprevised way of identifying and representing the objects in it.

## Results

### Scene Walkthroughs
<p align="center" display="inline-block" >
  <img hspace="5px" vspace="5px" src="/files/blobgsn/scene_walk_0.gif" width="150px"/>
  <img hspace="5px" vspace="5px"  src="/files/blobgsn/scene_walk_1.gif" width="150px"/>
  <img hspace="5px" vspace="5px"  src="/files/blobgsn/scene_walk_2.gif" width="150px"/>
  <img hspace="5px" vspace="5px"  src="/files/blobgsn/scene_walk_3.gif" width="150px"/>
  <img hspace="5px" vspace="5px"  src="/files/blobgsn/scene_walk_4.gif" width="150px"/>
  <br>
  Walking through five random scenes
  <br>
  &nbsp; <br>

  <img src="/files/blobgsn/scene_walk_3_long.gif" width="40%" />
  <br>
  The walls of the scene correspond to boundaries of the blob.
  &nbsp;
  <br>
  <br>

  <img src="/files/blobgsn/scene_walk_1_slow.gif" width="40%"/>
  <br>
  Different blobs = different styles
  &nbsp; <br>

### Blob Editing
<p align="center">
  <img src="/files/blobgsn/moving_blobs_down.gif" width="50%" />
 <br>
  Moving a blob towards the camera.
 <br>
 &nbsp; <br>
 <img src="/files/blobgsn/moving_blobs_away.gif" width="50%" />
 <br>
  Moving a blob away from the camera.
  <br>
 &nbsp; <br>
 <img src="/files/blobgsn/moving_blobs_left.gif" width="50%" />
 <br>
  Moving a blob to the left of the camera.
  <br>
 &nbsp; <br>
 <img src="/files/blobgsn/moving_blobs_right.gif" width="50%" />
 <br>
  Moving a blob to the right of the camera.
</p>

<p align="center">
  <img src="/files/blobgsn/moving_blobs_double.gif" width="50%" />
 <br>
  Moving two blobs at the same time.
 <br>
 &nbsp; <br>
 <img src="/files/blobgsn/moving_blobs_spawn.gif" width="50%" />
 <br>
  Spawning a blob in the middle of the scene.
</p>