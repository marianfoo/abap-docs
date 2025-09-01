  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.10](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-610.htm) → 

ABAP Objects in Release 6.10

[1\. Dynamic Access: Dynamic Access to Object Attributes](#!ABAP_MODIFICATION_1@1@)
[2\. CALL METHOD Optional when Calling Methods](#!ABAP_MODIFICATION_2@2@)
[3\. Friends - Friendship Between Classes](#!ABAP_MODIFICATION_3@3@)
[4\. New Additions for Implementing Interfaces](#!ABAP_MODIFICATION_4@4@)
[5\. Pass by Parameter in Dynamic Instantiations](#!ABAP_MODIFICATION_5@5@)
[6\. OO Transactions](#!ABAP_MODIFICATION_6@6@)
[7\. Enhanced Syntax for Interfaces](#!ABAP_MODIFICATION_7@7@)
[8\. Enhanced Syntax for Event Handling](#!ABAP_MODIFICATION_8@8@)
[9\. Enhanced Syntax in the Instance Constructor of Subclasses](#!ABAP_MODIFICATION_9@9@)
[10\. Dynamic Access to Interface Constants](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Dynamic Access: Dynamic Access to Object Attributes

The following variants of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_access.htm) make it possible to access the attributes of classes dynamically:

-   assign oref->(f) to <fs>.
-   assign iref->(f) to <fs>.
-   assign (f1)=>(f2) to <fs>.
-   assign c=>(f) to <fs>.
-   assign (f)=>f to <fs>.

The attribute search is first carried out for the static type. If the search was unsuccessful or the attributes are not visible in the context, the system performs a search for the dynamic type.

Modification 2   

CALL METHOD Optional when Calling Methods

In static method calls of the form [CALL METHOD meth( )](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static.htm), the CALL METHOD expression is optional. It is sufficient to simply write meth( ).

Modification 3   

Friends - Friendship Between Classes

The [Friends](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfriends.htm) concept means that a class can offer friendship to other classes or interfaces (GLOBAL FRIENDS and LOCAL FRIENDS are possible here). These [friends](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfriend_glosry.htm "Glossary Entry") can then access all the components of the provider class, and can always instantiate the class. The PROTECTED and PRIVATE components always become PUBLIC for friends. Classes offer friendship to other classes or interfaces using the addition FRIENDS of the statement [CLASS ... DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm). The new concept makes the previous language construction DATA TYPE REF TO class %\_friend obsolete.

Modification 4   

New Additions for Implementing Interfaces

The statement [INTERFACES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterfaces.htm) has the new additions ABSTRACT *|* FINAL METHODS and ALL METHODS ABSTRACT *|* FINAL, which make it possible to make methods in the implementing class abstract or final. DATA VALUES is another new addition. It assigns [start values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstart_value_glosry.htm "Glossary Entry") to interface attributes when implemented in a class.

Modification 5   

Pass by Parameter in Dynamic Instantiations

Parameters can now be passed and classic exceptions handled in the dynamic variant [CREATE OBJECT (class)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm).

Modification 6   

OO Transactions

In Transaction Maintenance, you can classify a transaction code as an OO transaction. The transaction code is then linked with a global or local class of a program, either using the transaction service of [ABAP - Object Services](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_object_services.htm) for persistent objects, or using any method. When this type of transaction is called, the system loads the program linked with the class, creates an object for instance methods, and executes the method.

Modification 7   

Enhanced Syntax for Interfaces

All the component interfaces of a compound interface are handled in the same way in the interface and in the implementing class. This means that the components of inner interfaces can be accessed directly using interface references. Previously, this was only possible using class reference variables.

INTERFACE i1.
  DATA a1.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  DATA a2 LIKE i1~a1.
ENDINTERFACE.
DATA iref TYPE REF TO i2.
WRITE iref->i1~a1.

In previous releases, this example would have caused a syntax error with the expressions containing i1~a1 and it would have been necessary to use aliases. In Release 6.10, however, the interface component selector (~) should only be used outside classes or interfaces in exceptional circumstances.

Modification 8   

Enhanced Syntax for Event Handling

In the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_handler.htm), the system now checks the exact type of the reference variable that points to a triggering object. The type must be of the same class or subclass as the one specified in the declaration of [event handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_handler_glosry.htm "Glossary Entry") as [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) after FOR EVENT evt OF. This means objects of superclasses cannot be registered, even if the event was inherited from a superclass. If an interface has been declared after FOR EVENT evt OF, the type of the reference variable must either be the interface itself, a class or subclass that implements the interface, or another interface that contains the interface as a component.
From Release 6.10 onwards, the type of the implicit event parameter sender (which can be imported by a handler method and passed using [RAISE EVENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_event.htm)) is determined using the class or interface specified in the declaration of the event handler (after the addition FOR EVENT OF of the statement [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm)). In previous releases, the type was determined by the class or interface where the event was declared using [EVENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm).

Modification 9   

Enhanced Syntax in the Instance Constructor of Subclasses

In the instance constructor of subclasses, the constructor of the superclass must always be called using *\[*CALL METHOD*\]* super->constructor, even if this superclass was not explicitly defined there. Direct subclasses of the root class OBJECT are the only exception. This means instance constructors can be implemented in superclasses retroactively, without invalidating the subclasses. If the superclass constructor is not called, the following program produces a syntax warning in Release 6.10 and higher.

Example

CLASS c1 DEFINITION INHERITING FROM object.
  PUBLIC SECTION.
    ...
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  ...
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS constructor.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD constructor.
    ...
    super->constructor( )
    ...
  ENDMETHOD.
ENDCLASS.

Modification 10   

Dynamic Access to Interface Constants

Interface constants can now be accessed dynamically using intf=>const. To make this possible, the logic for dynamic ASSIGN, dynamic access, and dynamic invoke was changed so that global classes are now hidden by local types or interfaces. In previous releases, if constants were accessed using class=>attr, the system only searched for class names.