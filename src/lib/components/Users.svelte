<script lang="ts">
    export let fullName:string;
    export let fanOfFirebase:string;
    export let likesTheIncisiveStack:string;
    export let hobby:string;
    export let dev:string;
    export let officeHours:string;
    export let job:string;

    const defaultHobby:string = hobby ?? 'not given'
    const defaultJob:string = job ?? 'not given'
    const defaultDev = dev ?? 'not given'

</script>

<main>
    <h3>{fullName}</h3>
    <h3>{fanOfFirebase}</h3>
    <h3>{likesTheIncisiveStack}</h3>
    <h3>{hobby}</h3>
    <h3>{dev}</h3>
    <h3>{officeHours}</h3>
    <h3>{job}</h3>
</main>
