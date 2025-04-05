import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbyHNGK0JvLcokJn2saMwI15-YbsgLzVNMXrHeO2yL2tmsavkZPfNFdmRQo4JKt5SwblzQ/exec";

export default function LehengaVideoList() {
  return <BaseVideoList category="lehenga" apiUrl={API_URL} />;
} 