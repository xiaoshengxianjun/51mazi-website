# 51mazi 网站自定义域名配置指南

## 🌐 在 Vercel 中配置自定义域名

### 步骤一：在 Vercel Dashboard 中添加域名

1. **进入项目设置**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 选择 `51mazi-website` 项目
   - 点击项目设置（Settings）

2. **添加域名**
   - 在左侧菜单选择 "Domains"
   - 点击 "Add" 或 "Add Domain" 按钮
   - 输入你的域名（如 `51mazi.com` 或 `www.51mazi.com`）
   - 点击 "Add"

3. **选择域名类型**
   - **根域名**（如 `51mazi.com`）：需要配置 A 记录或 CNAME 记录
   - **子域名**（如 `www.51mazi.com`）：通常使用 CNAME 记录

### 步骤二：配置 DNS 记录

Vercel 会显示需要配置的 DNS 记录。根据你的域名提供商，选择以下方式之一：

#### 方式 A：使用 CNAME 记录（推荐，最简单）

**适用于：**
- 子域名（如 `www.51mazi.com`）
- 部分域名提供商支持根域名的 CNAME（如 Cloudflare）

**配置步骤：**
1. 登录你的域名注册商（如阿里云、腾讯云、Cloudflare 等）
2. 进入 DNS 管理页面
3. 添加 CNAME 记录：
   - **主机记录**：`www`（或留空，取决于提供商）
   - **记录值**：Vercel 提供的 CNAME 值（通常是 `cname.vercel-dns.com`）
   - **TTL**：3600（或使用默认值）

**示例（阿里云/腾讯云）：**
```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 3600
```

#### 方式 B：使用 A 记录（根域名）

**适用于：**
- 根域名（如 `51mazi.com`）
- 不支持根域名 CNAME 的提供商

**配置步骤：**
1. 在 Vercel 的 Domains 页面，选择根域名
2. Vercel 会显示需要配置的 A 记录 IP 地址（通常是多个 IP）
3. 在域名提供商处添加 A 记录：
   - **主机记录**：`@` 或留空（表示根域名）
   - **记录值**：Vercel 提供的 IP 地址（需要添加所有显示的 IP）
   - **TTL**：3600

**示例（阿里云/腾讯云）：**
```
类型: A
主机记录: @
记录值: 76.76.21.21（Vercel 提供的 IP，可能有多个）
TTL: 3600
```

#### 方式 C：使用 Cloudflare（推荐，功能强大）

如果你使用 Cloudflare 作为 DNS 提供商：

1. **在 Cloudflare 中添加域名**
   - 登录 Cloudflare Dashboard
   - 添加你的域名
   - 更新域名服务器（Nameservers）

2. **配置 DNS 记录**
   - 进入 DNS 设置
   - 添加 CNAME 记录：
     - **名称**：`www`（或 `@` 如果支持）
     - **目标**：Vercel 提供的 CNAME 值
     - **代理状态**：可以开启（橙色云朵）或关闭（灰色云朵）

3. **在 Vercel 中验证**
   - 回到 Vercel Dashboard
   - 等待 DNS 验证完成（通常几分钟到几小时）

### 步骤三：等待 DNS 传播

