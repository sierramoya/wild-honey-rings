function altImage(ring_id) {
    let alt_name = ring_id + "a"
    let alt_src = alt_name + ".jpg"

    let ring_img = document.getElementById(ring_id)
    ring_img.src = alt_src
    ring_img.alt = alt_name
}

function orgImage(ring_id) {
    let alt_name = ring_id
    let alt_src = alt_name + ".jpg"

    let ring_img = document.getElementById(ring_id)
    ring_img.src = alt_src
    ring_img.alt = alt_name
}