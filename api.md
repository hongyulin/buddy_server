buddy_server的api文档

# 零级页面
## login
### app登录
适应平台：app
> Url: /api/level0/checkin
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>> 
> 响应字段：json
>> 

### app微信登录
适应平台：app
> Url: /api/level0/checkin/bywechat
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>> 
> 响应字段：json
>> 

### app注册
适应平台：app
> Url: /api/level0/register
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>> 

# 一级页面
## common
### 获取广告
适应平台：app
> Url: /api/level1/get/circle/adimg
> Url: /api/level1/ads
> Http Method: Get
> Content-Type: application/json
> 请求字段：query
>>  
> 响应字段：json
>>

## circle
### 获取我的圈子
适应平台：app
> Url: /api/level1/get/circle/circle
> Url: /api/level1/mycircle
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 附近圈子
适应平台：app
> Url: /api/level1/get/circle/hot
> Url: /api/level1/near/circle
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 即顶部的广告，类型是圈子活动。
适应平台：app
> Url: /api/level1/get/circle/active
> Url: 
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 推荐关注的人
适应平台：app
> Url: /api/level1/get/circle/follow
> Url: /api/level1/recommend/user
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 获取圈子动态
适应平台：app
> Url: /api/level1/get/circle/friends
> Url: /api/level1/circle/trends
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

## date
### 获取附近人
适应平台：app
> Url: /api/level1/get/nearper
> Url: /api/level1/nearperson
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 广告同上面
适应平台：app
> Url: /api/level1/get/date/adimg
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 广告同上面
适应平台：app
> Url: /api/level1/get/date/exercise
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 课程推荐
适应平台：app
> Url: /api/level1/get/date/list
> Url: /api/level1/course
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 商品
适应平台：app
> Url: /api/level1/get/date/goods/list
> Url: /api/level1/goods
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 广告同上面
适应平台：app
> Url: /api/level1/get/date/mall/ad
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

## show
### 广告同上面。
适应平台：app
> Url: /api/level1/get/show/adimg
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

###小八精选-经验
适应平台：app
> Url: /api/level1/get/show/experience
> Url: /api/level1/experience
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

###小八精选-热门话题
适应平台：app
> Url: /api/level1/get/show/experience
> Url: /api/level1/topic
> Http Method: Get
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 小八精选
适应平台：app
> Url: /api/level1/choice
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 同上广告
适应平台：app
> Url: /api/level1/get/show/video
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

### 同上广告
适应平台：app
> Url: /api/level1/get/show/swiper
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

###
适应平台：app
> Url: /api/level1/get/show/recommend
> Url: /api/level1/recommend
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>


## mine
###
适应平台：app
> Url: /api/level1/get/mine/data
> Url: /api/level1/mine
> Http Method: Post
> Content-Type: application/json
> 请求字段：json
>>  
> 响应字段：json
>>

