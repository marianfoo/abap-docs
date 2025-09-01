# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / ABAP and Operating System Statements

Included pages: 6


### abenabap_system_commands.htm

---
title: "ABAP and Operating System Statements"
description: |
  Operating system statements or system commands execute statements or programs directly on the operating system of the host computer of an AS instance or of a presentation server. Executing operating system statements from ABAP programs should be the exception rather than the rule, however it may bec
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm"
abapFile: "abenabap_system_commands.htm"
keywords: ["do", "if", "data", "abenabap", "system", "commands"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20and%20Operating%20System%20Statements%2C%20ABENABAP_SYSTEM_COMMANDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP and Operating System Statements

Operating system statements or system commands execute statements or programs directly on the operating system of the host computer of an AS instance or of a presentation server. Executing operating system statements from ABAP programs should be the exception rather than the rule, however it may become necessary in system or administration programs to call operating system functions that cannot be accessed by ABAP statements. In certain circumstances, input from external sources may need to be passed to the operating system.

-   [Operating System Statements of the Host Computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm)
-   [Operating System Statements of the Presentation Server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_pres.htm)

Security Hint

Using input from external sources in operating system statements poses the risk of [system command injections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensys_comm_injections_scrty.htm).

Continue
[Operating System Statements of the Host Computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm)
[Operating System Statements of the Presentation Server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_pres.htm)


### abenabap_system_commands_appl.htm

---
title: "Operating System Statements of the Host Computer"
description: |
  There is one recommended framework when executing operating system statements on the host computer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm 'Glossary Entry') of the current AS instance(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abena
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm"
abapFile: "abenabap_system_commands_appl.htm"
keywords: ["do", "if", "try", "method", "data", "abenabap", "system", "commands", "appl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Operating%20System%20Statements%20of%20the%20Host%20Computer%2C%20ABENABAP_SYSTEM_COMMANDS_APPL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Operating System Statements of the Host Computer

There is one recommended framework when executing operating system statements on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry") and two unwanted methods:

-   [SXPG Framework for Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm)
-   [Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_depr.htm)

Continue
[SXPG Framework for Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm)
[Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_depr.htm)


### abenabap_system_commands_appl_sxpg.htm

---
title: "SXPG Framework for Operating System Statements"
description: |
  The only recommended way of executing operating system statements from ABAP on the operating system of the host computer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm 'Glossary Entry') of the current AS instance or another server is to use the SXPG framewo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm"
abapFile: "abenabap_system_commands_appl_sxpg.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abenabap", "system", "commands", "appl", "sxpg"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm) →  [Operating System Statements of the Host Computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SXPG%20Framework%20for%20Operating%20System%20Statements%2C%20ABENABAP_SYSTEM_COMMANDS_APPL_SXPG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

SXPG Framework for Operating System Statements

The only recommended way of executing operating system statements from ABAP on the operating system of the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance or another server is to use the SXPG framework. This framework is based on a list of allowed operating system statements that can be called using function modules in the function pool SXPG.

The list of allowed operating system statements is defined by the system administrator in transaction SM69. Here, the platform-dependent physical operating system statements are assigned to a logical command name used to address them in ABAP. When one of these logical command names is passed to one of the function modules listed below, the operating system statement appropriate for the current platform is executed. Logical command names assigned to an operating system command used by all platforms can be flagged with the operating system ANYOS. Static parameters can be assigned to any operating system statement and further parameters can be specified for when the statement is called. When an operating system statement is called using a logical command name, implicit authorization checks are performed, which can be enhanced by user-defined checks. SAP provides a range of predefined logical command names with the type SAP. Logical command names created by customers have the type KUNDE.

If they have the right authorizations, developers can view the list of operating system statements in transaction SM49 and execute them from here. The following function modules can be called from ABAP programs:

-   SXPG\_CALL\_SYSTEM for execution on the host computer of the current AS instance
-   SXPG\_COMMAND\_EXECUTE for execution on other servers; the result can be waited for, but this is not mandatory
-   SXPG\_COMMAND\_EXECUTE\_LONG, like SXPG\_COMMAND\_EXECUTE but with a longer parameter list

These function modules can also be called remotely.

Hint

For more information, see the documentation [Programming with External Commands](https://help.sap.com/docs/ABAP_PLATFORM_NEW/b07e7195f03f438b8e7ed273099d74f3/4d93907648846e73e10000000a15822b) in SAP Help Portal.

Example

Call of the operating system statement ping for the central database server of the system on the host computer of the current AS instance using the logical command name PING predefined by SAP. The result of the call is passed to the internal table result. The function module SXPG\_CALL\_SYSTEM can raise more specific exceptions than those handled explicitly here.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA parameters TYPE sxpgcolist-parameters.
parameters = |-c1 { dbserver }|.
DATA result TYPE TABLE OF btcxpm WITH EMPTY KEY.
CALL FUNCTION 'SXPG\_CALL\_SYSTEM'
  EXPORTING
    commandname           = 'PING'
    additional\_parameters = parameters
  TABLES
    exec\_protocol         = result
  EXCEPTIONS
    no\_permission         = 1
    command\_not\_found     = 2
    security\_risk         = 3
    OTHERS                = 4.
IF sy-subrc = 0.
  cl\_demo\_output=>display( result ).
ELSE.
  cl\_demo\_output=>display( |Error, return code { sy-subrc }| ).
ENDIF.


### abenabap_system_commands_appl_depr.htm

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


### abenabap_system_commands_appl.htm

---
title: "Operating System Statements of the Host Computer"
description: |
  There is one recommended framework when executing operating system statements on the host computer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm 'Glossary Entry') of the current AS instance(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abena
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl.htm"
abapFile: "abenabap_system_commands_appl.htm"
keywords: ["do", "if", "try", "method", "data", "abenabap", "system", "commands", "appl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Operating%20System%20Statements%20of%20the%20Host%20Computer%2C%20ABENABAP_SYSTEM_COMMANDS_APPL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Operating System Statements of the Host Computer

There is one recommended framework when executing operating system statements on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry") and two unwanted methods:

-   [SXPG Framework for Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm)
-   [Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_depr.htm)

Continue
[SXPG Framework for Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_sxpg.htm)
[Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_appl_depr.htm)


### abenabap_system_commands_pres.htm

---
title: "Operating System Statements of the Presentation Server"
description: |
  The method EXECUTE of the class CL_GUI_FRONTEND_SERVICES(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrontend_services.htm) can be used to call operating system statements of the presentation server. The prerequisite is that the current ABAP program is executed in dialog pro
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_pres.htm"
abapFile: "abenabap_system_commands_pres.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenabap", "system", "commands", "pres"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Operating%20System%20Statements%20of%20the%20Presentation%20Server%2C%20ABENABAP_SYSTEM_COMMANDS_PRES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

Operating System Statements of the Presentation Server

The method EXECUTE of the class [CL\_GUI\_FRONTEND\_SERVICES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrontend_services.htm) can be used to call operating system statements of the presentation server. The prerequisite is that the current ABAP program is executed in [dialog processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_processing_glosry.htm "Glossary Entry") and from SAP GUI.

Hint

The method EXECUTE of the class CL\_GUI\_FRONTEND\_SERVICES replaces the obsolete function module WS\_EXECUTE.

Example

Call of the command line window in MS Windows.

cl\_gui\_frontend\_services=>execute(
   EXPORTING
     application           = 'cmd.exe'
    default\_directory      = 'C:\\'
  EXCEPTIONS
    cntl\_error             = 1
    error\_no\_gui           = 2
    bad\_parameter          = 3
    file\_not\_found         = 4
    path\_not\_found         = 5
    file\_extension\_unknown = 6
    error\_execute\_failed   = 7
    synchronous\_failed     = 8
    not\_supported\_by\_gui   = 9
    OTHERS = 10 ).
IF sy-subrc <> 0.
  ...
ENDIF.
