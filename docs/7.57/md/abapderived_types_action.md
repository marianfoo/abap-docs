---
title: "Use"
description: |
  %action is a component group(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is a structure containin
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_action.htm"
abapFile: "abapderived_types_action.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "abapderived", "action"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %action, ABAPDERIVED_TYPES_ACTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

%action

Use

%action is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is a structure containing the actions defined in the BDEF as components and used, for example, in the context of [feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) to get or provide action control information or to get information in responses if an action failed. To do so, the component in the %action structure must be marked.

Type

The components of the %action structure are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm):

-   PERMISSIONS REQUEST
-   PERMISSIONS RESULT
-   FAILED \[EARLY*|*LATE\]
-   REPORTED \[EARLY*|*LATE\]
-   \[INSTANCE*|*GLOBAL\] FEATURES REQUEST
-   \[INSTANCE*|*GLOBAL\] FEATURES RESULT
-   \[INSTANCE*|*GLOBAL\] AUTHORIZATION REQUEST
-   \[INSTANCE*|*GLOBAL\] AUTHORIZATION RESULT

Example

The following source code section taken from DEMO\_RAP\_DERIVED\_TYPES\_PERM demonstrates the component %action. In this case, the request parameter, which is of type [TYPE STRUCTURE FOR PERMISSIONS REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm), is specified for a [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statement.

DATA: request TYPE STRUCTURE FOR
        PERMISSIONS REQUEST demo\_managed\_root\_perm.
request = VALUE #(
    %create          = if\_abap\_behv=>mk-on
    %update          = if\_abap\_behv=>mk-on
    %delete          = if\_abap\_behv=>mk-on
    %assoc-\_child    = if\_abap\_behv=>mk-on
    %action-action   = if\_abap\_behv=>mk-on
    %field-key\_field = if\_abap\_behv=>mk-on
    %field-field1    = if\_abap\_behv=>mk-on
    %field-field2    = if\_abap\_behv=>mk-on
    %field-field3    = if\_abap\_behv=>mk-on
    %field-field4    = if\_abap\_behv=>mk-on ).

Executable Example

The example [BDEF Derived Type Components in the Context of Requesting Permissions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %action with a managed RAP BO.