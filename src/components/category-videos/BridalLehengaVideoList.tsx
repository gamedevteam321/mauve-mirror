import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbxWyxfW6czNsIdz6LQXA7HZXIh3jtFUfx8CZsHauYe7yfW7ql0IHbUPujd8tSCxri6oKQ/exec";

export default function BridalLehengaVideoList() {
  return <BaseVideoList category="bridal-lehenga" apiUrl={API_URL} />;
} 