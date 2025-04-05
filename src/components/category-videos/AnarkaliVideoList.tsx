import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbzkMepdw55T1sEcc9PO19K3D9L4Xyq34oCb9hsy9kK-haLfN8A2rUsrG4yuE9yXdgnzYg/exec";

export default function AnarkaliVideoList() {
  return <BaseVideoList category="anarkali" apiUrl={API_URL} />;
} 