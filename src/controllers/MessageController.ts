import { Response, Request } from 'express';

export default {
    async convert (request: Request, response: Response) {

        const { message } = request.body;
        const m = message;
        
        const messageSplited = m.split(/\s+/);

        var messageConverted = new String;
        messageConverted = '';

        messageSplited.map((letter: String) => {
            
            const letterLength = letter.length;
            const letterNumber = letter.charAt(0);

            const res = findLetter(letterNumber, letterLength);
            
            messageConverted = messageConverted + res;

        })

        function findLetter (letterNumber: String, letterLength: number) {
        
            const array2 = ["a","b","c"];
            const array3 = ["d","e","f"];
            const array4 = ["g","h","i"];
            const array5 = ["j","k","l"];
            const array6 = ["m","n","o"];
            const array7 = ["p","q","r","s"];
            const array8 = ["t","u","v"];
            const array9 = ["w","x","y","z"];
    
            switch (letterNumber) {
                case '2':
                    return array2[letterLength-1];
                case '3':
                    return array3[letterLength-1];;
                case '4':
                    return array4[letterLength-1];
                case '5':
                    return array5[letterLength-1];
                case '6':
                    return array6[letterLength-1];
                case '7':
                    return array7[letterLength-1];
                case '8':
                    return array8[letterLength-1];
                case '9':
                    return array9[letterLength-1];
            }
            return (
                "Número Inválido"
            )
        }
    
        return response.json({
            message: messageConverted
        })

    }
}