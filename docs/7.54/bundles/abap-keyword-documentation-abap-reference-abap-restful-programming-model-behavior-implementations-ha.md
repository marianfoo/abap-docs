# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Behavior Implementations / Handler Class

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenrpm_handler_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm)
- [abenhandler_method_modify.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_modify.htm)
- [abenhandler_method_read.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_read.htm)
- [abenhandler_method_lock.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_lock.htm)
- [abenrpm_handling_messages.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handling_messages.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.928Z

---

### abenrpm_handler_class.htm

> **📖 Official SAP Documentation**: [abenrpm_handler_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenrpm_handler_class.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm)

### abenhandler_method_modify.htm

> **📖 Official SAP Documentation**: [abenhandler_method_modify.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_modify.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Handler Class](javascript:call_link\('abenrpm_handler_class.htm'\)) → 

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

The method MODIFY implements the handler that makes changes to the entities in the context of the ABAP RESTful programming model. This method is called if the application is processing a change request containing at least one of the change operations (CREATE, UPDATE, DELETE, or ACTION) specified in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry"). The command ... parameter IS \[NOT\] INITIAL can be used to determine which operations are actually used.

Like the method [READ](javascript:call_link\('abenhandler_method_read.htm'\)), the method MODIFY is mass-enabled and bundle-enabled (which means it can handle mass requests and can implement multiple operations). Multiple operations in a MODIFY method, however, are not permitted.

No rules apply to the order in which individual operations are processed within a MODIFY method. The application processes all individual passed operations in an appropriate order, for example create operations before update operations.

The method name method\_name can be specified freely. Using this generalization, it is possible to accommodate multiple MODIFY methods in a single [handler class](javascript:call_link\('abenrpm_handler_class.htm'\)). For example, each action can be defined as a method in the same handler class. This enables the behavior implementation of a business object without introducing a corresponding number of handler classes.

entity\_name refers to the name of the entity or the [alias](javascript:call_link\('abenbdl_alias.htm'\)), if one is defined in the behavior definition.

Input Parameters

The name of the input parameter (for example, create\_import\_parameter) can be specified freely.

The row type of the input parameters for the corresponding operations contains the following (the associated [parameters](javascript:call_link\('abencomponents_derived_types.htm'\)) are flagged with "x"):

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

For an action with the addition RESULT, a named output parameter must be filled. Other operations do not necessarily have visible results. If they do, the results are written implicitly to three return structures (failed, mapped, and reported for errors, mappings, or messages). They can, however, be declared explicitly as [CHANGING](javascript:call_link\('abenchanging_type_data.htm'\)) parameters in the method signature using the generic type DATA:

CHANGING failed   TYPE DATA
         mapped   TYPE DATA
         reported TYPE DATA

The parameters failed, mapped and reported don’t have fixed data types and are assigned with [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)) from the behavior definition instead.

Remarks

-   The old syntax METHODS modify FOR BEHAVIOR ... is also valid but is not recommended.

-   The keyword IMPORTING in the syntax of the method method\_name is not mandatory and can be specified in front of the input parameter.

-   The parameters can also be declared explicitly as REFERENCE (...).

-   A declaration as VALUE (...) is not allowed. This means that the input parameters in a MODIFY method cannot be changed.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the definitions and implementations

-   of the standard operations create, update, and delete (for creating, updating, and deleting instances of the entity Travel) and

-   the application-specific action set\_status\_booked (for setting the trip status to booked).

In the example, each of the operations and the action are implemented in the methods modify\_create, modify\_update, modify\_delete, and set\_status. The basic structure of the implementation of the methods is similar. For example, the implementation of the method modify\_create includes

-   a loop for all new instances of the entity Travel to be created,

-   calling the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_CREATE for creating new Travel instances, and

-   message handling for processing instance-specific messages if an error occurs (msgty = 'E' for an error, msgty = 'A' for an abortion).

The second step can generate failed keys (ls\_travel\_create-%cid) and messages (lt\_messages). Failed keys are saved in the table failed while all instance-specific messages are saved in the table reported. If successful (lt\_messages IS INITIAL), the content ID (%CID) and the new key travel\_id are written to the table mapped.

For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. The class zcl\_messages is described in [Example - Handling of Messages](javascript:call_link\('abenrpm_handling_messages.htm'\)).

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



