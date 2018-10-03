<template>
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

        <div id="title">
          <span id="title-mark">|</span>
          <span id="title-content">{{msg4}}</span>
        </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="项目名称" prop="projectname">
          <el-select v-model="ruleForm.projectname" placeholder="请输入项目名称">
            <el-option label="项目一" value="project1"></el-option>
            <el-option label="项目二" value="project2"></el-option>
          </el-select>
          <el-select v-model="ruleForm.projectname" placeholder="请输入项目名称">
            <el-option label="项目一" value="project1"></el-option>
            <el-option label="项目二" value="project2"></el-option>
          </el-select>
          <el-select v-model="ruleForm.projectname" placeholder="请输入项目名称">
            <el-option label="项目一" value="project1"></el-option>
            <el-option label="项目二" value="project2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="脚本名称" prop="scriptname">
          <el-col :span="4">
            <el-input v-model="ruleForm.scriptname" placeholder="请选择"></el-input>
          </el-col>
          <el-col :span="0.5">&nbsp</el-col>
          <el-col :span="4">
            <el-input v-model="ruleForm.scriptname" placeholder="请选择"></el-input>
          </el-col>
          <el-col :span="0.5">&nbsp</el-col>
          <el-col :span="4">
            <el-input v-model="ruleForm.scriptname" placeholder="请选择"></el-input>
          </el-col>
          <el-col :span="0.5">&nbsp</el-col>
          <el-col :span="4">
            <el-input v-model="ruleForm.scriptname" placeholder="请填写具体的脚本名称"></el-input>
          </el-col>

        </el-form-item>

        <el-form-item label="Case Id" prop="id">
          <el-col :span="13">
            <el-form-item>
              <el-input  placeholder="请输入Case Id" ></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

         <el-form-item label="负责人" prop="leader" >
          <el-select v-model="ruleForm.leader" value="李钢铁">
            <el-option label="项目一" value="project1"></el-option>
            <el-option label="项目二" value="project2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="描述" prop="description" >
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>
    </div>
</template>


<script>
export default {
     methods: {
    },
    data(){
      return {
        msg1: 'UIclose',
        msg2: '已连接',
        msg3: 'huaweixxx',
        msg4: '录制信息',
        ruleForm: {
              projectname: '',
              scriptname: '',
              id: '',
              leader: '',
              description: ''
            },
        rules: {
          projectname: [
            { required: true }
          ],
          scriptname: [
            { required: true }
          ],
          id: [
            { required: true}
          ],
          leader: [
            { required: true , value: '李钢铁' }
          ],
          description: [
            { }
          ]
        }
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

  #title{
    position: relative;
    width: 1440px;
    height: 23px;
    top: 58px;
  }
  #title-mark{
    width: 40px;
    height: 23px;
    color: #00A7E2;
    left: 172px;
    position: absolute;
    display: inline;
  }
  #title-content{
    width: 80px;
    height: 22px;
    left: 180px;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    display: inline;
  }

  </style>