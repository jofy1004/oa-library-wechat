// Init Category:
db.Category.save({'categoryName':'业务需求'});
db.Category.save({'categoryName':'测试'});
db.Category.save({'categoryName':'数据库'});
db.Category.save({'categoryName':'前端开发'});
db.Category.save({'categoryName':'服务端'});
db.Category.save({'categoryName':'移动端'});
db.Category.save({'categoryName':'操作系统'});

// Init Books

//business
db.Books.save({'categoryId':db.Category.findOne({categoryName:'业务需求'})._id, 'title':'交互设计沉思录', 'coverURL':'', 'description':'暂无描述', 'borrower':''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'业务需求'})._id, 'title':'需求分析与系统设计', 'coverURL':'', 'description':'暂无描述', 'borrower':''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'业务需求'})._id, 'title':'写给大家看的设计书', 'coverURL':'', 'description':'暂无描述', 'borrower':''});

//test
db.Books.save({'categoryId':db.Category.findOne({categoryName:'测试'})._id, 'title':'LoadRunner性能测试', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'测试'})._id, 'title':'Robot Framework 自动化测试修炼宝典', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'测试'})._id, 'title':'QTP自动化测试与框架模型设计', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'测试'})._id, 'title':'大话APP测试', 'coverURL':'', 'description':'暂无描述', 'borrower':''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'测试'})._id, 'title':'精通自动化测试框架设计', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});

//DB
db.Books.save({'categoryId':db.Category.findOne({categoryName:'数据库'})._id, 'title':'MongoDB权威指南', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'数据库'})._id, 'title':'Oracle PL/SQL程序设计（第五版）（上）', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'数据库'})._id, 'title':'Oracle PL/SQL程序设计（第五版）（下）', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});

//JS
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'响应式Web设计—HTML5和CSS3实战', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'ECMAscript6入门', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'JavaScript性能优化', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'锋利的jQuery（第2版）', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'JavaScript异步编程', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'编写可维护的JavaScript', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'前端开发'})._id, 'title':'JavaScript设计模式', 'coverURL':'', 'description':'暂无描述', 'borrower':'', account:''});

//JAVA
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Netty权威指南（第2版）', 'coverURL':'', 'description':'Java高性能NIO首选框架', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Head First设计模式', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Spring Data实战', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Redis入门指南（第2版）', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Elasticsearch服务器开发（第2版）', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'PHP编程', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'深入理解Java虚拟机', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'从Paxos到Zookeeper 分布式一致性原理与实践', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Redis设计与实现', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Spring MVC学习指南', 'coverURL':'', 'description':'', 'borrower':'', account:''});
db.Books.save({'categoryId':db.Category.findOne({categoryName:'服务端'})._id, 'title':'Effective Java 中文版（第二版）', 'coverURL':'', 'description':'', 'borrower':'', account:''});

//MOBILE
db.Books.save({'categoryId':db.Category.findOne({categoryName:'移动端'})._id, 'title':'Android编程权威指南(第2版)', 'coverURL':'', 'description':'Java高性能NIO首选框架', 'borrower':'', account:''});

//OS
db.Books.save({'categoryId':db.Category.findOne({categoryName:'操作系统'})._id, 'title':'Shell脚本编程诀窍', 'coverURL':'', 'description':'', 'borrower':'', account:''});
