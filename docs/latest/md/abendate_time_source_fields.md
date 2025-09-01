  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Date%20Fields%2C%20Time%20Fields%2C%20and%20Time%20Stamp%20Fields%20as%20Source%20Fields%2C%20ABENDATE_TIME_SOURCE_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Date Fields, Time Fields, and Time Stamp Fields as Source Fields

-   [d](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm)
-   [t](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_t.htm)
-   [utclong](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_utclong.htm)

Hints

-   The conversion rules are designed in such a way that operands of the types d and t behave like character-like operands in character-like operand positions and behave numerically in numeric operand positions.
-   In [substring access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) to an operand of the type d or t, the substring is handled like an operand of the type n and the corresponding conversion rules apply.
-   Operands of the type utclong can only be converted to the types c and string.

Example

Conversion of a target field with the value 144414 to different target types. The type-compliant formatted output is 53054, 144414, CF3E. The number 53054 corresponds to the number of seconds since midnight for the time 144414.

DATA time TYPE t VALUE '144414'.
cl\_demo\_output=>display(
  |i:       { CONV i( time ) }\\n| &&
  |string:  { CONV string( time ) }\\n| &&
  |xstring: { CONV xstring( time ) }\\n| ).

Continue
[Source Field Type d](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm)
[Source Field Type t](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_t.htm)
[Source Field Type utclong](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_utclong.htm)