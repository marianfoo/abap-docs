  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS - DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

CLASS - class\_options

[Quick Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

... *\[*PUBLIC*\]*
    *\[*INHERITING FROM superclass*\]*
    *\[*ABSTRACT*\]*
    *\[*FINAL*\]*
    *\[*CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}**\]*
    *\[*SHARED MEMORY ENABLED*\]*
    *\[* [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))*\]*
    *\[**\[*GLOBAL*\]* FRIENDS class1 class2 ...
                      intf1  intf2  ...*\]*.

Extras:

[1\. ... PUBLIC](#!ABAP_ADDITION_1@1@)
[2\. ... INHERITING FROM superclass](#!ABAP_ADDITION_2@2@)
[3\. ... ABSTRACT](#!ABAP_ADDITION_3@3@)
[4\. ... FINAL](#!ABAP_ADDITION_4@4@)
[5\. ... CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}*](#!ABAP_ADDITION_5@5@)
[6\. ... SHARED MEMORY ENABLED](#!ABAP_ADDITION_6@6@)
[7\. ... *\[*GLOBAL*\]* FRIENDS class1 class2 ... intf1  intf2 ...](#!ABAP_ADDITION_7@7@)

Effect

Defines the properties of a class. A test class for [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") is created using the addition [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)).

Addition 1

... PUBLIC

Effect

The addition PUBLIC specifies that the class class is a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") in the class library. The addition PUBLIC can only be applied to one class in a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"). [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") creates it when a global class is created. Any class that does not have the addition PUBLIC applied to it is a local class in its program.

Notes

-   References to public data types can only be made in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of a global class.
    
-   Data types and constants declared in the [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of global classes using the statements TYPES and CONSTANTS replace declarations in [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry").
    
-   A global class is a global [object type](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") and is in the same namespace as a [global interface](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry") and as the global [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
    

Example

Declares the public class CL\_DEMO\_SPFLI.

CLASS cl\_demo\_spfli DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

Addition 2

... INHERITING FROM superclass

Effect

The addition INHERITING FROM specifies that the class class is derived from the superclass superclass and as such is a direct subclass of it. The superclass superclass can be any non-final class that is visible at this point.

Each class can only have one superclass, but can have multiple direct subclasses (this is known as single inheritance). Every class without the addition INHERITING FROM inherits implicitly from the predefined empty and abstract class object. All classes in [ABAP Objects](javascript:call_link\('abenabap_objects_glosry.htm'\) "Glossary Entry") construct an inheritance tree in which there is a unique path from each class to the root object object.

The class class inherits all components of superclass, without changing their visibility sections. Only the components of [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") and [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") visibility sections are visible in the subclass. The properties of the inherited components cannot be changed. In the subclass, additional components can be declared and inherited methods redefined, which means that they can be reimplemented without the interface being modified.

Note

The public and protected components of all classes in a path in the inheritance tree are in the same namespace. New components in a subclass cannot have the same name as a public or protected component that has been inherited from the superclasses.

Example

A subclass cls2 inherits from the superclass cls1. cls1 is an implicit subclass of empty class object.

CLASS cls1 DEFINITION.
  ...
ENDCLASS.
CLASS cls2 DEFINITION
           INHERITING FROM cls1.
  ...
ENDCLASS.

Addition 3

... ABSTRACT

Effect

The addition ABSTRACT defines an abstract class class. No instances can be created from an abstract class. To use the instance components of an abstract class, a [concrete](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") subclass of the class must be instantiated.

Example

Subclass cls2 inherits from an abstract superclass cls1.

CLASS cls1 DEFINITION ABSTRACT.
  ...
ENDCLASS.
CLASS cls2 DEFINITION
           INHERITING FROM cls1.
  ...
ENDCLASS.

Addition 4

... FINAL

Effect

The addition FINAL defines a final class class. No subclasses can be derived from a final class. All methods of a final class are implicitly final and cannot be declared explicitly as final.

Notes

-   Final classes finalize an inheritance tree.
    
-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together, therefore, is useful only for [static classes](javascript:call_link\('abenstatic_class_glosry.htm'\) "Glossary Entry").
    

Example

In this example, an abstract class c1 and a final class c2 are defined, such that c2 inherits from c1. In c2, m1 can be accessed but not a1.

CLASS c1 DEFINITION ABSTRACT.
  PROTECTED SECTION.
    METHODS m1.
  PRIVATE SECTION.
    DATA a1 TYPE string VALUE \`Attribute A1 of class C1\`.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1 FINAL.
  PUBLIC SECTION.
    METHODS m2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    cl\_demo\_output=>display\_text( a1 ).
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    m1( ).
  ENDMETHOD.
ENDCLASS.
DATA oref TYPE REF TO c2.
START-OF-SELECTION.
CREATE OBJECT oref.
oref->m2( ).

Addition 5

... CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}*

Effect

The addition CREATE specifies the context in which the class class is instantiated, namely where the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) can be executed for this class and in which visibility section the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the class can be declared.

-   A class with the addition CREATE PUBLIC can be instantiated anywhere where the class is visible within the framework of the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry").
    
-   A class with the addition CREATE PROTECTED can only be instantiated in methods of its subclasses, methods of the class itself, and methods of its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").
    
-   A class with the addition CREATE PRIVATE can only be instantiated in methods of the class itself or methods of its [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry"). This means, in particular, that it cannot be instantiated as an inherited component of subclasses.
    

The immediate superclass of subclass determines whether it can be instantiated:

-   Immediate subclasses of object, or classes with the addition CREATE PUBLIC inherit the addition CREATE PUBLIC implicitly. All CREATE additions that then overwrite the inherited addition can be specified explicitly.
    
-   Immediate subclasses of classes with the addition CREATE PROTECTED inherit the addition CREATE PROTECTED implicitly. All CREATE additions that then overwrite the inherited addition can be specified explicitly.
    
-   Immediate subclasses of classes with the addition CREATE PRIVATE that are not [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of the class inherit the addition CREATE NONE implicitly. They cannot be instantiated and no explicit CREATE additions can be specified. Immediate subclasses that are friends of the class inherit the addition CREATE PRIVATE implicitly. All CREATE additions can be specified for all superclasses that can instantiated as private using friends.
    

The statement [METHODS constructor](javascript:call_link\('abapmethods_constructor.htm'\)) used to declare the instance constructor of a local class can be specified in all [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") that are more general than or the same as the instantiability specified in the addition CREATE. For global classes, only a declaration in the public visibility section is feasible, for technical reasons.

Notes

-   A class that can be instantiated as private is best specified as a final class, since its subclasses cannot be instantiated unless they are friends of the class.
    
-   The instance constructor of local classes is best declared in the visibility sector of the class that matches its instantiability, since this enables the components declared there to be used in the constructor interface.
    

Example

The class cls can only be privately instantiated. The separate method factory is allowed to perform an instantiation and returns a reference to the generated object.

CLASS cls DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO cls.
    ...
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD factory.
    ref = NEW #( ).
  ENDMETHOD.
ENDCLASS.

Addition 6

... SHARED MEMORY ENABLED

Effect

The addition SHARED MEMORY ENABLED defines a [shared-memory-enabled class](javascript:call_link\('abendata_class_glosry.htm'\) "Glossary Entry") whose instances can be stored in [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") as [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry").

The addition SHARED MEMORY ENABLED can only be applied to a subclass if all its superclasses have been defined with this addition. Subclasses do not necessarily inherit this addition from their superclasses.

Notes

-   The static attributes of a [shared-memory-enabled class](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") are handled in the same way as a regular class, which means they are created in internal session of a program when the class is loaded. If different programs access the same shared objects, the static attributes of the corresponding classes exist multiple times and independently from each other in the programs.
    
-   No events can be declared or handled in a shared-memory-enabled class. The statements [*\[*CLASS-*\]*](javascript:call_link\('abapclass-events.htm'\))[EVENTS](javascript:call_link\('abapevents.htm'\)) and the addition [FOR EVENT](javascript:call_link\('abapmethods_event_handler.htm'\)) cannot be specified in the declaration part.
    
-   For global shared-memory-enabled classes, the addition SHARED MEMORY ENABLED is assigned by choosing the shared-memory-enabled attribute in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"). This applies in particular to the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry") of an [area](javascript:call_link\('abenarea_glosry.htm'\) "Glossary Entry"), which is always global.
    
-   This addition should be specified only if it does not cause any problems. Problems occur with [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") in the following cases:
    

-   The class has [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") that contain information about all the instances as a whole, such as the total number of instances.

-   The class allocates its own memory internally, for example by using kernel methods.
    

Example

Declares the public class CL\_DEMO\_FLIGHT\_LIST. The class is shared-memory-enabled and [root class](javascript:call_link\('abenroot_class_glosry.htm'\) "Glossary Entry") of the [area](javascript:call_link\('abenarea_glosry.htm'\) "Glossary Entry") CL\_DEMO\_FLIGHTS, which is managed in transaction SHMA.

CLASS cl\_demo\_flight\_list DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC
  SHARED MEMORY ENABLED.

Addition 7

... *\[*GLOBAL*\]* FRIENDS class1 class2 ... intf1 intf2 ...

Effect

The addition FRIENDS makes the classes class1 class2 ... or the interfaces intf1 intf2 ... into [friends](javascript:call_link\('abenfriends.htm'\)) of the class class. All subclasses of class1 class2 ..., all classes that implement one of the interfaces intf1 intf2 ... and all interfaces that include one of the interfaces intf1 intf2 ... as a component interface are made friends of the class class. At least one class or interface must be specified.

The [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") of a class have unrestricted access to all components of the class, regardless of the [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") and the addition [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)). Friends can create instances of the class without any restrictions.

The friends of class are not automatically made friends of the subclasses of class. The addition FRIENDS does not make the class class a friend of the friends of the other class.

Without the addition GLOBAL, all classes and interfaces that are visible at this point can be specified for class1 class2... and intf1 intf2 ... If global classes and interfaces from the class library are made friends, it should be noted that the local classes of ABAP programs are not visible in these global classes. The components of a local class class cannot be accessed statically by these friends.

The addition GLOBAL is only allowed if the addition PUBLIC is also used, namely if the class is a global class of a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"). Other global classes and interfaces from the class library can be specified after GLOBAL FRIENDS. This addition is created when a global class is created by [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") if friends are entered on the appropriate tab.

Note

The addition FRIENDS must be specified as the last addition after all other additions.

Example

In this example, the interface i1 and therefore the implementing class c2 are friends of the class c1. The class c2 can instantiate c1 and access its private component a1.

INTERFACE i1.
  ...
ENDINTERFACE.
CLASS c1 DEFINITION CREATE PRIVATE FRIENDS i1.
  PRIVATE SECTION.
    DATA a1 TYPE c LENGTH 10 VALUE 'Class 1'.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i1.
    METHODS m2.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    DATA oref TYPE REF TO c1.
    CREATE OBJECT oref.
    cl\_demo\_output=>display\_text( oref->a1 ).
  ENDMETHOD.
ENDCLASS.

Example

The generated [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_FLIGHTS inherits from system class CL\_SHM\_AREA and make this class a friend.

CLASS cl\_demo\_flights DEFINITION
  PUBLIC
  INHERITING FROM cl\_shm\_area
  FINAL
  CREATE PRIVATE
  GLOBAL FRIENDS cl\_shm\_area.

Executable Example

[Friendship](javascript:call_link\('abenfriends_abexa.htm'\))