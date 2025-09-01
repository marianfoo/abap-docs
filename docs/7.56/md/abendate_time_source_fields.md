  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

Date Fields, Time Fields, and Time Stamp Fields as Source Fields

-   [d](javascript:call_link\('abenconversion_type_d.htm'\))
-   [t](javascript:call_link\('abenconversion_type_t.htm'\))
-   [utclong](javascript:call_link\('abenconversion_type_utclong.htm'\))

Hints

-   The conversion rules are designed in such a way that operands of the types d and t behave like character-like operands in character-like operand positions and behave numerically in numeric operand positions.
-   In [substring access](javascript:call_link\('abenoffset_length.htm'\)) to an operand of the type d or t, the substring is handled like an operand of the type n and the corresponding conversion rules apply.
-   Operands of the type utclong can only be converted to the types c and string.

Example

Conversion of a target field with the value 144414 to different target types. The type-compliant formatted output is 53054, 144414, CF3E. The number 53054 corresponds to the number of seconds since midnight for the time 144414.

DATA time TYPE t VALUE '144414'.
cl\_demo\_output=>display(
  |i:       { CONV i( time ) }\\n| &&
  |string:  { CONV string( time ) }\\n| &&
  |xstring: { CONV xstring( time ) }\\n| ).

Continue
[Source Field Type d](javascript:call_link\('abenconversion_type_d.htm'\))
[Source Field Type t](javascript:call_link\('abenconversion_type_t.htm'\))
[Source Field Type utclong](javascript:call_link\('abenconversion_type_utclong.htm'\))