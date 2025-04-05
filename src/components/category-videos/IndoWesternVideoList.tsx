import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbxLN6LYqZjK9D_SUqCXTibGRW_0Dbp7DwVh7-7kYDEsRw9FBO9n3Tzjff6zRrOoa53crA/exec";

export default function IndoWesternVideoList() {
  return <BaseVideoList category="indo-western" apiUrl={API_URL} />;
} 