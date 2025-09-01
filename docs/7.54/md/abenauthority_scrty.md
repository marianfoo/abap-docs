  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_security.htm) →  [Further Security Risks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenother_programming_scrty.htm) → 

Insufficient Authorization Checks

Adequate authorization checks are an important part of secure ABAP programming. In many statements, an appropriate authorization check is performed implicitly, for example:

-   In [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm) (with the addition [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction_authority.htm)) and in [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_transaction.htm).

-   When an [authorization group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_group_glosry.htm "Glossary Entry") is created for the called program in [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm).

-   Using the [automatic authorization checks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_interface_authority.htm) in the [ABAP file interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_interface_glosry.htm "Glossary Entry").

There are, however, many critical statements where no implicit authorization checks are performed, for example:

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm) without the addition [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction_authority.htm) (and if the table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction_auth_obs.htm) does not contain any appropriate entries).

-   [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) for programs without [authorization groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_group_glosry.htm "Glossary Entry")

-   [SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_glosry.htm "Glossary Entry") reads performed on database tables

Any places in a program that a user can reach without sufficient authorizations and where no implicit authorization check takes place must be secured explicitly using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm) and the result of the check analyzed carefully.

A prerequisite for both implicit and explicit authorization checks is that all components required for the SAP authorization concept, such as [authorizations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_glosry.htm "Glossary Entry"), [authorization objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry"), [authorization objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_profile_glosry.htm "Glossary Entry"), and so on are defined. Care must also be taken to set the [check indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheck_indicator_glosry.htm "Glossary Entry") correctly, to enable all required checks to take place.

Example

Checks explicitly whether the current user can create temporary programs. This check could be used to secure the [ABAP command injections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_prog_scrty.htm) example.

AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
  ID 'DEVCLASS' FIELD '$TMP'
  ID 'OBJTYPE'  FIELD 'PROG'
  ID 'OBJNAME'  DUMMY
  ID 'P\_GROUP'  DUMMY
  ID 'ACTVT'    FIELD '02'.
IF sy-subrc <> 0.
  LEAVE PROGRAM.
ENDIF.