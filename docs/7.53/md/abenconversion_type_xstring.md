  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) →  [Byte-Like Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_source_fields.htm) → 

Source Field Type xstring

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_1)

-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_2)

-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_3)

-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the source field has a length of 0, the target field is assigned the value 0.

p

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the source field has a length of 0, the target field is assigned the value 0.

decfloat16, decfloat34

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the source field has a length of 0, the target field is assigned the value 0.

f

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the source field has a length of 0, the target field is assigned the value 0.

Example

The result of the following conversion has the value 123456789. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) = CONV i( hex ).

Character-Like Target Fields

Target

Conversion

c

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with blanks.

n

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

string

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The string produced by the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) = CONV string( hex ).

Byte-Like Target Fields

Target

Conversion

x

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with hexadecimal 0.

xstring

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The byte chain produced by the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) =  hex.

Date/Time Fields as Target Fields

Target

Conversion

d

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

t

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

Example

The value of the date field produced by the conversion is 20170111, that is, 736341 days since 01.01.0001. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF000B3C55'.
DATA(result) = CONV d( hex ).