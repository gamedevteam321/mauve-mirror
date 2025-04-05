import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycby4nV2LMJt2lkzGYVn76b00AEquHvb2DeUX6q3x-ZYpp-HZ4C_MVPPXxb_7vS5-7r9cpg/exec";

export default function CoCordVideoList() {
  return <BaseVideoList category="co-cords" apiUrl={API_URL} />;
} 