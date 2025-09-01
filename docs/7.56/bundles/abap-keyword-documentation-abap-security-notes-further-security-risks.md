# ABAP - Keyword Documentation / ABAP - Security Notes / Further Security Risks

Included pages: 6


### abenother_programming_scrty.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) → 

Further Security Risks

-   [Insufficient Authorization Checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthority_scrty.htm)
-   [User-Dependent Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_dependent_scrty.htm)
-   [System-Dependent Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_dependent_scrty.htm)
-   [Client-Independent Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_dependent_scrty.htm)
-   [Obscuring ABAP Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobscure_code_scrty.htm)

Continue
[Insufficient Authorization Checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthority_scrty.htm)
[User-Dependent Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_dependent_scrty.htm)
[System-Dependent Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_dependent_scrty.htm)
[Client-Independent Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_dependent_scrty.htm)
[Obscuring ABAP Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobscure_code_scrty.htm)


### abenauthority_scrty.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenother_programming_scrty.htm) → 

Insufficient Authorization Checks

Adequate authorization checks are an important part of secure ABAP programming. In many statements, an appropriate authorization check is performed implicitly, for example:

-   In [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm) (with the addition [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_authority.htm)) and in [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm).
-   When an [authorization group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_group_glosry.htm "Glossary Entry") is created for the called program in [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm).
-   Using the [automatic authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_authority.htm) in the [ABAP file interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_glosry.htm "Glossary Entry").

There are, however, many critical statements where no implicit authorization checks are performed, for example:

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm) without the addition [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_authority.htm) (and if the table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_auth_obs.htm) does not contain any appropriate entries).
-   [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) for programs without [authorization groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_group_glosry.htm "Glossary Entry")
-   [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") reads performed on database tables

Any places in a program that a user can reach without sufficient authorizations and where no implicit authorization check takes place must be secured explicitly using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm) and the result of the check analyzed carefully.

A prerequisite for both implicit and explicit authorization checks is that all components required for the SAP authorization concept, such as [authorizations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_glosry.htm "Glossary Entry"), [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry"), [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_profile_glosry.htm "Glossary Entry"), and so on are defined. Care must also be taken to set the [check indicator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheck_indicator_glosry.htm "Glossary Entry") correctly, to enable all required checks to take place.

Example

Checks explicitly whether the current user can create temporary programs. This check could be used to secure the [ABAP command injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_prog_scrty.htm) example.

AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
  ID 'DEVCLASS' FIELD '$TMP'
  ID 'OBJTYPE'  FIELD 'PROG'
  ID 'OBJNAME'  DUMMY
  ID 'P\_GROUP'  DUMMY
  ID 'ACTVT'    FIELD '02'.
IF sy-subrc <> 0.
  LEAVE PROGRAM.
ENDIF.


### abenuser_dependent_scrty.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenother_programming_scrty.htm) → 

User-Dependent Program Flow

The use of user names in ABAP programs to control program behavior can be a security risk. In the worst case scenario, a back door can be created and used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, user-dependent source code should always be avoided and removed if necessary. In cases where user-dependent source code is absolutely necessary, a special exemption must be granted for the program so that it can pass the appropriate security tests.

In ABAP, user-dependent program flows can occur in the following instances:

-   The [system field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uname is queried in logical expressions. This is a security risk and should never occur (with the exception of a few predefined user names).
-   A user name specified using the addition USER of the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm). This addition can be misused to bypass an authorization check by specifying a user with extensive authorizations. The same applies to function modules such as AUTHORITY\_CHECK or SU\_RAUTH\_CHECK\_FOR\_USER, which do not usually need to be used locally. It may, however, be useful to call these function modules using RFC, to inspect the authorizations of the current user of the local system in remote systems.

sy-uname is usually redundant when specified explicitly after the addition USER and carries the risk of the content being manipulated in advance, for example in ABAP Debugger.

User names passed to the program from the outside should never be used. If this does become necessary, however, the names must be checked carefully.

Hints

-   If the current user name is required in a program, it is safer to determine it used the method GET\_USER\_NAME of the class CL\_ABAP\_SYST than taking it from the system field sy-uname, which is easier to manipulate.
-   Specifying a user name using the addition USER of the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit_via_job.htm) is not a security risk, since this name is checked for the current user using the [authorization object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_BTCH\_NAM.

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

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenother_programming_scrty.htm) → 

