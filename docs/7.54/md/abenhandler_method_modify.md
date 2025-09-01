  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Handler Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm) → 

FOR MODIFY

Syntax

METHODS method\_name FOR MODIFY
  *\[*IMPORTING*\]*
    create\_import\_parameter FOR CREATE entity\_name
    create\_import\_parameter FOR CREATE entity\_name\\association
    update\_import\_parameter FOR UPDATE entity\_name
    delete\_import\_parameter FOR DELETE entity\_name
    action\_import\_parameter FOR ACTION entity\_name~action
          \[RESULT action\_export\_parameter\]
   ...
   *\[*CHANGING  failed   TYPE DATA
              mapped   TYPE DATA
              reported TYPE DATA*\]*.

Effect

The method MODIFY implements the handler that makes changes to the entities in the context of the ABAP RESTful programming model. This method is called if the application is processing a change request containing at least one of the change operations (CREATE, UPDATE, DELETE, or ACTION) specified in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry"). The command ... parameter IS \[NOT\] INITIAL can be used to determine which operations are actually used.

Like the method [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_read.htm), the method MODIFY is mass-enabled and bundle-enabled (which means it can handle mass requests and can implement multiple operations). Multiple operations in a MODIFY method, however, are not permitted.

No rules apply to the order in which individual operations are processed within a MODIFY method. The application processes all individual passed operations in an appropriate order, for example create operations before update operations.

The method name method\_name can be specified freely. Using this generalization, it is possible to accommodate multiple MODIFY methods in a single [handler class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm). For example, each action can be defined as a method in the same handler class. This enables the behavior implementation of a business object without introducing a corresponding number of handler classes.

entity\_name refers to the name of the entity or the [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm), if one is defined in the behavior definition.

Input Parameters

The name of the input parameter (for example, create\_import\_parameter) can be specified freely.

The row type of the input parameters for the corresponding operations contains the following (the associated [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) are flagged with "x"):

Operation

ID

%CID

%CID\_REF

%KEY

%PID

%CONTROL

%DATA

%PARAM

CREATE

\-

x

\-

\-

\-

x

\-

\-

UPDATE

\-

\-

x

x

x

x

x

\-

DELETE

x

\-

x

\-

x

\-

\-

\-

ACTION

x

\-

x

\-

x

\-

\-

x

Output Parameters

The name of the output parameter (for example, create\_export\_parameter) can be specified freely.

For an action with the addition RESULT, a named output parameter must be filled. Other operations do not necessarily have visible results. If they do, the results are written implicitly to three return structures (failed, mapped, and reported for errors, mappings, or messages). They can, however, be declared explicitly as [CHANGING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchanging_type_data.htm) parameters in the method signature using the generic type DATA:

CHANGING failed   TYPE DATA
         mapped   TYPE DATA
         reported TYPE DATA

The parameters failed, mapped and reported don’t have fixed data types and are assigned with [derived types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) from the behavior definition instead.

Remarks

-   The old syntax METHODS modify FOR BEHAVIOR ... is also valid but is not recommended.

-   The keyword IMPORTING in the syntax of the method method\_name is not mandatory and can be specified in front of the input parameter.

-   The parameters can also be declared explicitly as REFERENCE (...).

-   A declaration as VALUE (...) is not allowed. This means that the input parameters in a MODIFY method cannot be changed.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

The following example shows the definitions and implementations

-   of the standard operations create, update, and delete (for creating, updating, and deleting instances of the entity Travel) and

-   the application-specific action set\_status\_booked (for setting the trip status to booked).

In the example, each of the operations and the action are implemented in the methods modify\_create, modify\_update, modify\_delete, and set\_status. The basic structure of the implementation of the methods is similar. For example, the implementation of the method modify\_create includes

-   a loop for all new instances of the entity Travel to be created,

-   calling the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_CREATE for creating new Travel instances, and

-   message handling for processing instance-specific messages if an error occurs (msgty = 'E' for an error, msgty = 'A' for an abortion).

The second step can generate failed keys (ls\_travel\_create-%cid) and messages (lt\_messages). Failed keys are saved in the table failed while all instance-specific messages are saved in the table reported. If successful (lt\_messages IS INITIAL), the content ID (%CID) and the new key travel\_id are written to the table mapped.

For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. The class zcl\_messages is described in [Example - Handling of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handling_messages.htm).

CLASS lcl\_travel\_handler DEFINITION
    INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    METHODS modify\_create FOR MODIFY
      IMPORTING
        it\_travel\_create    FOR CREATE travel.
    METHODS modify\_update FOR MODIFY
      IMPORTING
        it\_travel\_update    FOR UPDATE travel.
    METHODS modify\_delete FOR MODIFY
      IMPORTING
        it\_travel\_delete    FOR DELETE travel.
    METHODS set\_status    FOR MODIFY
      IMPORTING
        it\_travel\_set\_status\_booked
                            FOR ACTION travel~set\_status\_booked
      RESULT
        et\_travel\_set\_status\_booked.
ENDCLASS.

