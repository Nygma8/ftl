
const searchInput = document.getElementById('searchInput');
const meetingTable = document.getElementById('meetingTable').getElementsByTagName('tbody')[0];


searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const rows = meetingTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? '' : 'none';
    }
});
