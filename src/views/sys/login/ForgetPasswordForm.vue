<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form
      class="p-4 enter-x"
      :model="formData"
      :rules="getFormRules"
      ref="formRef"
      v-if="!sendSuccess"
    >
      <FormItem name="mail" class="enter-x">
        <Input size="large" v-model:value="formData.mail" :placeholder="t('sys.login.email')" />
      </FormItem>

      <!-- <FormItem name="mobile" class="enter-x">
        <Input size="large" v-model:value="formData.mobile" :placeholder="t('sys.login.mobile')" />
      </FormItem>
      <FormItem name="sms" class="enter-x">
        <CountdownInput
          size="large"
          v-model:value="formData.sms"
          :placeholder="t('sys.login.smsCode')"
        />
      </FormItem> -->

      <FormItem class="enter-x">
        <Button type="primary" size="large" block @click="handleReset" :loading="loading">
          {{ t('sys.login.resetButton') }}
        </Button>
        <!-- <Button size="large" block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Button> -->
      </FormItem>
      <div class="text-center">
        <TypographyParagraph type="secondary">
          {{ t('sys.login.resetDesc1') }}
        </TypographyParagraph>
        <TypographyParagraph type="secondary">
          {{ t('sys.login.resetDesc2') }}
        </TypographyParagraph>
      </div>
    </Form>

    <div class="p-4 enter-x" v-else>
      <Alert type="success" :message="t('sys.login.resetSuccessAlert')" show-icon closable />

      <Button class="my-5" block type="primary" :href="gotoEmailLink" target="__blank">{{
        t('sys.login.gotoEmail')
      }}</Button>
      <Button block :loading="loading" @click="handlerResend">{{
        t('sys.login.resendEmail')
      }}</Button>
    </div>
  </template>
</template>
<script lang="ts" setup>
  import { reactive, ref, computed, unref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button, TypographyParagraph, Alert } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLoginState, useFormRules, LoginStateEnum, useFormValid } from './useLogin';
  import { forgetPassword } from '/@/api/sys/user';
  import { gotoEmail } from '/@/utils/email';

  const FormItem = Form.Item;
  const { t } = useI18n();
  const { getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);
  const sendSuccess = ref(false);

  const formData = reactive({
    mail: '',
  });

  const { validForm } = useFormValid(formRef);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);
  const gotoEmailLink = computed(() => 'https://' + gotoEmail(formData.mail));

  async function handleReset() {
    const form = unref(formRef);
    if (!form) return;
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      await forgetPassword(data);
      sendSuccess.value = true;
    } finally {
      loading.value = false;
    }
  }

  async function handlerResend() {
    try {
      loading.value = true;
      await forgetPassword({ ...formData });
    } finally {
      loading.value = false;
    }
  }
</script>
