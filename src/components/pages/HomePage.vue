<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col
                    v-for="n in 1"
                    :key="n"
                    cols="12"
                    sm="4"
                    class="pa-4"
            >
                <html-editor class="ma-4"></html-editor>
                <v-card
                        class="pa-2"
                        outlined
                        tile
                >
                    <v-card
                            class="mx-auto"
                            max-width="300"
                            tile
                    >
                        <v-list dense>
                            <v-subheader>REPORTS</v-subheader>
                            <v-list-item-group
                                    v-model="item"
                                    color="primary"
                            >
                                <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            item: 1,
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
        }),
    }
</script>
