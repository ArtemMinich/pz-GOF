import { RoadLogistics } from "./RoadLogistics";
import { SeaLogistics } from "./SeaLogistics";
import {BiсycleLogistics} from "./BiсycleLogistics";

export { Transport } from "./Transport";
export { Truck } from "./Truck";
export { Ship } from "./Ship";
export { Logistics } from "./Logistics";
export { RoadLogistics } from "./RoadLogistics";
export { SeaLogistics } from "./SeaLogistics";

console.log("=== Factory Method ===\n");

const road = new RoadLogistics();
const sea = new SeaLogistics();
const biсycle = new BiсycleLogistics();

biсycle.planDelivery()
road.planDelivery();
sea.planDelivery();
