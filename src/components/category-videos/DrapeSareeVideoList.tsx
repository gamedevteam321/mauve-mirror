import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbw97uthi8lpj0KSnn5WxGkYWqvQQQqUlOqeMRX4t65ix4yGbp80o-1CN21jcvjWc0Z2TA/exec";

export default function DrapeSareeVideoList() {
  return <BaseVideoList category="drape-saree" apiUrl={API_URL} />;
} 