  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [ABP - Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) → 

FOR READ

\* Work in progress \*

Syntax

METHODS method\_name FOR READ
  *\[*IMPORTING*\]*
     read\_import\_parameter   FOR READ entity\_name
       *\[*RESULT read\_export\_parameter*\]*
     read\_import\_param\_assoc FOR READ entity\_name\\\_assoc
        FULL   read\_export\_param\_full
        RESULT read\_export\_param\_assoc
        LINK   read\_export\_param\_link
     ...
  *\[*image TYPE if\_abap\_behv=>t\_image*\]*
  ...
  *\[*CHANGING failed   TYPE DATA
            reported TYPE DATA*\]*.

Effect

The READ method implements the handler that processes read requests for the entities in the context of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). The method is used to return data from the application buffer. If the buffer is empty, the data must be read from the database.

The READ method can be called to support handling of an [ETag](javascript:call_link\('abenentity_tag_glosry.htm'\) "Glossary Entry"). A change operation (such as update) is triggered by the if match condition. First the [LOCK](javascript:call_link\('abenhandler_method_lock.htm'\)) method is called. If the LOCK method was successful, the READ method is triggered to request the current ETag value. The structure [%CONTROL](javascript:call_link\('abencomponents_derived_types.htm'\)) requests the ID fields and the ETag attributes. The data is then checked using the if match condition. If the check is passed, the change method is called.

Like [MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)) methods, the READ method is mass-enabled and bundle-enabled. This means that it can handle mass requests and implement multiple operations. Multiple operations in a READ method, however, are not allowed.

The method name method\_name is arbitrary. Using this generalization, it is possible to accommodate multiple READ methods in a single [handler class](javascript:call_link\('abenabp_handler_class.htm'\)). This enables the [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") without introducing a corresponding number of handler classes.

entity\_name refers to the name of the entity or the [alias](javascript:call_link\('abenbdl_alias.htm'\)), if one is defined in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Just like the direct operation read, the operation read-by-association uses a table with instance keys of the source entity as input parameter read\_import\_param\_assoc. The output is as follows:

-   FULL
    Boolean parameter indicating whether the consumer is making a query based only on the links or whether full results are queried.

-   RESULT
    A table with the full line type of the target entity.

-   LINK
    A table in which source keys and target keys are set in relationship with each other.

Input Parameters

The name of the input parameter (for example, read\_import\_parameter) can be specified freely.

The line structure of the input parameter contains the following [components](javascript:call_link\('abencomponents_derived_types.htm'\)):

-   %PID

-   ID fields

-   %CONTROL.

Furthermore, the implicit input parameter image can be declared explicitly as an optional parameter:

  *\[*IMPORTING*\]* image TYPE if\_abap\_behv=>t\_image

The values of the parameter image are as follows:

-   transactional
    This is the parameter's default value. The state of the entities is queried from the transactional buffer.

-   before
    The state of the entities is queried from the database.

Output Parameters

The name of the output parameter (for example, read\_export\_parameter) can be specified freely.

The output parameter read\_export\_parameter, which can be declared explicitly, has the successfully read data as its output. Its line structure contains the following components:

-   %PID

-   All fields of the entity.

The output parameters failed and reported for errors or messages are added implicitly (automatically). They can, however, be declared explicitly as [CHANGING](javascript:call_link\('abenchanging_type_data.htm'\)) parameters in the method signature using the generic type DATA:

CHANGING failed   TYPE DATA
         reported TYPE DATA

The parameters failed and reported don't have fixed data types and are assigned with [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)) from the behavior definition instead. The parameter mapped is part of the method signature, but it is not used in the method.

Tip

The control structure %CONTROL shows which elements are requested by the consumer. It may, however, be a good idea to return all elements and not just the requested elements.

Remarks

-   The old syntax METHODS read FOR BEHAVIOR ... is also valid but is not recommended.

-   The keyword IMPORTING is not mandatory and can be specified in front of the input parameter.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in CDS BDL - Example.

The following example shows the definition and the implementation of the READ method read\_travel for processing read requests for the entity Travel. The implementation of the method includes

-   a loop for all instances of the entity Travel to be read,

-   calling the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_READ for reading Travel instances, and

-   message handling for processing instance-specific messages if an error occurs. For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. The class zcl\_messages is described in [Example - Handling of Messages](javascript:call_link\('abenrpm_handling_messages.htm'\)).

CLASS lcl\_travel\_handler DEFINITION
    INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    METHODS read\_travel FOR READ
      IMPORTING
        it\_travel\_read FOR READ travel
      RESULT et\_travel.
ENDCLASS.

CLASS lcl\_travel\_handler IMPLEMENTATION.
  METHOD read\_travel.
    DATA: lt\_messages   TYPE /dmo/if\_flight\_legacy=>tt\_message,
          ls\_travel\_out TYPE /dmo/travel.
    LOOP AT it\_travel\_read INTO DATA(ls\_travel\_read).
      CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_READ'
        EXPORTING
          iv\_travel\_id = ls\_travel\_read-travel\_id
        IMPORTING
          es\_travel    = ls\_travel\_out
          et\_messages  = lt\_messages.
      IF lt\_messages IS NOT INITIAL.
        zcl\_messages=>handle\_messages(
          EXPORTING
            iv\_travel\_id = ls\_travel\_read-travel\_id
            it\_messages  = lt\_messages
          CHANGING
            failed       = failed-travel
            reported     = reported-travel
        ).
        CONTINUE.
      ENDIF.
      INSERT CORRESPONDING #( ls\_travel\_out ) INTO TABLE et\_travel.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.