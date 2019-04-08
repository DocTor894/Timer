<template>
    <transition name="holder">
        <div class="notifHolder" v-if="show">
            <ul class="scroll">
                <Notification
                        v-for="(item, index) in items"
                        :item="item"
                        :index="index"
                        @deleteItem="deleteItem"
                ></Notification>
                <li v-if="inputVisible"
                    class="showMore"
                    type="submit"
                    @click="addNotif"
                >Показать еще
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    import Notification from './Notification.vue'

    export default {
        props: ['notifItems', 'show'],
        name: 'notifHolder',
        data() {
            return {
                items: '',
                endNotif: 6
            }
        },
        components: {
            Notification
        },
        methods: {
            addNotif() {
                this.endNotif += 6,
                    this.items = this.notifItems.slice(0, this.endNotif)
            },
            deleteItem(index) {
                this.items = this.notifItems.splice(index, 1)
            }
        },
        computed: {
            inputVisible: function () {
                if (this.notifItems.length > 6 && this.endNotif < this.notifItems.length) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        watch: {
            'notifItems': {
                handler: function () {
                    this.items = this.notifItems.slice(0, this.endNotif)
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">
    @colorNotifHolderBack: rgba(10, 11, 19, .7);
    @colorWhite: #fff;

    .notifHolder {
        width: 500px;
        background: @colorNotifHolderBack;

        ul.scroll {
            overflow-y: scroll;
            max-height: 445px;
            padding: 5px;
            margin: 0;

            li.showMore {
                line-height: 36px;
                list-style: none;
                text-align: center;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
                height: 40px;
                background: @colorNotifHolderBack;
                color: @colorWhite;
                border-style: none;
                border-top: 1px solid #000;
            }
        }
    }

    .holder-enter-active, .holder-leave-active {
        transition: opacity .5s;
    }

    .holder-enter, .holder-leave-to {
        opacity: 0;
    }
</style>
