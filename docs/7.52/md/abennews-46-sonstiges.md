  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Further Changes in Release 4.6A

[1\. Loop in extracts](#!ABAP_MODIFICATION_1@1@)

[2\. Time zone handling with Remote Function Calls](#!ABAP_MODIFICATION_2@2@)

[3\. Bit operations with differing operand lengths](#!ABAP_MODIFICATION_3@3@)

[4\. Multiple-field ASSIGN with method parameters](#!ABAP_MODIFICATION_4@4@)

[5\. Obsolete read access to database tables](#!ABAP_MODIFICATION_5@5@)

[6\. Error handling for file commands](#!ABAP_MODIFICATION_6@6@)

Modification 1

Loop in [Extracts](javascript:call_link\('abenextract_glosry.htm'\) "Glossary Entry")

As with internal tables, SY-SUBRC is now set to 4 in an extract if the loop pass is not executed in a [LOOP ... ENDLOOP](javascript:call_link\('abaploop-.htm'\)) structure.

Modification 2

Time Zone Handling With Remote Function Calls

Remote Function Calls in AS ABAP, of which the default time zone differs from the personal time zone of the user are now executed using the caller's personal time zone.

Modification 3

Bit Operations with Differing Operand Lengths

If you link operands with differing lengths using statements such as [COMPUTE x = bitexp.](javascript:call_link\('abapcompute_bit.htm'\)), all operands are extended to the length of the longest operand involved. Shorter operands are filled with trailing HEX 0 characters. Until now, the length of the target field was also considered. Now, only the operations from the right-hand side of the calculation.

Modification 4

Multiple-Field ASSIGN With Method Parameters

An [ASSIGN f TO <fs>](javascript:call_link\('abapassign.htm'\)) statement on a method parameter passed by reference that exceeds the length of the parameter is now forbidden. It used to be allowed as long as the statement did not exceed the segment length.

Modification 5

Obsolete Read Access to Database Tables

When you access database tables using the statements [READ TABLE dbtab](javascript:call_link\('abapread_table_dbtab.htm'\)) and [LOOP AT dbtab](javascript:call_link\('abaploop_at_dbtab.htm'\)), a runtime error occurs if the key of the database table contains components that do not have a character type. Both statements are obsolete anyway, and can be replaced using appropriate [SELECT](javascript:call_link\('abapselect.htm'\)) statements.

Modification 6

Error handling for file commands

All file commands now include error handling, which means that errors that are recognized cause an exception that can be handled. Previously, a return value was only set in the field SY-SUBRC by some statements.