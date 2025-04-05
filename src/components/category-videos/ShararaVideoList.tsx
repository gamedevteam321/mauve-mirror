import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbywVXvPm9wyv0iTnIWE5rc_fVAc0LonjKllLXZVSprhyy9mczg90mKgRW4Iab-6RY0hCw/exec";

export default function ShararaVideoList() {
  return <BaseVideoList category="sharara" apiUrl={API_URL} />;
} 