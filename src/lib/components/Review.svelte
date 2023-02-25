<script lang="ts">
	import { supabaseClient } from "$lib/supabase";


    function handleSubmit(event:any) {
        event.preventDefault();

        const formData = {
            review: event.target.review.value
        }

        supabaseClient
        .from('Reviews')
        .insert([formData])
        .then(() => {
            console.log('Review inserted Succesfully')
        })
    }
</script>

<main>
    <form>
        <div>
            <label class='label' for="Feedback">
                <span>Review us here: </span>
                <input type="text" name="review" class="input" placeholder="Great services">
            </label>
        </div>
        <button type="submit" class="btn btn-ghost" >Submit Review</button>
    </form>
</main>

<style>

</style>
