---
title: "Single-Image 3D Object Reconstruction"
excerpt: "3D object voxel resconstruction from single-image input of ShapeNet classes with neural networks<br/><img src='/files/cv_project/cv_project_1.png'>"
collection: projects
---

[Code](https://github.com/davidfang00/img2voxel) | 
[Paper Link](https://davidfang00.github.io/files/cv_project/cv_project_paper.pdf)

The 3D shape reconstruction from 2D images problem is an extremely challenging task for computer vision because of its ill-posed nature. However, it is also a crucial task that has been used to the advantage of many fields including medical imaging, autonomous driving and object detection. Many recent advances in both the quality of datasets and models have enabled rapid progress for this problem. We explore tackling this challenge using UNet encoder-decoder neural network architectures, with single-image and multi-image approaches. We use the ShapeNet Core55 dataset from the 2017 ICCV shape reconstruction challenge to train and evaluate our models. Our best proposed model achieves an average intersection-over-union of 0.41 and a mostly smooth latent space.

## Results
Examples of reconstructions

<br/><img src='/files/cv_project/cv_project_1.png'>

Examples of latent embedding interpolation

<br/><img src='/files/cv_project/cv_project_2.png'>