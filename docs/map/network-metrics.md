---
sidebar_position: 2
---

# Network Metrics

> **Region availability**: All regions

## Overview

Network metrics show the vital metrics of the road network.
It is located on the left sidebar of the Map view.

<img src="/img/map/network-metrics/network-metrics.png" />

## Available metrics

Depending on the region capabilities, Network Metrics may show the following metrics:

- Average speed ([definition](../glossary/definition-of-terms#speed))
- Average travel time ([definition](../glossary/definition-of-terms#average-travel-time))
- Average delay ([definition](../glossary/definition-of-terms#average-delay))
- Average congestion index ([definition](../glossary/definition-of-terms#congestion))
- Average hazard index ([definition](../glossary/definition-of-terms#hazard))
- Input and output volume ([definition](../glossary/definition-of-terms#volume))
- Emission ([definition](../glossary/definition-of-terms#emission))

## Showing metrics for a subset of the network

By default, Network Metrics shows the values of an entire road network.
If you need a more granular statistics, you can select a part of the road network instead.

First, on top of the Network Metrics section, click on the "Selection" option.

![](/img/map/network-metrics/network-metrics-selection.png)

Here, Network Metrics will show the average statistics for all Links and Intersections that are visible on the map.

If you want to get the statistics for an arbitrary polygon, use the Map Selection tool and set the option to Polygon.

![](/img/map/network-metrics/polygon.png)

Then, click on the map to draw the polygon.
After the polygon is closed, the numbers will be updated to show the statistics for the arbitrary polygon.

![](/img/map/network-metrics/polygon-draw.png)

### Input and output volumes

When you use the Selection option, two new metrics may be displayed: Input and Output Volumes.
These metrics represent the traffic volume coming into and going out of the selection.