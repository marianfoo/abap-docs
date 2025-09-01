  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

Character-Like Source Fields

-   [c](javascript:call_link\('abenconversion_type_c.htm'\))

-   [n](javascript:call_link\('abenconversion_type_n.htm'\))

-   [string](javascript:call_link\('abenconversion_type_string.htm'\))

Note

When converting character-like data objects to numeric data objects, the [display of numeric values in character-like fields](javascript:call_link\('abennumerical_value.htm'\)) must be respected.

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
[Source Field Type c](javascript:call_link\('abenconversion_type_c.htm'\))
[Source Field Type n](javascript:call_link\('abenconversion_type_n.htm'\))
[Source Field Type string](javascript:call_link\('abenconversion_type_string.htm'\))
[Representation of Numeric Values in Character-Like Fields](javascript:call_link\('abennumerical_value.htm'\))