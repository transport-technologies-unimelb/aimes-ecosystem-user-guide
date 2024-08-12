---
sidebar_position: 6
---

# Link Predicted Emission

> **Region availability:** Melbourne, Metropolitan Melbourne

This layer shows the predicted emission of each Link, based on the volume, speed, and actual emission taken from the _nearest_ emission detector.

![](/img/map/layers/link-emission.png)

### Configure shown value

Use the "Shown Value" selector to select which data you want to see.
"1-hr prediction" means the predicted emission at the selected time predicted 1 hour before.

### Configure visualisation

There is an option to represent the value in width.
If you enable this option, links with higher value will have a thicker line than the rest.
This is especially useful when you zoom out the map and see a bigger picture.

The left image shows the map without this option enabled, while the right image shows the map with this option enabled.

![](/img/map/layers/vol-width.png)

### Configure binning

The layer comes with a default binning partition of 2, 4, and 6 PM2.5µg/m3.

You can change this default binning by using the "Configure binning" tool.
When you click on the button, a text field will appear.

![](/img/map/layers/binning.png)

Enter a comma-separated string representing the binning boundaries.
For example, if you want to group the values into these bins:

- 0 - 0.99
- 1 - 1.99
- 2 - 2.99
- above 3

Then you should enter this binning boundaries:

```
1, 2, 3
```

Note that 0 is not included in the string.
