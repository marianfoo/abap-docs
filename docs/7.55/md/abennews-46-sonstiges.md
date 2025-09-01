  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Further Changes in Release 4.6A

[1\. Loop in extracts](#!ABAP_MODIFICATION_1@1@)
[2\. Time zone handling in RFC calls](#!ABAP_MODIFICATION_2@2@)
[3\. Bit operations with differing operand lengths](#!ABAP_MODIFICATION_3@3@)
[4\. Multiple-field ASSIGN on method parameters](#!ABAP_MODIFICATION_4@4@)
[5\. Obsolete reads on database tables](#!ABAP_MODIFICATION_5@5@)
[6\. Error handling for file commands](#!ABAP_MODIFICATION_6@6@)

Modification 1

Loop in [Extracts](javascript:call_link\('abenextract_glosry.htm'\) "Glossary Entry")

As with internal tables, SY-SUBRC is now set to 4 in an extract if, in a [LOOP ... ENDLOOP](javascript:call_link\('abaploop-.htm'\)), the loop pass is not executed.

Modification 2

Time Zone Handling in RFC Calls

RFC calls in AS ABAP where the default time zone differs from the personal time zone of the user are now executed using the caller's personal time zone.

Modification 3

Bit Operations with Differing Operand Lengths

If operands with differing lengths are joined using statements such as [COMPUTE x = bitexp.](javascript:call_link\('abapcompute_bit.htm'\)), all operands are standardized to the length of the longest operand involved. The shorter operands are padded with trailing HEX 0 characters. Until now, the length of the target field was respected, but now only the operands of the right side are considered in the calculation.

Modification 4

Multiple-Field ASSIGN on Method Parameters

[ASSIGN f TO <fs>](javascript:call_link\('abapassign.htm'\)) statements on method parameters passed by reference that exceed the length of the parameter are now forbidden. This used to be allowed as long as the statement did not exceed the segment length.

Modification 5

Obsolete Read Access to Database Tables

When database tables are accessed using the statements [READ TABLE dbtab](javascript:call_link\('abapread_table_dbtab.htm'\)) and [LOOP AT dbtab](javascript:call_link\('abaploop_at_dbtab.htm'\)), a runtime error occurs if the key of the database table contains components that do not have a character-like type. Both statements are obsolete anyway, and can be replaced using appropriate [SELECT](javascript:call_link\('abapselect.htm'\)) statements.

Modification 6

Error Handling for File Commands

All file commands now include error handling, which means that any errors detected raise a catchable exception. Previously, only some statements set a return code in the field SY-SUBRC.