System-Dependent Program Flow

The use of the following [system fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm "Glossary Entry") in ABAP programs to control program behavior can be a security risk:

-   sy-host
-   sy-sysid
-   sy-mandt

As a [user-specific program flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_dependent_scrty.htm), it may in the worst case constitute a real back door that can be used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, source code that depends on the above system fields should always be avoided and removed. Instead, suitable APIs or fully separate implementations should be used. In cases where the use of the above system fields in logical expressions is absolutely necessary, a special exemption must be granted for the program, so that it can pass the appropriate security tests.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_glosry.htm "Glossary Entry") SLIN\_BADI\_SEC\_BACKDOOR.


### abenclient_dependent_scrty.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenother_programming_scrty.htm) → 

Client-Independent Database Access

Each [client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_glosry.htm "Glossary Entry") is a self-contained unit. [Implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") ensures that application programs can only access the business data in the current client by default. In ABAP SQL, using the addition [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) to switch to different clients or using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm) to disable implicit client handling can be viewed as a critical attack on the security of data in other clients.

In [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry"), there is no implicit client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data.

Client-independent access to database tables is allowed only in [system programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_program_glosry.htm "Glossary Entry") in the [system client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_client_glosry.htm "Glossary Entry").

Hint

See also the programming guidelines for [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_guidl.htm "Guideline").

Example

The following program section allows a user to access customer data in any client. This should be avoided at all costs.

DATA client TYPE sy-mandt.
client = sy-mandt.
cl\_demo\_input=>request( CHANGING field = client ).
SELECT \*
       FROM scustom USING CLIENT @client
       INTO TABLE @DATA(customers).
cl\_demo\_output=>display( customers ).


### abenobscure_code_scrty.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenother_programming_scrty.htm) → 

Obscuring ABAP Source Code

[ABAP source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is obscured if tasks that can be performed directly are instead performed across diversions that disguise the real purpose. One common form of obscured code is found when information that could be specified statically is specified using dynamic programming techniques instead. Code can be obscured for one of the following reasons:

-   One form of obscured code (which is not directly malicious) is often used to bypass static checks, for example to disguise false positives.
-   Code is obscured for malicious purposes to disguise back doors and other forms of attacks using injections.

In general, any type of obscured code presents a security risk. Instead of bypassing static checks by using obscured code, false positives should be handled using other methods, such as exemptions. Obscured code can often only be detected using a two-man rule (code inspections).

Example

Maliciously obscured code in a [user-dependent program flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_dependent_scrty.htm), which can generally only be detected using code inspections.

DATA(field)  = \`SY-UNAME\`.
ASSIGN (field) TO FIELD-SYMBOL(<field>).
...
IF <field> = \`...\`.
  ...
ENDIF.

Example

Code obscured without malicious intent. In a HTTP request handler, a HTML file is created by calling a method in which potential [cross site scripting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxss_glosry.htm "Glossary Entry") (XSS) has already been prevented. A static security check that ignores the called method can classify this as a security risk, however, and demand that the HTML is escaped again. The dynamic assignment of the HTML file to a field symbol is used to bypass the false positive raised by the security check.

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  DATA(html\_name) = \`HTML\`.
  ASSIGN (html\_name) TO FIELD-SYMBOL(<html>).
  server->response->set\_cdata( data = <html> ).
ENDMETHOD.

The correct form of the HTTP request handler would be:

METHOD if\_http\_extension~handle\_request.
  DATA(html) = cl\_demo\_html\_provider=>get( ).
  "XSS is prevented in cl\_demo\_html\_provider
  server->response->set\_cdata( data = html ).
ENDMETHOD.

If the security check raises a false positive, either an exemption or an improvement to the check should be requested.
