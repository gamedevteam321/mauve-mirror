import BaseVideoList from './BaseVideoList';

const API_URL = "https://script.google.com/macros/s/AKfycbyA_TDgQ75JxeBAi8ORIUottGEJ5Dy3cLCw2AWE45kvJUxkAzTUOnb-wt4145PRmFI6IA/exec";

export default function GownVideoList() {
  return <BaseVideoList category="gown" apiUrl={API_URL} />;
} 