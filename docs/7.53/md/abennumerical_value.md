---
title: "Representation of Numeric Values in Character-Like Fields"
description: |
  The values of data objects of character-like data types can be assigned to data objects of the numeric types i, int8, (b, s), p, decfloat16, decfloat34, and f if they contain the valid representation of a number. The following character strings are valid numbers: -   Mathematical notation An uninter
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_value.htm"
abapFile: "abennumerical_value.htm"
keywords: ["do", "if", "data", "types", "abennumerical", "value"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) →  [Character-Like Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_source_fields.htm) → 

Representation of Numeric Values in Character-Like Fields

The values of data objects of character-like data types can be assigned to data objects of the numeric types i, int8, (b, s), p, decfloat16, decfloat34, and f if they contain the valid representation of a number. The following character strings are valid numbers:

-   Mathematical notation
    An uninterrupted sequence of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the left. This sign can be separated from the digits by blanks. An arbitrary number of blanks may be in front of and behind the sequence of digits.

-   Commercial notation
    An uninterrupted sequence of digits with a maximum of one period (.) as a decimal separator and an optional sign "+" or "-" on the right. This sign can be separated from the digits by blanks. An arbitrary number of blanks may be in front of and behind the sequence of digits.

-   Scientific notation
    An uninterrupted sequence consisting of a mantissa and an exponent. The mantissa is an uninterrupted sequence of a sign "+" or "-" and a sequence of digits that can have a maximum of one period (.) as a decimal separator. The exponent is an uninterrupted sequence consisting of the character "E" or "e", a "+" or "-" sign and a sequence of digits. The number value is the value of the mantissa multiplied by ten to the power of the value that is after the character "E" or "e". There can be any number of blanks in front of the number. Parts of the notation that are not required, such as the plus/minus sign or the exponent, can be omitted.

To summarize, these notations can be assigned to variables with numeric data types as follows:

-   All three notations can be converted to decimal floating point numbers of the types decfloat16 and decfloat34.

-   Only the scientific notation can be converted to binary floating point numbers of the type f. The first blank after the number closes the number and any other blanks are ignored. The mathematical and commercial notations are only valid if they can be interpreted as scientific notation. Also, commercial notation where the sign on the right is not separated by blanks is valid if the character string starts directly with the string of digits.

-   Only the mathematical and commercial notations can be converted to whole and packed numbers of the types i (b, s), and p.

Also, character strings containing no characters or only blanks can always be converted to the value 0, when being assigned to variables with numeric data types. When being assigned to the type f, a character string that does not contain any of the above notations is interpreted as a number with value 0, if it starts with a blank.

Notes

-   Note that the different notations handle blanks in different ways. For example, if the character string " - 123.456" has the value -123.456 in mathematical notation, it represents the value 0, in accordance with the rules of scientific notation (above). The character "-" followed by a blank is interpreted as the number, and the subsequent characters "123.456" are ignored.

-   When using numbers in character strings that are intended for assignments to a numeric data object, create them so that they are accepted by all possible target types with the same value. To do this, the sign must always be on the left, and there must be no blanks. Under no circumstances can there be blanks between the sign and the digits.