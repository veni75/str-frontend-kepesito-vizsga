function changeOuterLinks() {
    const link = document.querySelectorAll('nav a');
    const linkArray = Array.from(link);
    const text = linkArray.map(item=>item.innerHTML);
    const outer = text.filter(item=>item.includes('outer-link'));
    linkArray.map(item=>item.innerHTML.includes('outer-link')?item.target="_blank":'');
    const strong = document.createElement('strong');
    
    console.log(linkArray);

    

    const nav = document.querySelector('nav');
    nav.style.display='flex';
    nav.style.flexDirection='column';
    nav.style.width='30%';
    nav.style.margin='0 auto';
    nav.style.border='1px solid blue';
    nav.style.padding='16px';

}
changeOuterLinks();
export { changeOuterLinks };