**📖 Source**: [abenhandler_method_modify.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_modify.htm)

### abenhandler_method_read.htm

> **📖 Official SAP Documentation**: [abenhandler_method_read.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_read.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Handler Class](javascript:call_link\('abenrpm_handler_class.htm'\)) → 

FOR READ

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

The READ method implements the handler that processes read requests for the entities in the context of the ABAP RESTful programming model. The method is used to return data from the application buffer. If the buffer is empty, the data must be read from the database.

The READ method can be called to support handling of an [ETag](javascript:call_link\('abenentity_tag_glosry.htm'\) "Glossary Entry"). A change operation (such as update) is triggered by the if match condition. First the [LOCK](javascript:call_link\('abenhandler_method_lock.htm'\)) method is called. If the LOCK method was successful, the READ method is triggered to request the current ETag value. The structure [%CONTROL](javascript:call_link\('abencomponents_derived_types.htm'\)) requests the ID fields and the ETag attributes. The data is then checked using the if match condition. If the check is passed, the change method is called.

Like [MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)) methods, the READmethod is mass-enabled and bundle-enabled. This means that it can handle mass requests and implement multiple operations. Multiple operations in a READ method, however, are not permitted.

The method name method\_name is arbitrary. Using this generalization, it is possible to accommodate multiple READ methods in a single [handler class](javascript:call_link\('abenrpm_handler_class.htm'\)). This enables the [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") of a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") without introducing a corresponding number of handler classes.

entity\_name refers to the name of the entity or the [alias](javascript:call_link\('abenbdl_alias.htm'\)), if one is defined in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry").

Just like the direct operation read, the operation read-by-association uses a table with instance keys of the source entity as input parameter read\_import\_param\_assoc. The output is as follows:

-   FULL
    Boolean parameter indicating whether the consumer is making a query based only on the links or whether full results are queried.

-   RESULT
    A table with the full row type of the target entity.

-   LINK
    A table in which source keys and target keys are set in relationship with each other.

Input Parameters

The name of the input parameter (for example, read\_import\_parameter) can be specified freely.

The row structure of the input parameter contains the following [components](javascript:call_link\('abencomponents_derived_types.htm'\)):

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

The output parameter read\_export\_parameter, which can be declared explicitly, has the successfully read data as its output. Its row structure contains the following components:

-   %PID

-   All fields of the entity.

The output parameters failed and reported for errors or messages are added implicitly (automatically). They can, however, be declared explicitly as [CHANGING](javascript:call_link\('abenchanging_type_data.htm'\)) parameters in the method signature using the generic type DATA:

CHANGING failed   TYPE DATA
         reported TYPE DATA

The parameters failed and reported don’t have fixed data types and are assigned with [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)) from the behavior definition instead. The parameter mapped is part of the method signature, but it is not used in the method.

Tip

The control structure %CONTROL shows which elements are requested by the consumer. It may, however, be a good idea to return all elements and not just the requested elements.

Remarks

-   The old syntax METHODS read FOR BEHAVIOR ... is also valid but is not recommended.

-   The keyword IMPORTING is not mandatory and can be specified in front of the input parameter.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

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



**📖 Source**: [abenhandler_method_read.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_read.htm)

### abenhandler_method_lock.htm

> **📖 Official SAP Documentation**: [abenhandler_method_lock.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_lock.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Handler Class](javascript:call_link\('abenrpm_handler_class.htm'\)) → 

FOR LOCK

Syntax

METHODS method\_name FOR LOCK
    *\[*IMPORTING*\]*
        lock\_import\_parameter FOR LOCK entity\_name.
     ...
    *\[*CHANGING failed   TYPE DATA
              reported TYPE DATA*\]*.

Effect

The LOCK implements the handler that locks entities. However, the [lock properties](javascript:call_link\('abenbdl_lock.htm'\)) lock master or lock dependent must be specified in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") of a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry"). The method lock is called automatically before a change operation (for example, update).

The method name method\_name is arbitrary. Using this generalization, it is possible to accommodate multiple LOCK methods in a single [handler class](javascript:call_link\('abenrpm_handler_class.htm'\)).

