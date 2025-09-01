---
title: "Syntax"
description: |
  ... FAILED failed_resp MAPPED mapped_resp REPORTED reported_resp ... Effect Used as part of ABAP EML statements to retrieve information on the following: -   Failures, i. e. operations that could not get processed (FAILED failed_resp) -   Key mapping information (MAPPED m
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm"
abapFile: "abapeml_response.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abapeml", "response"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [ABAP EML - Common EML Statements and Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommon_eml_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20response_param%2C%20ABAPEML_RESPONSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - response\_param

Syntax

... *\[*FAILED failed\_resp*\]*
    *\[*MAPPED mapped\_resp*\]*
    *\[*REPORTED reported\_resp*\]* ...

Effect

Used as part of ABAP EML statements to retrieve information on the following:

-   Failures, i. e. operations that could not get processed (FAILED failed\_resp)
-   Key mapping information (MAPPED mapped\_resp)
-   Returned error messages (REPORTED reported\_resp)

The following table shows which responses are possible for the respective ABAP EML statements:

EML statement

FAILED

MAPPED

REPORTED

[MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)

X

X

X

[READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)

X

 

X

[COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm)

X

 

X

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm)

X

 

X

[SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks_entity.htm)

X

 

X

The specification of the operands failed\_resp, mapped\_resp, and reported\_resp after the respective keyword depends on the context, i. e. which forms of the ABAP EML statements are used:

-   [response\_param, Nondynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_responses.htm).
    
    Use of the response parameters with nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [MODIFY ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_short.htm) or [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entities_long.htm).
    
-   [response\_param, Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_responses_dyn.htm).
    
    Use of the response parameters with the dynamic forms of the ABAP EML statements, for example [MODIFY ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entities_operations_dyn.htm) or [READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entities_operations.htm).
    

Hints

-   The operands failed\_resp etc. can be constructed inline using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) and [FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm).
-   If there is no response returned, for example, an operation is successful, there are no entries in the failed\_resp parameter.
-   The reported\_resp operand contains the component [%msg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_msg.htm). It is of type REF TO if\_abap\_behv\_message (which contains if\_t100\_dyn\_msg). If no custom implementation of this interface is required, the inherited method new\_message (or new\_message\_with\_text) can be used as a standard implementation.
-   The specification of an operand for MAPPED is required for create operations including [UUID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm "Glossary Entry") and in case of early internal numbering. It cannot be specified in external numbering scenarios. In late numbering scenarios, the [CONVERT KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapemlcommit_entities_late.htm) statement can be used. For further information, see the Development Guide for the ABAP RESTful Application Programming Model, section [Numbering](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d85aec25222145f0b0cbbe8b02db51f0?version=sap_cross_product_abap).
-   For MODIFY statements with the addition [AUGMENTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_aug_entity_entities.htm), the additions FAILED, MAPPED or REPORTED cannot be used.
-   When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm).
-   In case of a non-dynamic ABAP EML MODIFY statement without the addition IN LOCAL MODE and without specifying the FAILED response parameter, it is recommended that the FAILED response parameter is specified and that proper error handling on the [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma ##EML\_FAILED\_MISSING\_OK.

Further Information

See further information and rules on response parameters in implementations of the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

Executable Example

-   The example [ABAP EML - Responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_responses_abexa.htm) demonstrates response parameters using modify operations to change a simple managed RAP BO.
-   The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_responses_dyn_abexa.htm)) demonstrates the response parameters with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.

Continue
[response\_param, Nondynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_responses.htm)
[response\_param, Dynamic Forms of ABAP EML Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_responses_dyn.htm)
[Examples for Responses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_responses_abexas.htm)