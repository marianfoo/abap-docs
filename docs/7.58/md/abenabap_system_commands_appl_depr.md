---
title: "Unwanted Calls of Operating System Statements"
description: |
  In addition to calls of function modules in the SXPG framework(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm), operating system statements for the host computer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_depr.htm"
abapFile: "abenabap_system_commands_appl_depr.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "internal-table", "abenabap", "system", "commands", "appl", "depr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm) →  [Operating System Statements of the Host Computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Unwanted%20Calls%20of%20Operating%20System%20Statements%2C%20ABENABAP_SYSTEM_COMMANDS_APPL_DEPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Unwanted Calls of Operating System Statements

In addition to calls of function modules in the [SXPG framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm), operating system statements for the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance can also be executed in ABAP programs as follows:

-   The addition [FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset_os_addition.htm) of the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset.htm) can be used for executing operating system statements using pipes.
-   The internal statement [CALL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall-.htm) can be used to call a special system function (SYSTEM), which can be used to execute operating system statements.

Neither of these options should be used for common execution of operating system statements in ABAP programs.

-   The addition [FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset_os_addition.htm) of [OPEN DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset.htm) should only be used, if at all, for operating system statements required for file handling.
-   Calls of the system function SYSTEM with the internal statement [CALL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall-.htm) should never be made in application programs and can be deactivated using the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system. If called, it then raises an uncatchable exception.

Both statements cause the following problems:

-   There are no central authorization checks.
-   The platform dependency of the operating system statements must be handled in the ABAP program itself.
-   Errors and exceptions cannot be handled specifically.
-   If input from external sources is used, it must be checked thoroughly and filtered to prevent [system command injections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensys_comm_injections_scrty.htm) on any platform.

Therefore, the [SXPG framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm) should be used instead of these two options.

Hint

Before the statements CALL 'SYSTEM' is deactivated using the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system, it must be ensured that it is no longer used in any programs. Any programs that still use CALL 'SYSTEM' must first be switched to using the [SXPG frameworks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm) before the unwanted statement can be deactivated. The options in the SXPG frameworks generally cover all requirements when calling operating system statements.

Example

Call of the operating system statement ping for the central database server of the system on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance using the addition FILTER of the statement OPEN DATASET. The output of the operating system statement is written to the opened file and can be read from there.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
FINAL(command) = |ping -c1 { dbserver }|.
FINAL(fname) = 'result.dat'.
OPEN DATASET fname FOR OUTPUT IN BINARY MODE FILTER command.
CLOSE DATASET fname.
OPEN DATASET fname FOR INPUT IN BINARY MODE.
DATA result TYPE xstring.
READ DATASET fname INTO result.
CLOSE DATASET fname.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( result ) ).

Example

Call of the operating system statement ping for the central database server of the system on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance using the addition SYSTEM. The result of the call is placed in the internal table result. This example can only be executed if the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system allows the call.

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