entity\_name refers to the name of the entity or the [alias](javascript:call_link\('abenbdl_alias.htm'\)), if it exists, as defined in the behavior definition.

Input Parameters

The following points apply to the input parameter lock\_import\_parameter:

-   The name of the input parameter can be freely defined.

-   The row type of the input parameter provides the ID fields. This structure contains the fields of the entity that are specified as keys.

-   The [fields](javascript:call_link\('abencomponents_derived_types.htm'\)) %CID, %CID\_REF, and %PID generated by ABAP Compiler are not required in the context of locks, since locks are only relevant for instances saved in the database.

Output Parameters

The output parameters failed and reported for errors or messages are added automatically. They can, however, be declared explicitly as [CHANGING](javascript:call_link\('abenchanging_type_data.htm'\)) parameters in the method signature using the generic type DATA:

CHANGING failed   TYPE DATA
         reported TYPE DATA

The parameters failed and reported don’t have fixed data types and are assigned with derived types from the behavior definition instead. The parameter mapped is part of the method signature, but it is not used in the method.

Remarks

-   The old syntax METHODS lock FOR BEHAVIOR ... is also valid but is no longer recommended.

-   The keyword IMPORTING is not mandatory and can be specified in front of the input parameter.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the definition and implementation of the LOCK method lock\_travel. The implementation of the method includes

-   a loop for all instances of the entity Travel to be locked,

-   calling the function module of the legacy business logic ENQUEUE\_/DMO/ETRAVEL, and

-   message handling for processing instance-specific messages. For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. The class zcl\_messages is described in [Example - Handling of Messages](javascript:call_link\('abenrpm_handling_messages.htm'\)).

CLASS lcl\_travel\_handler DEFINITION
    INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    METHODS lock\_travel FOR LOCK
      IMPORTING
        it\_travel\_key FOR LOCK travel.
ENDCLASS.

CLASS lcl\_travel\_handler IMPLEMENTATION.
  METHOD lock\_travel.
    LOOP AT it\_travel\_key ASSIGNING FIELD-SYMBOL(<fs\_travel>).
      CALL FUNCTION 'ENQUEUE\_/DMO/ETRAVEL'
        EXPORTING
          travel\_id      = <fs\_travel>-travel\_id
        EXCEPTIONS
          foreign\_lock   = 1
          system\_failure = 2
          OTHERS         = 3.
      ASSERT sy-subrc < 2.
      IF sy-subrc = 1.
        INSERT zcl\_messages=>map\_travel\_message(
           iv\_travel\_id = <fs\_travel>-travel\_id
           is\_message   = VALUE #( msgid = '/DMO/CM\_FLIGHT\_LEGAC'
                                   msgty = 'E'
                                   msgno = '032'
                                   msgv1 = <fs\_travel>-travel\_id
                                   msgv2 = sy-msgv1 ) )
          INTO TABLE reported-travel.
        APPEND VALUE #( travel\_id = <fs\_travel>-travel\_id )
               TO failed-travel.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.



**📖 Source**: [abenhandler_method_lock.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhandler_method_lock.htm)

### abenrpm_handling_messages.htm

> **📖 Official SAP Documentation**: [abenrpm_handling_messages.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handling_messages.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrpm_handling_messages.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handling_messages.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Handler Class](javascript:call_link\('abenrpm_handler_class.htm'\)) → 

Example - Handling of Messages

Example

For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. These methods are used to handle the messages in the methods of the handler class.

Messages that come from the legacy business logic must be assigned to the messages of the business object Travel. This is implemented in the method map\_travel\_message.

