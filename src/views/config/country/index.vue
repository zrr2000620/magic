<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Card, List, ListItem } from 'ant-design-vue';
  import CountryModalForm from './CountryModalForm.vue';
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { delCountry, getCountryList } from '/@/api/config/country';

  const { t } = useI18n();
  const dataSource = ref([]);
  const userData = ref<any>(null);
  const [register, { openModal, setModalProps }] = useModal();
  const loading = ref(false);

  function handlerAdd() {
    setModalProps({
      title: t('config.country.addCountryModalTitle'),
    });
    openModal(true, {});
  }

  function handlerEdit(record) {
    setModalProps({
      title: t('config.country.editCountryModalTitle'),
    });
    openModal(true, record);
  }

  async function handlerDel(record) {
    await delCountry({ id: record.id });
    loadCountryList();
  }

  async function loadCountryList() {
    try {
      loading.value = true;
      const data = await getCountryList();
      dataSource.value = data;
    } finally {
      loading.value = false;
    }
  }

  loadCountryList();
</script>
<script lang="ts">
  export default {
    name: 'Country',
  };
</script>

<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      {{ t('config.country.headerContent') }}
    </template>
    <Card>
      <List :dataSource="dataSource" :split="false" :loading="loading" row-key="id">
        <template #header>
          <span class="mr-2">{{ t('config.country.listHeader') }}</span>
          <a @click="handlerAdd">{{ t('config.country.add') }}</a>
        </template>
        <template #renderItem="{ item }">
          <ListItem
            class="hover:bg-blue-200 hover:bg-opacity-25 transition duration-300 ease-in-out"
          >
            <template #actions>
              <a @click="handlerEdit.bind(null, item)">
                {{ t('common.editText') }}
              </a>
              <a @click="handlerDel.bind(null, item)">
                {{ t('common.delText') }}
              </a>
            </template>
            <div class="px-2"> 123 </div>
          </ListItem>
        </template>
      </List>
    </Card>
    <CountryModalForm :userData="userData" @register="register" @success="loadCountryList" />
  </PageWrapper>
</template>
