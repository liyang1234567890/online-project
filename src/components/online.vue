<template>
<div>
  <div id="container">
    <div id="banner">
        <img id="banner-logo" src="../img/tc01@2x.png" />
        <span id="banner-UIclose">{{msg1}}</span>
        <img id="banner-on" src="../img/断开@2x.png">
        <span id="banner-connected">{{msg2}}</span>
        <span id="interval">|</span>
        <img id="banner-shape" src="../img/断开@2x.png">
        <span id="banner-phone">{{msg3}}</span>
    </div>

    <el-card id="search">
      <div>
        <el-input id="search-box" v-model="input" placeholder="请输入项目名称或脚本名称"></el-input>
        <el-button type="success" size="large" id="search-button">搜索</el-button>
      </div>
    </el-card>

    <div id="title">
        <span id="title-mark">|</span>
        <span id="title-content">{{msg4}}</span>
        <el-button  size="mini" id="title-record" type="text" @click="dialogFormVisible = true" style="text-decoration:none;color:white;font-family:HiraginoSansGB-W3;font-size:13px">{{msg5}}</el-button>

        <el-dialog title="录制信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="项目名称" :label-width="formLabelWidth" prop="projectname">
                <el-select v-model="form.projectname" placeholder="请输入项目名称">
                    <el-option label="项目一" value="project1"></el-option>
                    <el-option label="项目二" value="project2"></el-option>
                </el-select>
                <el-select v-model="form.projectname" placeholder="请输入项目名称">
                    <el-option label="项目一" value="project1"></el-option>
                    <el-option label="项目二" value="project2"></el-option>
                </el-select>
                <el-select v-model="form.projectname" placeholder="请输入项目名称">
                    <el-option label="项目一" value="project1"></el-option>
                    <el-option label="项目二" value="project2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="脚本名称" :label-width="formLabelWidth" prop="scriptname">
                <el-col :span="5">
                    <el-input v-model="form.scriptname" placeholder="请选择"></el-input>
                </el-col>
                <el-col :span="0.5">&nbsp</el-col>
                <el-col :span="5">
                    <el-input v-model="form.scriptname" placeholder="请选择"></el-input>
                </el-col>
                <el-col :span="0.5">&nbsp</el-col>
                <el-col :span="5">
                    <el-input v-model="form.scriptname" placeholder="请选择"></el-input>
                </el-col>
                <el-col :span="0.5">&nbsp</el-col>
                <el-col :span="8">
                    <el-input v-model="form.scriptname" placeholder="请填写具体的脚本名称"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Case Id " :label-width="formLabelWidth" prop="id">
                <el-col :span="22">
                    <el-form-item>
                        <el-input v-model="form.id" placeholder="请输入Case Id"></el-input>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="负责人" :label-width="formLabelWidth" prop="leader" >
                <el-select v-model="form.projectname" value="李钢铁">
                    <el-option label="项目一" value="project1"></el-option>
                    <el-option label="项目二" value="project2"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="描述" :label-width="formLabelWidth" prop="description" >
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false" align="center">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" align="center">下一步</el-button>
        </div>
        </el-dialog>
    </div>

    <el-table
    :data="tableData4"
    style="width:1190px;
    top:336px;color:#333;
    font-famimly:HiraginoSansGB-W3;font-size:13px;
    line-height:20px;letter-spacing:-0.31px;
    left:126px;position:absolute;">
    <el-table-column
      prop="scriptname"
      label="脚本名称"
      width="185"  align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="触发者"
      width="160"  align="center">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="170"  align="center">
    </el-table-column>
    <el-table-column
      prop="type"
      label="机型"
      width="170"  align="center">
    </el-table-column>
    <el-table-column
      prop="resolution"
      label="分辨率"
      width="160"  align="center">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      width="175"  align="center">
    </el-table-column>
    <el-table-column
      label="报告下载"
      width="170"  align="center">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          下载
        </el-button>
      </template>
    </el-table-column>
  </el-table>

   <el-button size="small" id="button-up">上一页</el-button>

    <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          layout="prev, pager, next, jumper" :total="50">
        </el-pagination>
    </div>

    <el-button size="small" id="button-down">下一页</el-button>

    <el-button size="small" type="primary" id="button-ok">确定</el-button>
    </div>
