  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

Forbidden Statements in Updates

In [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (that is, when an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") triggered using [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) is being processed), the following applies:

-   There can be no [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").

-   The update controller cannot be modified.

If a database commit or database rollback occurs during an update, it terminates with a runtime error. Any statements that disrupt the update controller can produce undefined behavior.

Any statements that would produce a database commit or database rollback or would disrupt the update controller are, therefore, forbidden and produce a runtime error as soon as they are called and before the runtime error can occur in another place. The following statements are relevant here:

-   The statements

-   [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))

-   [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\))

produce a database commit or database rollback explicitly and hence produce the runtime errors COMMIT\_IN\_POSTING or ROLLBACK\_IN\_POSTING directly during the update.

-   The statements

-   [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\))

-   [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\))

-   [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\))

-   [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\))

-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

-   [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))

-   [LEAVE SCREEN](javascript:call_link\('abapleave_screen.htm'\))

-   [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SET SCREEN](javascript:call_link\('abapset_screen.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\))

produce either an implicit database commit or disrupt the update controller and hence produce the runtime error POSTING\_ILLEGAL\_STATEMENT directly during the update.

-   Executing the [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements COMMIT WORK and ROLLBACK WORK produces the runtime error POSTING\_ILLEGAL\_STATEMENT during the update.

-   Type "A" messages caught using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) in function module calls execute the statement ROLLBACK WORK implicitly and produce the runtime message MESSAGE\_ROLLBACK\_IN\_POSTING in updates.

Notes

-   The runtime errors occur directly in those statements that would produce incorrect behavior during the update, which makes any errors easier to find than if the exception waited until, for example, an implicit database commit to occur.

-   Using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) to send [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") for the message types "I", "W", "E", and "A" produces an implicit database rollback, but no direct runtime error can be triggered here for reasons of downward compatibility. The behavior of [messages in updates](javascript:call_link\('abenabap_message_update.htm'\)) applies instead.