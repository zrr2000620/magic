<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <p> {{ t('config.message.headerContent') }}</p>
      <Button type="primary">{{ t('config.message.save') }}</Button>
    </template>
    <Card>
      <span>{{ t('config.message.label') }}</span>
      <RadioGroup v-model:value="radioVal" @change="(e) => (radioVal = e.target.value)">
        <div class="lg:flex" style="margin-left: 10px; align-items: center">
          <Radio style="width: 100px" :value="option.otionOne">{{
            t('config.trial.teamSize.unlimited')
          }}</Radio>
          <Radio style="width: 100px" :value="option.optionTwo">{{
            t('config.trial.teamSize.limit')
          }}</Radio>
          <Input v-if="radioVal === '2'" :addon-after="t('config.message.afterLabel')" />
        </div>
      </RadioGroup>
      <p style="margin-top: 20px">{{ t('config.message.tableName') }}</p>
      <div class="lg:flex" style="width: 550px; flex-direction: column; gap: 20px">
        <Table :bordered="true" :pagination="false" :columns="columns" :data-source="dataSource">
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex == 'addOn'">
              <div v-if="record.edit">
                <Input v-model:value="record.addOn" @pressEnter="save(record.key)" />
              </div>
              <div v-else class="editable-cell-text-wrapper"> {{ text || ' ' }}</div>
              <!-- <div>
                <Input
                  v-if="record.edit"
                  v-model:value="editableData[record.key].name"
                  style="margin: -5px 0"
                />
                <template v-else>{{ text }}</template>
              </div> -->
            </template>
            <template v-if="column.dataIndex == 'tt'">
              <div v-if="record.edit">
                <Input v-model:value="record.tt" @pressEnter="save(record.key)" />
              </div>
              <div v-else class="editable-cell-text-wrapper"> {{ text || ' ' }}</div>
              <!-- <div>
                <Input
                  v-if="record.edit"
                  v-model:value="editableData[record.key].name"
                  style="margin: -5px 0"
                />
                <template v-else>{{ text }}</template>
              </div> -->
            </template>
            <template v-else-if="column.dataIndex === 'oper'">
              <div>
                <span v-if="record.edit">
                  <a style="margin-right: 8px" @click="save(record.key)">Save</a>
                  <Popconfirm title="Sure to cancel?">
                    <a @click="del(record.key)">Delete</a>
                  </Popconfirm>
                </span>
                <!-- @click="edit(record.key)" -->
                <span v-else>
                  <Popconfirm title="Sure to cancel?">
                    <a @click="del(record.key)">Delete</a>
                  </Popconfirm>
                </span>
              </div>
              <!-- <Popconfirm
              v-if="dataSource.length"
              title="Sure to delete?"
              @confirm="onDelete(record.key)"
            >
              <a>Delete</a>
            </Popconfirm> -->
            </template>
          </template></Table
        >
        <Button @click="handleAdd" type="dashed">+{{ t('campaign.Add') }}</Button>
      </div>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Button, Card, Radio, RadioGroup, Input, Table, Popconfirm } from 'ant-design-vue';
  import { computed, reactive, Ref, ref, UnwrapRef } from 'vue';
  import { cloneDeep } from 'lodash-es';
  interface DataItem {
    edit: Boolean;
    key: string;
    addOn: string;
    tt: string;
  }
  const { t } = useI18n();
  const radioVal = ref('1');
  const count = computed(() => dataSource.value.length + 1);
  const option = reactive({
    otionOne: '1',
    optionTwo: '2',
  });
  const columns = [
    {
      title: t('config.message.addOn'),
      dataIndex: 'addOn',
      width: 200,
      // slots: { customRender: 'addOn' },
    },
    {
      title: t('config.message.total'),
      dataIndex: 'tt',
      // slots: { customRender: 'tt' },
      width: 200,
    },
    {
      title: t('config.message.oper'),
      dataIndex: 'oper',
      width: 200,
      // slots: { customRender: 'operation' },
    },
  ];

  const dataSource: Ref<DataItem[]> = ref([
    {
      key: '1',
      edit: false,
      addOn: '1231',
      tt: '233',
    },
    {
      key: '2',
      edit: false,
      addOn: '1231',
      tt: '233',
    },
  ]);
  const newData: UnwrapRef<Record<string, DataItem>> = reactive({});
  const handleAdd = () => {
    const nnData = { key: `${count.value}`, edit: true, addOn: '1', tt: '2' };
    dataSource.value.push(nnData);
  };
  const save = (key: string) => {
    console.log(newData);
    newData[key] = cloneDeep(dataSource.value.filter((item) => key === item.key)[0]);

    newData[key].edit = false;

    Object.assign(dataSource.value.filter((item) => key === item.key)[0], newData[key]);
    delete newData[key];
  };
  const del = (key: string) => {
    dataSource.value = dataSource.value.filter((item) => item.key !== key);
  };
</script>
<style scoped></style>