1. **验证 DNS 配置**
   - DNS 记录生效通常需要几分钟到 48 小时
   - 可以使用在线工具检查：
     - [DNS Checker](https://dnschecker.org/)
     - [What's My DNS](https://www.whatsmydns.net/)

2. **检查 SSL 证书**
   - Vercel 会自动为你的域名配置 SSL 证书（HTTPS）
   - 证书配置通常需要几分钟
   - 在 Vercel Dashboard 的 Domains 页面可以看到证书状态

### 步骤四：更新项目配置

域名配置完成后，需要更新项目配置：

1. **在 Vercel 中添加环境变量**
   - 进入项目 Settings > Environment Variables
   - 添加环境变量：
     - **Name**: `NUXT_PUBLIC_SITE_URL`
     - **Value**: `https://51mazi.com`（你的实际域名）
     - **Environment**: Production, Preview, Development（全选）

2. **更新 nuxt.config.ts（可选）**
   - 如果不想使用环境变量，可以直接修改：
     ```ts
     site: {
       url: "https://51mazi.com", // 你的实际域名
       // ...
     }
     ```

3. **重新部署**
   - 在 Vercel Dashboard 中点击 "Redeploy"
   - 或推送新的代码触发自动部署

### 步骤五：配置重定向（可选）

如果你同时配置了 `www` 和根域名，建议设置重定向：

1. **在 Vercel Dashboard 中**
   - 进入项目 Settings > Domains
   - 选择其中一个域名作为主域名
   - 配置另一个域名重定向到主域名

2. **或在 vercel.json 中配置**
   ```json
   {
     "redirects": [
       {
         "source": "/(.*)",
         "destination": "https://51mazi.com/$1",
         "permanent": true,
         "has": [
           {
             "type": "host",
             "value": "www.51mazi.com"
           }
         ]
       }
     ]
   }
   ```

## 📋 常见域名提供商配置示例

### 阿里云

1. 登录 [阿里云控制台](https://dns.console.aliyun.com/)
2. 进入 "域名" > "解析设置"
3. 添加记录：
   - **记录类型**：CNAME 或 A
   - **主机记录**：`www` 或 `@`
   - **记录值**：Vercel 提供的值
   - **TTL**：10 分钟

### 腾讯云

1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/)
2. 进入 "域名注册" > "我的域名" > "解析"
3. 添加记录：
   - **主机记录**：`www` 或 `@`
   - **记录类型**：CNAME 或 A
   - **线路类型**：默认
   - **记录值**：Vercel 提供的值
   - **TTL**：600

### Cloudflare

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择你的域名
3. 进入 "DNS" > "Records"
4. 添加记录：
   - **Type**：CNAME
   - **Name**：`www` 或 `@`
   - **Target**：Vercel 提供的 CNAME 值
   - **Proxy status**：DNS only（灰色云朵）或 Proxied（橙色云朵）

### GoDaddy

1. 登录 [GoDaddy](https://www.godaddy.com/)
2. 进入 "My Products" > "DNS"
3. 添加记录：
   - **Type**：CNAME
   - **Name**：`www`
   - **Value**：Vercel 提供的 CNAME 值
   - **TTL**：1 Hour

## ✅ 验证配置

配置完成后，验证以下内容：

1. **DNS 解析**
   ```bash
   # 检查 DNS 解析
   nslookup www.51mazi.com
   # 或
   dig www.51mazi.com
   ```

2. **HTTPS 证书**
   - 访问 `https://51mazi.com`
   - 检查浏览器地址栏是否显示锁图标
   - 证书应该由 Vercel 自动配置

3. **网站访问**
   - 访问你的域名
   - 确认网站正常显示
   - 检查所有页面是否正常

## 🔧 故障排查

### DNS 未生效

1. **清除 DNS 缓存**
   ```bash
   # macOS
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

2. **使用不同网络测试**
   - 尝试使用移动网络
   - 使用在线 DNS 检查工具

3. **检查 DNS 记录**
   - 确认记录值正确
   - 确认 TTL 设置合理
   - 等待 DNS 传播（最长 48 小时）

### SSL 证书问题

1. **等待证书生成**
   - Vercel 自动配置 SSL 证书
   - 通常需要几分钟到几小时

2. **检查域名验证**
   - 确保 DNS 记录已正确配置
   - 确保域名已添加到 Vercel 项目

3. **强制 HTTPS**
   - Vercel 默认启用 HTTPS
   - 可以在 vercel.json 中配置重定向

### 网站无法访问

1. **检查部署状态**
   - 确认 Vercel 部署成功
   - 检查构建日志是否有错误

2. **检查域名配置**
   - 确认域名已添加到 Vercel 项目
   - 确认 DNS 记录正确

3. **检查防火墙**
   - 某些网络可能阻止访问
   - 尝试使用不同网络

## 📚 相关资源

- [Vercel 域名文档](https://vercel.com/docs/concepts/projects/domains)
- [DNS 配置指南](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
- [SSL 证书说明](https://vercel.com/docs/concepts/projects/domains/custom-certificates)

## 💡 最佳实践

1. **使用 www 子域名**
   - 更容易配置 CNAME 记录
   - 避免根域名 CNAME 的限制

2. **配置重定向**
   - 将根域名重定向到 www
   - 或反之，保持一致性

3. **使用 Cloudflare**
   - 提供免费 CDN 加速
   - 更好的 DNS 管理
   - 额外的安全保护

4. **定期检查**
   - 定期检查域名和 SSL 证书状态
   - 确保 DNS 记录正确