</div>
</template>


<script>
  export default {
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data(){
      return {
        dialogFormVisible: false,
        form: {
          projectname: '',
          scriptname: '',
          id: '',
          leader: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          projectname: [
            { required: true }
          ],
          scriptname: [
            { required: true }
          ],
          id: [
            { }
          ],
          leader: [
            { required: true , value: '李钢铁' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        formLabelWidth: '70px',
        msg1: 'UIclose',
        msg2: '已连接',
        msg3: 'huaweixxx',
        msg4: '脚本列表',
        msg5: '录制',
        input: '',
        tableData4: [{
          scriptname: '美事',
          name: '王小虎',
          time: 'qqq',
          type: 'aaa',
          resolution: 'eee',
          state: 1
        }, {
          scriptname: '美事',
          name: '王小虎',
          time: 'qqq',
          type: 'aaa',
          resolution: 'eee',
          state: 1
        }, {
          scriptname: '美事',
          name: '王小虎',
          time: 'qqq',
          type: 'aaa',
          resolution: 'eee',
          state: 1
        },{
          scriptname: '美事',
          name: '王小虎',
          time: 'qqq',
          type: 'aaa',
          resolution: 'eee',
          state: 1
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding:0;
  }
  #container{
    width: 1440px;
    height: 920px;
    position: relative;
  }
  #banner{
    width: 1440px;
    height: 80px;
    position: relative;
    background: linear-gradient(to right, #00A7E2 , #00FF87);
  }
  #banner-logo{
    width: 48px;
    height: 48px;
    position: absolute;
    left: 27px;
    top: 16px;

  }
  #banner-UIclose{
    width: 80px;
    height: 32px;
    font-family: Bauhaus93;
    font-size: 18px;
    color: #FFF;
    left: 74px;
    top: 23px;
    position: absolute;
    line-height: 41px;
    letter-spacing: -0.68px;
  }
  #banner-on{
    width: 13px;
    height: 13px;
    color: #D3E2FF;
    left: 1229px;
    top: 37px;
    position: absolute;
  }
  #banner-connected{
    width: 40px;
    height: 17px;
    color: #FFF;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    left: 1246px;
    top: 34px;
    position: absolute;
    display: block;
  }
  #interval{
    width: 2px;
    height: 13px;
    opacity: 0.61;
    color: #FFF;
    left: 1301px;
    top: 30px;
    position: absolute;
  }
  #banner-shape{
    width: 9px;
    height: 13px;
    color: #D3E2FF;
    left: 1321px;
    top: 37px;
    position: absolute;
  }
  #banner-phone{
    width: 67px;
    height: 20px;
    color: #FFF;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    left: 1334px;
    top: 33px;
    position: absolute;
  }

    #search{
    width: 1438px;
    height: 163px;

    position: relative;
  }
  #search-box{
    width: 849px;
    height: 60px;
    left: 270px;
    position: absolute;
    top: 16px;
    float: left;
  }
  #search-button{
    width: 140px;
    height: 60px;
    left: 1145px;
    position: absolute;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    top: 52px;
    float: left;
  }

   #title{
    position: relative;
    width: 1440px;
    height: 23px;
    top: 52px;
  }
  #title-mark{
    width: 40px;
    height: 23px;
    color: #00A7E2;
    left: 126px;
    position: absolute;
    display: inline;
  }
  #title-content{
    width: 80px;
    height: 22px;
    left: 140px;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    display: inline;
  }
  #title-record{
    left: 1255px;
    position: absolute;
    width: 65px;
    height: 31px;
    background: #00C0F8;
  }

  .block{
    position: absolute;
    left: 480px;
    top: 762px;
  }

  #button-up{
    position: absolute;
    left: 389px;
    top: 762px;
  }
  #button-down{
    position: absolute;
    left: 880px;
    top: 762px;
  }
  #button-ok{
    position: absolute;
    left: 950px;
    top: 762px;
  }
</style>
