  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION - standard](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_standard.htm) → 

CALL TRANSACTION - AUTHORITY-CHECK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

... WITH*|*WITHOUT AUTHORITY-CHECK ...

Extras:

[1\. ... WITH AUTHORITY-CHECK](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT AUTHORITY-CHECK](#!ABAP_ADDITION_2@2@)

Effect

These additions control the authorization checks when the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) is executed.

Note

The use of the statement CALL TRANSACTION without one of the additions WITH AUTHORITY-CHECK or WITHOUT AUTHORITY-CHECK is now [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm).

Addition 1

... WITH AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is checked using the following [authorization objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") before the transaction is called:

-   The authorization object S\_TCODE
    
-   Any authorization object entered in the definition of the transaction code (transaction SE93). Fields of the authorization object for which no value is specified here are not checked.
    

If no authorization is found, a handleable exception of the class CX\_SY\_AUTHORIZATION\_ERROR is raised.

Note

The addition WITH AUTHORITY-CHECK is the recommended method of checking the authorizations of the current user. It replaces checks using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check_shortref.htm), the function module AUTHORITY\_CHECK\_TCODE, and checks associated with the content of the database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm).

Addition 2

... WITHOUT AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user is not checked when the called transaction is executed.

Notes

-   The addition WITHOUT AUTHORITY-CHECK indicates explicitly that no authorization checks are required when the transaction is called. It suppresses the corresponding error message from the security test in the [extended program checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry").
    
-   If the addition WITHOUT AUTHORITY-CHECK is specified, the content of the database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm) is ignored.