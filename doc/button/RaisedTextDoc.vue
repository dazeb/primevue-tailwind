<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed as raised as well for elevation.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        <Button label="Plain" plain text raised />
        <Button label="Contrast" severity="contrast" text raised />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" text raised />
<Button label="Secondary" severity="secondary" text raised />
<Button label="Success" severity="success" text raised />
<Button label="Info" severity="info" text raised />
<Button label="Warning" severity="warning" text raised />
<Button label="Help" severity="help" text raised />
<Button label="Danger" severity="danger" text raised />
<Button label="Plain" plain text raised />
<Button label="Contrast" severity="contrast" text raised />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        <Button label="Plain" plain text raised />
        <Button label="Contrast" severity="contrast" text raised />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        <Button label="Plain" plain text raised />
        <Button label="Contrast" severity="contrast" text raised />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
