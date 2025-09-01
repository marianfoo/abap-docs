---
title: "User-Dependent Program Flow"
description: |
  The use of user names in ABAP programs to control program behavior can be a security risk. In the worst case scenario, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_dependent_scrty.htm"
abapFile: "abenuser_dependent_scrty.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abenuser", "dependent", "scrty"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenother_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20User-Dependent%20Program%20Flow%2C%20ABENUSER_DEPENDENT_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

User-Dependent Program Flow

The use of user names in ABAP programs to control program behavior can be a security risk. In the worst case scenario, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, user-dependent source code should always be avoided and removed if necessary. In cases where user-dependent source code is absolutely necessary, a special exemption must be granted for the program so that it can pass the appropriate security tests.

In ABAP, user-dependent program flows can occur in the following instances:

-   The [system field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname is queried in logical expressions. This is a security risk and should never occur (with the exception of a few predefined user names).
-   A user name specified using the addition USER of the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm). This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. The same applies to function modules such as AUTHORITY\_CHECK or SU\_RAUTH\_CHECK\_FOR\_USER, which do not usually need to be used locally. It may, however, be useful to call these function modules using RFC, to inspect the authorizations of the current user of the local system in remote systems.

sy-uname is usually redundant when specified explicitly after the addition USER and carries the risk of the content being manipulated in advance, for example in ABAP Debugger.

User names passed to the program from the outside should never be used. If this does become necessary, however, the names must be checked carefully.

Hints

-   If the current user name is required in a program, it is safer to determine it used the method GET\_USER\_NAME of the class CL\_ABAP\_SYST than taking it from the system field sy-uname, which is easier to manipulate.
-   Specifying a user name using the addition USER of the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_via_job.htm) is not a security risk, since this name is checked for the current user using the [authorization object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_BTCH\_NAM.

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