CLASS lcl\_travel\_handler IMPLEMENTATION.
  METHOD modify\_create.
    DATA ls\_travel\_out TYPE /dmo/travel.
    DATA lt\_messages   TYPE /dmo/if\_flight\_legacy=>tt\_message.
    LOOP AT it\_travel\_create INTO DATA(ls\_travel\_create).
      CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_CREATE'
        EXPORTING
          is\_travel   = CORRESPONDING
            /dmo/if\_flight\_legacy=>ts\_travel\_in( ls\_travel\_create )
        IMPORTING
          es\_travel   = ls\_travel\_out
          et\_messages = lt\_messages.
      IF lt\_messages IS NOT INITIAL.
        zcl\_messages=>handle\_messages(
          EXPORTING
            iv\_cid      = ls\_travel\_create-%cid
            it\_messages = lt\_messages
          CHANGING
            failed   = failed-travel
            reported = reported-travel ).
        CONTINUE.
      ENDIF.
      INSERT VALUE #( %cid    = ls\_travel\_create-%cid
                    travel\_id = ls\_travel\_out-travel\_id )
        INTO TABLE mapped-travel.
    ENDLOOP.
  ENDMETHOD.
  METHOD modify\_update.
    DATA ls\_travel\_out TYPE /dmo/travel.
    DATA lt\_messages   TYPE /dmo/if\_flight\_legacy=>tt\_message.
    LOOP AT it\_travel\_update INTO DATA(ls\_travel\_update).
      ls\_travel\_update-travel\_id = COND #(
        WHEN ls\_travel\_update-travel\_id IS INITIAL
        OR ls\_travel\_update-travel\_id = ''
        THEN mapped-travel\[ %cid = ls\_travel\_update-%cid\_ref \]-travel\_id
        ELSE ls\_travel\_update-travel\_id ).
      DATA(ls\_travelx) = zcl\_messages=>map\_travel\_control(
        is\_travel = ls\_travel\_update ).
      CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_UPDATE'
        EXPORTING
          is\_travel   = CORRESPONDING
            /dmo/if\_flight\_legacy=>ts\_travel\_in( ls\_travel\_update )
          is\_travelx  = ls\_travelx
        IMPORTING
          et\_messages = lt\_messages.
      LOOP AT lt\_messages INTO DATA(ls\_message)
          WHERE msgty = 'E' OR msgty = 'A'.
        zcl\_messages=>handle\_messages(
          EXPORTING
            iv\_cid       = ls\_travel\_update-%cid\_ref
            iv\_travel\_id = ls\_travel\_update-travel\_id
            it\_messages  = lt\_messages
          CHANGING
            failed   = failed-travel
            reported = reported-travel ).
      ENDLOOP.
    ENDLOOP.
  ENDMETHOD.
  METHOD modify\_delete.
    DATA: lt\_messages   TYPE /dmo/if\_flight\_legacy=>tt\_message,
          ls\_travel\_out TYPE /dmo/travel.
    LOOP AT it\_travel\_delete INTO DATA(ls\_travel\_delete).
      ls\_travel\_delete-travel\_id = COND #(
        WHEN ls\_travel\_delete-travel\_id IS INITIAL
        OR ls\_travel\_delete-travel\_id = ''
        THEN mapped-travel\[ %cid = ls\_travel\_delete-%cid\_ref \]-travel\_id
        ELSE ls\_travel\_delete-travel\_id ).
      CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_DELETE'
        EXPORTING
          iv\_travel\_id = ls\_travel\_delete-travel\_id
        IMPORTING
          et\_messages  = lt\_messages.
      zcl\_messages=>handle\_messages(
        EXPORTING
          iv\_cid       = ls\_travel\_delete-%cid\_ref
          iv\_travel\_id = ls\_travel\_delete-travel\_id
          it\_messages  = lt\_messages
        CHANGING
          failed       = failed-travel
          reported     = reported-travel ).
    ENDLOOP.
  ENDMETHOD.
  METHOD set\_status.
    DATA lt\_messages TYPE /dmo/if\_flight\_legacy=>tt\_message.
    CLEAR et\_travel\_set\_status\_booked.
    LOOP AT it\_travel\_set\_status\_booked
        ASSIGNING FIELD-SYMBOL(<fs\_travel\_set\_status\_booked>).
      DATA(lv\_travel\_id) =
        <fs\_travel\_set\_status\_booked>-travel\_id.
      IF lv\_travel\_id IS INITIAL OR lv\_travel\_id = ''.
        lv\_travel\_id = mapped-travel\[
          %cid = <fs\_travel\_set\_status\_booked>-%cid\_ref
                                    \]-travel\_id.
      ENDIF.
      CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_SET\_BOOKING'
        EXPORTING
          iv\_travel\_id = lv\_travel\_id
        IMPORTING
          et\_messages  = lt\_messages.
      zcl\_messages=>handle\_messages(
        EXPORTING
          iv\_cid       = <fs\_travel\_set\_status\_booked>-%cid\_ref
          iv\_travel\_id = lv\_travel\_id
          it\_messages  = lt\_messages
        CHANGING
          failed       = failed-travel
          reported     = reported-travel ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.