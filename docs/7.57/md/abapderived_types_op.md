---
title: "Use"
description: |
  %op is a component group(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used as indicator for st
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_op.htm"
abapFile: "abapderived_types_op.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abapderived"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %op, ABAPDERIVED_TYPES_OP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

%op

Use

%op is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used as indicator for [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm), [nonstandard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm) and associations defined in the BDEF.

For accessing the elements with %op, the syntax can, for example, be as follows: %op-%create, %op-%update, %op-%delete, %op-%action-action\_name, or %op-%assoc-assoc\_name.

Type

The components are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   FAILED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   \[INSTANCE\] AUTHORIZATION RESULT

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_PERM demonstrates the component %op in the context of a get\_instance\_authorizations method that returns information on whether delete operations and executions of an action are allowed on RAP BO instances or not. See the executable program for this example further down.

METHOD get\_instance\_authorizations.
  READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE
     ENTITY demo\_managed\_root\_perm
       FIELDS ( field2 )
       WITH CORRESPONDING #( keys )
     RESULT DATA(lt\_status)
     FAILED DATA(fail).
  failed =  CORRESPONDING #( DEEP fail ).
  result = VALUE #( FOR ls\_status IN lt\_status
           ( %tky    = ls\_status-%tky
             %op = VALUE #(
               %delete = COND #( WHEN ls\_status-field2 = 'B'
                                 THEN if\_abap\_behv=>auth-unauthorized
                                 ELSE if\_abap\_behv=>auth-allowed )
               %action-action = COND #(
                                 WHEN ls\_status-field2 = 'B'
                                 THEN if\_abap\_behv=>auth-unauthorized
                                 ELSE if\_abap\_behv=>auth-allowed )
                         ) ) ).
ENDMETHOD.

Executable Example

The example [BDEF derived type components in the context of requesting permissions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %op with a managed RAP BO.