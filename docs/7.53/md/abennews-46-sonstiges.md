  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-46a.htm) → 

Further Changes in Release 4.6A

[1\. Loop in extracts](#!ABAP_MODIFICATION_1@1@)

[2\. Time zone handling in RFC calls](#!ABAP_MODIFICATION_2@2@)

[3\. Bit operations with differing operand lengths](#!ABAP_MODIFICATION_3@3@)

[4\. Multiple-field ASSIGN on method parameters](#!ABAP_MODIFICATION_4@4@)

[5\. Obsolete reads on database tables](#!ABAP_MODIFICATION_5@5@)

[6\. Error handling for file commands](#!ABAP_MODIFICATION_6@6@)

Modification 1

Loop in [Extracts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextract_glosry.htm "Glossary Entry")

As with internal tables, SY-SUBRC is now set to 4 in an extract if, in a [LOOP ... ENDLOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop-.htm), the loop pass is not executed.

Modification 2

Time Zone Handling in RFC Calls

RFC calls in AS ABAP where the default time zone differs from the personal time zone of the user are now executed using the caller's personal time zone.

Modification 3

Bit Operations with Differing Operand Lengths

If operands with differing lengths are joined using statements such as [COMPUTE x = bitexp.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_bit.htm), all operands are standardized to the length of the longest operand involved. The shorter operands are padded with trailing HEX 0 characters. Until now, the length of the target field was respected, but now only the operands of the right side are considered in the calculation.

Modification 4

Multiple-Field ASSIGN on Method Parameters

[ASSIGN f TO <fs>](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) statements on method parameters passed by reference that exceed the length of the parameter are now forbidden. This used to be allowed as long as the statement did not exceed the segment length.

Modification 5

Obsolete Read Access to Database Tables

When database tables are accessed using the statements [READ TABLE dbtab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_dbtab.htm) and [LOOP AT dbtab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_dbtab.htm), a runtime error occurs if the key of the database table contains components that do not have a character-like type. Both statements are obsolete anyway, and can be replaced using appropriate [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statements.

Modification 6

Error Handling for File Commands

All file commands now include error handling, which means that any errors detected raise a handleable exception. Previously, only some statements set a return code in the field SY-SUBRC.