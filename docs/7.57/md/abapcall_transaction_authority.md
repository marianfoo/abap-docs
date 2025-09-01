  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION, standard](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_standard.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSACTION, AUTHORITY-CHECK, ABAPCALL_TRANSACTION_AUTHORITY, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL TRANSACTION, AUTHORITY-CHECK

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_shortref.htm)

Syntax

... WITH*|*WITHOUT AUTHORITY-CHECK ...

Additions:

[1\. ... WITH AUTHORITY-CHECK](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT AUTHORITY-CHECK](#!ABAP_ADDITION_2@2@)

Effect

These additions control the authorization checks when the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm) is executed.

Hint

The use of the statement CALL TRANSACTION without one of the additions WITH AUTHORITY-CHECK or WITHOUT AUTHORITY-CHECK is [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_auth_obs.htm).

Addition 1   

... WITH AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is checked using the following [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") before the transaction call is executed:

-   The authorization object S\_TCODE.
-   Any authorization object specified in the definition of the transaction code (transaction SE93). Fields of the authorization object for which no value is specified here are not checked.

If no authorization exists, a catchable exception of the class CX\_SY\_AUTHORIZATION\_ERROR is raised.

Hint

The use of the addition WITH AUTHORITY-CHECK is the recommended method of checking the authorizations of the current user. It replaces the preceding checks using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check_shortref.htm), the function module AUTHORITY\_CHECK\_TCODE, and checks that depend on the content of the DDIC database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_auth_obs.htm).

Addition 2   

... WITHOUT AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is not checked.

Hints

-   The addition WITHOUT AUTHORITY-CHECK indicates explicitly that no authorization check is necessary for the transaction call. It prevents the corresponding error message from the security test in the [extended program checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry").
-   If the addition WITHOUT AUTHORITY-CHECK is specified, the content of the DDIC database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_auth_obs.htm) is ignored.