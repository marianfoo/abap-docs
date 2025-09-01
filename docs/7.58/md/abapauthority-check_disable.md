  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20AUTHORITY-CHECK%20DISABLE%2C%20ABAPAUTHORITY-CHECK_DISABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hint

The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.

Further Information

[RAP BDL - define authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm)