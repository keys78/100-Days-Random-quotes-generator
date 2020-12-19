const hurtMenu = ["“Do you know the feeling, when your heart is so hurt, that you could feel the blood dripping?” - Lady Gaga",
                "“Being hurt by someone you truly care about leaves a hole in you heart that only love can fill.” - George Benard Shaw",
                "“Being brokenhearted is like having broken ribs. On the outside it looks like nothing's wrong, but every breath hurts.” - Greg Brehndht",
               /* "“I attribute my success to this: I never gave or took any excuse.” –Florence Nightingale",
                "“Definiteness of purpose is the starting point of all achievement.” –W. Clement Stone",
                "“Every child is an artist.  The problem is how to remain an artist once he grows up.” –Pablo Picasso",
                "“The best time to plant a tree was 20 years ago. The second best time is now.” –Chinese Proverb",
                "“I am not a product of my circumstances. I am a product of my decisions.” –Stephen Covey",
                "“The two most important days in your life are the day you are born and the day you find out why.” –Mark Twain",
                "“Life shrinks or expands in proportion to one's courage.” –Anais Nin",
                "“If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.” –Vincent Van Gogh",
                "“Go confidently in the direction of your dreams.  Live the life you have imagined.” –Henry David Thoreau"*/
            

];


const colors = ["red","orange", "peach", "pink", "indigo", "cyan", "purple", "aliceblue", "burgundy"];


const button = document.getElementById('btn');
const text = document.getElementById('text');

//assigning functions
    button.addEventListener("click", function (){

    const randomColors = scatter();
    console.log(randomColors);


    const randomQuotes = randomize();
    text.innerHTML = hurtMenu[randomQuotes];
    text.style.color = colors[randomColors];
    
});
function randomize(){
   return Math.floor(Math.random() * hurtMenu.length);
}

function scatter(){
    return Math.floor(Math.random() * colors.length);
 }
console.log(body.style.backgroundImage);