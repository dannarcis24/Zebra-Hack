const offers = [];

function addOffer() {
    // Get form values
    const supplierName = document.getElementById('supplier-name');
    const price = document.getElementById('price');
    const deliveryTerms = document.getElementById('delivery-terms');
    const paymentTerms = document.getElementById('payment-terms');

    // Clear previous warnings
    supplierName.classList.remove('warning');
    price.classList.remove('warning');
    deliveryTerms.classList.remove('warning');
    paymentTerms.classList.remove('warning');
    
    // Reset placeholders
    supplierName.placeholder = '';
    price.placeholder = '';
    deliveryTerms.placeholder = '';
    paymentTerms.placeholder = '';

    // Check for empty fields and add warning class
    let isValid = true;
    if (supplierName.value.trim() === '') {
        supplierName.classList.add('warning');
        supplierName.placeholder = 'Te rog introdu numele furnizorului';
        isValid = false;
    }
    if (price.value.trim() === '') {
        price.classList.add('warning');
        price.placeholder = 'Te rog introdu prețul';
        isValid = false;
    }
    if (deliveryTerms.value.trim() === '') {
        deliveryTerms.classList.add('warning');
        deliveryTerms.placeholder = 'Te rog introdu termenii de livrare';
        isValid = false;
    }
    if (paymentTerms.value.trim() === '') {
        paymentTerms.classList.add('warning');
        paymentTerms.placeholder = 'Te rog introdu termenii de plată';
        isValid = false;
    }

    // If any field is empty, do not proceed
    if (!isValid) {
        return;
    }

    // Create a new row
    const newRow = document.createElement('tr');

    // Create cells for each value
    const supplierNameCell = document.createElement('td');
    supplierNameCell.textContent = supplierName.value;
    newRow.appendChild(supplierNameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = price.value;
    newRow.appendChild(priceCell);

    const deliveryTermsCell = document.createElement('td');
    deliveryTermsCell.textContent = deliveryTerms.value;
    newRow.appendChild(deliveryTermsCell);

    const paymentTermsCell = document.createElement('td');
    paymentTermsCell.textContent = paymentTerms.value;
    newRow.appendChild(paymentTermsCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Șterge';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
        deleteOffer(deleteButton);
    };
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // Append the new row to the table
    document.querySelector('#offers-table tbody').appendChild(newRow);

    // Add offer to the offers array
    offers.push({
        supplierName: supplierName.value,
        price: parseFloat(price.value),
        deliveryTerms: deliveryTerms.value,
        paymentTerms: paymentTerms.value
    });

    // Clear form fields
    supplierName.value = '';
    price.value = '';
    deliveryTerms.value = '';
    paymentTerms.value = '';

    // Update the chart
    updateChart();
}

function deleteOffer(button) {
    const row = button.parentNode.parentNode;
    const index = Array.from(row.parentNode.children).indexOf(row);
    offers.splice(index, 1);
    row.parentNode.removeChild(row);
    updateChart();
}

function updateChart() {
    // This function is now empty since we removed the initial chart
}

function generateComparisonReport() {
    const rows = document.querySelectorAll('#offers-table tbody tr');
    const reportDiv = document.getElementById('comparison-report');
    reportDiv.innerHTML = ''; // Clear previous report

    if (rows.length === 0) {
        reportDiv.textContent = 'Nu sunt oferte de comparat.';
        return;
    }

    const offers = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const offer = {
            supplierName: cells[0].textContent,
            price: parseFloat(cells[1].textContent),
            deliveryTerms: cells[2].textContent,
            paymentTerms: cells[3].textContent
        };
        offers.push(offer);
    });

    // Sort offers by price
    offers.sort((a, b) => a.price - b.price);

    // Find the maximum price to normalize the bar heights
    const maxPrice = Math.max(...offers.map(offer => offer.price));

    // Create a div element for the chart
    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart-container');
    reportDiv.appendChild(chartContainer);

    // Add title
    const chartTitle = document.createElement('div');
    chartTitle.classList.add('chart-title');
    chartTitle.textContent = 'Comparație de preț';
    chartContainer.appendChild(chartTitle);

    const chartDiv = document.createElement('div');
    chartDiv.classList.add('chart-bar');
    chartContainer.appendChild(chartDiv);

    // Create the scale
    const scaleDiv = document.createElement('div');
    scaleDiv.classList.add('chart-scale');

    for (let i = 0; i <= 5; i++) {
        const scaleMark = document.createElement('div');
        scaleMark.innerHTML = `<span>${Math.round((maxPrice / 5) * i)}</span>`;
        scaleDiv.appendChild(scaleMark);
    }

    // Generate the chart
    offers.forEach(offer => {
        const bar = document.createElement('div');
        const barHeight = (offer.price / maxPrice) * 100; // Normalize height
        bar.style.height = `${barHeight}%`;
        bar.title = `${offer.supplierName}: $${offer.price}`;
    
        // Add price at the top of the bar
        const priceLabel = document.createElement('span');
        priceLabel.textContent = `$${offer.price}`;
        priceLabel.style.position = 'absolute';
        priceLabel.style.top = '-20px';
        priceLabel.style.width = '100%';
        priceLabel.style.textAlign = 'center';
        priceLabel.style.color = '#000';
        priceLabel.style.fontSize = '12px';
        bar.appendChild(priceLabel);
    
        // Add supplier name at the bottom of the bar
        const nameLabel = document.createElement('span');
        nameLabel.textContent = offer.supplierName;
        nameLabel.style.position = 'absolute';
        nameLabel.style.bottom = '-20px';
        nameLabel.style.width = '100%';
        nameLabel.style.textAlign = 'center';
        nameLabel.style.color = '#000';
        nameLabel.style.fontSize = '12px';
        nameLabel.style.whiteSpace = 'nowrap';
        nameLabel.style.transform = 'rotate(-45deg)';
        nameLabel.style.transformOrigin = 'left bottom';
        bar.appendChild(nameLabel);
    
        chartDiv.appendChild(bar);
    });
}