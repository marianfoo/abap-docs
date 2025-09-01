---
title: "GET PERMISSIONS, Short Form"
description: |
  Syntax GET PERMISSIONS PRIVILEGED(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)  only_clause(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm) ENTITY bdef FROM keys REQUEST request RESULT
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_short.htm"
abapFile: "abapget_permissions_short.htm"
keywords: ["do", "if", "data", "internal-table", "abapget", "permissions", "short"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) → 

GET PERMISSIONS, Short Form

Syntax

GET PERMISSIONS *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* *\[* [only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm)*\]*
     ENTITY bdef *\[*FROM keys*\]* REQUEST request RESULT result *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... PRIVILEGED](#!ABAP_ADDITION_1@1@)
[2\. ... only\_clause](#!ABAP_ADDITION_2@2@)
[3\. ... FROM keys](#!ABAP_ADDITION_3@3@)
[4\. ... response\_param.](#!ABAP_ADDITION_4@4@)

Effect

The short form of the GET PERMISSIONS statement is used to retrieve information on permissions for instances of a single entity.

Syntax Details

Syntax Part

Details

bdef

Specifies the name of the BDEF following the keyword ENTITY. It must be the full entity name, not the defined alias.

REQUEST request

request is a structure following the keyword REQUEST containing request components to specify which operations, fields or actions are to be considered for the information retrieval. The request components can be either marked as enabled or disabled. The structure must be typed with [TYPE STRUCTURE FOR PERMISSIONS REQUEST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm).
To enable or disable the request components, the constants provided in the interface IF\_ABAP\_BEHV can be used: One example is if\_abap\_behv=>mk-on for enabling (indicated by 01) and if\_abap\_behv=>mk-off for disabling (indicated by 00).

RESULT result

result is a structure of type [TYPE STRUCTURE FOR PERMISSIONS RESULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm) following the keyword RESULT. It contains two components that contain the result of the permission information request:
instances: Internal table containing instance keys and components for those elements in the [entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) of the BDEF for which permissions are defined (excluding static elements).
global: Structure containing components for all elements in the entity behavior body of the BDEF for which permissions are defined.
Note: See the [Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_rules.htm) for information on how the components of the permissions result are handled.

Addition 1   

... PRIVILEGED

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 2   

... only\_clause

Effect

The addition [only\_clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm) allows the control characteristics to be specified that are to be included in the result.

Addition 3   

... FROM keys

Effect

The addition FROM keys allows to specify the keys of the instances for which permissions are to be requested to be specified. Keys is an internal table and must be typed with the BDEF derived type [TYPE TABLE FOR PERMISSIONS KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm).

Addition 4   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Example

The following source code section taken from DEMO\_RAP\_EML\_GET\_PERMISSIONS demonstrates the short form of the GET PERMISSIONS statement in the context of checking access restrictions for certain data fields.

DATA: request TYPE STRUCTURE FOR
        PERMISSIONS REQUEST demo\_managed\_root\_3.
request-%field-data\_field1\_root = if\_abap\_behv=>mk-on.
request-%field-data\_field2\_root = if\_abap\_behv=>mk-on.
GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3
  FROM VALUE #( ( %key-key\_field = 1 )
                ( %key-key\_field = 2 )  )
  REQUEST request
  RESULT DATA(result)
  FAILED DATA(failed)
  REPORTED DATA(reported).

Executable Example

-   The example [ABAP EML - GET PERMISSIONS, Variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenget_perm_forms_abexa.htm) demonstrates the short form of the GET PERMISSIONS statement with a simple managed RAP BO. It also includes the long and dynamic form.