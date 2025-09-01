  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Character-Like Source Fields, ABENCHARACTER_SOURCE_FIELDS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Character-Like Source Fields

-   [c](javascript:call_link\('abenconversion_type_c.htm'\))
-   [n](javascript:call_link\('abenconversion_type_n.htm'\))
-   [string](javascript:call_link\('abenconversion_type_string.htm'\))

The following special formats must be respected in conversions of character-like data objects to numeric data objects:

-   [Representation of Numeric Values in Character-Like Fields](javascript:call_link\('abennumerical_value.htm'\))
-   [Representation of Time Stamps in Character-Like Fields](javascript:call_link\('abents_value.htm'\))

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
[Source Field Type c](javascript:call_link\('abenconversion_type_c.htm'\))
[Source Field Type n](javascript:call_link\('abenconversion_type_n.htm'\))
[Source Field Type string](javascript:call_link\('abenconversion_type_string.htm'\))
[Representation of Numeric Values in Character-Like Fields](javascript:call_link\('abennumerical_value.htm'\))
[Representation of Time Stamps in Character-Like Fields](javascript:call_link\('abents_value.htm'\))