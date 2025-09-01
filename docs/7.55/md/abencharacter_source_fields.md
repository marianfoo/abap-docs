  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm) → 

Character-Like Source Fields

-   [c](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_c.htm)

-   [n](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_n.htm)

-   [string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_string.htm)

The following special formats must be respected in conversions of character-like data objects to numeric data objects:

-   [Representation of Numeric Values in Character-Like Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_value.htm)

-   [Representation of Time Stamps in Character-Like Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abents_value.htm)

Example

Conversion of the text string 053000 to different target types. The type-compliant formatted output is 53000, 0000053000, 053000, 053000.

DATA str TYPE string VALUE \`053000\`.
TYPES n10 TYPE n LENGTH 10.
cl\_demo\_output=>display(
  |i:           { CONV i( str ) }\\n| &&
  |n LENGTH 10: { CONV n10( str ) }\\n| &&
  |xstring:     { CONV xstring( str ) }\\n| &&
  |t:           { CONV t( str ) }\\n| ).

Continue
[Source Field Type c](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_c.htm)
[Source Field Type n](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_n.htm)
[Source Field Type string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_string.htm)
[Representation of Numeric Values in Character-Like Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_value.htm)
[Representation of Time Stamps in Character-Like Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abents_value.htm)