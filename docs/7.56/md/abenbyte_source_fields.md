  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

Byte-Like Source Fields

-   [x](javascript:call_link\('abenconversion_type_x.htm'\))
-   [xstring](javascript:call_link\('abenconversion_type_xstring.htm'\))

Example

Conversion of the byte field from hexadecimal content FFFF to different target types. The type-compliant formatted output is 65535, FFFF, FFFF, 01800605. The date of type d is 65535 days since 01.01.0001.

DATA hex TYPE x LENGTH 2 VALUE \`FFFF\`.
cl\_demo\_output=>display(
  |i:       { CONV i( hex ) }\\n| &&
  |string:  { CONV string( hex ) }\\n| &&
  |xstring: { CONV xstring( hex ) }\\n| &&
  |d:       { CONV d( hex ) }\\n| ).

Continue
[Source Field Type x](javascript:call_link\('abenconversion_type_x.htm'\))
[Source Field Type xstring](javascript:call_link\('abenconversion_type_xstring.htm'\))