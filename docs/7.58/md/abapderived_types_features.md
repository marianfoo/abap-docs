---
title: "Use"
description: |
  %features is a component group(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used to return fea
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_features.htm"
abapFile: "abapderived_types_features.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abapderived", "features"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Miscellaneous Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_misc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25features%2C%20ABAPDERIVED_TYPES_FEATURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%features

Use

%features is a [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

It is used to return [feature control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm) information by marking the components. The components of %features are those elements for which feature control is specified in the BDEF. For accessing the components with %features, the syntax can, for example, be as follows: %features-%update, %features-%delete, %features-%action-action\_name, or %features-%field-field\_name.

Type

The components of the %features structure are typed with ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   \[INSTANCE*|*GLOBAL\] FEATURES RESULT

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_PERM demonstrates the component %features in the context of a get\_instance\_features method that returns information on whether certain fields are read-only or can be modified based on certain conditions. Furthermore, information is returned if the creation of instances for an associated entity is enabled or disabled. See the executable program for this example further down.

METHOD get\_instance\_features.
  READ ENTITIES OF demo\_managed\_root\_perm IN LOCAL MODE
      ENTITY demo\_managed\_root\_perm
        FIELDS ( field3 field4 )
        WITH CORRESPONDING #( keys )
      RESULT DATA(lt\_numbers)
      FAILED DATA(fail).
  failed =  CORRESPONDING #( DEEP fail ).
  result = VALUE #( FOR ls\_numbers IN lt\_numbers
           ( %tky = ls\_numbers-%tky
             %features = VALUE #(
             %field-field3 = COND #(
                               WHEN ls\_numbers-field4 > 5
                               THEN if\_abap\_behv=>fc-f-read\_only
                               ELSE if\_abap\_behv=>fc-f-unrestricted )
             %field-field4 = COND #(
                               WHEN ls\_numbers-field3 > 10
                               THEN if\_abap\_behv=>fc-f-read\_only
                               ELSE if\_abap\_behv=>fc-f-unrestricted )
             %assoc-\_child = COND #(
                               WHEN ls\_numbers-field3 > 10
                               THEN if\_abap\_behv=>fc-o-disabled
                               ELSE if\_abap\_behv=>fc-o-enabled )
                ) ) ).
ENDMETHOD.

Executable Example

The example [BDEF derived type components in the context of requesting permissions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_misc_abexa.htm) demonstrates the use of various BDEF derived type components including %features with a managed RAP BO.