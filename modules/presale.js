import { $, $$ } from '/modules/selector.js';
import { translationData } from '/main.js';

const address = {
    'USDC-ERC20': '0xdfb48cbba0d05ad10905927e3bab3c6b82dafba4',
    'USDC-TRC20': 'TGSmf2oeKSnmfsaPQYHEWAcqReV4D9p3ro',
    'USDT-ERC20': '0x77c7f8d9ec6a118f8f4bcc97c09238f1fc36fbff',
    'USDT-TRC20': 'TJe411uvcLoMJguq78pstgFDDGnr6yxQxK',
    'DAI-ERC20': '0xdfb48cbba0d05ad10905927e3bab3c6b82dafba4',
    'BUSD-BEP20': '0xdfb48cbba0d05ad10905927e3bab3c6b82dafba4',
    'BUSD-ERC20': '0x77c7f8d9ec6a118f8f4bcc97c09238f1fc36fbff',
    'USDP-ERC20': '0xdfb48cbba0d05ad10905927e3bab3c6b82dafba4',
    'TUSD-ERC20': '0xdfb48cbba0d05ad10905927e3bab3c6b82dafba4',
    'TUSD-TRC20': 'TGSmf2oeKSnmfsaPQYHEWAcqReV4D9p3ro',
    'XUSDC': 'gratpresale',
    'XUSDT': 'gratpresale'
}

let scrollTO = function (target, offset) {
    $('body').scrollTo(0, target.offsetTop - offset);
}

let orderData = new Object();
let amountDue;
let pendingOrder = new Object();

/* Production */ //const url = 'https://gratitudetoken.world:3333';
/* Local */ const url = 'http://127.0.0.1:3333';

const colors = ['#00ff9d', '#00ff6a', '#00ff2a', '#15ff00', '#88ff00', '#fbff0d', '#ffbb00', '#ff5e00', '#ff3300', '#e20b0b', '#ff0d0d'];
const colorsReversed = colors.reverse();

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

