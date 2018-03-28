"use strict";

class Printer
{
    /**
     * 
     * @param {string} text 
     * @param {string} _shape 
     * @param {string} _space 
     */
    constructor( text , _shape = "#" , _space = " ")
    {
        // replace space
        this.text   = text.replace(/\s/g , '_');
        this._shape  = _shape;
        this._space  = _space;

        // word lines
        this.word  = [
            "",
            "",
            "",
            "",
            "",
        ];
    };
    

    shape(count)
    {
        return this._shape.repeat(count);
    };

    space( count )
    {
        return this._space.repeat(count);
    };

    write()
    {

        // Chars 
        var chars = {
            A : {
                width : 9,
                lines : [
                    this.space(4) + this.shape(1) ,
                    this.space(3) + this.shape(1) + this.space(1) + this.shape(1),
                    this.space(2) + this.shape(5) + this.space(1),
                    this.space(1) + this.shape(1) + this.space(5) + this.shape(1),
                    this.space(0) + this.shape(1) + this.space(7) + this.shape(1),
                ]
                
            },

            H : {
                width : 5,
                lines : [
                    this.shape(1) + this.space(3) + this.shape(1) ,
                    this.shape(1) + this.space(3) + this.shape(1) ,
                    this.shape(1) + this.shape(3) + this.shape(1),
                    this.shape(1) + this.space(3) + this.shape(1) ,
                    this.shape(1) + this.space(3) + this.shape(1),
                ]
                
            },

            M : {
                width : 13,
                lines : [
                    this.space(3) + this.shape(1) + this.space(5) +  this.shape(1) ,
                    this.space(2) + this.shape(1) + this.space(1) +  this.shape(1) + this.space(3) + this.shape(1) + this.space(1) + this.shape(1) ,
                    this.space(1) + this.shape(1) + this.space(3) + this.shape(1) + this.space(1) + this.shape(1) + this.space(3) + this.shape(1) ,
                    this.shape(1) + this.space(5) + this.shape(1)+ this.space(5) + this.shape(1),
                    this.shape(1) + this.space(11) + this.shape(1)  ,
                ]
            },

            W : {
                width : 13,
                lines : [
                    this.shape(1) + this.space(11) + this.shape(1)  ,
                    this.shape(1) + this.space(5) + this.shape(1)+ this.space(5) + this.shape(1),
                    this.space(1) + this.shape(1) + this.space(3) + this.shape(1) + this.space(1) + this.shape(1) + this.space(3) + this.shape(1) ,
                    this.space(2) + this.shape(1) + this.space(1) +  this.shape(1) + this.space(3) + this.shape(1) + this.space(1) + this.shape(1) ,
                    this.space(3) + this.shape(1) + this.space(5) +  this.shape(1) ,
                ]
            },


            E : {
                width : 7,
                lines : [
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1)  ,
                    this.shape(1) ,
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1)  ,
                    this.shape(1) ,
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1)   ,
                ]
            },

            D : {
                width : 6,
                lines : [
                    this.shape(1) + this.space(1) + this.shape(1)  ,
                    this.shape(1) + this.space(3) + this.shape(1),
                    this.shape(1) + this.space(4) + this.shape(1),
                    this.shape(1) + this.space(3) + this.shape(1),
                    this.shape(1) + this.space(1) + this.shape(1),
                ]
            },  
            
            N : {
                width : 7,
                lines : [
                    this.shape(2) + this.space(4) + this.shape(1)  ,
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(3) + this.shape(1),
                    this.shape(1) + this.space(2) + this.shape(1) + this.space(2) + this.shape(1),
                    this.shape(1) + this.space(3) + this.shape(1)+ this.space(1) + this.shape(1),
                    this.shape(1) + this.space(4) + this.shape(2),
                ]
            },

            O : {
                width : 9,
                lines : [
                    this.space(3) + this.shape(1) + this.space(1) +  this.shape(1)  ,
                    this.space(1) + this.shape(1) + this.space(5) + this.shape(1),
                    this.space(0) + this.shape(1) + this.space(7) + this.shape(1),
                    this.space(1) + this.shape(1) + this.space(5) + this.shape(1),
                    this.space(3) + this.shape(1) + this.space(1) + this.shape(1),
                ]
            },

            T : {
                width : 9,
                lines : [
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) ,
                    this.space(4) + this.shape(1) ,
                    this.space(4) + this.shape(1) ,
                    this.space(4) + this.shape(1) ,
                    this.space(4) + this.shape(1) ,
                ]
            },

            K : {
                width : 9,
                lines : [
                    this.shape(1)  + this.space(5) + this.shape(1) ,
                    this.shape(1)  + this.space(3) + this.shape(1) ,
                    this.shape(1)  + this.space(1) + this.shape(1) ,
                    this.shape(1)  + this.space(3) + this.shape(1) ,
                    this.shape(1)  + this.space(5) + this.shape(1) ,
                ]
            },

            S : {
                width : 7,
                lines : [
                    this.shape(1)  + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1)  ,
                    this.space(1) + this.shape(1)  ,
                    this.space(3) + this.shape(1) ,
                    this.space(5) + this.shape(1) ,
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1)  ,
                ]
            },

            L : {
                width : 7,
                lines : [
                    this.shape(1) ,
                    this.shape(1) ,
                    this.shape(1) ,
                    this.shape(1) ,
                    this.shape(1) + this.space(1) + this.shape(1) + this.space(1) + this.shape(1) + this.space(1) +this.shape(1) ,
                ]
            },

            Y : {
                width : 7,
                lines : [
                    this.shape(1) + this.space(5) + this.shape(1),
                    this.space(1) + this.shape(1) + this.space(3) + this.shape(1) ,
                    this.space(3) + this.shape(1) ,
                    this.space(2) + this.shape(1) ,
                    this.space(1) + this.shape(1) ,
                ]
            },

            C : {
                width : 7,
                lines : [
                    this.space(3) + this.shape(1) + this.space(1) + this.shape(1)  ,
                    this.space(1) + this.shape(1) ,
                    this.space(0) + this.shape(1) ,
                    this.space(1) + this.shape(1)  ,
                    this.space(3) + this.shape(1) + this.space(1) + this.shape(1)  ,
                ]
            },

            _ : {
                width : 2,
                lines : [
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            },
        };
    

        // split chars
        // set all char of this word in his place
        for(var char of this.text.toUpperCase().split(''))
        {


            let lines = chars[char].lines;
            let width = chars[char].width;
            for(var i = 0 ; i < 5 ; i++ )
            {
                // if line length > width of char
                // set space in the end
                if(lines[i].length < width)
                {
                    lines[i] += this.space(width - lines[i].length);
                }

                // set line of word 
                this.word[i] += lines[i] + this.space(3);
            }
        }

        return this
    }

    print()
    {
        if(typeof window === "undefined"){
            // nodejs
            for(let i of this.word)
            {
                console.log('\x1b[36m%s\x1b[0m', i ); 
            }
        }else{
            // javascript
            for(let i of this.word)
            {
                var styles = [
                    'color: #1797B1',
                    'font-weight: bold',
                ].join(';');
                console.log('%c %s', styles , i);
            }
        };
        return this
    };


};


// window : to can use Printer in any page in front end 
// module.exports : to can use Printer in any page who is import in nodejs -> like ./server.js
(function(){
    if(typeof window === "undefined"){
        // nodejs
        module.exports = Printer;
    }else{
        // javascript
        window.Printer = Printer;
    }
}());

