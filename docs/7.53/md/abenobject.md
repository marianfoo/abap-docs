  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

Objects

Objects are instances of classes. There can be any number of objects or instances in a class. Each object has a unique identity and its own attributes.

By default, all objects have the same priority in the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). This means that objects can only be accessed from within an internal session.

For cross-transaction objects, [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") exist that can be accessed by all programs of an AS Instance at the same time.

[Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") are available for handling persistent objects in the database. These associate the attributes of objects with the content of database tables and can execute object-oriented transactions.

Creating Objects

Before an object can be created, an [object reference variable](javascript:call_link\('abenreferences.htm'\)) is required that can point to the required class:

-   Once a class reference variable obj is declared for a class class, an object of that class can be created using the statement [CREATE OBJECT obj](javascript:call_link\('abapcreate_object.htm'\)). This statement creates an instance of the class class and the reference variable obj contains a [reference](javascript:call_link\('abenreferences.htm'\)) to this object.
    

-   Once a class reference variable obj is declared for a superclass of the class class or an interface reference variable obj for an interface implemented by the class class, the addition TYPE class of the statement [CREATE OBJECT obj](javascript:call_link\('abapcreate_object.htm'\)) can be used to create an instance of the class class.

The instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) enables objects to be created in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Access to Instance Components

A program can access the visible instance components of an object only by using references in [reference variables](javascript:call_link\('abenreferences.htm'\)). For the syntax, see [Accessing Components of Classes](javascript:call_link\('abenclass_components_addressing.htm'\)).

Lifetime of Objects

An object is kept alive for as long as it is used in the internal session (known as the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry")). An object is used for as long as at least one [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") points to the object, to an instance attribute, or to a part of the instance attribute or as long as at least one method of the object is registered as an [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"). Field symbols to which an instance attribute or part of an instance attribute is assigned still work in the same way as data references.

As soon as an object has no more references and none of its methods is registered as an event handler, it can be deleted by [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). This releases the identity of the object to be taken by a new object.

Note

Alongside these regular references, [weak references](javascript:call_link\('abencl_abap_weak_reference.htm'\)) represented by objects exist that do not keep an object alive.

Continue
[Object References](javascript:call_link\('abenreferences.htm'\))
[Accessing Class Components](javascript:call_link\('abenclass_components_addressing.htm'\))
[Object References in Internal Tables](javascript:call_link\('abenclass_attributes_as_key.htm'\))