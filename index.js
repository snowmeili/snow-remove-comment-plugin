class RemoveCommentPlugin {
  apply(compiler){
    //console.log(compiler, 999);
    compiler.hooks.emit.tap("RemoveCommentPlugin", (compilation)=>{
      console.log(compilation.assets,88889)
      for(const name in compilation.assets){
        //获取到的是文件
        console.log(name,777)
        // 获取到文件的内容
        console.log(compilation.assets[name].source(),666)
        // 判断文件的扩展名，必须是 js 文件
        if(name.endsWith('.js')){
          const contents = compilation.assets[name].source();
          //处理文件内容中需要处理的东西。
          const noCommnets = contents.replace(/\/\*{2,}\/s?/g, '');
          compilation.assets[name] = {
            source: () => {
              return '我就是被替换的文件内容'
            },
            size: () => noCommnets.length
          }
        }
      }
    })
  }
}

module.exports = RemoveCommentPlugin;
