<script lang="ts"
        setup>
import useMenu from '@/hooks/useMenu'
import { FormInstance } from 'element-plus'

const { menuList } = useMenu()

const menuFormRef = ref<FormInstance>()
const menuForm = reactive<Menu.MenuItem>({
  title: '',
  icon: '',
  path: '',
  component: 'layout',
  parent: 0,
  index: 0,
  isLink: false,
  status: 0
})
const onSubmitMenuForm = (formEl: FormInstance | undefined) => {
  formEl?.validate((valid) => {
    if (valid) {
      console.log('新增成功')
    }
  })
}
const onResetMenuForm = (formEl: FormInstance | undefined) => {
  formEl?.resetFields()
}

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
const closeDialog = () => {
  onResetMenuForm(unref(menuFormRef))
  dialogVisible.value = false
}
</script>

<template>
  <div class="operate-content"
       mb>
    <el-button type="success"
               @click="showDialog">
      <template #icon>
        <el-icon class="i-ep-circle-plus"></el-icon>
      </template>
      新增
    </el-button>
  </div>
  <el-table :data="menuList"
            size="default"
            border
            row-key="id"
            default-expand-all>
    <el-table-column prop="title"
                     label="名称" />
    <el-table-column prop="path"
                     label="地址" />
    <el-table-column prop="index"
                     label="序号"
                     width="100px"
                     align="center" />
    <el-table-column prop="icon"
                     label="图标"
                     width="100px"
                     align="center">
      <template #default="scope">
        <el-icon size="24px"
                 :class="`i-ep-${scope.row.icon}`"></el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="isLink"
                     label="外链"
                     width="100px"
                     align="center">
      <template #default="scope">
        {{ scope.row.isLink ? '是' : '否' }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button v-if="scope.row.status === 1"
                   type="primary">
          启用
        </el-button>
        <el-button v-else
                   type="danger">
          禁用
        </el-button>
        <el-button>编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="新增菜单"
    width="50%"
    @close="closeDialog">
    <el-form ref="menuFormRef"
             :model="menuForm"
             label-width="80px">
      <el-form-item prop="title"
                    label="名称">
        <el-input v-model="menuForm.title"
                  w-4xl
                  placeholder="请输入菜单名称">
        </el-input>
      </el-form-item>
      <el-form-item prop="icon"
                    label="icon">
        <el-input placeholder="请输入菜单icon"></el-input>
      </el-form-item>
      <el-form-item prop="path"
                    label="地址">
        <el-input v-model="menuForm.path"
                  placeholder="请输入菜单地址"></el-input>
      </el-form-item>
      <el-form-item prop="isLink"
                    label="是超链接">
        <el-switch v-model="menuForm.isLink"
                   active-text="是"
                   inactive-text="否"></el-switch>
      </el-form-item>
      <el-form-item v-show="!menuForm.isLink"
                    prop="component"
                    label="组件">
        <el-input v-model="menuForm.component"
                  placeholder="前端组件路径"></el-input>
      </el-form-item>
      <el-form-item prop="parent"
                    label="上级菜单">
        <el-input v-model="menuForm.parent"
                  placeholder="上级菜单"></el-input>
      </el-form-item>
      <el-form-item prop="index"
                    label="排序">
        <el-input-number v-model="menuForm.index"
                         :min="1"
                         :max="100"
                         label="label">
        </el-input-number>
      </el-form-item>
      <el-form-item prop="status"
                    label="是否启用">
        <el-switch v-model="menuForm.status"
                   active-text="是"
                   inactive-text="否"
        ></el-switch>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary"
                 @click="onSubmitMenuForm(menuFormRef)">
        确定
      </el-button>
      <el-button type="danger"
                 @click="closeDialog">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss"
       scoped>
</style>
