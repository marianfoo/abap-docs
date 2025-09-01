  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Updates%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Updates in ABAP Release 7.40, SP02

Modification

Cleanup in Updates

When statements are executed that would produce a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") or would disrupt the update controller, the associated system behavior has been cleaned up as described under [Forbidden Statements in Updates](javascript:call_link\('abendb_commit_during_update.htm'\)). The behavior in the case of local and regular updates has been synchronized and all forbidden statements now produce a runtime error directly, which makes troubleshooting easier.

The following statements now also raise the exception POSTING\_ILLEGAL\_STATEMENT directly during the update, since they disrupt the update controller:

-   LEAVE LIST-PROCESSING
-   LEAVE PROGRAM
-   LEAVE SCREEN
-   LEAVE TO LIST-PROCESSING
-   SET SCREEN

Before ABAP release 7.40, only the statements CALL DIALOG, CALL SCREEN, CALL SELECTION SCREEN, CALL TRANSACTION, LEAVE TO TRANSACTION, SUBMIT, plus COMMIT WORK and ROLLBACK WORK raised an exception directly. The behavior of [messages in updates](javascript:call_link\('abenabap_message_update.htm'\)) was not modified.