---
title: "ABAP EML - AUTHORITY-CHECK DISABLE"
description: |
  Syntax AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context_name ... AUTHORITY-CHECK DISABLE END. Effect AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an authorization context(https://help.sap.com/doc/abapdocu_757_index_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check_disable.htm"
abapFile: "abapauthority-check_disable.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapauthority", "check", "disable"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - AUTHORITY-CHECK DISABLE, ABAPAUTHORITY-CHECK_DISABLE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hints

-   The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.
-   AUTHORITY-CHECK DISABLE statements are not allowed outside of [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm), [FOR *\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_auth.htm), [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_global_auth.htm) and [FOR READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm) [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") since the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must ensure that the data in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") is always compliant with regard to authorization.

Further Information

[CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm)