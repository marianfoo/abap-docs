  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_components.htm) → 

Constructors of Classes

Constructors are special methods that produce a defined initial state for objects and classes. The state of an object is determined by its [instance attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") and [static attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_attribute_glosry.htm "Glossary Entry"). Content can be assigned to attributes using the addition VALUE of the statement DATA. Constructors are necessary when you want to set the initial state of an object dynamically.

Like normal methods, there are two types of constructor: instance constructors and static constructors.

Special rules apply to constructors in inheritance. These rules are not described in this document, but can be found [here](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninheritance_constructors.htm).

-   [Instance Constructors](#@@ITOC@@ABENCONSTRUCTOR_1)

-   [Static Constructors](#@@ITOC@@ABENCONSTRUCTOR_2)

Instance Constructors

Each class has one instance constructor. This is a predefined instance method of the class called constructor. To use the instance constructor, the method constructor must be declared in a visibility section of the class using the [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_constructor.htm) statement, and implemented in the implementation part. In global classes, the instance constructor can be declared in the public visibility area only, for technical reasons. In local classes, the visibility section in which the instance constructor can be declared must be more general or equal to the instantiability defined by the addition [CREATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_options.htm) of the statement [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm). Here, the most specialized area is recommended. Unless it is explicitly declared, the instance constructor is an implicit method, which inherits and accesses the interface from the instance constructor in the superclass.

Instance constructors are called once for each instance. They are called automatically, immediately after an instance is created using the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm). It is not possible to call an instance constructor directly using the [constructor( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) (but see [super->constructor( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_super.htm) in the inheritance).

An instance constructor can contain an interface with IMPORTING parameters and exceptions. The interface is defined using the same syntax as for regular methods in the statement [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm). The fact that there are no exporting parameters shows that constructors only exist to define the state of an object and have no other function. The additions EXPORTING and EXCEPTIONS of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm) are used to pass actual parameters and handle classical exceptions.

Static Constructors

Each class has a single static constructor. This is a predefined public [static method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_method_glosry.htm "Glossary Entry") of the class\_constructor class. To use the static constructor, the static method class\_constructor must be declared in the public section of the declaration part of the class using the statement [CLASS-METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods_constructor.htm) and implemented in the implementation part. The static constructor has no interface parameters and cannot raise exceptions. Unless you implement it explicitly, it is merely an empty method.

The static constructor is called once for each class and [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The static constructor of a class class is called automatically before the class is accessed for the first time. The class is accessed when an instance of the class is created or a component of the class is used (with the exception of types and constants). It is not necessary to execute the static constructor to access a type or a constant of the class.

The static constructor is always called immediately before the class is accessed, with one exception: if the class is accessed for the first time to address a static variable, the static constructor is executed at the beginning of the [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (dialog module, event block, or procedure) in which the class is accessed.

Notes

-   The point at which the static constructor is called has not yet been finalized. We can currently ensure only that it will be called before the class is accessed for the first time.

-   A static constructor can call static methods of its class. A method of this type must be implemented accordingly and cannot just rely on the static constructor being executed in full.

-   The execution sequence of static constructors is dependent on the program flow. Static constructors must be implemented so that they can be executed in any sequence.

Continue
[Visibility of Instance Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_visibility.htm)