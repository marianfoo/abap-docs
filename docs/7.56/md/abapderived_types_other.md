  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components related to information processing](javascript:call_link\('abapderived_types_info.htm'\)) → 

%other

Use

%other is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is used as a component of the [reported](javascript:call_link\('abaptype_response_for.htm'\)) response parameter.

A derived type with reported contains a table for each entity defined and, in addition, the component %other. This component is filled with an instance of the message wrapper class in case of a [RAP static transition message](javascript:call_link\('abenstatic_rap_trans_mes_glosry.htm'\) "Glossary Entry"), i. e. the message is not related to a specific entity of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

Type

The component has the following type: TYPE STANDARD TABLE OF REF TO IF\_ABAP\_BEHV\_MESSAGE

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   REPORTED \[EARLY/LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Hint

A [state message](javascript:call_link\('abenrap_state_mes_glosry.htm'\) "Glossary Entry") must always be bound to a RAP BO. Hence, it cannot be allocated to the %other component.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %other in the context of a method implementation for a [validation](javascript:call_link\('abenbdl_validations.htm'\)) that takes care of checking field values of RAP BO instances before saving. See the executable program for this example further down. Note that the filling of the %other component in this context is only for demonstration purposes.

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

The example [Example for message-related BDEF derived type components](javascript:call_link\('abenderived_types_reported_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %other with a managed RAP BO.