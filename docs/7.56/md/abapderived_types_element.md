---
title: "Use"
description: |
  %element is a component group(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm 'Glossary Entry') in BDEF derived types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used in the context
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_element.htm"
abapFile: "abapderived_types_element.htm"
keywords: ["loop", "do", "if", "try", "method", "class", "data", "types", "abapderived", "element"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Components related to information processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_info.htm) → 

%element

Use

%element is a [component group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used in the context of the [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) response parameter.

%element is a structure containing all primary key and data fields plus the associations of a RAP BO entity a message relates to. By marking key and data fields as well as associations, you can assign messages to one or more target elements. In doing so, you can ensure a clear allocation, for example, of error messages if there are multiple error messages.

Note: If an association is marked, the message references all subordinate instances of the association.

Type

The subcomponents of %element have the following type: ABP\_BEHV\_FLAG.

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   REPORTED \[EARLY/LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %element in the context of a method implementation for a [validation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm) that takes care of checking field values of RAP BO instances before saving. See the executable program for this example further down.

METHOD ValidateNum.
  CHECK keys IS NOT INITIAL.
  READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE
   ENTITY demo\_managed\_child\_reported
      FIELDS ( key\_field key\_field\_child ch\_field3 )
      WITH CORRESPONDING #( keys )
   RESULT DATA(lt\_child\_result)
   FAILED DATA(lt\_child\_failed).
  failed =  CORRESPONDING #( DEEP lt\_child\_failed ).
  READ ENTITIES OF demo\_managed\_root\_reported IN LOCAL MODE
   ENTITY demo\_managed\_child\_reported BY \\\_parent
      FIELDS ( key\_field field3 field4  )
      WITH CORRESPONDING #( lt\_child\_result )
   RESULT DATA(lt\_root\_result)
   FAILED DATA(lt\_root\_failed).
  failed =  CORRESPONDING #( DEEP BASE ( failed ) lt\_root\_failed  ).
  LOOP AT lt\_child\_result ASSIGNING FIELD-SYMBOL(<fs\_child>).
    ASSIGN lt\_root\_result\[ KEY entity COMPONENTS
     key\_field = <fs\_child>-key\_field \] TO FIELD-SYMBOL(<fs\_root>).
    "Invalidate state area.
    APPEND VALUE #( %tky        = <fs\_child>-%tky
                    %state\_area = 'VALIDATE\_NUMBERS' )
                    TO reported-%own-demo\_managed\_child\_reported.
    IF <fs\_child>-ch\_field3 NOT BETWEEN <fs\_root>-field3
                                    AND <fs\_root>-field4.
      "Fill FAILED
      APPEND VALUE #( %tky = <fs\_child>-%tky )
      TO failed-demo\_managed\_child\_reported.
      "Fill REPORTED
      APPEND VALUE #(
        %tky = <fs\_child>-%tky
        %state\_area = 'VALIDATE\_NUMBERS'
        %path = VALUE #( demo\_managed\_root\_reported-key\_field =
                         <fs\_child>-key\_field )
        %msg =  new\_message\_with\_text(
                 severity = if\_abap\_behv\_message=>severity-error
                 text   = 'Validation failed' )
        %element-ch\_field3 = if\_abap\_behv=>mk-on )
        TO reported-%own-demo\_managed\_child\_reported.
    ENDIF.
  ENDLOOP.
  "Get time stamp
  DATA: ts1 TYPE timestampl.
  GET TIME STAMP FIELD ts1.
  "Fill %OTHER
  reported-%other = VALUE #(
    ( new\_message\_with\_text(
       severity = if\_abap\_behv\_message=>severity-information
       text   = |b) Unbound message set at { ts1 TIMESTAMP = ISO }.|
    ) ) ).
ENDMETHOD.

Executable Example

The example [Example for message-related BDEF derived type components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_reported_abexa.htm) demonstrates the use of various BDEF derived type components including %element with a managed RAP BO.