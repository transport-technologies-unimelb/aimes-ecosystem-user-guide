---
sidebar_position: 2.5
---

# Traffic Congestion (Granular)

> **Region availability:** Brisbane, Mecca

### Overview

This layer visualises the congestion data in a more granular manner.

Unlike the [Traffic Congestion](./traffic-congestion.md) layer, which shows a numerical congestion index for each Link, this layer shows a categorical congestion data for each _segment_ of each Link.

A long stretch of Link can have multiple segments, each having different congestion values.

### Links vs Segments

Links are permanent in nature.
Unless a part of the road is physically demolished or altered, it is unlikely for a Link to change.

Segments, however, can change over time.
Depending on the characteristics of the congestion at that particular time, segments may have different starting and end points.

For example, at 9am in the morning, the part of a road near the intersection will be more congested than the other parts of the road.
Therefore, the Link is divided into two segments:
- Near the intersection, where it is congested.
- Far from the intersection, where it is not congested.

But at 12pm, the congestion clears up. 
At that point, the Link will only have one segment, where it is not congested.

<img src="/img/map/layers/congestion-granular.png" width="400" />