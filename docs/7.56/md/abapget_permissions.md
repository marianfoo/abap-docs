---
title: "GET PERMISSIONS"
description: |
  Syntax Forms GET PERMISSIONS, Short Form(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_short.htm) 1. GET PERMISSIONS PRIVILEGED(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)  only_clause(https://help.sap.com/do
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm"
abapFile: "abapget_permissions.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "abapget", "permissions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) → 

GET PERMISSIONS

Syntax Forms

[GET PERMISSIONS, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_short.htm)
1\. GET PERMISSIONS *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* *\[* [only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm)*\]*
      ENTITY bdef *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[GET PERMISSIONS, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_long.htm)
2\. GET PERMISSIONS *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* *\[* [only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm)*\]* OF bdef
     ENTITY bdef1 *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm)
    *\[*ENTITY bdef2 *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm)*\]*
    *\[*...*\]*
    *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.
[GET PERMISSIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_dyn.htm)
3\. GET PERMISSIONS *\[* [only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm)*\]* OPERATIONS perm\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Effect

Retrieves information about permissions of RAP BOs. Permissions are defined on operation and field level, for example, operations can be disabled and fields can be set to read-only. Permissions are checked when EML requests are processed by the RAP runtime but they can also be requested upfront by [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") via a GET PERMISSIONS statement. The permissions cover multiple aspects:

-   [Global authorization and instance authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm)
    -   Global authorization: Checks whether the current user is allowed to execute an operation in general, i. e. independent of the data to be processed, for example, a user must not change data.
    -   Instance authorization: Authorization checks that can be defined based on a concrete value of an instance's field.
-   [Global feature control and instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)
    -   [Global feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_glo_feature_control_glosry.htm "Glossary Entry"): Feature controls that depend on external factors like specific user settings or the business scope.
    -   [Instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_ins_feature_control_glosry.htm "Glossary Entry"): Checks depending on the state of an entity instance.
-   [Static feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_char.htm): Specifies individual fields of an entity that have certain access restrictions, for example, fields that are marked as readonly in the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

For all characteristics, the permission retrieval must be self-implemented in RAP BO provider implementations except for static feature controls. In latter case, the access restriction is directly defined in the BDEF. One example is when a field is marked as readonly.

The handling and consolidation of the permission result as well as general best practices are outlined in the topic [GET PERMISSIONS, Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_rules.htm). One example is when the permission result contains merged information. Among others, static feature controls are merged with global feature controls.

Permissions can be retrieved for the following:

-   Create, update and delete operations
-   Associations with [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry")
-   Fields
-   Actions

Note: Permissions cannot be retrieved for [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm) elements like internal associations and internal actions. For [virtual elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") in projections, there are only static features available.

The following variants of the GET PERMISSIONS statement can be used:

-   [GET PERMISSIONS, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_short.htm)
    
    Used to retrieve information on permissions for instances of a single entity.
    
-   [GET PERMISSIONS, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_long.htm)
    
    Used for collecting multiple queries on multiple entities of a RAP BO.
    
-   [GET PERMISSIONS OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_dyn.htm)
    
    Collects permission queries of multiple RAP BO entities in one GET PERMISSIONS statement.
    

Executable Example

-   The example [ABAP EML - GET PERMISSIONS, Variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenget_perm_forms_abexa.htm) demonstrates the three different variants with a simple managed RAP BO.
-   The example [ABAP EML - GET PERMISSIONS, only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenget_perm_only_abexa.htm) demonstrates the different variants of the only\_clause with a simple managed RAP BO.
-   The example [ABAP EML - RAP Calculator (Unmanaged)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_calculator_abexa.htm) uses a GET PERMISSIONS statement with a simple unmanaged RAP BO. In this case, permissions are requested if a calculation based on entries provided is possible or not. For example, it is disallowed if a division by 0 should be executed.

Continue
[GET PERMISSIONS, Short Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_short.htm)
[GET PERMISSIONS OF, Long Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_long.htm)
[GET PERMISSIONS OPERATIONS, Dynamic Form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_dyn.htm)
[GET PERMISSIONS, only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm)
[GET PERMISSIONS, Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_rules.htm)
[Examples for ABAP EML GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenget_permissions_abexas.htm)