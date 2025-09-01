---
title: "GET FEATURES"
description: |
  Obsolete Syntax Syntax Forms Short Form GET FEATURES ENTITY bdef FROM keys REQUEST request RESULT result_tab(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm) response_param(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm). G
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_get_features.htm"
abapFile: "abeneml_get_features.htm"
keywords: ["insert", "do", "if", "case", "try", "internal-table", "abeneml", "get", "features"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_obsolete.htm) →  [Obsolete ABAP EML Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET FEATURES, ABENEML_GET_FEATURES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

GET FEATURES

Obsolete Syntax

Syntax Forms

Short Form
GET FEATURES ENTITY bdef FROM keys REQUEST request [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
GET GLOBAL FEATURES ENTITY bdef REQUEST request [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm).
Long Form
GET FEATURES OF bdef
     ENTITY bdef1 FROM keys REQUEST req [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm)
    *\[*ENTITY bdef2 FROM keys REQUEST req [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm)*\]*
    *\[*...*\]*
    *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
GET GLOBAL FEATURES OF bdef
     ENTITY bdef1 FROM keys REQUEST req [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm)
    *\[*ENTITY bdef2 FROM keys REQUEST req [RESULT result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm)*\]*
    *\[*...*\]*.
Dynamic Form
GET FEATURES OPERATIONS features\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
GET GLOBAL FEATURES OPERATIONS global\_features\_tab.

Alternatives:

[1\. GET FEATURES ENTITY..., GET GLOBAL FEATURES ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. GET FEATURES OF ..., GET GLOBAL FEATURES OF ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. GET FEATURES OPERATIONS ..., GET GLOBAL FEATURES OPERATIONS ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements should be used instead.

Retrieves information about the following:

-   [Global feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glo_feature_control_glosry.htm "Glossary Entry"): Feature controls that depend on external factors like specific user settings or the business scope.
-   [Instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_ins_feature_control_glosry.htm "Glossary Entry"): Checks depending on the state of an entity instance.
-   [Static feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm): Specifies individual fields of an entity that have certain access restrictions, for example, fields that are marked as readonly in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

For all characteristics, the information retrieval must be self-implemented in [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") implementations except for static feature controls. In latter case, the access restriction is directly defined in the BDEF. One example is when a field is marked as readonly.

Syntax Details

Syntax Part

Details

bdef

Specifies the name of root entity.

keys

Specifies an internal table of type [TYPE TABLE FOR *\[*INSTANCE*\]* FEATURES KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).

ENTITY bdef1, ENTITY bdef2, ...

bdef1, bdef2, ..., specify the names of the entities that are part of the [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of bdef. They follow the keyword ENTITY.
A list of queries follows OF bdef. Each query (ENTITY bdef1 ... RESULT result\_tab) of the list has the same syntax as the short form. At least one query must be specified. The root entity itself can also be inserted in the position of bdef1, for example. bdef1, and so on, should be the entity alias names if provided in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Using the full entity name causes a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

req

Specifies the request parameters in a structure of type [TYPE STRUCTURE FOR *\[*INSTANCE*\]* FEATURES REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm) or [TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm) respectively.

result\_tab

Specifies an internal table containing the result of the information retrieval. See more information [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_result.htm).

response\_param

Specifies the response parameters. See more information [here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm).

features\_tab

Specifies an internal table for the dynamic form. It is of type ABP\_BEHV\_FEATURES\_TAB.

global\_features\_tab

Specifies an internal table for the dynamic form. It is of type ABP\_BEHV\_GLOBAL\_PERMISSION\_TAB.

Hint

If the recommended notation [strict](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm) is used in the BDEF, GET FEATURES statements are not possible and the use of GET PERMISSIONS statements is enforced.

Alternative 1   

GET FEATURES ENTITY..., GET GLOBAL FEATURES ENTITY ...

Effect

The short form of the statement allows information to be retrieved about a single entity.

Alternative 2   

GET FEATURES OF ..., GET GLOBAL FEATURES OF ...

Effect

The long form of the statement allows information to be retrieved about multiple entities.

Alternative 3   

GET FEATURES OPERATIONS ..., GET GLOBAL FEATURES OPERATIONS ...

Effect

The dynamic form of the statement allows multiple instances to be collected for which information should be retrieved in multiple entities in one statement.