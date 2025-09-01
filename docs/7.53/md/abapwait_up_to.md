  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Program Interruption](javascript:call_link\('abenwait.htm'\)) → 

WAIT UP TO

[Quick Reference](javascript:call_link\('abapwait_shortref.htm'\))

Syntax

WAIT UP TO sec SECONDS.

Effect

This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a [numerical expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type f to which positive numbers (including 0) can be passed. The unit of the number in sec is seconds and the time resolution is one millisecond. After the specified time has passed, the program continues with the statement following WAIT. When used, this statement always changes the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry").

Return Codes

This statement always sets sy-subrc to 0.

Notes

-   Each time this variant of the statement WAIT is used, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered (except in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry")). For this reason, WAIT must not be used between [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements that open or close a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").
    
-   The variants [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_until.htm'\)), [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)), and [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) of this statement are useful only when used in combination with callback routines in [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"), [AMC](javascript:call_link\('abenamc_glosry.htm'\) "Glossary Entry"), or [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry"). The variant shown here does not wait for callback routines.
    

Example

The output of the following example should correspond to approximately one million microseconds.

GET RUN TIME FIELD DATA(t1).
WAIT UP TO 1 SECONDS.
GET RUN TIME FIELD DATA(t2).
cl\_demo\_output=>display( |{ t2 - t1  STYLE = scientific }| ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Negative time specified for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT