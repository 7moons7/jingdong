<template>
    <div class="wraaper">
        <img class="wrapper__img" src="https://i.loli.net/2021/02/05/m5WqhIvj6lVkYft.png" alt="">
        <div class="wrapper__input">
<<<<<<< HEAD
            <input class="wrapper__input__content" v-model="username" placeholder="请输入用户名"  />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" v-model="password" placeholder="请输入密码" type="password" />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" v-model="checkpsw" placeholder="请确认密码" type="password" autocomplete="new-password"/>
        </div>
        <div class="wrapper__registerbutton" @click="handleRegister">注册</div>
        <div class="wrapper__register" @click="handleLoginClick">已有账户 点此登陆</div>
        <Toast v-if="show" :message="toastMessage" />
=======
            <input class="wrapper__input__content" placeholder="请输入手机号"  />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码" type="password" />
        </div>
        <div class="wrapper__loginbutton" @click="handleLogin">注册</div>
        <div class="wrapper__loginregister">立刻注册</div>
>>>>>>> origin/master
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
<<<<<<< HEAD
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 注册的相关逻辑的处理
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', checkpsw: '' })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, checkpsw } = toRefs(data)
  return { username, password, checkpsw, handleRegister }
}
// 登陆跳转的处理
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, checkpsw, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return { username, password, checkpsw, handleLoginClick, handleRegister, show, toastMessage }
  }
}

=======
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
  }
}
>>>>>>> origin/master
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    top:50%;
    left: 0;
    right:0;
    transform: translateY(-50%);
    &__img {
        display: block;
        margin: 2rem auto .4rem auto;
        width: .66rem;
        height: .66rem;
    }
    &__input {
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        padding: 0 .16rem;
        background: #f9f9f9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        &__content {
            line-height: .48rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            &::placeholder {
                color: rgba(0,0,0,0.50);
            }
        }
    }
<<<<<<< HEAD
    &__registerbutton {
=======
    &__loginbutton {
>>>>>>> origin/master
        line-height: .48rem;
        margin: .32rem .4rem .16rem .4rem;
        background: #0091ff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        text-align: center;
    }
<<<<<<< HEAD
    &__register {
=======
    &__loginregister {
>>>>>>> origin/master
        text-align: center;
        font-size: .14rem;
        color: rgba(0,0,0,0.50);
    }
}

</style>
