<template>
  <PageWrapper dense :title="t('config.faq.FAQCategory')">
    <template #headerContent>{{ t('config.faq.FAQlistDesc') }}</template>
    <Card
      ><List :dataSource="[1, 2, 3]">
        <template #header>
          <span class="mr-2">{{ t('config.country.listHeader') }}</span>
          <a @click="handlerAdd">{{ t('config.country.add') }}</a>
        </template>
        <template #renderItem="{ index }">
          <ListItem
            class="hover:bg-blue-200 hover:bg-opacity-25 transition duration-300 ease-in-out"
          >
            <template #actions>
              <a v-if="index == 0">{{ t('config.faq.disabled') }}</a>
              <a v-else>{{ t('config.faq.enable') }}</a>
              <a @click="handlerAdd">{{ t('config.faq.Edit') }}</a>
            </template>
            <div class="px-2"> 123 </div>
          </ListItem>
        </template>
      </List></Card
    >
    <FAQlistModalForm :userData="userData" @register="register" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { List, ListItem, Card } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import FAQlistModalForm from './FAQlistModalForm.vue';
  import { ref } from 'vue';
  const { t } = useI18n();
  const [register, { openModal, setModalProps }] = useModal();
  const userData = ref<any>(null);
  function handlerAdd() {
    setModalProps({
      title: t('config.faq.addFAQCategory'),
    });
    openModal(true, {});
  }
</script>
<style scoped></style>
