function showFeature(letter) 
{
    document.getElementById(`content-${letter}`).classList.add('visible');
}

function hideFeature(letter) 
{
    document.getElementById(`content-${letter}`).classList.remove('visible');
}
