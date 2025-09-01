# ABAP - Keyword Documentation / ABAP Programming Guidelines / Architecture / Object-Oriented Programming

Included pages: 8


### abenobj_oriented_guidl.htm

---
title: "Object-Oriented Programming"
description: |
  Achieving an optimal object-oriented design is not an easy task and this is not the subject of these programming guidelines. It is definitely worth consulting the relevant literature for this topic. The rules below are limited to basic recommendations (for making source codes easier to understand an
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm"
abapFile: "abenobj_oriented_guidl.htm"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "abenobj", "oriented", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) → 

Object-Oriented Programming

Achieving an optimal object-oriented design is not an easy task and this is not the subject of these programming guidelines. It is definitely worth consulting the relevant literature for this topic. The rules below are limited to basic recommendations (for making source codes easier to understand and maintain) and ABAP specifics on working with global and local classes.

Developers who have experience with object-oriented development in other programming languages should be aware of the differences between ABAP Objects and Java:

-   In Java, all superior data objects (especially container variables such as strings) are modeled using classes. By contrast, ABAP provides very powerful, predefined types. Besides the predefined ABAP strings, internal tables are also provided that are used for structured data storage. These tables represent the most powerful ABAP type. Therefore, it is generally not beneficial to implement own container types using ABAP classes.

-   Java reaches a high processing speed for methods, by using optimizations and JIT compilation. In ABAP, however, the high processing speed is primarily attained using very powerful and complex individual statements. This is another reason why implementing own container classes is usually not beneficial. Direct access to a suitable internal table, for example, is always faster than handwritten access logic in ABAP.

Of course, you can transfer algorithms and a general class structure to ABAP, from an application written in another object-oriented programming language. However, the greater the depth, the greater the differences. Therefore, you need to make appropriate modifications, in order to transfer a detailed design in a different language to ABAP Objects.

-   [Encapsulation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenencapsulation_guidl.htm "Guideline")

-   [Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodularization_guidl.htm "Guideline")

-   [Static Classes and Singletons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_class_singleton_guidl.htm "Guideline")

-   [Inheritance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_guidl.htm "Guideline")

