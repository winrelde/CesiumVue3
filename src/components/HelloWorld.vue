<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue';
import { useStore } from 'vuex'
import { getWeather } from '../http'
const store = useStore()
onMounted(()=>{
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(80,22,130,50)
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiY2ExNmYyOC0yYjk5LTRjOGMtYTI0ZC0xZmFmMDAwMzhlZDUiLCJpZCI6NTI1MjgsImlhdCI6MTYxODY2NjE5N30.ETTMOAYLjTMplvAxKehiZCrzT1o2s--bFqREAOSP3fg';

  const viewer = new Cesium.Viewer('cesiumContainer', { 
    geocoder: false,
    navigationHelpButton: false,
    selectionIndicator: false,
    baseLayerPicker: false,
    showRenderLoopErrors: false,
    fullscreenButton: false,
    sceneModePicker: false,
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }),
    terrainProvider: Cesium.createWorldTerrain({requestVertexNormals: true,requestWaterMask: true}),
   })

  viewer.scene.globe.enableLighting = true
})
const Test1 = () => {
  console.log('Test1')
  console.log(store.state.name)
}
const Test2 = () => {
  console.log('Test2')
  store.dispatch('setName','Mloee')
  console.log(store.state.name)
}
const Test3 = () => {
  console.log('Test3')
  let wind = getWeather()
  console.log(wind)
}
</script>

<template>
  <div id="cesiumContainer">
    <div class="sider">
      <el-button class="siderButton" @click="Test1"> Test </el-button>
      <el-button class="siderButton" @click="Test2"> Test </el-button>
      <el-button class="siderButton" @click="Test3"> Test </el-button>
      <el-button class="siderButton"> Test </el-button>
      <el-button class="siderButton"> Test </el-button>
    </div>
  </div>
</template>

<style scoped>
#cesiumContainer{
  /* position: absolute; */
  width: 100%;
  height: 100%;
}
#cesiumContainer .sider {
  position: fixed;
  right:1%;
  top:40%;
  width: 5%;
  height: 20%;
  background-color: rgba(32, 150, 193, 0.5);
  z-index: 1;
}
.siderButton{
  margin-top: 5%;
  margin-left: 2%;
  width: 3vw;
  height: 3vh;
}
</style>
