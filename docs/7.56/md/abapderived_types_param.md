---
title: "Use"
description: |
  %param is a component group(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used for the result(
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_param.htm"
abapFile: "abapderived_types_param.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abapderived", "param"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Miscellaneous components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_misc.htm) → 

%param

Use

%param is a [component group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used for the [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) parameter in the context of [action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) and [function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm) implementations. %param must be filled by the action or function implementation if a result is defined. For actions or functions with a selective result, only those fields that are requested with the REQUEST keyword must be filled.

In the context of the draft action [edit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm), %param contains the component preserve\_changes. It is a Boolean value and if it set to true, the draft action request is rejected if a draft already exists. If it is set to false, which is the default setting, the edit is executed, i. e. the active instance is copied to the draft database table and the existing draft is overwritten with the values of the active data. In that case, current changes on the existing draft instance are lost.

Type

-   Depending on the specification of the parameter in the BDEF, %param can be a structure whose components are comprised of %data and %key/ %tky/%pky plus, if relevant, other % components like %pid. %param can also be of the DDIC type that is specified in the BDEF for static actions or functions.
-   In the context of the draft action edit, %param is of type ABP\_BEHV\_PAR\_EDIT.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   ACTION IMPORT
-   ACTION RESULT
-   FUNCTION IMPORT
-   FUNCTION RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_TKY demonstrates the component %param in the context of the draft action edit.

MODIFY ENTITY demo\_managed\_draft\_root
    EXECUTE Edit FROM
    VALUE #( ( %key-key\_field = 4
               %param-preserve\_changes = abap\_false )
             ( %key-key\_field = 5
               %param-preserve\_changes = abap\_false )
             ( %key-key\_field = 6
               %param-preserve\_changes = abap\_false ) )
    MAPPED DATA(mapped)
    FAILED DATA(failed)
    REPORTED DATA(reported).

Executable Example

The example [Using %tky](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_tky_abexa.htm) focuses on the use of [%tky](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_tky.htm) with a managed RAP BO in a draft and non-draft scenario. In the program, the [draft action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) edit includes the specification of %param-preserve\_changes.