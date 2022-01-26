function evaluate(expression)
    {
        let tokens = expression.split('');
  
         // Stack for numbers: 'values'
        let values = [];
  
        // Stack for Operators: 'ops'
        let ops = [];
  
        for (let i = 0; i < tokens.length; i++)
        {
             // Current token is a whitespace, skip it
            if (tokens[i] == ' ')
            {
                continue;
            }
  
            // Current token is a number,
            // push it to stack for numbers
            if (tokens[i] >= '0' && tokens[i] <= '9')
            {
                let sbuf = "";
                  
                // There may be more than
                // one digits in number
                while (i < tokens.length &&
                        tokens[i] >= '0' &&
                            tokens[i] <= '9')
                {
                    sbuf = sbuf + tokens[i++];
                }
                values.push(parseInt(sbuf, 10));
                
                // Right now the i points to
                // the character next to the digit,
                // since the for loop also increases
                // the i, we would skip one
                //  token position; we need to
                // decrease the value of i by 1 to
                // correct the offset.
                  i--;
            }
  
            // Current token is an opening
            // brace, push it to 'ops'
            else if (tokens[i] == '(')
            {
                ops.push(tokens[i]);
            }
  
            // Closing brace encountered,
            // solve entire brace
            else if (tokens[i] == ')')
            {
                while (ops[ops.length - 1] != '(')
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                  values.pop()));
                }
                ops.pop();
            }
  
            // Current token is an operator.
            else if (tokens[i] == '+' ||
                     tokens[i] == '-' ||
                     tokens[i] == '*' ||
                     tokens[i] == '/' ||
                     tokens[i] == '%' ||
                     tokens[i] == '^')
            {
                  
                // While top of 'ops' has same
                // or greater precedence to current
                // token, which is an operator.
                // Apply operator on top of 'ops'
                // to top two elements in values stack
                while (ops.length > 0 &&
                         hasPrecedence(tokens[i],
                                     ops[ops.length - 1]))
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                 values.pop()));
                }
  
                // Push current token to 'ops'.
                ops.push(tokens[i]);
            }
        }
  
        // Entire expression has been
        // parsed at this point, apply remaining
        // ops to remaining values
        while (ops.length > 0)
        {
            values.push(applyOp(ops.pop(),
                             values.pop(),
                            values.pop()));
        }
  
        // Top of 'values' contains
        // result, return it
        return values.pop();
    }
  
    // Returns true if 'op2' has
    // higher or same precedence as 'op1',
    // otherwise returns false.
    function hasPrecedence(op1, op2)
    {
        if (op2 == '(' || op2 == ')')
        {
            return false;
        }
        if ((op1 == '*' || op1 == '/') &&
               (op2 == '+' || op2 == '-'))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
  
    // A utility method to apply an
    // operator 'op' on operands 'a'
    // and 'b'. Return the result.
    function applyOp(op, b, a)
    {
        switch (op)
        {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '^':
            return Math.pow(a,b);
        case '%':
            return a%b;
        case '/':
            if (b == 0)
            {
                document.write("Cannot divide by zero");
            }
            return parseInt(a / b, 10);
        }
        return 0;
    }

const input = document.getElementById('input');
const result = document.getElementById('result')
// My Code for Calculator
function C(){
    // input.insertAdjacentText("beforeend",'C');
    input.innerHTML = "";
    result.innerHTML = "Result:";
}
function mod(){
    input.insertAdjacentText("beforeend",'%');
}
function power(){
    input.insertAdjacentText("beforeend",'^');
}
function div(){
    input.insertAdjacentText("beforeend",'/');
}
function add(){
    input.insertAdjacentText("beforeend",'+');
}
function sub(){
    input.insertAdjacentText("beforeend",'-');
}
function mul(){
    input.insertAdjacentText("beforeend",'*');
}
function dot(){
    input.insertAdjacentText("beforeend",'.');
}
function one(){
    input.insertAdjacentText("beforeend",'1');
}
function two(){
    input.insertAdjacentText("beforeend",'2');
}
function three(){
    input.insertAdjacentText("beforeend",'3');
}
function four(){
    input.insertAdjacentText("beforeend",'4');
}
function five(){
    input.insertAdjacentText("beforeend",'5');
}
function six(){
    input.insertAdjacentText("beforeend",'6');
}
function seven(){
    input.insertAdjacentText("beforeend",'7');
}
function eight(){
    input.insertAdjacentText("beforeend",'8');
}
function nine(){
    input.insertAdjacentText("beforeend",'9');
}
function zero(){
    input.insertAdjacentText("beforeend",'0');
}
function doublezero(){
    input.insertAdjacentText("beforeend",'00');
}

function equal(){
    let infix = input.value;
    // let postfix = InfixtoPostfix(infix);
    let ans = evaluate(infix);
    result.innerHTML = "Result: "+ans;

}
function operator(a){
    if(a == "+" || a == "/" || a== "*" || a == "-" || a == "^"){
        return true;
    }
    return false;
}


function dark(){
    const container = document.getElementsByClassName('container')[0];
    const screen = document.getElementById('input');
    const result = document.getElementById('result');
    const btn = document.getElementsByClassName('btn');
    const toggle = document.getElementById('toggle');
    const heading = document.getElementById('heading');
    if(screen.classList.contains("dark4")){
        container.classList.remove('dark1');
        screen.classList.remove('dark4');
        result.classList.remove("dark4");
        heading.classList.remove('whitetext');
        toggle.classList.remove('invert')
        for(let i=0;i<20;i++){
            btn[i].classList.remove('dark3');
        }
    }
    else{
        container.classList.add('dark1');
        heading.classList.add('whitetext');
        screen.classList.add('dark4');
        result.classList.add("dark4");
        toggle.classList.add('invert')
        for(let i=0;i<20;i++){
            btn[i].classList.add('dark3');
        }
    }
    
}

