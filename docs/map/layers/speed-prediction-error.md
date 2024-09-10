---
sidebar_position: 8
---

# Speed Prediction Error

> **Region availability:** Melbourne, Metropolitan Melbourne

This layer shows the speed prediction error measured in RMSE.

![](/img/map/layers/speed-pred-error.png)

### Shown prediction

The platform predicts volumes every 15 minutes up to 3 hours ahead.

Use the "Shown prediction" selector to choose which prediction to visualise.
For instance, "45 minutes" means it shows a predicted volume 45 minutes ahead of the actual volume.

### Averaging

We compute the RMSE metric every 15 minutes.
You can use this option to choose how the platform will average the RMSE values.

There are four options:
- Past 24 hours: All 15-minute RMSE over the past 24 hours will be averaged.
- Past 6 hours: All 15-minute RMSE over the past 6 hours will be averaged.
- Past 1 hour: All 15-minute RMSE over the past 1 hour will be averaged.
- Past 15 minutes: Only the latest RMSE value will be shown.