CLASS zcl\_messages DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES:
      ts\_travel\_control\_map TYPE STRUCTURE FOR UPDATE /DMO/I\_Travel,
      tt\_travel\_reported    TYPE TABLE FOR REPORTED   /DMO/I\_Travel,
      tt\_travel\_failed      TYPE TABLE FOR FAILED     /DMO/I\_Travel.
    CLASS-METHODS:
      handle\_messages
        IMPORTING
          iv\_cid       TYPE abp\_behv\_cid   OPTIONAL
          iv\_travel\_id TYPE /dmo/travel\_id OPTIONAL
          it\_messages  TYPE /dmo/if\_flight\_legacy=>tt\_message
        CHANGING
          failed       TYPE tt\_travel\_failed
          reported     TYPE tt\_travel\_reported,
      map\_travel\_message
        IMPORTING
          iv\_cid           TYPE string OPTIONAL
          iv\_travel\_id     TYPE /dmo/travel\_id OPTIONAL
          is\_message       TYPE LINE OF
            /dmo/if\_flight\_legacy=>tt\_message
        RETURNING VALUE(rs\_report) TYPE LINE OF tt\_travel\_reported,
      map\_travel\_control
        IMPORTING
          is\_travel         TYPE ts\_travel\_control\_map
        RETURNING VALUE(rs\_travelx) TYPE
           /dmo/if\_flight\_legacy=>ts\_travel\_inx.
  PROTECTED SECTION.
  PRIVATE SECTION.
    CLASS-METHODS:
      new\_message
        IMPORTING
          id         TYPE symsgid
          number     TYPE symsgno
          severity   TYPE if\_abap\_behv\_message=>t\_severity
          v1         TYPE simple OPTIONAL
          v2         TYPE simple OPTIONAL
          v3         TYPE simple OPTIONAL
          v4         TYPE simple OPTIONAL
        RETURNING VALUE(obj) TYPE REF TO if\_abap\_behv\_message.
ENDCLASS.

CLASS zcl\_messages IMPLEMENTATION.
  METHOD handle\_messages.
    LOOP AT it\_messages INTO DATA(ls\_message)
         WHERE msgty = 'E' OR msgty = 'A'.
      INSERT VALUE #(
             %cid         = iv\_cid
             travel\_id    = iv\_travel\_id )
         INTO TABLE failed.
      INSERT map\_travel\_message(
             iv\_travel\_id = iv\_travel\_id
             is\_message   = ls\_message )
         INTO TABLE reported.
    ENDLOOP.
  ENDMETHOD.
  METHOD map\_travel\_control.
    rs\_travelx-travel\_id     = is\_travel-travel\_id.
    rs\_travelx-agency\_id     = xsdbool(
      is\_travel-%control-agency\_id     = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-customer\_id   = xsdbool(
      is\_travel-%control-customer\_id   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-begin\_date    = xsdbool(
      is\_travel-%control-begin\_date    = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-end\_date      = xsdbool(
      is\_travel-%control-end\_date      = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-booking\_fee   = xsdbool(
      is\_travel-%control-booking\_fee   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-total\_price   = xsdbool(
      is\_travel-%control-total\_price   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-currency\_code = xsdbool(
      is\_travel-%control-currency\_code = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-description   = xsdbool(
      is\_travel-%control-description   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-status        = xsdbool(
      is\_travel-%control-status        = cl\_abap\_behv=>flag\_changed ).
ENDMETHOD.
  METHOD map\_travel\_message.
    DATA(lo) = new\_message(
      id       = is\_message-msgid
      number   = is\_message-msgno
      severity = if\_abap\_behv\_message=>severity-error
      v1       = is\_message-msgv1
      v2       = is\_message-msgv2
      v3       = is\_message-msgv3
      v4       = is\_message-msgv4 ).
    rs\_report-%cid      = iv\_cid.
    rs\_report-travel\_id = iv\_travel\_id.
    rs\_report-%msg      = lo.
  ENDMETHOD.
  METHOD new\_message.
    obj = NEW lcl\_abap\_behv\_msg(
      textid = VALUE #(
        msgid = id
        msgno = number
        attr1 = COND #( WHEN v1 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV1' )
        attr2 = COND #( WHEN v2 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV2' )
        attr3 = COND #( WHEN v3 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV3' )
        attr4 = COND #( WHEN v4 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV4' ))
      msgty = SWITCH #( severity
        WHEN if\_abap\_behv\_message=>severity-error       THEN 'E'
        WHEN if\_abap\_behv\_message=>severity-warning     THEN 'W'
        WHEN if\_abap\_behv\_message=>severity-information THEN 'I'
        WHEN if\_abap\_behv\_message=>severity-success     THEN 'S' )
      msgv1 = |{ v1 }|
      msgv2 = |{ v2 }|
      msgv3 = |{ v3 }|
      msgv4 = |{ v4 }| ).
    obj->m\_severity = severity.
  ENDMETHOD.
ENDCLASS.
