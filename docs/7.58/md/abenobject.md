  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Objects%2C%20ABENOBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Objects

Objects are instances of classes. There can be any number of objects or instances in a class. Each object has a unique identity and its own attributes.

By default, all objects have the same priority in the [data area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_area_glosry.htm "Glossary Entry") of an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"). This means that objects can only be accessed within an internal session.

For cross-transaction objects, there are [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry") that can be accessed by all programs of an AS instance at the same time.

[Object Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_services_glosry.htm "Glossary Entry") are available for handling persistent objects in the database. These can link the attributes of objects with the content of DDIC database tables and can execute object-oriented transactions.

Creating Objects   

To create an object, an [object reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreferences.htm) is required that can point to the required class:

-   After a class reference variable obj is declared for a class class, an object of that class can be created using the statement [CREATE OBJECT obj](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm). This statement creates an instance of the class class and the reference variable obj contains a [reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreferences.htm) to this object.
-   After a class reference variable obj is declared for a superclass of the class class or an interface reference variable obj for an interface implemented by the class class, the addition TYPE class of the statement [CREATE OBJECT obj](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) can be used to create an instance of the class class.

The instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) enables objects to be created in [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Access to Instance Components   

A program can access the visible instance components of an object only by using references in [reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreferences.htm). For the corresponding syntax, see [Accessing Components of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components_addressing.htm).

Lifetime of Objects   

An object lives for as long as it is used in the internal session (known as the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm "Glossary Entry")). An object is used for as long as at least one [heap reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") points to the object, to an instance attribute, or to a part of the instance attribute or as long as at least one method of the object is registered as an [event handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_handler_glosry.htm "Glossary Entry"). Field symbols to which an instance attribute or part of an instance attribute is assigned, have the same effect as data references.

As soon as an object has no more references and none of its methods are registered as an event handler, it can be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). This releases the identity of the object to be taken by a new object.

Hint

In addition to the regular references, there are [weak references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm) represented by objects that do not keep an object alive.

Continue
[ABAP Objects - Object References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreferences.htm)
[ABAP Objects - Accessing Class Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components_addressing.htm)
[ABAP Objects - Object References in Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_attributes_as_key.htm)