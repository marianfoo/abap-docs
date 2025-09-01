  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

Date fields, time fields, and time stamp fields as source fields

-   [d](javascript:call_link\('abenconversion_type_d.htm'\))

-   [t](javascript:call_link\('abenconversion_type_t.htm'\))

-   [utclong](javascript:call_link\('abenconversion_type_utclong.htm'\))

Notes

-   The conversion rules are designed so that operands of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions.

-   In the case of a [substring access](javascript:call_link\('abenoffset_length.htm'\)) to an operand of the type d or t, the substring is handled like an operand of the type n and the relevant conversion rules apply.

-   Operands of the type utclong can only be converted to the types c and string.

Example

Converting a target field with the value 144414 to different target types. The type-friendly formatted output is 53054, 144414, CF3E. The number 53054 is the number of seconds since midnight for the time 144414.

DATA time TYPE t VALUE '144414'.
cl\_demo\_output=>display(
  |i:       { CONV i( time ) }\\n| &&
  |string:  { CONV string( time ) }\\n| &&
  |xstring: { CONV xstring( time ) }\\n| ).

Continue
[Source Field Type d](javascript:call_link\('abenconversion_type_d.htm'\))
[Source Field Type t](javascript:call_link\('abenconversion_type_t.htm'\))
[Source Field Type utclong](javascript:call_link\('abenconversion_type_utclong.htm'\))