import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbwJCfxStkrdKWae7HgJAxB45YcbZK_yjuB2AlP99evKL2CulaHpSna6d1yhqLyvegRU/exec";

export default function BridemaidVideoList() {
  return <BaseVideoList category="bridemaid" apiUrl={API_URL} />;
} 