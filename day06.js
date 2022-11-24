

const fs = require('fs')

// 封装promise函数
        // 桃花源记

        function getPeach(){
            return new Promise(function (resolve,reject){
                fs.readFile('./resource/桃花源记.md',(err,data)=>{
                    if(err) reject(err)
                    resolve(data)
                })
            })
        }

        // 出师表
        function getTroops(){
            return new Promise(function(resolve,reject){
                fs.readFile('./resource/出居庸关.md',(err,data)=>{
                    if(err) reject(err)
                    resolve(data)
                })
            })
        }


        getPeach().then(res=>{
            return res.toString()
        }).then((data)=>{
            let result = getTroops().then(res=>res.toString())
            return result + data
        }).then((data1)=>{
            console.log(data1);
            getAgent().then(res=>{
                console.log(res.toString());
            })
        })


       
