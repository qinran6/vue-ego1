<template>
  <div class="home-page">
    <div class="welcome-section">
      <h2>欢迎来到商城后台管理系统</h2>
      <p>在这里，您可以管理商品、订单、用户等信息。</p>
    </div>
    <div class="image-section">
      <img src="/hello.jpg" alt="欢迎图片" class="welcome-image" />
    </div>
    <div class="info-section">
      <h3>系统功能介绍：</h3>
      <ul>
        <li>商品添加：添加商品信息。</li>
        <li>信息编辑：编辑商品信息。</li>
        <li>商品下架：下架删除商品信息。</li>
        <li>富文本编辑器：富文本编辑</li>
        <li>图片上传：上传图片功能</li>
        <li>商品查询：查询商品信息。</li>
        <li>国际化：多语言面向国际。</li>
        <li>用户管理：管理用户账户登录登出。</li>
        <li>规格管理：查看数据和修改参数。</li>
        <li>订单管理：查看用户订单。</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.welcome-section {
  text-align: center;
  margin-bottom: 20px;
}

.welcome-section h2 {
  font-size: 24px;
  color: #333;
}

.welcome-section p {
  font-size: 16px;
  color: #666;
}

.image-section {
  text-align: center;
  margin-bottom: 20px;
}

.welcome-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.info-section {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-section h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.info-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.info-section li {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}
</style>