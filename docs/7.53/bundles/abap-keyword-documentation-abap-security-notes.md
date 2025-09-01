# ABAP Keyword Documentation / ABAP - Security Notes

Included pages: 4


### abensys_comm_injections_scrty.htm

---
title: "System Command Injections"
description: |
  A system command injection(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyst_comm_injection_glosry.htm 'Glossary Entry') is a attack method that can result from insufficiently secure input from outside. A system command injection forwards malicious operating system statements(h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensys_comm_injections_scrty.htm"
abapFile: "abensys_comm_injections_scrty.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abensys", "comm", "injections", "scrty"]
---

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


### abenxss_scrty.htm

---
title: "Cross Site Scripting"
description: |
  Cross site scripting (XSS(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxss_glosry.htm 'Glossary Entry')) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxss_scrty.htm"
abapFile: "abenxss_scrty.htm"
keywords: ["do", "if", "case", "try", "method", "class", "abenxss", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) → 

Cross Site Scripting

Cross site scripting ([XSS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxss_glosry.htm "Glossary Entry")) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that cannot be covered in full here and ABAP application developers are not usually concerned with creating Web pages directly. These pages are normally wrapped in frameworks such as SAPUI5, Web Dynpro or Web Services and these frameworks are responsible for the necessary security.

An ABAP program is itself responsible for security only in the very rare cases where it is not part of one of these frameworks and generates HTML pages itself, for example directly using [Internet Communication Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry") (transaction SICF). The built-in function [escape](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm) is most often used to do this. Other escape methods, such as the classes CL\_HTTP\_UTILITY, CL\_HTTP\_SERVER, and CL\_HTTP\_CLIENT are obsolete and should no longer be used.

Note

[Business Server Pages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbusiness_server_pages_glosry.htm "Glossary Entry") (BSP) are an exception to the rule above: When Business Server Pages are created, ABAP application developers can also be faced with HTML pages and must take the appropriate security precautions. More specifically, the attribute <htmlb:content forceEncode="ENABLED"> must be set in the HTMLB Library and obsolete values such as CLASSIC or DESIGN2002 can no longer be specified in the attribute design.

Executable Examples

-   The example [String Functions, escape for XSS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_esc_xss_abexa.htm) demonstrates simple cross site scripting possible when input is not masked and is used on a generated HTML page.

-   In the [ICF Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenicf_service_abexa.htm) example, the class CL\_HTTP\_EXT\_SERVICE\_DEMO uses the built-in function [escape](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm) to prevent cross site scripting.


### abenuser_dependent_scrty.htm

---
title: "User-Dependent Program Flow"
description: |
  The use of user names in ABAP programs to control program behavior can be a security risk. In the worst case scenario, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_dependent_scrty.htm"
abapFile: "abenuser_dependent_scrty.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abenuser", "dependent", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenother_programming_scrty.htm) → 

User-Dependent Program Flow

The use of user names in ABAP programs to control program behavior can be a security risk. In the worst case scenario, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, user-dependent source code should always be avoided and removed if necessary. In cases where user-dependent source code is absolutely necessary, a special exemption must be granted for the program so that it can pass the appropriate security tests.

In ABAP, user-dependent program flows can occur in the following instances:

-   The [system field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname is queried in logical expressions. This is a security risk and should never occur (with the exception of a few predefined user names).

-   A user name specified using the addition USER of the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm). This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. The same applies to function modules such as AUTHORITY\_CHECK or SU\_RAUTH\_CHECK\_FOR\_USER, which do not usually need to be used locally. It may, however, be useful to call these function modules using RFC, to inspect the authorizations of the current user of the local system in remote systems.

sy-uname is usually redundant when specified explicitly after the addition USER and carries the risk of the content being manipulated in advance, for example in ABAP Debugger.

User names passed to the program from the outside should never be used. If this does become necessary, however, the names must be checked carefully.

Notes

-   If the current user name is required in a program, it is safer to determine it used the method GET\_USER\_NAME of the class CL\_ABAP\_SYST than taking it from the system field sy-uname, which is easier to manipulate.

-   Specifying a user name using the addition USER of the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_via_job.htm) is not a security risk, since this name is checked for the current user using the [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_BTCH\_NAM.

Example

The following program section demonstrates a back door where an authorization check for a user is ignored intentionally. The program must be repaired by removing the IF control block with the sy-uname query.

AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
   ID 'DEVCLASS' FIELD '...'
   ID 'OBJTYPE'  DUMMY
   ID 'OBJNAME'  DUMMY
   ID 'P\_GROUP'  DUMMY
   ID 'ACTVT'    FIELD '02'.
IF sy-subrc <> 0.
  IF sy-uname <> '...'.
    LEAVE PROGRAM.
  ENDIF.
ENDIF.


### abensystem_dependent_scrty.htm

---
title: "System-Dependent Program Flow"
description: |
  The use of the following system fields(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm 'Glossary Entry') in ABAP programs to control program behavior can be a security risk: -   sy-host -   sy-sysid -   sy-mandt As a user-specific program flow(https://help.
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_dependent_scrty.htm"
abapFile: "abensystem_dependent_scrty.htm"
keywords: ["do", "if", "case", "try", "data", "abensystem", "dependent", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenother_programming_scrty.htm) → 

System-Dependent Program Flow

The use of the following [system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") in ABAP programs to control program behavior can be a security risk:

-   sy-host

-   sy-sysid

-   sy-mandt

As a [user-specific program flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_dependent_scrty.htm), it may in the worst case constitute a real back door that can be used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, source code that depends on the above system fields should always be avoided and removed. Instead, suitable APIs or fully separate implementations should be used. In cases where the use of the above system fields in logical expressions is absolutely necessary, a special exemption must be granted for the program, so that it can pass the appropriate security tests.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.
