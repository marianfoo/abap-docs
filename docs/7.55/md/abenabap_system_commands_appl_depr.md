  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) →  [Operating System Statements of the Host Computer](javascript:call_link\('abenabap_system_commands_appl.htm'\)) → 

Unwanted Calls of Operating System Statements

Alongside calls of function modules in the [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)), operating system statements for the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance can be executed in ABAP programs as follows:

-   The addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) of the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) used for executing operating system statements using pipes.

-   The internal statement [CALL](javascript:call_link\('abapcall-.htm'\)) used to call a special system function (SYSTEM), which can be used to execute operating system statements.

Neither of these options should be used for common execution of operating system statements in ABAP programs.

-   The addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) of [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) should only be used (if at all) for operating system statements required for data handling.

-   Calls of the system function SYSTEM with the internal statement [CALL](javascript:call_link\('abapcall-.htm'\)) should never be made and can be deactivated using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/call\_system. If called, it then raises an uncatchable exception.

Both statements cause the following problems:

-   There are no central authorization checks.

-   The platform dependency of the operating system statements must be handled in the ABAP program itself.

-   Errors and exceptions cannot be handled specifically.

-   If input from external sources is used, it must be checked thoroughly and filtered to prevent [system command injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\)) on any platform.

If possible, the [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)) should be used instead of these two options.

Hint

Before the statements CALL 'SYSTEM' is deactivated using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/call\_system, it must be ensured that it is no longer used in any programs. Any programs that still use CALL 'SYSTEM' must first be switched to use of the [SXPG frameworks](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)) before the unwanted statement can be deactivated. The options in the SXPG frameworks generally cover all requirements when calling operating system statements.

Example

Calls the operating system statement ping for the central database server of the system on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance using the addition FILTER of the statement OPEN DATASET. The output of the operating system statement is written to the opened file and can be read from there.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA(command) = |ping -c1 { dbserver }|.
DATA(fname) = 'result.dat'.
OPEN DATASET fname FOR OUTPUT IN BINARY MODE FILTER command.
CLOSE DATASET fname.
OPEN DATASET fname FOR INPUT IN BINARY MODE.
DATA result TYPE xstring.
READ DATASET fname INTO result.
CLOSE DATASET fname.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( result ) ).

Example

Calls the operating system statement ping for the central database server of the system on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance using the addition SYSTEM. The result of the call is passed to the internal table result. This example can only be executed if the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/call\_system allows the call.

TYPES char255 TYPE c LENGTH 255.
DATA dbserver TYPE char255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA command TYPE char255.
command = |ping -c1 { dbserver }|.
DATA result  TYPE TABLE OF char255 WITH EMPTY KEY.
CALL 'SYSTEM' ID 'COMMAND' FIELD command
              ID 'TAB'     FIELD result.
cl\_demo\_output=>display( result ).