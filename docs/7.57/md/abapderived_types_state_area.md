  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Components Related to Information Processing](javascript:call_link\('abapderived_types_info.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: %state_area, ABAPDERIVED_TYPES_STATE_AREA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

%state\_area

Use

%state\_area is a component of [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is a string and used as a component of the [reported](javascript:call_link\('abaptype_response_for.htm'\)) response parameter and filled by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry").

If this component is filled, the framework interprets a message as [state message](javascript:call_link\('abenrap_state_mes_glosry.htm'\) "Glossary Entry"). Otherwise, a message is interpreted as a [transition message](javascript:call_link\('abenrap_trans_mes_glosry.htm'\) "Glossary Entry").

The %state\_area component is mainly relevant for the RAP BO provider in [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios since state messages are persisted until the state of the RAP BO is changed. The string provided is not relevant for the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). The RAP BO consumer is only interested in knowing whether the message is a transition message or not.

Note: You must manually invalidate state messages, i. e. remove persisted messages, in the RAP BO provider implementation. To identify the messages, use the respective key ([%tky](javascript:call_link\('abapderived_types_tky.htm'\))) and %state\_area string. For example:

Example

APPEND VALUE #( %tky        = instance-%tky
                %state\_area = 'STATE\_AREA\_NAME' )
TO reported-BUSINESS\_OBJECT\_ENTITY.

You can also use a constant to invalidate all state messages for an instance:

Example

APPEND VALUE #( %tky        = instance-%tky
                %state\_area = if\_abap\_behv=>state\_area\_all )
TO reported-BUSINESS\_OBJECT\_ENTITY.

In ABAP EML, state messages can only be accessed via an ABAP EML [READ](javascript:call_link\('abapread_entity_short.htm'\)) statement. In all other ABAP EML statements, the [reported](javascript:call_link\('abaptype_response_for.htm'\)) response parameter only contains transition messages.

Type

The component has the following type: STRING

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)):

-   REPORTED \[EARLY*|*LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %state\_area in the context of a method implementation for a [validation](javascript:call_link\('abenbdl_validations.htm'\)) that checks field values of RAP BO instances before saving. See the executable program for this example further down.

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

The example [Example for message-related BDEF derived type components](javascript:call_link\('abenderived_types_reported_abexa.htm'\)) demonstrates the use of various BDEF derived type components including %state\_area with a managed RAP BO.