-   [Class References and Interface References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")

-   [Local Types for Global Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_type_glob_class_guidl.htm "Guideline")

-   [Instance Constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_constructor_guidl.htm "Guideline")

Continue
[Encapsulation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenencapsulation_guidl.htm)
[Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodularization_guidl.htm)
[Static Classes and Singletons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_class_singleton_guidl.htm)
[Inheritance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_guidl.htm)
[Class References and Interface References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ref_interf_ref_guidl.htm)
[Local Types for Global Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_type_glob_class_guidl.htm)
[Instance Constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_constructor_guidl.htm)


### abenencapsulation_guidl.htm

---
title: "Encapsulation"
description: |
  Background A program that is created based on the procedural programming model and that includes many procedures and global variables is usually difficult to understand because the numerous possible interdependencies of these publicly accessible variables and procedures are difficult to comprehend .
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenencapsulation_guidl.htm"
abapFile: "abenencapsulation_guidl.htm"
keywords: ["do", "if", "method", "class", "data", "abenencapsulation", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Encapsulation

Background

A program that is created based on the procedural programming model and that includes many procedures and global variables is usually difficult to understand because the numerous possible interdependencies of these publicly accessible variables and procedures are difficult to comprehend . The object-oriented approach solves this particular problem by providing visibility sections that are not public. This enables readers who want to get an overview of how the software functions to restrict the overview to the public interfaces of the classes involved. The non-public visibility sections only contain details of the implementation that are not important for a view from the outside.

Of course, this clear overview benefit is only realized in places where the developer makes use of the non-public visibility sections. The same applies to the non-public object generation and final classes, where it is becomes immediately clear whether objects can also be generated outside of the class or whether derived classes can exist.

For the development or the design of an application, it is useful to encapsulate as restrictively as possible initially, and to undo the encapsulation only where required.

Rule

Exploit the benefits of encapsulation

Utilize the encapsulation options provided in the form of non-public visibility sections, non-public object generation, and final classes as much as possible. The use of units that are encapsulated in such a way should preferably be free of side effects.

Details

This simple rule provides practical access to object-oriented programming that results in programs that are more robust and more easily maintainable than if you use procedural ABAP, and without a prolonged object-oriented design phase. To use encapsulation appropriately, do the following:

-   Keep the number of public components of a class as small as possible (components that may be private or protected should therefore be created in the corresponding visibility section as well).

-   Declare public attributes only as READ-ONLY.

-   Consider the private instantiation of classes.

-   Mark classes that are not intended as superclasses as [FINAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_guidl.htm "Guideline").

Conversely, within an encapsulated unit, that is, within a class, you should avoid accessing more global data directly. Within methods, you should generally modify attributes of the class only. Write access to global data outside the class is not recommended. Accessing data in this way should only be done using specially marked methods, if at all. The use of methods of a class should not evoke any side effects outside the class itself.


### abenmodularization_guidl.htm

---
title: "Modularization"
description: |
  Background The main programming model that was propagated before the implementation of ABAP Objects was structured programming: -   In this model, the programs are split into procedures as appropriate. -   Sequences, branches, and loops are the only control structures permitted. The implementation o
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodularization_guidl.htm"
abapFile: "abenmodularization_guidl.htm"
keywords: ["loop", "do", "while", "if", "case", "method", "class", "data", "internal-table", "abenmodularization", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Modularization

Background

The main programming model that was propagated before the implementation of ABAP Objects was structured programming:

-   In this model, the programs are split into procedures as appropriate.

-   Sequences, branches, and loops are the only control structures permitted.

The implementation of object-oriented programming languages such as ABAP Objects does not make structured programming obsolete. Object-oriented programming is based on the structured programming and enhances and supplements it.

With regard to ABAP, you must note that ABAP is still a programming language of the fourth generation (4GL) that has been developed especially for application programming in the SAP environment, that is, for mass data processing in business applications. Therefore, ABAP includes significantly more language elements than an elementary programming language in which the more complex functions are usually stored in libraries. This ranges from simple statements for string processing, which are provided as methods of string classes in other object-oriented languages such as Java, to the processing of complex mass data objects, such as internal tables, to very complex statements for operating interfaces such as Open SQL or for calling data transformations (XML), for which other languages have entire class hierarchies.

As already [mentioned](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm "Guideline"), the performance of the ABAP language is therefore optimized mainly for the execution of its complex statements for mass data processing and less for the individual method call.

Rule

Modularize rather than atomize

Modularize your program in classes, but not to the extent that there is an individual method for every trivial function. Methods that consist of only one or just a few statements should be an exception in ABAP and not the rule.

Details

You should only use [methods of ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") for the implementation of functions; there are very good reasons for this. But ABAP remains ABAP, and the good reasons for using a well-structured program are not invalidated by the implementation of ABAP Objects. Indeed, the ABAP language elements proven and tested in so many application cases are still valid today, are undergoing continuously development, and should be used in their present form in ABAP Objects as well.

A well-structured classic ABAP program, for instance a function group that fulfills a specific task and is modularized using subroutines, should therefore be transferable to a class without any major changes to the implementation, while being provided with all the additional benefits of ABAP Objects.

However, the modularization at the level of a few single statements is and will remain untypical for ABAP. On the one hand this is because of performance reasons, because the costs for the method call must remain low in comparison to the costs for executing the implementation. For example, instead of providing the get\_attribute methods typical for other object-oriented languages that only set their return value to the value of an attribute attribute, you should use public READ-ONLY attributes in ABAP. (If reads on an attribute are associated with further actions, for example, authorization checks, get\_attribute methods are appropriate of course.) On the other hand, virtually all non-fundamental statements of ABAP (all language elements that do not have any equivalent in an elementary language like Java) already play the same role that the methods of system classes assume in other programming languages. The use of a statement like this corresponds to a method call, and another encapsulation is usually not necessary.

Also, for legibility and maintainability reasons, a method with a [reasonable size](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenproc_volume_guidl.htm "Guideline") is preferable to splitting into atomic units, that is, into methods with only one or two statements.

Exception

Procedures that encapsulate nothing but the call of another procedure are an exception. A single procedure call represents the implementation of an entire procedure. This applies in particular to function modules and subroutines, which can only be created in [exceptional cases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") anyway. They should include exactly one [method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"), which delegates the implementation to ABAP Objects. In this case, the improved security through the stricter checks in ABAP Objects outweighs the disadvantages of very short procedures.

Bad Example

The following source code shows the rudimentary implementation of a string class in ABAP Objects. The methods of this class each contain only a single statement. A consumer must create objects of the class and call the methods to handle the strings.

CLASS cl\_string DEFINITION PUBLIC.
   PUBLIC SECTION.
     METHODS:
       constructor IMPORTING value        TYPE string OPTIONAL,
       set\_string  IMPORTING value        TYPE string,
       get\_string  RETURNING VALUE(value) TYPE string,
       shift\_left  IMPORTING places       TYPE i,
       shift\_right IMPORTING places       TYPE i,
       ...
    PRIVATE SECTION.
      DATA string TYPE string.
ENDCLASS.

CLASS cl\_string IMPLEMENTATION.
   METHOD constructor.
     string = value.
   ENDMETHOD.
   METHOD set\_string.
     string = value.
   ENDMETHOD.
   METHOD get\_string.
     value = string.
   ENDMETHOD.
   METHOD shift\_left.
     SHIFT string LEFT BY places PLACES.
   ENDMETHOD.
   METHOD shift\_right.
     SHIFT string RIGHT BY places PLACES.
   ENDMETHOD.
   ...
ENDCLASS.
...

CLASS application IMPLEMENTATION.
  ...
   METHOD do\_something.
     DATA string TYPE REF TO cl\_string.
     CREATE OBJECT string EXPORTING value = 'abcde'.
     ...
     string->shift\_left( ... ).
     ...
    ENDMETHOD.
  ...
ENDCLASS.

Good Example

The following source code shows the handling of strings typical to ABAP. A method directly declares a data object of type string and directly uses the corresponding ABAP statements for processing.

CLASS application IMPLEMENTATION.
  ...
   METHOD do\_something.
     DATA string TYPE string.
     ...
     SHIFT string LEFT BY ... PLACES.
     ...
   ENDMETHOD.
  ...
ENDCLASS.

There is a corresponding predefined function for almost every string processing statement. They can also be used in operand positions, negating another reason for the encapsulation of statements in methods. The statement SHIFT LEFT in this example can be replaced as follows, whereas shift\_left is a predefined function:

string = shift\_left( val = string places = ... ).


### abenstatic_class_singleton_guidl.htm

---
title: "Static Classes and Singletons"
description: |
  Background The classes of ABAP Objects support two types of components: -   Instance components (instance attributes, instance events and instance methods). You can only address the instance components of a class using instances of the class (objects). -   Static components (static attributes, stati
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_class_singleton_guidl.htm"
abapFile: "abenstatic_class_singleton_guidl.htm"
keywords: ["delete", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenstatic", "singleton", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Static Classes and Singletons

Background

The classes of ABAP Objects support two types of components:

-   Instance components (instance attributes, instance events and instance methods). You can only address the instance components of a class using instances of the class (objects).

-   Static components (static attributes, static events and static methods). The static components of a class can be addressed using an object and also using the name of the class. This means they can be used independently of a class instance.

A class that only contains static components and no instance components is referred to as a static class. A global static class is loaded once with its class pool into the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Like every ABAP program, it cannot be explicitly deleted from the session. The static methods (declared using CLASS-METHODS) of a class cannot be redefined in subclasses.

A singleton is a design pattern where the class has the task of creating objects. The class ensures that only one object exists for every internal session that is made available to consumers.

Rule

Do not use static classes

Use objects instead of static classes. If you do not want multiple instantiation, you can use singletons.

Details

If no real object-oriented design exists that would use the multiple instantiation of classes, for example, this often produces classes that only contain static methods (declared using CLASS-METHODS), when [ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") are used. These methods are then used as simple procedures. However, even if multiple instantiation is not explicitly required, object creation is preferable to the use of static classes, for the reasons listed below. You can use the singleton design pattern to prevent multiple instantiation:

-   Explicit object creation is essential for object-oriented programming. Static classes, however, are implicitly loaded the first time they are used, and the corresponding static constructor — if available — is executed. They are persisted in the memory for as long as the current internal session exists. Therefore, if you use static classes, you cannot actually control the time of initialization. You have no way of releasing the memory occupied by the attributes, as soon as the class function is no longer required.

-   Another important argument against the use of static classes are the limited functions of the static constructor, in comparison to an instance constructor. A static constructor has no parameter interface and cannot propagate any [exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_handling_guidl.htm "Guideline"). This is why you cannot always respond appropriately to an error situation in the static constructor, which can cause a runtime error in extreme cases. However, the exceptions of an instance constructor can be handled.

-   By using static classes, you restrict your polymorphism options, which are actually provided by object-oriented programming. On the one hand, you cannot redefine static methods. On the other hand, access is not possible using reference variables (the other “pillar” of polymorphism). However, it is worth keeping the option of polymorphism open:

-   Even if you initially do not plan to overwrite the behavior of a method later on using inheritance or redefinition, this is a request that frequently arises in the course of the further development.

-   When implementing unit tests with ABAP Unit, redefining the behavior of certain methods, to resolve problematic dependencies, is often unavoidable.

To keep the option of redefinition open, you should always use instance methods instead of static methods.

You can express the retrieval of a singleton object and the subsequent call of an instance method, by using the very compact form of a chained method call:

cl\_singleton=>get\_instance( )->do\_something( ).

Since an additional object reference variable and an additional factory call are omitted, there are no aesthetic disadvantages related to the use of a singleton design pattern.

Exception

Classes that only cover trivial functions can still be implemented as static classes. Here you must accurately assess whether one of the previously mentioned aspects has any effect. The need for a class constructor can be an indicator here. Once a static class requires a nontrivial class constructor to provide the required functions, you should use objects instead.

Bad Example

The following source code shows a static class with purely static methods and how one of these methods is used. In general, it is not immediately obvious from the source code whether the method call also calls the static constructor or whether this has already happened earlier (following a simple attribute access, for example).

CLASS static\_class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
                   meth1,
                   meth2,
                   ...
ENDCLASS.
...
static\_class=>meth1( ).
...

Good Example

The following source code shows an implementation of the singleton design pattern. A static method allows access to the only object of the class.

CLASS singleton\_class DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-METHODS get\_instance
    RETURNING VALUE(r\_instance) TYPE REF TO singleton\_class
    RAISING cx\_some\_failure.
  METHODS constructor
    RAISING cx\_some\_failure.
  METHODS: meth1,
           meth2.
           ...
  PRIVATE SECTION.
    CLASS-DATA instance TYPE REF TO singleton\_class.
ENDCLASS.

CLASS singleton\_class IMPLEMENTATION.
  METHOD get\_instance.
    IF instance IS NOT BOUND.
      CREATE OBJECT instance.
    ENDIF.
    r\_instance = instance.
  ENDMETHOD.
  ...
ENDCLASS.

...
  TRY.
     singleton\_class=>get\_instance( )->meth1( ).
   CATCH cx\_some\_failure.
     ...
  ENDTRY.

In the above example, the get\_instance method is used to return the object reference to the object created with the first call. Therefore, this example would appear to violate the rule [modularize rather than atomize](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodularization_guidl.htm "Guideline"). This rule states that no method should be created in ABAP that only returns the value of an attribute. However, this objection is not justified here, because the main task of the get\_instance method is to enable the object consumer to control the time of object creation. This is necessary to enable the consumer to respond (in the usual way) to any exceptional situation during the object creation process.

In special cases, where object creation is performed without parameters and is always successful, you can omit the get\_instance method and publish the object reference using a READ-ONLY attribute. In this case, the object is created within the static constructor. Therefore, this approach is still afflicted with some of the problems of static classes described in other sections.


### abeninheritance_guidl.htm

---
title: "Inheritance"
description: |
  Background Inheritance is the method by which subclasses are derived from a superclass while inheriting the components of the superclass. A subclass can be made more specific by declaring new components and redefining instance methods. ABAP Objects supports simple inheritance, in which a class can h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninheritance_guidl.htm"
abapFile: "abeninheritance_guidl.htm"
keywords: ["do", "while", "if", "method", "class", "abeninheritance", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Inheritance

Background

Inheritance is the method by which subclasses are derived from a superclass while inheriting the components of the superclass. A subclass can be made more specific by declaring new components and redefining instance methods. ABAP Objects supports simple inheritance, in which a class can have multiple subclasses but only one direct superclass. (Despite this, the interface concept does enable something like multiple inheritance to take place, at least with regard to attributes and method declarations. Method implementations, on the other hand, are not inherited when an interface is included.) This creates an inheritance hierarchy in an inheritance tree, with a unique path running from each subclass to a root class. In ABAP Objects, all classes are subclasses of the predefined abstract root class object. Final classes (classes defined using the addition FINAL) close the bottom of a path in the inheritance tree.

Rule

Avoid using deep inheritance hierarchies

Avoid using deep inheritance hierarchies, since they are often difficult to maintain.

Details

Deep inheritance hierarchies are examples of successful reuse, but are also the source of maintenance problems, due to the complexity inherent in the large number of classes involved.

-   The behavior of classes deep down in the inheritance hierarchy is difficult to predict, since they potentially inherit from a large number of methods.

-   Classes with a lot of subclasses exert great influence on the system as a whole, making the consequences of modifications to a superclass hard to predict.

-   A large number of subclasses may also indicate an unsuitable level of abstraction.

To prevent unintended reuse of your classes by inheritance, we recommend that you use final classes to close the paths of inheritance trees.

Note

If your main aim is to exploit the possibilities of polymorphy, then interfaces are often a preferable solution to inheritance. If all you want to do is use interfaces, then method interfaces should be used instead of abstract classes. These can be used to create composite interfaces. In ABAP, on the other hand, a composite interface is impossible due to the nature of simple inheritance using classes.


### abenclass_ref_interf_ref_guidl.htm

---
title: "Class References and Interface References"
description: |
  Background Interface components in objects can be addressed using a class reference variable or an interface reference variable. If you use a class reference variable, the interface component is addressed using the name of the interface and the interface component selector (~). If you use a suitable
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ref_interf_ref_guidl.htm"
abapFile: "abenclass_ref_interf_ref_guidl.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenclass", "ref", "interf", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Class References and Interface References

Background

Interface components in objects can be addressed using a class reference variable or an interface reference variable. If you use a class reference variable, the interface component is addressed using the name of the interface and the interface component selector (~). If you use a suitable interface reference variable, the component is addressed directly using its name.

Rule

Address interface components using interface reference variables

From outside a class, only access its interface components using a relevant interface reference variable; do not use the interface component selector (~).

Details

Accessing interface components externally using an interface reference variable makes code easier to understand because it is clear that the user of the class is interested in exactly the aspect provided by the interface. Accessing interface components using a class reference variable, on the other hand, suggests that components are used that are not provided by an interface. As a rule, only use the interface component selector within classes and interfaces, to address the interfaces included there. If you want to provide an interface component of an included interface as a separate component, you can declare an alias name by using ALIASES.

Bad Example

The following source code shows an interface method call using a class reference variable and the interface component selector (~); this is not recommended, as mentioned in the rule above.

CLASS cl\_class DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_intf.
  ...
ENDCLASS.
...
    DATA cref TYPE REF TO cl\_class.
    ...
    cref->if\_intf~meth( ).
    ...

Good Example

The following source code shows the method call from the above example, but using an interface reference variable. Instead of cref->if\_intf~meth, iref->meth is used to express that components of a class are accessed that are on the same hierarchy level as all public components, but in another part of the public interface.

CLASS cl\_class DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_intf.
     ...
ENDCLASS.
...
     DATA iref TYPE REF TO if\_intf.
     ...
     iref->meth( ).
     ...


### abenlocal_type_glob_class_guidl.htm

---
title: "Local Types for Global Classes"
description: |
  Background Within class pools, as in virtually any other ABAP program, data types, local interfaces, and local classes can be defined to ensure a better structure of the implementation of the global class. From a technical point of view, these optional declaration parts, together with the declaratio
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_type_glob_class_guidl.htm"
abapFile: "abenlocal_type_glob_class_guidl.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenlocal", "type", "glob", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Local Types for Global Classes

Background

Within class pools, as in virtually any other ABAP program, data types, local interfaces, and local classes can be defined to ensure a better structure of the implementation of the global class. From a technical point of view, these optional declaration parts, together with the declaration part of the global class, form the global declaration part of the [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_declar_guidl.htm "Guideline").

These local declarations in a class pool are invisible outside the class pool, which means they can only be used as followed:

-   In the private visibility section (PRIVATE SECTION) of the declarations in the global class

-   Within the method implementations in the global class

These two usage types have different technical visibility requirements because friends of a global class have access to its private visibility section. Local type declarations that are used in the PRIVATE SECTION must therefore be accessible for any possible friends of the class, whereas those type declarations that are only used within the method implementations are completely meaningless for other classes.

In general, local classes consist of the declaration part and the associated method implementations. These are invisible to the friends of the global class and have thus technically the same visibility requirements as local type declarations that are only used within the implementation.

Local data types, interfaces, and classes within a class pool are saved in dedicated include programs. The following two areas are distinguished:

-   Class-relevant local definitions

-   Local definitions/implementations

These areas match the different technical visibility requirements. The internal names of the include programs end with CCDEF or CCIMP, which is why they are also known as CCDEF or CCIMP includes.

Rule

Position local declarations appropriately

Position the local declarations of a class pool at appropriate positions depending on the requirements. Types that are only used within the implementation of the global class need to be in a different position than types that are also addressed in the PRIVATE SECTION of the global class.

Details

From the perspective of a class pool, all local type definitions and the associated implementations of local classes can be saved in the Class-Relevant Local Definitions area. However, such an approach is disadvantageous from the dependency management perspective. Dependent classes (subclasses and friends of the global class) only have to be invalidated for changes to the local type declarations of a class pool that are used in the PRIVATE SECTION of the global class. But technically speaking, this invalidation occurs for all changes in the Class-Relevant Local Definitions area (the CCDEF include). For this reason, the additional area Local Definitions/Implementations (the CCIMP include) exists, which is intended for local type declarations that are only used within the class implementation of the global class, and for the implementation part of local classes. If this area is changed, dependent classes are not invalidated.

To prevent unnecessary new generations of other classes that are based on unwanted technical dependencies, the class-local types must be defined in the class pool at the appropriate positions after changes have been made to the global class:

-   All types used only within the method implementations of the global class should be declared under Local Definitions/Implementations (CCIMP include). The local classes should be implemented here as well.

-   Only those types that can also be referenced in the PRIVATE SECTION should be defined under Class-Relevant Local Definitions (CCDEF include).

Declarations and implementations of a local class are only supposed to be distributed across the areas Local Definitions/Implementations and Class-Relevant Local Definitions if they are to be referenced in the PRIVATE SECTION. However, if the local class is only used within the implementation of the global class, both the declaration and the implementation are to be carried out in the Local Definitions/Implementations.

Note

The rule specified here specializes the general rule [implement global declarations centrally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_declar_guidl.htm "Guideline") with respect to class pools. They are especially oriented toward the external call of methods of their respective global class and are therefore particularly integrated within a dependency network. For this reason, the rule just mentioned cannot apply to its full extent.

Note

[Test classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_class_glosry.htm "Glossary Entry") should only be created in [test includes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_include_glosry.htm "Glossary Entry").


### abeninstance_constructor_guidl.htm

---
title: "Instance Constructor"
description: |
  Background When you define an ABAP class, you specify who creates an instance of this class or who may access the instance constructor of the class. To do this, you use the CREATE addition of the CLASS ... DEFINITION statement. The CREATE PUBLIC addition is the default setting and allows for the ins
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_constructor_guidl.htm"
abapFile: "abeninstance_constructor_guidl.htm"
keywords: ["do", "if", "case", "method", "class", "types", "abeninstance", "constructor", "guidl"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobj_oriented_guidl.htm) → 

Instance Constructor

Background

When you define an ABAP class, you specify who creates an instance of this class or who may access the instance constructor of the class. To do this, you use the CREATE addition of the CLASS ... DEFINITION statement. The CREATE PUBLIC addition is the default setting and allows for the instancing by any user of the class. By specifying CREATE PROTECTED, you can restrict the object creation to the class itself and its subclasses. With the CREATE PRIVATE addition, objects can only be created by the class itself. The restriction of the object creation to the class itself is useful in connection with the [singleton design pattern](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_class_singleton_guidl.htm "Guideline"), for example, where the class itself performs the object creation.

From a technical point of view, the instance constructor can be declared in all visibility sections that are more general or equal to the instantiation specified in the CREATE addition of the CLASS ... DEFINITION statement, using the METHODS constructor statement. However, the actual visibility is controlled by the CREATE addition.

Rule

Declare the instance constructor in the public visibility section.

Always declare the instance constructor of a global class in its public visibility section and independently of the instantiation specified by the CREATE addition in the class definition.

Details

The components of global classes are stored internally, separated according to the visibility section they belong to. Depending on the usage type of the class, only parts of the class are considered by the ABAP Compiler during compilation. This procedure requires that the constructor of a global class is always declared in the public visibility section of the class. For these technical reasons, the instance constructor of a global class is always supposed to be declared in the public visibility section (PUBLIC SECTION). If it is declared in another visibility section, in individual cases this may result in unjustified syntax errors when global classes are used. Exception The technical restrictions mentioned only apply to the processing of global classes. Within local classes, the instance constructor can also be defined in other visibility sections. However, this positioning should correspond with the visibility section specified using the CREATE addition. Such a strategy enables you to use types for the interface of the instance constructor of a local class that are only accessible in a restricted visibility section.

Exception

The technical restrictions mentioned only apply to the processing of global classes. Within local classes, the instance constructor can also be defined in other visibility sections. However, this positioning should correspond with the visibility section specified using the CREATE addition. Such a strategy enables you to use types for the interface of the instance constructor of a local class that are only accessible in a restricted visibility section.
