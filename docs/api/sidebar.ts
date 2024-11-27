import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/aimes-ecosystem-api",
    },
    {
      type: "category",
      label: "Regions",
      items: [
        {
          type: "doc",
          id: "api/list-regions-regions-get",
          label: "List Regions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-region-regions-region-get",
          label: "Get Region",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Road network layout",
      items: [
        {
          type: "doc",
          id: "api/get-links-regions-region-links-get",
          label: "Get Links",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-by-id-regions-region-links-id-get",
          label: "Get Link By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-intersections-regions-region-intersections-get",
          label: "Get Intersections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-intersection-by-id-regions-region-intersections-id-get",
          label: "Get Intersection By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-turns-regions-region-turns-get",
          label: "Get Turns",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Volumes",
      items: [
        {
          type: "doc",
          id: "api/get-all-link-volumes-regions-region-volumes-get",
          label: "Get All Link Volumes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-historical-link-volumes-regions-region-links-link-id-volumes-get",
          label: "Get Historical Link Volumes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Speeds",
      items: [
        {
          type: "doc",
          id: "api/get-all-link-speeds-regions-region-speeds-get",
          label: "Get All Link Speeds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-historical-link-speeds-regions-region-links-link-id-speeds-get",
          label: "Get Historical Link Speeds",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Congestions",
      items: [
        {
          type: "doc",
          id: "api/get-all-link-congestions-regions-region-congestions-get",
          label: "Get All Link Congestions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-historical-link-congestions-regions-region-links-link-id-congestions-get",
          label: "Get Historical Link Congestions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Hazards",
      items: [
        {
          type: "doc",
          id: "api/get-region-link-hazards-regions-region-hazards-get",
          label: "Get Region Link Hazards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-hazards-regions-region-links-link-id-hazards-get",
          label: "Get Link Hazards",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Emissions",
      items: [
        {
          type: "doc",
          id: "api/get-region-link-emissions-regions-region-link-emissions-get",
          label: "Get Region Link Emissions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-emissions-regions-region-links-link-id-link-emissions-get",
          label: "Get Link Emissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Queue Length",
      items: [
        {
          type: "doc",
          id: "api/get-region-link-queue-lengths-regions-region-queue-lengths-get",
          label: "Get Region Link Queue Lengths",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-link-queue-lengths-regions-region-links-link-id-queue-lengths-get",
          label: "Get Link Queue Lengths",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Cycle Time",
      items: [
        {
          type: "doc",
          id: "api/get-region-intersection-cycle-times-regions-region-cycle-times-get",
          label: "Get Region Intersection Cycle Times",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-intersection-cycle-times-regions-region-intersections-intersection-id-cycle-times-get",
          label: "Get Intersection Cycle Times",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
