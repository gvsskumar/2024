import {toUpperCase,getStringInfo,StringUtils} from "../app/Utils"
describe("Utils test suite",()=>{
    test("sholud return uppercase",()=>{
        const sut = toUpperCase;
        const expected = 'ABC'
        
        const actual = sut('abc')
        
        expect(actual).toBe(expected)
    })
})
describe("getStringInfo for My-String should be validated",()=>{
    const actual = getStringInfo('My-String');

    test("should be validate stringInfo length",()=>{
        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);
    })

    test("should be validate stringInfo lowerCase",()=>{
        expect(actual.lowerCase).toBe('my-string');
    })

    test("should be validate stringInfo upperCase",()=>{
        expect(actual.upperCase).toBe('MY-STRING');
    })

    test("should be validate stringInfo Character",()=>{
        expect(actual.characters).toContain<string>('M');
        expect(actual.characters).toEqual(['M','y','-','S','t','r','i','n','g'])
    })  
    
    test("should be validate stringInfo extraInfo",()=>{
        expect(actual.extraInfo).toEqual({})        
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
    }) 

})
describe("Paramertrised Array of each element test upperCase",()=>{
    it.each([
        {input:'abc',output:"ABC"},
        {input:'kumar',output:"KUMAR"},
        {input:'gvk',output:"GVK"}
    ])('$input toUpperCase should be $output',({input,output})=>{
        const actual = toUpperCase(input);

        expect(actual).toBe(output);
    })
})
describe("StringUtils tests",()=>{
    let sut:StringUtils;
    beforeEach(()=>{
        sut = new StringUtils();
    })

    it("Should return correct upperCase",()=>{
        const actual = sut.toUpperCase('abc');
        expect(actual).toBe('ABC');
    })

    it("Shold throw error on invalid argument",()=>{
        function expectError(){
            const actual = sut.toUpperCase('')
        }
        expect(expectError).toThrow();
        expect(expectError).toThrowError('Invalid argument!');
    })

    it("Shold throw error on invalid argument -Arrowfunction",()=>{
        expect(()=>{
            sut.toUpperCase('')
        }).toThrowError('Invalid argument!')
    })

    it("Shold throw error on invalid argument -try and catch",(done)=>{
        try {
            sut.toUpperCase('')
            done('GetStringInfo should throw error for invalid arg!')
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message','Invalid argument!');
            done();
        }
    })
})