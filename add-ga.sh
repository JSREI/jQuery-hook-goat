#!/bin/bash

# 处理文件的函数
add_ga() {
    local file=$1
    echo "处理文件: $file"
    
    # 检查文件是否已经包含GA代码
    if grep -q "G-EHKM9KHCQ8" "$file"; then
        echo "文件 $file 已经包含Google Analytics代码，跳过..."
        return
    fi
    
    # 备份原文件
    cp "$file" "${file}.bak"
    
    # 使用sed在<head>标签后添加GA代码，确保格式正确
    sed -i '' '/<head>/a\
    <!-- Google tag (gtag.js) -->\
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EHKM9KHCQ8"></script>\
    <script>\
      window.dataLayer = window.dataLayer || [];\
      function gtag(){dataLayer.push(arguments);}\
      gtag("js", new Date());\
\
      gtag("config", "G-EHKM9KHCQ8");\
    </script>\
' "$file"
    
    echo "完成处理: $file"
}

# 处理index.html
add_ga "index.html"

# 处理form-submit-sign/form-submit-sign.html
add_ga "form-submit-sign/form-submit-sign.html" 