<<<<<<< HEAD
/* eslint-disable */
<template>
    <div class="wraaper">
        <img class="wrapper__img" src="https://i.loli.net/2021/02/05/m5WqhIvj6lVkYft.png">
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码" type="password" v-model="password" autocomplete="new-password"/>
        </div>
        <div class="wrapper__loginbutton" @click="handleLogin">登陆</div>
        <div class="wrapper__loginregister" @Click="handleRegisterClick">立刻注册</div>
        <Toast v-if="show" :message="toastMessage" />
=======
<template>
    <div class="wraaper">
        <img class="wrapper__img" src="https://i.loli.net/2021/02/05/m5WqhIvj6lVkYft.png" alt="">
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入手机号"  />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码" type="password" />
        </div>
        <div class="wrapper__loginbutton" @click="handleLogin">登陆</div>
        <div class="wrapper__loginregister">立刻注册</div>
>>>>>>> origin/master
    </div>
</template>

<script>
<<<<<<< HEAD
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
// 把content-type 改成符合api要求的json类型

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登陆失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    return { username, password, show, toastMessage, handleLogin, handleRegisterClick }
=======
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { handleLogin, handleRegisterClick }
>>>>>>> origin/master
  }
}
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
    &__loginbutton {
        line-height: .48rem;
        margin: .32rem .4rem .16rem .4rem;
        background: #0091ff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        text-align: center;
    }
    &__loginregister {
        text-align: center;
        font-size: .14rem;
        color: rgba(0,0,0,0.50);
    }
}

</style>
