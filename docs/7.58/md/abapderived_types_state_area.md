---
title: "Use"
description: |
  %state_area is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is a character string(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm 'Glossary Entry') of
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm"
abapFile: "abapderived_types_state_area.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "class", "data", "types", "abapderived", "state", "area"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Components Related to Information Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_info.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%25state_area%2C%20ABAPDERIVED_TYPES_STATE_AREA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

%state\_area

Use

%state\_area is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is a [character string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_string_glosry.htm "Glossary Entry") of type [string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_character.htm) and used as a component of the REPORTED [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry"). It is filled by the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").

If this component is filled, the framework interprets a message as [state message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry"). Otherwise, a message is interpreted as a [transition message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_trans_mes_glosry.htm "Glossary Entry").

In ABAP EML, state messages can only be accessed via an ABAP EML [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_short.htm) statement. In this case, the %state\_area component is filled with the value %STATE. In all other ABAP EML statements, the [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm) response parameter only contains transition messages.

The %state\_area component is mainly relevant in the following contexts:

-   [draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm) scenarios because state messages are persisted (in table RAP\_MESSAGES) until the state of the RAP BO is changed. The string provided is not relevant for the [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). The RAP BO consumer is only interested in transition messages.
-   [finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_finalize.htm) and [check\_before\_save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_check_before_save.htm) RAP saver methods in [unmanaged RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [RAP determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_validation_glosry.htm "Glossary Entry") in [managed RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")

Note: You must manually invalidate state messages, i. e. remove the assignment of persisted messages, in the RAP BO provider implementation. To identify the messages, use the respective key ([%tky](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_tky.htm)) and %state\_area string. For example:

Example

APPEND VALUE #( %tky        = instance-%tky
                %state\_area = 'STATE\_AREA\_NAME' )
TO reported-rap\_bo\_entity.

You can also use a constant to invalidate all state messages for an instance:

Example

APPEND VALUE #( %tky        = instance-%tky
                %state\_area = if\_abap\_behv=>state\_area\_all )
TO reported-rap\_bo\_entity.

Type

The component has the following type: STRING

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_structure_for.htm):

-   REPORTED \[EARLY*|*LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %state\_area in the context of a method implementation for a [validation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm) that checks field values of RAP BO instances before saving. See the executable program for this example further down.

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

-   The example [Example for message-related BDEF derived type components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_reported_abexa.htm) demonstrates the use of various BDEF derived type components including %state\_area with a managed RAP BO.
-   [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm)