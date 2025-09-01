# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / ABAP and Operating System Statements

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_system_commands.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands.htm)
- [abenabap_system_commands_appl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl.htm)
- [abenabap_system_commands_appl_sxpg.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_sxpg.htm)
- [abenabap_system_commands_appl_depr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_depr.htm)
- [abenabap_system_commands_pres.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_pres.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.734Z

---

### abenabap_system_commands.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ABAP and Operating System Statements

Operating system statements or system commands execute statements or programs directly on the operating system of the host computer of an AS instance or of a presentation server. Executing operating system statements from ABAP programs should be the exception not the rule, however it may become necessary in system or administration programs to call operating system functions that cannot be accessed by ABAP statements. In certain circumstances, input from external sources may need to be passed to the operating system.

-   [Operating System Statements of the Host Computer](javascript:call_link\('abenabap_system_commands_appl.htm'\))

-   [Operating System Statements of the Presentation Server](javascript:call_link\('abenabap_system_commands_pres.htm'\))

Security Hint

Using input from external sources in operating system statements incurs the risk of [system command injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\)).

Continue
[Operating System Statements of the Host Computer](javascript:call_link\('abenabap_system_commands_appl.htm'\))
[Operating System Statements of the Presentation Server](javascript:call_link\('abenabap_system_commands_pres.htm'\))



**📖 Source**: [abenabap_system_commands.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands.htm)

### abenabap_system_commands_appl.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands_appl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) → 

Operating System Statements of the Host Computer

There is one recommended framework when executing operating system statements on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") and two unwanted methods:

-   [SXPG Framework for Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\))

-   [Unwanted Calls of Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_depr.htm'\))

Continue
[SXPG Framework for Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\))
[Unwanted Calls of Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_depr.htm'\))



**📖 Source**: [abenabap_system_commands_appl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl.htm)

### abenabap_system_commands_appl_sxpg.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands_appl_sxpg.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_sxpg.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) →  [Operating System Statements of the Host Computer](javascript:call_link\('abenabap_system_commands_appl.htm'\)) → 

SXPG Framework for Operating System Statements

The only recommended method for executing operating system statements from ABAP on the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance or another server is to use the SXPG framework. This framework is based on a list of allowed operating system statements that can be called using function modules in the function pool SXPG.

The list of allowed operating system statements is defined by the system administrator in transaction SM69. Here, the platform-dependent physical operating system statements are assigned to a logical command name used to address them in ABAP. When one of these logical command names is passed to one of the function modules listed below, the operating system statement appropriate for the platform in question is executed. Logical command names assigned to an operating system command used by all platforms can be flagged with the operating system ANYOS. Static parameters can be assigned to any operating system statement and further parameters can be specified for when the statement is called. When an operating system statement is called using a logical command name, implicit authorization checks are performed, accompanied by extra self-defined checks. SAP provides a range of predefined logical command names with the type SAP. Logical command names created by customers have the type KUNDE.

If they have the right authorizations, developers can view the list of operating system statements in transaction SM49 and execute them from here. The following function modules can be called from ABAP programs:

-   SXPG\_CALL\_SYSTEM for execution on the host computer of the current AS instance

-   SXPG\_COMMAND\_EXECUTE for execution on other servers; the result can caught, but this is not mandatory

-   SXPG\_COMMAND\_EXECUTE\_LONG, like SXPG\_COMMAND\_EXECUTE but with a longer list of parameters

These function modules can also be called remotely.

Hint

For more information, see the Documentation Programming with External Commands in SAP Help Portal.

Example

Calls the operating system statement ping for the central database server of the system on the host computer of the current AS instance using the logical command name PING defined by SAP. The result of the call is passed to the internal table result. The function module SXPG\_CALL\_SYSTEM can raise more specific exceptions than those handled explicitly here.

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



**📖 Source**: [abenabap_system_commands_appl_sxpg.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_sxpg.htm)

### abenabap_system_commands_appl_depr.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands_appl_depr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_depr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenabap_system_commands_appl_depr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl_depr.htm)

### abenabap_system_commands_appl.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands_appl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) → 

Operating System Statements of the Host Computer

There is one recommended framework when executing operating system statements on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") and two unwanted methods:

-   [SXPG Framework for Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\))

-   [Unwanted Calls of Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_depr.htm'\))

Continue
[SXPG Framework for Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\))
[Unwanted Calls of Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_depr.htm'\))



**📖 Source**: [abenabap_system_commands_appl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_appl.htm)

### abenabap_system_commands_pres.htm

> **📖 Official SAP Documentation**: [abenabap_system_commands_pres.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_pres.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap_system_commands_pres.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_system_commands_pres.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) → 

Operating System Statements of the Presentation Server

The method EXECUTE of the class [CL\_GUI\_FRONTEND\_SERVICES](javascript:call_link\('abenfrontend_services.htm'\)) can be used to call operating system statements of the presentation server. To make this possible, however, the current ABAP program must be executed in [dialog](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry") and from SAP GUI.

Hint

The method EXECUTE of the class CL\_GUI\_FRONTEND\_SERVICES replaces the obsolete function module WS\_EXECUTE.

Example

Calls the command line window in MS Windows.

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
