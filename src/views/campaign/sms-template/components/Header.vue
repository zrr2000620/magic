<template>
  <pageWrapper>
    <template #headerContent
      ><div class="lg:flex">
        <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
          <h1>{{ t('campaign.SMSTemplate') }} </h1>
          <span>{{ t('campaign.SMSText') }}</span>
        </div>
      </div>
      <CollapseContainer :canExpan="false">
        <!-- <template #title> </template> -->
        <template #default>
          <div class="list_box"
            ><div class="list_1" style="flex: 1">
              <a-list class="list" :bordered="false">
                <div class="listheader">
                  <span>{{ t('campaign.Category') }}</span>
                  <a-button type="link" @click="CategoryAdd">{{ t('campaign.Add') }}</a-button>
                </div>
                <a-list-item class="list-item" v-for="item in list" :key="item.id">
                  <span>{{ item.title }}{{ item.id == 0 ? '' : item.id }}</span>
                  <a-button @click="CategoryAdd" type="link" class="extra">
                    {{ item.extra }}</a-button
                  >
                </a-list-item>
              </a-list>
            </div>
            <a-divider type="vertical" style="height: 500px" />
            <div class="list_2" style="flex: 2">
              <a-list>
                <div class="listheader">
                  <span>{{ t('campaign.Template') }}</span>
                  <a-button type="link" @click="TemplateAdd">{{ t('campaign.Add') }}</a-button>
                </div>
                <a-list-item class="list-item" v-for="item in list2" :key="item.id">
                  <span>{{ item.title }}{{ item.id == 0 ? '' : item.id }}</span>
                  <a-button
                    @click="TemplateAdd"
                    style="margin-right: 4em"
                    type="link"
                    class="extra"
                  >
                    {{ item.extra }}</a-button
                  >
                </a-list-item>
              </a-list>
            </div></div
          >
        </template>
      </CollapseContainer>
    </template>
  </pageWrapper>
  <CategoryAddModal @register="register" />
  <TemplateAddModal @register="register2" />
</template>

<script lang="ts">
  import { CollapseContainer } from '/@/components/Container/index';
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { cardList } from './data';
  import { cardList2 } from './data2';
  import { List, Divider } from 'ant-design-vue';
  import CategoryAddModal from './CategoryAddModal.vue';
  import TemplateAddModal from './TemplateAddModal.vue';
  import { useModal } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      CollapseContainer,
      TemplateAddModal,
      PageWrapper,
      [Divider.name]: Divider,
      [List.name]: List,
      [List.Item.name]: List.Item,
      CategoryAddModal,
      // AListItemMeta: List.Item.Meta,
    },
    setup() {
      const { t } = useI18n();
      const [register, { openModal: CategoryAdd }] = useModal();
      const [register2, { openModal: TemplateAdd }] = useModal();

      return { t, list: cardList, list2: cardList2, TemplateAdd, CategoryAdd, register, register2 };
    },
  });
</script>
<style lang="less" scoped>
  .list_box {
    display: flex;
    flex-direction: row;
  }

  .list2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // width: 400px;
    flex: 1;

    &-item {
      margin-left: 1em;
    }
  }

  .listheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
