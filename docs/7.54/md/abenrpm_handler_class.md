  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) → 

Handler Class

Syntax

CLASS lcl\_handler\_name DEFINITION
       INHERITING FROM cl\_abap\_behavior\_handler
       *\[*ABSTRACT*\]* *\[*FINAL*\]*.
  PRIVATE SECTION.
    TYPES ...
    DATA ...
    CONSTANTS ...
    METHODS method\_name FOR MODIFY
      *\[*IMPORTING*\]*
        create\_import\_parameter FOR CREATE entity\_name
        create\_import\_parameter FOR CREATE entity\_name\\association
        update\_import\_parameter FOR UPDATE entity\_name
        delete\_import\_parameter FOR DELETE entity\_name
        action\_import\_parameter FOR ACTION entity\_name~action\_name
                                *\[*RESULT action\_export\_parameter*\]*.
    METHODS method\_name FOR LOCK
      *\[*IMPORTING*\]*
        lock\_import\_parameter FOR LOCK entity\_name.
    METHODS method\_name FOR READ
      *\[*IMPORTING*\]*
        read\_import\_parameter FOR READ entity\_name
                              *\[*RESULT read\_export\_parameter*\]*.
ENDCLASS.
CLASS lcl\_handler\_name IMPLEMENTATION.
  METHOD modify\_method\_name.
   ...
  ENDMETHOD.
  METHOD lock\_method\_name.
   ...
  ENDMETHOD.
  METHOD read\_method\_name.
   ...
  ENDMETHOD.
ENDCLASS.

Effect

Within the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), one or more local handler classes for handling the [behavior](javascript:call_link\('abenbehavior_glosry.htm'\) "Glossary Entry") of the business object are defined. In this interaction phase of the [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") of a business object, the application performs writes and reads that need to be evaluated and whose effects (if without errors) need to be saved to a transactional buffer. Here, it is defined for which operations a method is responsible. In extreme cases, this is the full set of all write (MODIFY) or read (READ) operations permitted by the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry").

A handler class is defined implicitly as ABSTRACT and FINAL and derived from the basis class CL\_ABAP\_BEHAVIOR\_HANDLER. There are no special rules for the name lcl\_handler\_name of the handler classes.

To make a reference to the entities entity\_name, the [alias](javascript:call_link\('abenbdl_alias.htm'\)) granted in the behavior definition (if available) is used.

The method name method\_name can be specified freely in handler classes. The category of the method is specified for the FOR clause (FOR MODIFY*|*LOCK*|*READ).

Here, a single operation (also known as a trigger) consists of the combination of an operation (CREATE, UPDATE, DELETE, LOCK, READ, orACTION) with an entity of an entity part (namely an action or association), for example update SalesOrderItem or read SalesOrderItem\\\_Product.

The trigger is associated with a freely specified parameter name (for example, update\_import\_parameter). The trigger is also associated with one or more further parameter names, if the trigger is associated with output data (for example, with the parameter action\_export\_parameter for an action with the addition RESULT or read\_export\_parameter for the operation READ).

The following transactional methods can be implemented in the handler class:

-   [FOR MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\))
    Covers all change operations (CREATE, UPDATE, DELETE, and certain actions specified in the behavior definition) of an entity.

-   [FOR LOCK](javascript:call_link\('abenhandler_method_lock.htm'\))
    Implements entity locks. Based on the [lock properties](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry") defined in the behavior definition.

-   [FOR READ](javascript:call_link\('abenhandler_method_read.htm'\))
    Processes reads.

Note

Exceptions cannot be raised in handler methods. The statement RAISE EXCEPTION produces a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry").

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the definition and the schema of the implementation of the handler class of the business object. The handler class implements the handler that processes:

-   Standard operations create, update, and delete (methods modify\_create, modify\_update, and modify\_delete)

-   Read requests for the entity Travel (method read\_travel)

-   Lock method lock\_travel

-   Application-specific action set\_status\_booked

CLASS lcl\_travel\_handler DEFINITION
      INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    METHODS modify\_create  FOR MODIFY
      IMPORTING
        it\_travel\_create       FOR CREATE travel.
    METHODS modify\_update  FOR MODIFY
      IMPORTING
        it\_travel\_update       FOR UPDATE travel.
    METHODS modify\_delete  FOR MODIFY
      IMPORTING
        it\_travel\_delete       FOR DELETE travel.
    METHODS set\_status     FOR MODIFY
      IMPORTING
        it\_travel\_set\_status\_booked
                               FOR ACTION travel~set\_status\_booked
      RESULT
        et\_travel\_set\_status\_booked.
    METHODS lock\_travel    FOR LOCK
      IMPORTING
        it\_travel\_key          FOR LOCK travel.
    METHODS read\_travel    FOR READ
      IMPORTING
        it\_travel\_read         FOR READ travel
      RESULT
        et\_travel.
ENDCLASS.

CLASS lcl\_travel\_handler IMPLEMENTATION.
  METHOD modify\_create.
    ...
  ENDMETHOD.
  METHOD modify\_update.
    ...
  ENDMETHOD.
  METHOD modify\_delete.
    ...
  ENDMETHOD.
  METHOD set\_status.
    ...
  ENDMETHOD.
  METHOD read\_travel.
    ...
  ENDMETHOD.
  METHOD lock\_travel.
    ...
  ENDMETHOD.
ENDCLASS.

Continue
[FOR MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\))
[FOR READ](javascript:call_link\('abenhandler_method_read.htm'\))
[FOR LOCK](javascript:call_link\('abenhandler_method_lock.htm'\))
[Example - Handling of Messages](javascript:call_link\('abenrpm_handling_messages.htm'\))