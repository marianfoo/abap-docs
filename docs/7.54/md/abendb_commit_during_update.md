  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw.htm) → 

Forbidden Statements in Updates

In [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry") (that is, when an [update function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") triggered using [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm) is being processed), the following applies:

-   There can be no [database commits](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollbacks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").

-   The update controller cannot be modified.

If a database commit or database rollback occurs during an update, it terminates with a runtime error. Any statements that disrupt the update controller can produce undefined behavior.

Any statements that would produce a database commit or database rollback or would disrupt the update controller are, therefore, forbidden and produce a runtime error as soon as they are called and before the runtime error can occur in another place. The following statements are relevant here:

-   The statements

-   [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm)

-   [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm)

produce a database commit or database rollback explicitly and hence produce the runtime errors COMMIT\_IN\_POSTING or ROLLBACK\_IN\_POSTING directly during the update.

-   The statements

-   [CALL DIALOG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_dialog.htm)

-   [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm)

-   [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm)

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm)

-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_list-processing.htm)

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_program.htm)

-   [LEAVE SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_screen.htm)

-   [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_list-processing.htm)

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_transaction.htm)

-   [SET SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_screen.htm)

-   [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm)

produce either an implicit database commit or disrupt the update controller and hence produce the runtime error POSTING\_ILLEGAL\_STATEMENT directly during the update.

-   Executing the [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") statements COMMIT WORK and ROLLBACK WORK produces the runtime error POSTING\_ILLEGAL\_STATEMENT during the update.

-   Type "A" messages caught using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm) in function module calls execute the statement ROLLBACK WORK implicitly and produce the runtime message MESSAGE\_ROLLBACK\_IN\_POSTING in updates.

Notes

-   The runtime errors occur directly in those statements that would produce incorrect behavior during the update, which makes any errors easier to find than if the exception waited until, for example, an implicit database commit to occur.

-   Using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) to send [messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") for the message types "I", "W", "E", and "A" produces an implicit database rollback, but no direct runtime error can be triggered here for reasons of downward compatibility. The behavior of [messages in updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_update.htm) applies instead.

-   See also [Authorization Checks in Updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthority_during_update.htm).