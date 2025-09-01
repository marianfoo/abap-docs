  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp02.htm) → 

Updates in Release 7.40, SP02

[1\. Cleanup in updates](#!ABAP_MODIFICATION_1@1@)

Modification 1

Cleanup in Updates

When statements are executed that would produce a [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") or would disrupt the update controller, the associated system behavior has been cleaned up as described under [Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_commit_during_update.htm). The behavior in the case of local and regular updates has been synchronized and all forbidden statements now produce a runtime error directly, which makes troubleshooting easier.

The following statements now also raise the exception POSTING\_ILLEGAL\_STATEMENT directly during the update, since they disrupt the update controller:

-   LEAVE LIST-PROCESSING

-   LEAVE PROGRAM

-   LEAVE SCREEN

-   LEAVE TO LIST-PROCESSING

-   SET SCREEN

Before Release 7.40, only the statements CALL DIALOG, CALL SCREEN, CALL SELECTION SCREEN, CALL TRANSACTION, LEAVE TO TRANSACTION, SUBMIT, plus COMMIT WORK and ROLLBACK WORK raised an exception directly. The behavior of [messages in updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_update.htm) was not modified.