<script>
	import { scale } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// just to be sure we do this in onMount
	onMount(() => {
		setTimeout(() => {
			goto('/app');
		}, 4000);
	});
</script>

<div class="container">
	<br />
	<br />
	<br />
	<br />
	<h1 class="center h1 container__title" in:scale={{ duration: 1900, easing: elasticInOut }}>
		LOGO
	</h1>
	<br />
	<br />
	<div
		class="center h1 container__title"
		in:scale={{ delay: 400, duration: 1900, easing: elasticInOut }}
	>
		Sell more! Achieve more!
	</div>
</div>

<style lang="scss">
	.center {
		text-align: center;
		font-size: 140%;
	}

	.container {
		width: 60%;
		height: max-content;
		align-self: center;
		padding: var(--padding);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: var(--margin);
		margin: auto;
		&__title,
		&__subtitle {
			text-align: center;
			margin: auto;
		}
		@media (max-width: 600px) {
			justify-content: flex-start;
			width: 100%;
			overflow: auto;
		}
		& .card {
			width: 100%;
			max-width: 250px;
			min-width: 100px;
			height: 300px;
			border-radius: var(--border-radius);
			padding: var(--padding);
			transition: border-radius linear 200ms, box-shadow linear 200ms;
			position: relative;
			overflow: hidden;
			/* ANIMATED BUTTON VARIABLES */
			--wk-bsw-default: none;
			--wk-bsw-after: 0px 10px 15px -3px rgba(var(--box-shadow-color), 0.7);
			--wk-brd-radius-default: var(--brd-radius);
			--wk-brd-radius-after: 0.2em;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			@media (max-width: 600px) {
				min-width: 300px;
			}
			&.ubuntu-image {
				background-image: url(../lib/images/ubuntu-image.png);
			}
			&.redhat-image {
				background-image: url(../lib/images/redhat-image.jpeg);
			}
			&.android-image {
				background-image: url(../lib/images/android-image.jpeg);
			}
			&.manjaro-image {
				background-image: url(../lib/images/manjaro-image.jpeg);
			}
			&.zorin-image {
				background-image: url(../lib/images/zorin-image.jpeg);
			}
			& .overlay {
				pointer-events: none;
				position: absolute;
				opacity: 0;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.7);
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				flex-direction: column;
				gap: var(--padding);
				transition: opacity linear 200ms;
				padding: var(--padding);
				& .h3 {
					color: rgb(255, 255, 255) !important;
				}
			}
			&:hover {
				& .overlay {
					pointer-events: all;
					opacity: 1;
				}
			}
		}
	}
</style>
