  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) →  [Character-Like Source Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Representation of Numeric Values in Character-Like Fields, ABENNUMERICAL_VALUE, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Representation of Numeric Values in Character-Like Fields

The values of data objects of character-like data types can be assigned to data objects of the numeric types i, int8, (b, s), p, decfloat16, decfloat34, and f if they contain the valid representation of a number. The following character strings are valid numbers:

-   Mathematical notation
    
    An uninterrupted sequence of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the left, which can be separated from the digits by blanks. An arbitrary number of blanks may be in front of and behind the numeric specification.
    
-   Commercial notation
    
    An uninterrupted sequence of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the right, which can be separated from the digits by blanks. An arbitrary number of blanks may be in front of and behind the numeric specification.
    
-   Scientific notation
    
    An uninterrupted sequence consisting of a mantissa and an exponent. The mantissa is an uninterrupted sequence of a sign "+" or "-" sign and a sequence of digits that can have a maximum of one period (.) as a decimal separator. The exponent is an uninterrupted sequence consisting of the character "E" or "e", a "+" or "-" sign and a sequence of digits. The numeric value is the value of the mantissa multiplied by ten to the power of the value given after the character "E" or "e". There can be any number of blanks in front of the number. Parts of the notation that are not required, such as the plus/minus sign or the specification of the exponent, can be omitted.
    

In summary, these notations can be assigned to variables with numeric data types as follows:

-   All three notations can be converted to decimal floating point numbers of the types decfloat16 and decfloat34.
-   Only the scientific notation can be converted to binary floating point numbers of the type f. The first blank after the number closes it, and any subsequent characters are ignored. The mathematical and commercial notations are only valid if they can be interpreted as scientific notation. In addition, commercial notation where the plus or minus sign on the right is not separated by blanks is valid if the character string starts directly with the string of digits.
-   Only the mathematical and commercial notations can be converted to whole and packed numbers of the types i (b, s), and p.

In addition, character strings that contain no characters or only blanks can always be converted to the value 0, when they are assigned to variables with numeric data types. When assigning to the type f, a character string that does not contain any of the above notations is interpreted as a number with value 0, if it starts with a blank.

Hints

-   Note that the different notations handle blanks in different ways. For example, if the character string " - 123.456" has the value -123.456 in mathematical notation, it represents the value 0 in scientific notation according to the above rule. The character "-" followed by a blank is interpreted as the number, and the subsequent characters "123.456" are ignored.
-   When using numeric specifications in character strings that are intended for assignments to a numeric data object, they should be created in such a way that they are accepted by all possible target types with the same value. To do this, the sign must always be on the left, and there should not be any blanks. Under no circumstances can there be blanks between the sign and the digits.

Example

Valid representation of decimal floating point numbers in character-like source fields. All assignments shown here are possible.

DATA df TYPE decfloat34.
df = EXACT #( \`1                      \` ).
df = EXACT #( \`1000                   \` ).
df = EXACT #( \`-1                     \` ).
df = EXACT #( \`-1000                  \` ).
df = EXACT #( \`1-                     \` ).
df = EXACT #( \`1000-                  \` ).
df = EXACT #( \`0.01                   \` ).
df = EXACT #( \`.01                    \` ).
df = EXACT #( \`-.01                   \` ).
df = EXACT #( \`0.00001-               \` ).
df = EXACT #( \`1E3                    \` ).
df = EXACT #( \`-1E-3                  \` ).
df = EXACT #( \`.1E-3                  \` ).