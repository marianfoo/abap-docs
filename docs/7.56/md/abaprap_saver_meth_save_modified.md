---
title: "Syntax"
description: |
  CLASS(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc_bdef DEFINITION(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) INHERITING FROM(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm"
abapFile: "abaprap_saver_meth_save_modified.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abaprap", "saver", "meth", "save", "modified"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) → 

save\_modified, RAP Saver Method

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
     [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) save\_modified [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).
   ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
      [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) save\_modified. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).
    ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Effect

RAP saver method that must be defined as part of a RAP saver class lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). It is only relevant for managed scenarios that include an additional or unmanaged save implementation. See the BDEF prerequisites in [CDS BDL - saving options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm). The method is declared by redefining predefined methods of the [superclass](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensuperclass_glosry.htm "Glossary Entry").

The method saves the current state of the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"), i. e. all [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") (including instances from cross-BO relationships) from within the current [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry"), to the database.

Method Parameters

The method has the following implicit, predefined parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   create: Includes information on instances that have been created within the LUW. It is of type [TYPE REQUEST FOR CHANGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm).
    -   update: Includes information on instances that have been updated within the LUW. It is of type [TYPE REQUEST FOR CHANGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm).
    -   delete: Includes information on instances that have been deleted within the LUW. It is of type [TYPE REQUEST FOR DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) parameter: Should only contain success or information messages. It is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_additional_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_managed_unm_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.