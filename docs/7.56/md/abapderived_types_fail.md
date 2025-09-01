---
title: "Use"
description: |
  %fail is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used as a component of the failed(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) response paramete
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_fail.htm"
abapFile: "abapderived_types_fail.htm"
keywords: ["update", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abapderived", "fail"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Components related to information processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_info.htm) → 

%fail

Use

%fail is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used as a component of the [failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) response parameter.

%fail itself is a structure that stores the symptom of a failed [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") instance in the component cause). The values of the failure cause (for example, NOT\_FOUND for untraceable entries) are defined in the interface IF\_ABAP\_BEHV: IF\_ABAP\_BEHV=>T\_FAIL\_CAUSE.

Type

%fail-cause has the following type: Type T\_FAILINFO of interface IF\_ABAP\_BEHV.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   FAILED \[EARLY/LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_FAILED demonstrates the component %fail in the context of an implementation for the get\_instance\_features method. See the executable program for this example further down.

METHOD get\_instance\_features.
READ ENTITIES OF demo\_managed\_root\_failed IN LOCAL MODE
      ENTITY demo\_managed\_root\_failed FIELDS ( field2 )
        WITH CORRESPONDING #( keys )
      RESULT DATA(lt\_inst\_features)
      FAILED DATA(read\_failed)
      REPORTED DATA(read\_reported).
  IF lt\_inst\_features IS INITIAL.
    APPEND VALUE #(
       %msg = new\_message\_with\_text(
         severity = if\_abap\_behv\_message=>severity-information
         text = 'get\_instance\_features: Not relevant!' )
             ) TO reported-demo\_managed\_root\_failed.
  ELSE.
    LOOP AT lt\_inst\_features ASSIGNING FIELD-SYMBOL(<fs>).
      CASE <fs>-field2.
       WHEN 'ZZZ'.
        APPEND VALUE #( %tky = <fs>-%tky
                        %update = if\_abap\_behv=>fc-f-read\_only
                      ) TO result.
        APPEND VALUE #( %tky = <fs>-%tky
                        %fail-cause = if\_abap\_behv=>cause-readonly
                      ) TO failed-demo\_managed\_root\_failed.
        APPEND VALUE #(
          %msg = new\_message\_with\_text(
            severity = if\_abap\_behv\_message=>severity-error
            text = 'get\_instance\_features: field3 is read-only!' )
          key\_field = <fs>-key\_field
                      ) TO reported-demo\_managed\_root\_failed.
      WHEN OTHERS.
        APPEND VALUE #(
          %msg = new\_message\_with\_text(
            severity = if\_abap\_behv\_message=>severity-information
            text = 'get\_instance\_features: field3 is unrestricted!' )
          key\_field = <fs>-key\_field
                      ) TO reported-demo\_managed\_root\_failed.
        ENDCASE.
    ENDLOOP.
ENDIF.
ENDMETHOD.

Executable Example

The example [Using %fail](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_fail_abexa.htm) demonstrates the use of %fail with a managed RAP BO.