---
sidebar_position: 7
---

# Definition of Terms

### Road Network Region

> A Road Network Region (also referred to as Region) is an interconnected collection of Links, Intersections, and other entities such as emission detector and public transport routes.
>
> One Region is isolated from another, i.e. there are no entities connected between two Regions.

### Link/Road

> A Link (also known as Road) is a stretch of road that connects two Intersections.

### Intersection

> An Intersection is a place where two or more Links meet.
> It could be a junction that connects more than two roads in different directions, or a signalised pedestrian crossing.
>
> Typically, an Intersection has a traffic signal. On some Regions, an Intersection is associated with SCATS vehicle counters to count traffic volume.

### Panorama

> Panorama is a 360-degree panoramic photo of an Intersection.

### Volume

> Volume represents the number of vehicles _exiting_ a Link within a period of time.
> Actual volume data is obtained from vehicle counter inductive loops installed in signalised intersections, placed **at the end** of every Link.

#### 15-minute volume

> 15-minute volume is measured in the number of vehicles per 15 minute.
> This represents the actual sum of counted traffic within a 15-minute period.

#### 1-hour volume

> 1-hour volume is measured in the number of vehicles per hour (vehicles/hr).
> This represents the actual sum of counted traffic within a 60-minute period.

#### Hourly volume {#hourly-volume}

> Hourly volume is measured in the number of vehicles per hour (vehicles/hr).
>
> Unlike 1-hour volume that represents the actual sum of vehicle counts within an hour, we use the term _hourly volume_ to represent any volume data that is normalised to 1 hour.
> For example, we can normalise 15-minute volume to hourly volume by simply multiplying it by 4.

### Speed

> Speed is measured in km/h. It is obtained from TomTom Intermediate Traffic API.
>
> In this system, we assign one speed value to an entire Link, regardless of how long it is.
> However, TomTom splits the speed data into segments, each having different length and average speed value.
> Therefore, we normalised the average speed using the following method:
>
> First, we map each segment into a corresponding Link.
> One Link can be mapped into more one or more segments.
> Then, we compute the average speed weighted by the segment length:
>
> $$
> Link Speed = \frac{1}{n}\sum^{n}_{i=0}{Length_i \times AvgSpeed_i}
> $$
>
> where $n$ is the number of segments mapped to a particular Link.

### Hazard

> Hazard score estimates the probability of an accident happening on a particular Link in the long run (i.e., about 7 years).
> It is measured in percentage (%).

### Congestion

> Congestion score is measured in percentage (%), where 0 indicates no traffic, and 100% indicates that the road is at full capacity.
> It is calculated using this formula:
>
> $$
> Congestion = \frac{HourlyVolume}{Lanes \times CapacityPerLane} \times 100
> $$
>
> where $HourlyVolume$ is the [hourly volume](#hourly-volume) of the Link, $CapacityPerLane$ is the maximum number of vehicles per hour per lane, and $Lanes$ is the number of lanes.

### Emission

> Emission is measured in PM2.5µg/m3, which denotes the mass of PM2.5 particles within a cubic metre volume.
> Actual emission data is retrieved from environmental protection authorities.

#### Link Predicted Emission

> The emission data coming from EPA is measured from a set of fixed observstion stations placed across the region.
> To have a prediction of emission emitted by each Link, we use the following method:
>
> First, we trained a prediction model that takes the PM2.5 reading and the speed and volume of the nearest Link, and outputs the next PM2.5 readings for the next 3 hours.
> Then, we used the trained model to predict PM2.5 emission for all Links, based on the speed and volume of the Link.

### Average travel time

> Average travel time is measured in minutes, which estimates the average travel time of riders in a region (or a subset of it).
> It is calculated using this method:
>
> First, we use all-pairs shortest path algorithm to compute the shortest path between all pairs of intersections in the network.
> The path weight is based on the straight-line Haversine distance between two ends of each Link.
>
> Second, we take the longest pairwise path distance, and get the [speed](#speed) of each Link in the path.
> If the speed data is missing, we use the speed limit instead.
>
> Finally, we compute the travel time using this equation:
>
> $$
> AvgTravelTime = \sum^n_{i=0}{\frac{Length_i \mathbin{/} 1000}{Speed_i \times 60}}
> $$
>
> where $n$ is the number of Links in the shortest path, $Length_i$ denotes the length of $i$-th Link (in metres), and $Speed_i$ denotes the average speed of the $i$-th Link (in km/h).

### Expected travel time

> Expected travel time has similar formula as [Average Travel Time](#average-travel-time), but instead of using actual speed data we use the speed limit.
> The idea is that people tend to travel near the speed limit, and this metric will represent the expected travel time if there is no traffic congestion.
>
> $$
> ExpectedTravelTime = \sum^n_{i=0}{\frac{Length_i \mathbin{/} 1000}{SpeedLimit_i \times 60}}
> $$
>
> where $n$ is the number of Links in the shortest path, $Length_i$ denotes the length of $i$-th Link (in metres), and $SpeedLimit_i$ denotes the speed limit of the $i$-th Link (in km/h).

### Average delay

> Average delay is the difference between [Average Travel Time](#average-travel-time) and [Expected Travel Time](#expected-travel-time):
>
> $$
> AvgDelay = AvgTravelTime - ExpectedTravelTime
> $$

### Cycle time

> We define cycle time as the average duration of all phases within a 15-minute time period.
> It is an approximation of the actual cycle time based on real-time signal data, but it is usually shorter than the actual cycle time.
> Because SCATS can adapt the timing on each phase on the fly, cycle time can change over time.
>
> Cycle time is measured in seconds.

### Estimated queue length

> Estimated queue length is measured in metres.
> Queue length is measured from the intersection until the last vehicle that is queueing at the intersection at a particular time.