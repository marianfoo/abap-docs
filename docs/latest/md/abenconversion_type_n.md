  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) →  [Character-Like Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20n%2C%20ABENCONVERSION_TYPE_N%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Field Type n

The conversion rules are designed in such a way that when data objects of type [n](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_character.htm) are assigned to character-like data objects they behave like character-like objects, and when assigned to numeric data objects they behave numerically. Valid data for data objects of type n is in the form of digit-only strings. When assigning valid data to numeric data objects, the numeric value of the string of digits is assigned to the target object. The conversion rules, however, also allow the assignment of numeric text fields that contain invalid data. The latter is not recommended.

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_1)
-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_2)
-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_3)
-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

p

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

decfloat16, decfloat34

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

f

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

Hint

The class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_decfloat_doc.htm) contains the methods READ\_DECFLOAT34 and READ\_DECFLOAT16 for converting character strings into decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the rounding that was performed.

Example

The result of the following conversion has the value 0.

DATA num4 type n LENGTH 4 VALUE IS INITIAL.
FINAL(result) = CONV i( num4 ).

Character-Like Target Fields   

Target

Conversion

c

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

n

The characters in the source field are passed right-aligned to the target field. Trailing blanks are passed. If the target field is longer than the characters passed, the field is padded with 0 characters on the left. If the target field is shorter, the characters are cut off on the left.

string

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

Example

The string resulting from the conversion is 0000001234.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
TYPES num10 TYPE n LENGTH 10.
FINAL(result) = CONV num10( num4 ).

Byte-Like Target Fields   

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm)).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm)).

Example

The byte chain resulting from the conversion is 04D2.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
FINAL(result) = CONV xstring( num4 ).

Date/Time Fields as Target Fields   

Target

Conversion

d

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

t

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the date field resulting from the conversion is the unchanged value 20000101 of the source field.

DATA num8 TYPE n LENGTH 8 VALUE '20000101'.
FINAL(result) = CONV d( num8 ).