  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Further Security Risks](javascript:call_link\('abenother_programming_scrty.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Insufficient Authorization Checks, ABENAUTHORITY_SCRTY, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Insufficient Authorization Checks

Adequate authorization checks are an important part of secure ABAP programming. In many statements, an appropriate authorization check is performed implicitly, for example:

-   In [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) (with the addition [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))) and in [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).
-   When an [authorization group](javascript:call_link\('abenauthorization_group_glosry.htm'\) "Glossary Entry") is created for the called program in [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).
-   Using the [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)) in the [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry").

There are, however, many critical statements where no implicit authorization checks are performed, for example:

-   [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) without the addition [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) (and if the table [TCDCOUPLES](javascript:call_link\('abapcall_transaction_auth_obs.htm'\)) does not contain any appropriate entries).
-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) for programs without [authorization groups](javascript:call_link\('abenauthorization_group_glosry.htm'\) "Glossary Entry")
-   [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") reads performed on database tables

Any places in a program that a user can reach without sufficient authorizations and where no implicit authorization check takes place must be secured explicitly using the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) and the result of the check analyzed carefully.

A prerequisite for both implicit and explicit authorization checks is that all components required for the SAP authorization concept, such as [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry"), [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry"), [authorization objects](javascript:call_link\('abenauthorization_profile_glosry.htm'\) "Glossary Entry"), and so on are defined. Care must also be taken to set the [check indicator](javascript:call_link\('abencheck_indicator_glosry.htm'\) "Glossary Entry") correctly, to enable all required checks to take place.

Example

Checks explicitly whether the current user can create temporary programs. This check could be used to secure the [ABAP command injections](javascript:call_link\('abengeneric_prog_scrty.htm'\)) example.

AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
  ID 'DEVCLASS' FIELD '$TMP'
  ID 'OBJTYPE'  FIELD 'PROG'
  ID 'OBJNAME'  DUMMY
  ID 'P\_GROUP'  DUMMY
  ID 'ACTVT'    FIELD '02'.
IF sy-subrc <> 0.
  LEAVE PROGRAM.
ENDIF.