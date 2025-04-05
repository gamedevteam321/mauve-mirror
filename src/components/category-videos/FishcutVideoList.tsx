import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbyz4beDj6Z_B2rj_UW-xpTFinXSWsCl3E69ohRgQJMjv9JGvrM_GCdmze_gh55-jopZjg/exec";

export default function FishcutVideoList() {
  return <BaseVideoList category="fishcut" apiUrl={API_URL} />;
} 