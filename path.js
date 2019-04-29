const path = require('path')

// basename == filename + ext 即basename相当于完整的包含后缀文件名
console.log('path.basename("/a/b/c/hww.js")', path.basename('/a/b/c/hww.js'))
console.log('path.basename("/a/b/c/hww.js", ".js")', path.basename('/a/b/c/hww.js', '.js'))

// 区分　path.delimiter 与　path.separator
console.log('path.delimiter', path.delimiter)

// 注意：　这里的PATH全大写
console.log('process.env.PATH', process.env.PATH)
console.log('process.env.PATH.split', process.env.PATH.split(path.delimiter))

// path.dirname(path) 返回目录名
console.log('path.dirname("/foo/bar/baz/quux/")',path.dirname("/foo/bar/baz/quux/"))
console.log('path.dirname("/foo/bar/baz/quux")',path.dirname("/foo/bar/baz/quux"))

// path.extname(path)　返回扩展名（包括.），从最后一个path，寻找.并返回
console.log('path.extname("index.html")', path.extname('index.html'))
console.log('path.extname(".")', path.extname('.'))
console.log('path.extname(".html")', path.extname('.html'))

// path.format({}) 以对象为参数最终返回，拼合的路径。其中，对象{}中的属性有一定互斥。　
console.log('path.format({root: "/ignored/", dir: "/home/user/dir", base: "file.txt"})',path.format({root: '/ignored/', dir: '/home/user/dir', base: 'file.txt'}))

// path.isAbsolute(path) 判断是否是绝对路径
console.log('path.isAbsolute("/foo/bar")', path.isAbsolute("/foo/bar")) 
console.log('path.isAbsolute("/foo/..")', path.isAbsolute("/foo/..")) 
console.log('path.isAbsolute("foo/")', path.isAbsolute("foo/")) 
console.log('path.isAbsolute(".")', path.isAbsolute(".")) 

// path.join(path1, path2) 返回拼合的路径
console.log('path.join', path.join('/foo', 'bar', 'bar/asdf', 'quux', '..'))
console.log('path.join()', path.join())

// path.normalize(path) 正常化路径，即去除路径中不合理的内容
console.log('path.normalize', path.normalize('/foo/bar//baz/asdf/quux/..'))

// path.parse(path)　返回格式化路径对象。与上面的path.format对应
console.log('path.parse("/home/user/dir/file.txt")',path.parse('/home/user/dir/file.txt'))

// path.relative(from, to) 返回从from的处访问to的相对路径
console.log('path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb)', path.relative("/data/orandea/test/aaa", '/data/orandea/impl/bbb')) 

// path.resolve 返回绝对路径，寻找到绝对路径则停止
console.log('path.resolve("/foo/bar", "./baz"', path.resolve("/foo/bar", "./baz"))
console.log('path.resolve("/foo/bar", "/tmp/file/"', path.resolve("/foo/bar", "/tmp/file"))
// 没有指明绝对路径时，会使用自动添加上下文的绝对路径
console.log('path.resolve("wwwroot", "static_files/png/", "../gif/image.gif")', path.resolve("wwwroot", "static_files/png/", "../gif/image.gif") 
)

console.log('path.sep', path.sep)

/* 
referer: [NodeJS api/path](https://nodejs.org/api/path.html)
理解注意：　最初我以为这些方法，都是会当前模块相关的其实大部分就是工具方法，也就是它只跟你传入的内容有关，与上正文无关
*/
