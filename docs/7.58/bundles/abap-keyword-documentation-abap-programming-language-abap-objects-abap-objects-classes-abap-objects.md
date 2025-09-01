# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Classes / ABAP Objects - Components of Classes / ABAP Objects - Constructors of Classes

Included pages: 2


### abenconstructor.htm

---
title: "ABAP Objects - Constructors of Classes"
description: |
  Constructors are special methods that produce a defined initial state for objects and classes. The state of an object or class is determined by its instance attributes(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_attribute_glosry.htm 'Glossary Entry') and static attribu
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor.htm"
abapFile: "abenconstructor.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenconstructor"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Constructors%20of%20Classes%2C%20ABENCONSTRUCTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Constructors of Classes

Constructors are special methods that produce a defined initial state for objects and classes. The state of an object or class is determined by its [instance attributes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_attribute_glosry.htm "Glossary Entry") and [static attributes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_attribute_glosry.htm "Glossary Entry"). The content of attributes can be pre-assigned statically using the addition VALUE of the statement DATA. Constructors are always necessary if the initial state of an object needs to be defined dynamically.

Like regular methods, there are two types of constructors: instance constructors and static constructors.

Special rules apply to constructors in inheritance that are not described in the following, but can be found [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_constructors.htm).

-   [Instance Constructors](#abenconstructor-1-------static-constructors---@ITOC@@ABENCONSTRUCTOR_2)

Instance Constructors   

Each class has exactly one instance constructor. This constructor is a predefined instance method of the class called constructor. To use the instance constructor, the method constructor must be declared in a visibility section of the class using the [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_constructor.htm) statement, and implemented in the implementation part. In global classes, the instance constructor can only be declared in the public visibility section, for technical reasons. In local classes, the visibility section in which the instance constructor can be declared must be more general or equal to the instantiability defined by the addition [CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) of the statement [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm). Here, the most specialized area is recommended. Unless it is explicitly declared, the instance constructor is an implicit method that inherits and accesses the interface of the instance constructor of the superclass.

Instance constructors are called once for each instance. They are called automatically, immediately after an instance is created using the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm). It is not possible to call an instance constructor directly using [constructor( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm), but see [super->constructor( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_super.htm) in inheritance.

An instance constructor can contain an interface with IMPORTING parameters and exceptions. The interface is defined using the same syntax as for regular methods in the statement [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm). The lack of output parameters shows that constructors only exist to define the state of an object and have no other function. The additions EXPORTING and EXCEPTIONS of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) are used to pass actual parameters and handle classical exceptions.

Static Constructors   

Each class has exactly one static constructor. This constructor is a predefined public [static method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_method_glosry.htm "Glossary Entry") of the class\_constructor class. To use the static constructor, the static method class\_constructor must be declared in the public section of the declaration part of the class using the statement [CLASS-METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods_constructor.htm) and implemented in the implementation part. The static constructor has no interface parameters and cannot raise exceptions. Unless implemented it explicitly, it is merely an empty method.

The static constructor is called once for each class and [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The static constructor of a class class is called automatically before the class is first accessed. The class is accessed when an instance of the class is created, or a component of the class is used, apart from types and constants. It is not necessary to execute the static constructor to access a type or a constant of the class.

The static constructor is always called immediately before access, with one exception: the static constructor is called at the start of the [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (dialog module, event block, or procedure) in which the class is accessed, if the static variable is addressed in the first access to the class.

Hints

-   The point at which the static constructor is executed is not definitely fixed. The only guarantee is that it will be called before the class is accessed for the first time.
-   A static constructor can call static methods of its class. Such a method must be implemented accordingly and must not rely on the static constructor being fully executed.
-   The order in which the static constructors are executed depends on the program flow. Static constructors must be implemented so that they can be executed in any order.

Continue
[ABAP Objects - Visibility of Instance Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_visibility.htm)


### abenconstructor_visibility.htm

---
title: "ABAP Objects - Visibility of Instance Constructors"
description: |
  For technical reasons, the instance constructor of a class is declared in a visibility section(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm 'Glossary Entry') and is therefore theoretically visible to the corresponding consumers. However, an instance
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_visibility.htm"
abapFile: "abenconstructor_visibility.htm"
keywords: ["do", "if", "try", "method", "class", "abenconstructor", "visibility"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components.htm) →  [ABAP Objects - Constructors of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Visibility%20of%20Instance%20Constructors%2C%20ABENCONSTRUCTOR_VISIBILITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP Objects - Visibility of Instance Constructors

For technical reasons, the instance constructor of a class is declared in a [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry") and is therefore theoretically visible to the corresponding consumers. However, an instance constructor is only executed when an object of this class is created using CREATE OBJECT. Therefore, the instance constructor is only visible to the users of a class that can also create objects of this class.

The additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm) determine whether each user, only the heirs, or just the class itself can create objects of the class. This means that these additions define the actual visibility of the instance constructor implicitly. Therefore, the following applies:

-   The instance constructor of a class defined using CREATE PUBLIC can be called by any user.
-   The instance constructor of a class defined using CREATE PROTECTED can only be called by the class itself and its subclasses.
-   The instance constructor of a class defined using CREATE PRIVATE can only be called by the class itself.

This has the following important consequence:

If a class was defined using CREATE PRIVATE, only the class itself can instantiate itself. Subclasses of this class cannot even instantiate themselves, because they would have to call the superclass constructor using [CALL super->constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_super.htm) (see also [Inheritance and Instance Creation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_instantiation.htm)).
