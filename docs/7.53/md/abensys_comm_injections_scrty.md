  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) → 

System Command Injections

A [system command injection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyst_comm_injection_glosry.htm "Glossary Entry") is a attack method that can result from insufficiently secure input from outside. A system command injection forwards malicious [operating system statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_system_commands.htm), which enter a program from an external source, to the operating system. In ABAP, this can occur when the following programming techniques are used:

-   In the application layer

-   Input forwarded from an external source to the parameters of the function modules used to call operating system statements using the [SXPG framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_system_commands_appl_sxpg.htm)

-   When the addition [FILTER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset_os_addition.htm) of the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset.htm) is used and some or all of the specified operating system statement originates from outside the program.

-   Using the internal statement [CALL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall-.htm) for the special system function SYSTEM if part of the specified operating system statement or some or all of its parameters come from outside the program.

-   In the presentation layer

-   Input forwarded from an external source to the parameters of the method, the class, or the function module .

The [SXPG framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_system_commands_appl_sxpg.htm) is the only recommended method for executing operating system statements from the [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS Instance in ABAP. Here, only predefined logical command names can be passed to function modules in the function group SXPG, so enabling a certain amount of independence from the operating system in question. These predefined logical command names comprise a whitelist, preventing both unwanted operating system statements from being executed and also direct system command injections. When the statement is called, authorization checks and other checks take place. If further parameters can be passed to the function modules, they can be checked for unwanted code relatively easily.

The two other ways of executing operating system statements from the [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS Instance are not at all secure (even with no external input) and should be avoided in ABAP programs. Calls of the SYSTEM function using internal statements should be especially avoided and can and should be deactivated using the [profile parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system. External statements or parts of external statements should never be passed to the operating system without being checked first. Checking and filtering user input when using FILTER or CALL 'SYSTEM' is, however, particularly difficult, since all possible operating systems and code pages must be covered.

In principle, all input from outside must be checked if passed to the parameters of SXPG framework function modules and to parameters of the method or function module used to execute operating system statements on the presentation server. This prevents unwanted effects from operating system statements.

Example

In the following program section, the operating system statement ping of the [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS Instance is executed for a database server using the unwanted system function SYSTEM. If this function has been deactivated (using the profile parameter rdisp/call\_system), a runtime error occurs. The number of "pings" and the database server can be set externally. The program can be manipulated by two attacks:

-   The number of "pings" is unlimited, which means that "Denial of Service" attack can take place.

-   The input field DBSERVER for the database server, whose default is the current database server, is at risk from system command injections. If, for example, the string ; ls -l /etc is appended to the name of the database server in a Unix operating system, the operating system statement ls is executed after the "pings" and the content of the directory /etc is produced.

TYPES char255 TYPE c LENGTH 255.
DATA dbserver TYPE char255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA pings TYPE i VALUE 1.
cl\_demo\_input=>add\_field( CHANGING field = pings ).
cl\_demo\_input=>add\_field( CHANGING field = dbserver ).
cl\_demo\_input=>request( ).
IF dbserver IS INITIAL.
  cl\_demo\_output=>display( 'DBSERVER must not be initial ...' ).
  RETURN.
ENDIF.
DATA command TYPE char255.
command = |ping -c{ COND i( WHEN pings <= 1  THEN 1
                            ELSE pings )
                } { dbserver }|.
DATA result  TYPE TABLE OF char255 WITH EMPTY KEY.
CALL 'SYSTEM' ID 'COMMAND' FIELD command
              ID 'TAB'     FIELD result.
cl\_demo\_output=>display( result ).

Example

In the following program section, the unwanted use of the system function SYSTEM is replaced by calling the function module SXPG\_CALL\_SYSTEM for the logical command name PING predefined by SAP. The function module call only shows some of the possible exceptions.

-   "Denial of Service" attacks are prevented by limiting the number of "pings" to a maximum of 10.

-   The system command injections shown above are not possible, since the [SXPG framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_system_commands_appl_sxpg.htm) input is detected as invalid parameter passing to ping.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA pings TYPE i VALUE 1.
cl\_demo\_input=>add\_field( CHANGING field = pings ).
cl\_demo\_input=>add\_field( CHANGING field = dbserver ).
cl\_demo\_input=>request( ).
DATA parameters TYPE sxpgcolist-parameters.
parameters = |-c{ COND i( WHEN pings <= 1  THEN 1
                          WHEN pings >= 10 THEN 10
                          ELSE pings )
              } { dbserver }|.
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

The example above can itself be improved by using a self-defined logical command name instead of the predefined logical command name PING. For each operating system used, this command name gives the ping statement a specific path, such as /bin/ping for Linux or c:\\Windows\\System32\\ping.exe for MS Windows. This calls the specified statement precisely and any attacker is unable to smuggle a statement with the same name (but with the wrong function) into a directory in front of the required target directory in the environment variable for the path.