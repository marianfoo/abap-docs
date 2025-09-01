  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm) → 

Byte-Like Source Fields

-   [x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_x.htm)

-   [xstring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_xstring.htm)

Example

Conversion of the byte field from hexadecimal content FFFF to different target types. The type-compliant formatted output is 65535, FFFF, FFFF, 01800605. The date of type d is 65535 days since 01.01.0001.

DATA hex TYPE x LENGTH 2 VALUE \`FFFF\`.
cl\_demo\_output=>display(
  |i:       { CONV i( hex ) }\\n| &&
  |string:  { CONV string( hex ) }\\n| &&
  |xstring: { CONV xstring( hex ) }\\n| &&
  |d:       { CONV d( hex ) }\\n| ).

Continue
[Source Field Type x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_x.htm)
[Source Field Type xstring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_xstring.htm)