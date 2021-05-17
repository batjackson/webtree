       //构建字典的构造方法
       function Dictionary() {
           //字典操作
           this.item = {}
               //字典操作方法
               //在字典中添加键值对
           Dictionary.prototype.set = function(key, value) {
                   this.item[key] = value;
               }
               //判断字典中是否有某个key
           Dictionary.prototype.has = function(key) {
                   return this.item.hasOwnProperty(key);
               }
               //从字典中移除元素
           Dictionary.prototype.remove = function(key) {
                   //1.判断字典中是否有这个key
                   if (!this.has(key)) {
                       return false;
                   }
                   //2.从字典中删除这个key
                   delete this.item[key];
                   return true;
               }
               //根据key去获取value
           Dictionary.prototype.get = function(key) {
                   return this.has(key) ? this.item[key] : undefined;
               }
               //获取所有皮的keys
           Dictionary.prototype.keys = function() {
                   return Object.keys(this.item);
               }
               //获取所有的value
           Dictionary.prototype.values = function() {
                   return Object.values(this.item)
               }
               //size方法
           Dictionary.prototype.size = function() {
                   return this.keys().length;
               }
               //clear 方法
           Dictionary.prototype.clear = function() {
               this.items = {};
           }
       }