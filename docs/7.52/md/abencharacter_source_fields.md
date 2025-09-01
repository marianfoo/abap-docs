  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) → 

Character-Like Source Fields

-   [c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_c.htm)

-   [n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_n.htm)

-   [string](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_string.htm)

Note

When converting character-like data objects to numeric data objects, the [display of numeric values in character-like fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_value.htm) must be respected.

Example

Conversion of the text string 053000 to different target types. The type-friendly formatted output is 53000, 0000053000, 053000, 053000.

DATA str TYPE string VALUE \`053000\`.
TYPES n10 TYPE n LENGTH 10.
cl\_demo\_output=>display(
  |i:           { CONV i( str ) }\\n| &&
  |n LENGTH 10: { CONV n10( str ) }\\n| &&
  |xstring:     { CONV xstring( str ) }\\n| &&
  |t:           { CONV t( str ) }\\n| ).

Continue
[Source Field Type c](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_c.htm)
[Source Field Type n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_n.htm)
[Source Field Type string](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_string.htm)
[Representation of Numeric Values in Character-Like Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_value.htm)