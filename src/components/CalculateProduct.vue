<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            products: [],
            name: '',
            price: '',
            weight: '',
            unit: '',
            units: ['gram', 'kg', 'ons', 'kwintal', 'ton'],
            total: 0,
            margin: 0,
            sell_prices: 0
        }
    },
    methods: {
        addProduct() {
            const product = {
                name: this.name,
                price: this.price,
                weight: this.weight,
                unit: this.unit
            };
            this.products.push(product);
            this.calculateTotal();
            this.clearForms();
        },
        calculateTotal() {
            this.total = this.products.reduce((total, product) => total = total + parseInt(product.price), 0)
        },
        clearForms() {
            this.name = ''
            this.price = ''
            this.weight = ''
            this.unit = ''
        },
        calculateProfit() {
            this.sell_prices = this.total + (this.total * (this.margin / 100))
        },
        calculateMargin() {
            const margin = (this.sell_prices - this.total) / this.total * 100
            return this.margin = margin.toFixed(2)
        },
        deleteItem(index) {
            this.products.splice(index, 1);
            this.calculateTotal();
        }
    }
}
</script>

<template>
    <div class="container">
        <h3>Nge Cost Yuk</h3>
        <div class="content">
            <div class="daftar-produk">
                <div v-for="(product, index) in products" :key="index" class="list-product">
                    <div>
                        <p class="heading">{{ product.name }} - {{ product.weight }} {{ product.unit }}</p>
                        <p class="price">Rp {{ product.price }}</p>
                    </div>
                    <button class="delete-button" @click="deleteItem(index)">Hapus</button>
                </div>
                <p class="heading" style="margin-top: 16px; border-top: 2px solid; border-color: #474747;">Total</p>
                <p class="price">Rp {{ total }}</p>
            </div>
            <div class="kalkulator-profit">
                <h3>Kalkulator Profit</h3>
                <div class="form-kalkulator">
                    <div class="input">
                        <label>Profit Margin %</label>
                        <input type="number" v-model="margin" />
                    </div>
                    <div class="input">
                        <label>Harga Jual</label>
                        <input type="text" v-model="sell_prices" />
                    </div>
                </div>
                <button class="button-add" @click="calculateProfit">Calculate Profit</button>
                <button class="button-add" @click="calculateMargin">Calculate Margin</button>
            </div>
            <div class="produk">
                <h3>Produk</h3>
                <div class="form-produk">
                    <label>Nama</label>
                    <input type="text" placeholder="Nama Produk" v-model="name" />
                    <label>Harga Rupiah</label>
                    <input type="text" placeholder="Harga Produk" v-model="price" />
                    <label>Berat</label>
                    <div class="weight-form">
                        <input type="text" placeholder="Berat Produk" v-model="weight" />
                        <select v-model="unit">
                            <option disabled value="">Pilih salah satu</option>
                            <option v-for="(unit, index) in units" :key="index">
                                {{ unit }}
                            </option>
                        </select>

                    </div>
                </div>
                <button class="button-add" @click="addProduct">Tambahkan</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: #474747;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0px;
    margin: 0px;
}

input {
    padding: 16px 12px;
    align-self: stretch;
}
.daftar-produk{
    align-self: stretch;
}
.list-product {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

select {
    list-style: none;
    padding: 16px 12px;
}

select>option {
    padding: 16px
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1048px;
    gap: 24px;
    padding: 48px 24px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 24px;
    padding: 24px 0px;
}

.heading {
    color: #474747;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
}

.price {
    margin: 0px;
}

.kalkulator-profit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
}

.form-kalkulator {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

.produk {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
}

.form-produk {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
}

.weight-form {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.button-add {
    display: flex;
    padding: 21px 24px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--black, #000);
    background: var(--white, #fff);
    box-shadow: 0px 2px 0px 0px #000;
}</style>
