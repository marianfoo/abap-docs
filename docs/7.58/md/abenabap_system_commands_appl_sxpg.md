  

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