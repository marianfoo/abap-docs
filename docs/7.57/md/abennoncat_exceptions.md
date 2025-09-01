  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Errors, ABENNONCAT_EXCEPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

Runtime Errors

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:
    -   A catchable exception is not handled.
    -   A uncatchable exception is raised.
-   Program-driven raise:
    -   The statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_shortdump.htm) or the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) is used.
    -   An [assertion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassertion_glosry.htm "Glossary Entry") fails.
    -   An [exit message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_message_glosry.htm "Glossary Entry") or [message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Following a program termination caused by a runtime error, the system generates a [short dump](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshort_dump_glosry.htm "Glossary Entry") which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry") (transaction ST22). The output of the short dump can be controlled in the [profile parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Hint

Program-driven termination of a program should be implemented in situations where meaningful program execution is no longer possible, using [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm) from now on and not using [exit messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_message_glosry.htm "Glossary Entry").

Example

Raising of the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_shortdump.htm)