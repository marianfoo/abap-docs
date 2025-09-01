---
title: "Syntax"
description: |
  ... FAILED failed_resp MAPPED mapped_resp REPORTED reported_resp ... Effect Used to specify response parameters for ABAP EML statements to get information on the following: -   Failures, i. e. operations that could not get processed (FAILED failed_resp) -   Key mapping in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm"
abapFile: "abapeml_response.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "data", "types", "abapeml", "response"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommon_eml_elements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - response_param, ABAPEML_RESPONSE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ABAP EML - response\_param

Syntax

... *\[*FAILED failed\_resp*\]*
    *\[*MAPPED mapped\_resp*\]*
    *\[*REPORTED reported\_resp*\]* ...

Effect

Used to specify response parameters for ABAP EML statements to get information on the following:

-   Failures, i. e. operations that could not get processed (FAILED failed\_resp)
-   Key mapping information (MAPPED mapped\_resp)
-   Returned error messages (REPORTED reported\_resp)

The following table shows which responses are possible for the respective ABAP EML statements:

EML statement

FAILED

MAPPED

REPORTED

[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm)

X

X

X

[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm)

X

 

X

[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm)

X

 

X

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm)

X

 

X

[SET LOCKS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm)

X

 

X

The specification of the parameters failed\_resp, mapped\_resp, and reported\_resp after the respective keyword depends on the context, i. e. which forms of the ABAP EML statements are used:

-   [response\_param, Nondynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_responses.htm).
    
    Use of the parameters with nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [MODIFY ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_short.htm) or [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entities_long.htm).
    
-   [response\_param, Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_responses_dyn.htm).
    
    Use of the parameters with the dynamic forms of the ABAP EML statements, for example [MODIFY ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entities_operations_dyn.htm) or [READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entities_operations.htm).
    

Hints

-   The parameters can be constructed inline using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) and [FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm).
-   If there is no response returned, for example, an operation is successful, there are no entries in the failed\_resp parameter.
-   The reported\_resp parameter contains the component [%msg](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_msg.htm). It is of type REF TO if\_abap\_behv\_message (which contains if\_t100\_dyn\_msg). If no custom implementation of this interface is required, the inherited method new\_message (or new\_message\_with\_text) can be used as a standard implementation.
-   The specification of a parameter for MAPPED is required for create operations including [UUID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuuid_glosry.htm "Glossary Entry") and in case of early internal numbering. It cannot be specified in external numbering scenarios. In late numbering scenarios, the [CONVERT KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_late.htm) statement can be used. For further information, see the Development Guide for the ABAP RESTful Application Programming Model, section Numbering.
-   For MODIFY statements with the addition [AUGMENTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_aug_entity_entities.htm), no response parameters can be specified, i. e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") must not request the mapping of preliminary keys for which no final keys exist. Hence, [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") should map all preliminary keys unless the operation failed. RAP BO consumers should also avoid requesting the mapping for preliminary keys if the corresponding instances have been deleted in the course of the session.

Further Information

See further information and rules on response parameters in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section General RAP BO Implementation Contract.

Executable Example

-   The example [ABAP EML - Responses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_abexa.htm) demonstrates response parameters using modify operations to change a simple managed RAP BO.
-   The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_dyn_abexa.htm)) demonstrates the response parameters with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.

Continue
[response\_param, Nondynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_responses.htm)
[response\_param, Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_responses_dyn.htm)
[Examples for Responses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_responses_abexas.htm)