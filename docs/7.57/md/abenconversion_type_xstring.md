  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_elementary.htm) →  [Byte-Like Source Fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Source Field Type xstring, ABENCONVERSION_TYPE_XSTRING, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Source Field Type xstring

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_1)
-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_2)
-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_3)
-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the source field has length 0, the target field is assigned the value 0.

p

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the source field has length 0, the target field is assigned the value 0.

decfloat16, decfloat34

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the source field has length 0, the target field is assigned the value 0.

f

Content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the source field has length 0, the target field is assigned the value 0.

Example

The result of the following conversion has the value 123456789. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
FINAL(result) = CONV i( hex ).

Character-Like Target Fields   

Target

Conversion

c

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with blank characters.

n

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

string

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The string resulting from the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
FINAL(result) = CONV string( hex ).

Byte-Like Target Fields   

Target

Conversion

x

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the hexadecimal 0.

xstring

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The byte chain resulting from the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
FINAL(result) =  hex.

Date/Time Fields as Target Fields   

‎Target

Conversion

d

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

t

The content is handled in the same way as a [source field of type x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_x.htm). If the length of the source field is 0, the target field is padded with the character "0".

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the date field resulting from the conversion is 20170111 corresponding to 736341 days since 01/01/0001. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF000B3C55'.
FINAL(result) = CONV d( hex ).