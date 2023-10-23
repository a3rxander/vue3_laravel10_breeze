<template>
    <h1>Logout</h1>
</template>

<script>
import { ref , onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { AuthStore } from '@/store/AuthStore'


export default
{
    setup()
        {

            const router = useRouter()
            const { logoutUser} = AuthStore()

            onMounted( async()=> {
            const { ok } = await logoutUser()

            if ( ok ) router.push({ name: 'login' })
            })

        }
}
</script>
