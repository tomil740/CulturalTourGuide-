const words = [
  { hebrew: 'שלום', arabic: 'سلام', english: 'Hello' },
  { hebrew: 'תודה', arabic: 'شكراً', english: 'Thank you' },
  { hebrew: 'בוקר טוב', arabic: 'صباح الخير', english: 'Good morning' },
  { hebrew: 'לילה טוב', arabic: 'تصبح على خير', english: 'Good night' },
  { hebrew: 'כן', arabic: 'نعم', english: 'Yes' },
  { hebrew: 'לא', arabic: 'لا', english: 'No' },
  { hebrew: 'כמה זה עולה?', arabic: 'بكم هذا؟', english: 'How much does this cost?' },
  { hebrew: 'איפה השירותים?', arabic: 'أين الحمام؟', english: 'Where is the bathroom?' },
  { hebrew: 'מסעדה', arabic: 'مطعم', english: 'Restaurant' },
  { hebrew: 'מוזיאון', arabic: 'متحف', english: 'Museum' },
  { hebrew: 'חנות', arabic: 'متجر', english: 'Shop' },
  { hebrew: 'תחנת אוטובוס', arabic: 'محطة الحافلات', english: 'Bus station' },
  { hebrew: 'בית חולים', arabic: 'مستشفى', english: 'Hospital' },
  { hebrew: 'משטרה', arabic: 'شرطة', english: 'Police' },
  { hebrew: 'בית ספר', arabic: 'مدرسة', english: 'School' },
  { hebrew: 'מים', arabic: 'ماء', english: 'Water' },
  { hebrew: 'לחם', arabic: 'خبز', english: 'Bread' },
  { hebrew: 'חלב', arabic: 'حليب', english: 'Milk' },
  { hebrew: 'בשר', arabic: 'لحم', english: 'Meat' },
  { hebrew: 'דג', arabic: 'سمك', english: 'Fish' },
  { hebrew: 'פירות', arabic: 'فواكه', english: 'Fruits' },
  { hebrew: 'ירקות', arabic: 'خضروات', english: 'Vegetables' },
  { hebrew: 'כביש', arabic: 'طريق', english: 'Road' },
  { hebrew: 'מונית', arabic: 'تاكسي', english: 'Taxi' },
  { hebrew: 'רכבת', arabic: 'قطار', english: 'Train' },
  { hebrew: 'שדה תעופה', arabic: 'مطار', english: 'Airport' },
  { hebrew: 'ים', arabic: 'بحر', english: 'Sea' },
  { hebrew: 'הר', arabic: 'جبل', english: 'Mountain' },
  { hebrew: 'שמש', arabic: 'شمس', english: 'Sun' },
  { hebrew: 'ירח', arabic: 'قمر', english: 'Moon' },
];

function showRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];
  const wordDisplay = `
    <table class="word-table">
      <tr>
        <th>Hebrew</th>
        <th>Arabic</th>
        <th>English</th>
      </tr>
      <tr>
        <td>${word.hebrew}</td>
        <td>${word.arabic}</td>
        <td>${word.english}</td>
      </tr>
    </table>
    `;
  document.getElementById('randomWord').innerHTML = wordDisplay;
}

window.showRandomWord = showRandomWord;
