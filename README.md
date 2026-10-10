# Vibe Coding 實作課

這是靜態網站，直接開啟 `index.html` 或以靜態網站服務部署即可。

## 編輯位置

- `index.html`：首頁與三個區段的入口。
- `preparation.html`：課前準備（7 個步驟，含 GitHub Fork 圖解、Windows／Mac 安裝說明與驗收清單）。
- `course.html`：課程內容（21 張投影片，含課程 Overview 與 ngrok 圖解；第 10、11、17 頁提供 Agent Friendly／手動執行切換）。
- `reading.html`：課後閱讀（2 張投影片，含 Agent Skills 選讀）。
- `assets/styles.css`：四個頁面的共用樣式。
- `assets/slides.js`：投影片切換、筆記、列印與全螢幕。

各內容頁的 `<main>` 中，每個 `<section class="slide">` 是一張投影片；新增、刪除或調整順序後，頁碼與選單會自動更新。

投影片連結使用各頁自己的 `#slide-1`、`#slide-2` 等編號。列印只包含目前區段；課程內容可直接瀏覽。
