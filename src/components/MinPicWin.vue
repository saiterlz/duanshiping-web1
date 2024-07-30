<template>
  <div class="inside">
    <div class="ml_piclist">
      <div id="PhotoMoban" style="width: 100%">
        <ul class="modelTostParents" style="margin-top: 20px">
          <li>
            <img
              alt="A套餐 短视频代运营试水套餐方案"
              src="../assets/images/1280x1280.jpg"
            />
            <p>A套餐 短视频代运营试水套餐方案</p>
          </li>

          <li>
            <img
              alt="B套餐 短视频代运营特惠方案"
              src="../assets/images/1280x1284.jpg"
            />
            <p>B套餐 短视频代运营特惠方案</p>
          </li>

          <li>
            <img
              alt="C套餐  短视频代运营速推套餐方案"
              src="../assets/images/1280x1280.jpg"
            />
            <p>C套餐 短视频代运营速推套餐方案</p>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="page_box"
      style="width: 100%; padding-top: 5px; padding-bottom: 8px"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../assets/styles/pictureList.css");
.modelTostParents{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>