<template>
  <PageWrapper dense :title="t('config.faq.FAQCategory')">
    <template #headerContent>{{ t('config.faq.FAQlistDesc') }}</template>
    <Card>
      <List :dataSource="dataSource" :loading="loading">
        <template #header>
          <span class="mr-2">{{ t('config.faq.catList') }}</span>
          <a @click="handlerAdd">{{ t('config.faq.add') }}</a>
        </template>
        <template #renderItem="{ item }">
          <ListItem
            class="hover:bg-blue-200 hover:bg-opacity-25 transition duration-300 ease-in-out"
          >
            <template #actions>
              <a @click="handlerStatusChange(item)">{{
                item.isDelete ? t('config.faq.enable') : t('config.faq.disabled')
              }}</a>
              <a @click="() => handlerEdit(item)">{{ t('config.faq.Edit') }}</a>
            </template>
            <div class="px-2"> {{ item.classifyName }} </div>
          </ListItem>
        </template>
      </List>
    </Card>
    <FAQlistModalForm @register="register" @success="loadList" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { List, ListItem, Card } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import FAQlistModalForm from './components/FAQlistModalForm.vue';
  import { ref } from 'vue';
  import { editFAQCategory, getFAQCategoryList } from '/@/api/config/faq';
  const loading = ref(false);
  const dataSource = ref([]);
  const { t } = useI18n();
  const [register, { openModal, setModalProps }] = useModal();
  function handlerAdd() {
    setModalProps({
      title: t('config.faq.addFAQCategory'),
    });
    openModal();
  }

  function handlerEdit(record) {
    setModalProps({
      title: t('config.faq.editFAQCategory'),
    });
    openModal(true, record);
  }

  async function loadList() {
    try {
      loading.value = true;
      const data = await getFAQCategoryList();
      dataSource.value = data;
    } finally {
      loading.value = false;
    }
  }

  async function handlerStatusChange(record) {
    try {
      loading.value = true;
      await editFAQCategory({
        id: record.id,
        isDelete: record.isDelete ? 0 : 1,
      });
      loadList();
    } finally {
      loading.value = false;
    }
  }

  loadList();
</script>
<style scoped></style>