export let presale = () => {
    let userProvided;

    let formatNumber = function (x) {
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    const formatDate = (dateString) => {
        let options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", timeZone: 'Europe/Bucharest' }
        let date = new Date(dateString);
        return date.toLocaleDateString('ro-RO', options);
    }


    // const formatCurrency = (string) => {
    //     if (string.match('-')) {
    //         return string.replace('-', ' (') + ')';
    //     }
    // }

    let confirmed_cancelled_ID;

    let payment = (data) => {
        confirmed_cancelled_ID = data.id;
        $$('.hideIfPending').style = 'display: none !important';
        $('#final-step').style = 'display: block !important';
        $$('.discount').forEach((el) => {
            el.textContent = data.discount;
        });
        $('#order-id').textContent = '#' + data.id;
        $('#order-size').textContent = formatNumber(data.size);
        $('#total-due').textContent = data.total_due + ' ' + data.currency;
        $('#address').value = data.address;
        $$('.user-provided').forEach((el) => {
            el.textContent = data.user;
        });

        const adddr = data.address;
        new QRCode($('#qrcode'), adddr);

        $('#address').addEventListener('click', () => {
            let target = $('#clipboardMessageOverlay');
            const copyText = $("#address");
            navigator.clipboard.writeText(copyText.value);
            target.innerHTML = '<b>Address copied to clipboard.</b>';
        });


        let pendingOrderObject = JSON.parse(localStorage.getItem('pendingOrder'));

        $('#cancel').addEventListener('click', () => {
            let cancelID = pendingOrderObject.id;
            fetch(url + '/cancel/' + cancelID).then(response => {
                return response.json();
            }).then(data => {
                data.status === 'cancelled' ? location.reload() : console.log('Something went wrong.');
                localStorage.removeItem('pendingOrder');
            });
        });
        $$('.selected_currency').forEach((el) => {
            el.textContent = data.currency;
        });

        $('#confirm-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const tx = $('#tx').value;

            $('#txContainer').innerHTML = '<div class="lds-circle"><div></div></div>';

            async function confirmOrder() {
                try {
                    const response = await fetchWithTimeout(url + '/confirm/' + pendingOrderObject.id + '/' + pendingOrderObject.user + '/' + tx, {
                        timeout: 6000
                    });

                    const orders = await response.json();
                    console.log(orders);
                    if (orders.status === '200') {
                        $('#txContainer').innerHTML = translationData.tx_ok;
                        localStorage.removeItem('pendingOrder');
                    }
                } catch (error) {
                    console.log(error.name === 'AbortError');
                    // Timeouts if the request takes
                    // longer than 6 seconds
                    $('#txContainer').innerHTML = translationData.tx_error;
                }
            }

            confirmOrder();

            // fetch(url + '/confirm/' + pendingOrderObject.id + '/' + pendingOrderObject.user + '/' + tx).then(response => {
            //     return response.json();
            // }).then(data => {
            //     if (data.status === '200') {
            //         $('#txContainer').innerHTML = translationData.tx_ok;
            //         localStorage.removeItem('pendingOrder');
            //     }
            // }).catch((error) => {
            //     console.log(error);
            //     $('#txContainer').innerHTML = translationData.tx_error;
            // });
        });
    }


    // let's populate all orders
    var getAllOrders = function () {
        fetch(url + '/presale-orders').then(response => {
            return response.json();
        }).then(data => {
            let confirmations = data[1];
            let totalTokens = 0;
            let pendingTokens = 0;
            let cancelledTokens = 0;
            let totalDollars = 0;
            let users = [];
            let table = '';
            let cells = '';

            data[0].forEach((item) => {
                // id cell
                cells += '<td>#' + item.id + '</td>';

                // date cell
                cells += '<td>' + formatDate(item.date) + '</td>';

                // username cell
                cells += '<td>' + item.user + '</td>';

                // currency cell
                cells += '<td>' + item.currency + '</td>';

                // discount cell
                cells += '<td style="color: ' + colors[item.discount] + '">' + item.discount + '%</td>';

                // tokens cell
                cells += '<td>' + item.tokens + '</td>';

                // status cell
                if (item.id === confirmations[item.id - 1].id && confirmations[item.id - 1].status !== '') {
                    cells += '<td class="status-' + confirmations[item.id - 1].status + '">' + translationData[confirmations[item.id - 1].string] + '</td>';

                    if (confirmations[item.id - 1].status !== 'cancelled') {
                        totalDollars += item.tokens * ((100 - item.discount) / 100) - item.discount + 1;
                    } else { cancelledTokens += item.tokens }
                    // if the order is confirmed or cancelled from the status.json and it matches the pendingOrder ID then we remove the pending order object in the localStorage
                    if ((confirmations[item.id - 1].status === 'confirmed' || confirmations[item.id - 1].status === 'cancelled')
                        && item.id === confirmed_cancelled_ID) {
                        localStorage.removeItem('pendingOrder');
                    }
                } else {
                    pendingTokens += parseInt(item.tokens);
                    cells += '<td class="status-pending">' + translationData.pending + '</td>'
                }

                totalTokens += parseInt(item.tokens);
                const length = data[0].length;
                table += '<tr title="' + formatNumber(item.tokens * ((100 - item.discount) / 100) - item.discount + 1) + ' ' + item.currency + ' | ' + translationData.payment_to + ': ' + address[item.currency] + '">' + cells + '</tr>';
                cells = '';
                users.push(item.user);
            });

            $('#current-orders').innerHTML = translationData.orders_head + table;


            let unique = [...new Set(users)];
            $('#investors').textContent = unique.length;
            $('#confirmed').textContent = formatNumber(totalDollars);

            $('#tokens-sold').textContent = formatNumber(totalTokens - pendingTokens - cancelledTokens);
            $$('.tokens-pending').forEach((el) => {
                el.textContent = formatNumber(pendingTokens);
            });


            let progressBarValue = ((totalTokens - pendingTokens - cancelledTokens) / 4000000 * 100).toFixed(3);
            $('.progress-bar span').textContent = progressBarValue + '%';
            $('.progress-bar b').style.left = '-' + (100 - progressBarValue) + '%';
        });
    }
    //check for correct week to update top-price
    fetch(url + '/presale-orders/current_week').then(response => {
        return response.json();
    }).then(data => {
        $('#starting-week').textContent = formatDate(data.period[0]);
        $('#end-week').textContent = formatDate(data.period[1]);
        if (data.discount === 0) {
            $('#top-price b').textContent = '$1.00';
            $('#top-price b').style = 'vertical-align: middle';
            $('#top-price del').style.display = 'none';
        } else {
            $('#top-price b').textContent = '$' + formatNumber(((100 - data.discount) / 100));
        }
        $('#top-discount i').textContent = '-' + data.discount;
        $('#top-extra').textContent = data.discount;
        $('#style').innerHTML += `
        .current-week-color {border-color: `+ colorsReversed[data.discount] + `69 !important; color: ` + colorsReversed[data.discount] + ` !important;}
        .progress-bar {background: ` + colorsReversed[data.discount] + `23 !important}
        .progress-bar b {background: ` + colorsReversed[data.discount] + `90 !important}
        `;
    });
    getAllOrders();

    // #1 First Step
    $('#order-terms-show').addEventListener('click', function (event) {
        const presaleTerms = $('#presale-terms');
        presaleTerms.style.display = 'block';

        $('#order-form-show').style.display = 'block';
        $('#order-terms-show').style.display = 'none';
        $('.hideStep2').style.display = 'none';
        scrollTO($('#scroll1'), 100);
    });
    // #2 Second Step
    $('#order-form-show').addEventListener('click', function (event) {
        const prompt1 = translationData.enter_username || 'Enter your username: ';
        userProvided = prompt(prompt1).toLowerCase();
        if (userProvided != null) {
            fetch('https://proton.pink.gg/v2/history/get_creator?account=' + userProvided).then(response => {
                return response.json();
            }).then(data => {
                if (data.account) {
                    $$('.user-provided').forEach((el) => {
                        el.textContent = userProvided;
                    });
                    $('#presale-terms').style.display = 'none';
                    $('#order-form').style.display = 'block';
                    $('#order-form-show').style.display = 'none';
                } else {
                    alert(userProvided + " doesn't exist. Check your spelling or create a username and click NEXT.")
                }
            });
        }
        scrollTO($('#scroll2'), 100);
    });

    $('#order-form').addEventListener('change', (e) => {
        const content = $('input[name="order-currency"]:checked').value;
        $$('.selected_currency').forEach((el) => {
            content.match('-') ? el.textContent = content.replace('-', ' (') + ')' : el.textContent = content + ' (Proton)';
        });
    });

    //localStorage.removeItem('pendingOrder');
    pendingOrder = localStorage.getItem('pendingOrder') || null;
    if (pendingOrder) {
        pendingOrder = JSON.parse(pendingOrder);
        payment(pendingOrder);
        $('.hideStep2').style.display = 'none';
    } else {
        $$('.hideIfPending').style = 'display: none !important';
        $('#order-terms-show').style = 'display: block !important';
    }

    $('#order-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // google recaptcha v3 protect submit action
        grecaptcha.ready(function () {
            grecaptcha.execute('6LcBOuYhAAAAAHU3In9AUEPmNcqt0IxVADxA0CKx', { action: 'submit' }).then(function (token) {

                orderData.recaptcha_token = token;
                orderData.user = userProvided;
                orderData.currency = $('input[name="order-currency"]:checked').value;
                orderData.email = $('#order-email').value;
                orderData.tokens = parseInt($('#order-tokens').value);
                let postData = JSON.stringify(orderData);

                let presaleCall = function () {
                    fetch(url + '/presale',
                        {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: postData
                        }).then(response => {
                            return response.json();
                        }).then(data => {
                            amountDue = formatNumber(orderData.tokens * ((100 - data.discount) / 100));
                            // stuff
                            if (data.status === '200') {
                                getAllOrders();
                                const storeOrder = {
                                    'id': data.id,
                                    'user': orderData.user,
                                    'size': orderData.tokens,
                                    'total_due': amountDue,
                                    'currency': orderData.currency,
                                    'discount': data.discount,
                                    'address': address[orderData.currency],
                                    'status': 'pending'
                                }
                                localStorage.setItem('pendingOrder', JSON.stringify(storeOrder));
                                $('#order-form').style.display = 'none';
                                payment(storeOrder);

                                // Facebook pixel tracking for Payment
                                fbq('track', 'Purchase', {
                                    value: data.total_due,
                                    currency: 'USD',
                                });
                            }
                        });
                }
                presaleCall();
                scrollTO($('#scroll3'), 100);
            });
        });
    });
}