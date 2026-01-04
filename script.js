        const book = document.getElementById('book');
        const leaves = [
            document.getElementById('cover'),
            document.getElementById('leaf1'),
            document.getElementById('leaf2')
        ];
        
        let currentState = 0;

        book.addEventListener('click', () => {
            if (currentState < leaves.length) {
                const currentLeaf = leaves[currentState];
                currentLeaf.classList.add('flipped');
                
                if (currentState === 0) book.classList.add('open');
              
                setTimeout(() => {
                    currentLeaf.style.zIndex = 10 + currentState;
                }, 500);
                
                currentState++;
            } else {
                leaves.forEach((leaf, index) => {
                    leaf.classList.remove('flipped');
                    leaf.style.zIndex = leaves.length + 1 - index;
                });
                book.classList.remove('open');
                currentState = 0;
            }
        });