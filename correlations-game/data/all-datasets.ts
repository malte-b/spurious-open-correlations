import type { Dataset } from "@/types/dataset"

// This is placeholder data that would be replaced with real Berlin data
export const allDatasets: Dataset[] = [
  {
    id: 0,
    name: "Bike Lanes (km)",
    description: "Total kilometers of dedicated bike lanes in Berlin",
    source: "Berlin Department of Transportation",
    unit: "kilometers",
    data: [
      { year: 2013, value: 150 },
      { year: 2014, value: 168 },
      { year: 2015, value: 195 },
      { year: 2016, value: 220 },
      { year: 2017, value: 245 },
      { year: 2018, value: 275 },
      { year: 2019, value: 310 },
      { year: 2020, value: 350 },
      { year: 2021, value: 390 },
      { year: 2022, value: 430 },
    ],
  },
  {
    id: 1,
    name: "Specialty Coffee Shops",
    description: "Number of specialty coffee shops in Berlin",
    source: "Berlin Chamber of Commerce",
    unit: "shops",
    data: [
      { year: 2013, value: 25 },
      { year: 2014, value: 32 },
      { year: 2015, value: 45 },
      { year: 2016, value: 58 },
      { year: 2017, value: 72 },
      { year: 2018, value: 89 },
      { year: 2019, value: 105 },
      { year: 2020, value: 118 },
      { year: 2021, value: 135 },
      { year: 2022, value: 152 },
    ],
  },
  {
    id: 2,
    name: "Public WiFi Hotspots",
    description: "Number of free public WiFi hotspots in Berlin",
    source: "Berlin Digital Affairs Office",
    unit: "hotspots",
    data: [
      { year: 2013, value: 50 },
      { year: 2014, value: 75 },
      { year: 2015, value: 120 },
      { year: 2016, value: 180 },
      { year: 2017, value: 250 },
      { year: 2018, value: 320 },
      { year: 2019, value: 400 },
      { year: 2020, value: 450 },
      { year: 2021, value: 520 },
      { year: 2022, value: 600 },
    ],
  },
  {
    id: 3,
    name: "Beer Garden Attendance",
    description: "Annual attendance at Berlin beer gardens",
    source: "Berlin Tourism Board",
    unit: "thousands of visitors",
    data: [
      { year: 2013, value: 320 },
      { year: 2014, value: 350 },
      { year: 2015, value: 410 },
      { year: 2016, value: 470 },
      { year: 2017, value: 540 },
      { year: 2018, value: 620 },
      { year: 2019, value: 700 },
      { year: 2020, value: 450 },
      { year: 2021, value: 580 },
      { year: 2022, value: 750 },
    ],
  },
  {
    id: 4,
    name: "Street Art Murals",
    description: "Number of officially commissioned street art murals in Berlin",
    source: "Berlin Arts Council",
    unit: "murals",
    data: [
      { year: 2013, value: 15 },
      { year: 2014, value: 22 },
      { year: 2015, value: 28 },
      { year: 2016, value: 35 },
      { year: 2017, value: 42 },
      { year: 2018, value: 50 },
      { year: 2019, value: 65 },
      { year: 2020, value: 72 },
      { year: 2021, value: 85 },
      { year: 2022, value: 95 },
    ],
  },
  {
    id: 5,
    name: "Tech Startup Funding",
    description: "Annual funding received by Berlin-based tech startups",
    source: "Berlin Venture Capital Association",
    unit: "€ millions",
    data: [
      { year: 2013, value: 450 },
      { year: 2014, value: 620 },
      { year: 2015, value: 780 },
      { year: 2016, value: 950 },
      { year: 2017, value: 1200 },
      { year: 2018, value: 1500 },
      { year: 2019, value: 2100 },
      { year: 2020, value: 2400 },
      { year: 2021, value: 3200 },
      { year: 2022, value: 3600 },
    ],
  },
  {
    id: 6,
    name: "Food Trucks",
    description: "Number of registered food trucks operating in Berlin",
    source: "Berlin Food Safety Authority",
    unit: "trucks",
    data: [
      { year: 2013, value: 35 },
      { year: 2014, value: 48 },
      { year: 2015, value: 65 },
      { year: 2016, value: 82 },
      { year: 2017, value: 105 },
      { year: 2018, value: 130 },
      { year: 2019, value: 155 },
      { year: 2020, value: 170 },
      { year: 2021, value: 195 },
      { year: 2022, value: 220 },
    ],
  },
  {
    id: 7,
    name: "Apartment Prices",
    description: "Average price per square meter for apartments in Berlin",
    source: "Berlin Real Estate Association",
    unit: "€/m²",
    data: [
      { year: 2013, value: 2100 },
      { year: 2014, value: 2300 },
      { year: 2015, value: 2600 },
      { year: 2016, value: 2900 },
      { year: 2017, value: 3300 },
      { year: 2018, value: 3700 },
      { year: 2019, value: 4100 },
      { year: 2020, value: 4400 },
      { year: 2021, value: 4800 },
      { year: 2022, value: 5200 },
    ],
  },
  {
    id: 8,
    name: "Electric Vehicle Registrations",
    description: "Number of electric vehicles registered in Berlin",
    source: "Berlin Motor Vehicle Department",
    unit: "vehicles",
    data: [
      { year: 2013, value: 450 },
      { year: 2014, value: 780 },
      { year: 2015, value: 1200 },
      { year: 2016, value: 1800 },
      { year: 2017, value: 2700 },
      { year: 2018, value: 4100 },
      { year: 2019, value: 6200 },
      { year: 2020, value: 9500 },
      { year: 2021, value: 14500 },
      { year: 2022, value: 22000 },
    ],
  },
  {
    id: 9,
    name: "Vegan Restaurants",
    description: "Number of vegan restaurants in Berlin",
    source: "Berlin Restaurant Association",
    unit: "restaurants",
    data: [
      { year: 2013, value: 24 },
      { year: 2014, value: 32 },
      { year: 2015, value: 43 },
      { year: 2016, value: 56 },
      { year: 2017, value: 72 },
      { year: 2018, value: 91 },
      { year: 2019, value: 113 },
      { year: 2020, value: 125 },
      { year: 2021, value: 142 },
      { year: 2022, value: 163 },
    ],
  },
  {
    id: 10,
    name: "Coworking Spaces",
    description: "Number of coworking spaces in Berlin",
    source: "Berlin Business Development Agency",
    unit: "spaces",
    data: [
      { year: 2013, value: 30 },
      { year: 2014, value: 42 },
      { year: 2015, value: 58 },
      { year: 2016, value: 79 },
      { year: 2017, value: 105 },
      { year: 2018, value: 138 },
      { year: 2019, value: 175 },
      { year: 2020, value: 195 },
      { year: 2021, value: 220 },
      { year: 2022, value: 245 },
    ],
  },
  {
    id: 11,
    name: "Music Festival Attendees",
    description: "Annual attendance at music festivals in Berlin",
    source: "Berlin Events Authority",
    unit: "thousands of attendees",
    data: [
      { year: 2013, value: 420 },
      { year: 2014, value: 480 },
      { year: 2015, value: 550 },
      { year: 2016, value: 630 },
      { year: 2017, value: 720 },
      { year: 2018, value: 830 },
      { year: 2019, value: 950 },
      { year: 2020, value: 320 },
      { year: 2021, value: 580 },
      { year: 2022, value: 1050 },
    ],
  },
  {
    id: 12,
    name: "Urban Gardens",
    description: "Number of community urban gardens in Berlin",
    source: "Berlin Parks Department",
    unit: "gardens",
    data: [
      { year: 2013, value: 65 },
      { year: 2014, value: 78 },
      { year: 2015, value: 94 },
      { year: 2016, value: 112 },
      { year: 2017, value: 135 },
      { year: 2018, value: 162 },
      { year: 2019, value: 195 },
      { year: 2020, value: 240 },
      { year: 2021, value: 285 },
      { year: 2022, value: 320 },
    ],
  },
]
