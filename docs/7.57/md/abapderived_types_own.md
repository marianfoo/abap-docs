  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Components Related to Information Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_info.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %own, ABAPDERIVED_TYPES_OWN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

%own

Use

%own is a [component group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomponent_group_glosry.htm "Glossary Entry") in [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). The component group is contained in the [reported](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) response parameter and summarizes all available [RAP BO entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") defined in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Type

The subcomponents of %own are internal tables of type [TYPE TABLE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).

Where used

-   [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm)

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %own in the context of a method implementation for a [validation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm) that checks field values of RAP BO instances before saving. See the executable program for this example further down.

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

The example [Example for Message-Related BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_reported_abexa.htm) demonstrates the use of various BDEF derived type components including %own with a managed RAP BO.