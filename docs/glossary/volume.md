---
sidebar_position: 2
---

# Traffic Volume

Volume represents the **total** number of vehicles _exiting_ a Link within a period of time. 
Actual volume data is obtained from vehicle counter inductive loops installed in most signalised intersections, placed **at the end** of every Link.

Note that if a Link has more than one lane, the volume represents the total volume across all lanes.

## Units of measurement

We define volume as the number of vehicles per unit time.
In our platform, we use three different measurements of volume.

### 15-minute volume

15-minute volume is measured in the number of vehicles per 15 minute.
This represents the actual sum of counted traffic within a 15-minute period.

### 1-hour volume

1-hour volume is measured in the number of vehicles per hour (vehicles/hr).
This represents the actual sum of counted traffic within a 60-minute period.

### Hourly volume {#hourly-volume}

Hourly volume is measured in the number of vehicles per hour (vehicles/hr).

Unlike 1-hour volume that represents the actual sum of vehicle counts within an hour, we use the term _hourly volume_ to represent any volume data that is normalised to 1 hour.
For example, we can normalise 15-minute volume to hourly volume by simply multiplying it by 4.

## Volume calculation

Not all intersections are created equal.
Some will have one detector per lane, some other will only have one detector per road.

This section will elaborate how we calculate volumes for each Link on different types of detector layout.

### One detector per lane

Here, each lane will have its own detector, as seen in the below illustration.
Link volume is calculated simply by summing the vehicle counts of detectors of all lanes.

<center>
![](/img/terms/vol/one-det-per-lane.png)
</center>

$$$
LinkVolume = \sum^{n}_{i=0}{DetectorVol_i}
$$$

where $n$ is the number of detectors assigned to that Link.

### One detector per Link

Here, a Link will only have one detector.
In which case, the Link volume will be equal to that detector's value.

<center>
![](/img/terms/vol/one-det-per-link.png)
</center>

### One detector shared across multiple Links

Occasionally, a single detector is shared by two or more Links.
Therefore, the detector reading must be divided into multiple Links.
We use weighted averaging based on the number of lanes of each Link.

The below image illustrates such instance.

<center>
![](/img/terms/vol/one-det-for-2-links.png)
</center>

$$$
LinkVolume_i = \frac{1}{L}\times NumLanes_i \times DetectorCount
$$$

where $L$ is the total number of lanes across all Links connected to the detector. 