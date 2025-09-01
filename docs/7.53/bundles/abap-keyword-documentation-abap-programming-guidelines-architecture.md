# ABAP Keyword Documentation / ABAP Programming Guidelines / Architecture

Included pages: 6


### abenstatic_class_singleton_guidl.htm

---
title: "Static Classes and Singletons"
description: |
  Background The classes of ABAP Objects support two types of components: -   Instance components (instance attributes, instance events and instance methods). You can only address the instance components of a class using instances of the class (objects). -   Static components (static attributes, stati
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_class_singleton_guidl.htm"
abapFile: "abenstatic_class_singleton_guidl.htm"
keywords: ["delete", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenstatic", "singleton", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobj_oriented_guidl.htm) → 

Static Classes and Singletons

Background

The classes of ABAP Objects support two types of components:

-   Instance components (instance attributes, instance events and instance methods). You can only address the instance components of a class using instances of the class (objects).

-   Static components (static attributes, static events and static methods). The static components of a class can be addressed using an object and also using the name of the class. This means they can be used independently of a class instance.

A class that only contains static components and no instance components is referred to as a static class. A global static class is loaded once with its class pool into the current [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Like every ABAP program, it cannot be explicitly deleted from the session. The static methods (declared using CLASS-METHODS) of a class cannot be redefined in subclasses.

A singleton is a design pattern where the class has the task of creating objects. The class ensures that only one object exists for every internal session that is made available to consumers.

Rule

Do not use static classes

Use objects instead of static classes. If you do not want multiple instantiation, you can use singletons.

Details

If no real object-oriented design exists that would use the multiple instantiation of classes, for example, this often produces classes that only contain static methods (declared using CLASS-METHODS), when [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") are used. These methods are then used as simple procedures. However, even if multiple instantiation is not explicitly required, object creation is preferable to the use of static classes, for the reasons listed below. You can use the singleton design pattern to prevent multiple instantiation:

-   Explicit object creation is essential for object-oriented programming. Static classes, however, are implicitly loaded the first time they are used, and the corresponding static constructor — if available — is executed. They are persisted in the memory for as long as the current internal session exists. Therefore, if you use static classes, you cannot actually control the time of initialization. You have no way of releasing the memory occupied by the attributes, as soon as the class function is no longer required.

-   Another important argument against the use of static classes are the limited functions of the static constructor, in comparison to an instance constructor. A static constructor has no parameter interface and cannot propagate any [exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_handling_guidl.htm "Guideline"). This is why you cannot always respond appropriately to an error situation in the static constructor, which can cause a runtime error in extreme cases. However, the exceptions of an instance constructor can be handled.

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

In the above example, the get\_instance method is used to return the object reference to the object created with the first call. Therefore, this example would appear to violate the rule [modularize rather than atomize](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodularization_guidl.htm "Guideline"). This rule states that no method should be created in ABAP that only returns the value of an attribute. However, this objection is not justified here, because the main task of the get\_instance method is to enable the object consumer to control the time of object creation. This is necessary to enable the consumer to respond (in the usual way) to any exceptional situation during the object creation process.

In special cases, where object creation is performed without parameters and is always successful, you can omit the get\_instance method and publish the object reference using a READ-ONLY attribute. In this case, the object is created within the static constructor. Therefore, this approach is still afflicted with some of the problems of static classes described in other sections.


### abenuse_exception_class_guidl.htm

---
title: "Using Exception Classes"
description: |
  Background The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_exception_class_guidl.htm"
abapFile: "abenuse_exception_class_guidl.htm"
keywords: ["do", "if", "method", "class", "abenuse", "exception", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_handling_guidl.htm) → 

Using Exception Classes

Background

The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You can divide an exception class into multiple subexceptions by creating multiple exception texts. Subclasses of exception classes can be used to make the information even more specific.

Rule

Only use suitable exception classes

When describing an error situation, only use exception classes with the correct category and name, the appropriate attributes and texts, and which contain the correct documentation. Do not reuse inappropriate exception classes.

Details

Reusing existing exception classes with the wrong content removes all benefits of freely definable exception classes. The new exception object cannot describe the exception situation adequately. It also makes it very difficult to maintain and analyze the code. In particular, you run a great risk of handling the exception incorrectly. This is because a caller layer higher up in the hierarchy never expects the exceptions it handles to be raised by a situation with the wrong semantics.

The following procedure is recommended for raising correct exceptions, where you must take care that the right [exception category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexception_category_guidl.htm "Guideline") is used:

1.  Search for an existing exception class that is released for use in the current concept (and as part of the package concept) and which matches that error situation exactly.
2.  Make an existing, almost ideal exception class more specific by passing on and/or adding new exception texts.
3.  Create an new ideal exception class, possibly as a part of a predefined inheritance hierarchy.

Bad Example

The following source code shows the incorrect use of the system class cx\_sy\_arithmetic\_overflow (which exists in every system) for an application-specific exception situation. This system exception should usually only be raised by the ABAP runtime environment when an arithmetic calculation takes place.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_sy\_arithmetic\_overflow.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows how an application-specific exception class is used that has been created especially for the situation and whose name reflects the topic.

CLASS cx\_warehouse\_out\_of\_capacity DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING cx\_warehouse\_out\_of\_capacity.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_warehouse\_out\_of\_capacity.
    ...
  ENDMETHOD.
ENDCLASS.


### abenuser_interfaces_guidl.htm

---
title: "User Interfaces"
description: |
  The user interface is the interface between a (human) user and a machine, in this case between the user and the ABAP program that is running. In the ABAP environment, graphical user interfaces (GUIs) are used which can be operated using a keyboard, mouse, or other input devices. They are based on as
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_interfaces_guidl.htm"
abapFile: "abenuser_interfaces_guidl.htm"
keywords: ["select", "do", "case", "class", "abenuser", "interfaces", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) → 

User Interfaces

The user interface is the interface between a (human) user and a machine, in this case between the user and the ABAP program that is running. In the ABAP environment, graphical user interfaces (GUIs) are used which can be operated using a keyboard, mouse, or other input devices. They are based on assorted interface technologies and use either SAP's own SAP GUI or are Web-based technologies that create HTML pages displayed using Web browsers.

-   [Selecting the User Interface Technology](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_tech_guidl.htm "Guideline")

-   [Encapsulating Classic User Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencap_class_interf_guidl.htm "Guideline")

-   [Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_guidl.htm "Guideline")

-   [Accessibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccessibility_guidl.htm "Guideline")

Continue
[Selecting the User Interface Technology](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_tech_guidl.htm)
[Encapsulating Classic User Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencap_class_interf_guidl.htm)
[Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_guidl.htm)
[Accessibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccessibility_guidl.htm)


### abenuser_interfaces_guidl.htm

---
title: "User Interfaces"
description: |
  The user interface is the interface between a (human) user and a machine, in this case between the user and the ABAP program that is running. In the ABAP environment, graphical user interfaces (GUIs) are used which can be operated using a keyboard, mouse, or other input devices. They are based on as
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_interfaces_guidl.htm"
abapFile: "abenuser_interfaces_guidl.htm"
keywords: ["select", "do", "case", "class", "abenuser", "interfaces", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) → 

User Interfaces

The user interface is the interface between a (human) user and a machine, in this case between the user and the ABAP program that is running. In the ABAP environment, graphical user interfaces (GUIs) are used which can be operated using a keyboard, mouse, or other input devices. They are based on assorted interface technologies and use either SAP's own SAP GUI or are Web-based technologies that create HTML pages displayed using Web browsers.

-   [Selecting the User Interface Technology](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_tech_guidl.htm "Guideline")

-   [Encapsulating Classic User Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencap_class_interf_guidl.htm "Guideline")

-   [Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_guidl.htm "Guideline")

-   [Accessibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccessibility_guidl.htm "Guideline")

Continue
[Selecting the User Interface Technology](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_tech_guidl.htm)
[Encapsulating Classic User Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencap_class_interf_guidl.htm)
[Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_guidl.htm)
[Accessibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccessibility_guidl.htm)


### abenuse_shared_memory_guidl.htm

---
title: "Using the Shared Memory"
description: |
  Background The shared memory of an AS Instance is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows: -   To buffer data from database tables implicitly using table buffering(https://help.sap.com/doc/ab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_shared_memory_guidl.htm"
abapFile: "abenuse_shared_memory_guidl.htm"
keywords: ["do", "if", "try", "method", "class", "data", "internal-table", "exception-handling", "abenuse", "shared", "memory", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_guidl.htm) → 

Using the Shared Memory

Background

The shared memory of an AS Instance is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows:

-   To buffer data from database tables implicitly using [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry"), which can be determined when defining the tables in ABAP Dictionary

-   To explicitly store data clusters in the cross-transaction application buffer using the statements EXPORT TO SHARED MEMORY or EXPORT TO SHARED BUFFER

-   To explicitly handle (data) objects stored there using shared objects, which are created using the addition AREA HANDLE of the statements CREATE OBJECT or CREATE DATA

Rule

Implement the explicit buffering in the shared memory using shared objects

Work with shared objects to explicitly use the shared memory for cross-program data buffering. The appropriate application scenarios are shared buffer and exclusive buffer. The access to shared objects should be wrapped in loader and broker classes.

Details

For explicit access to the shared memory, shared objects (CREATE AREA HANDLE) provide the following advantages compared to the cross-transaction application buffer (SHARED MEMORY, SHARED BUFFER):

-   Any number of (data) objects can be saved, including their mutual interdependencies.

-   (Data) objects can be used in the shared objects memory just like objects in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Technically, the shared objects memory can be considered an extension of the internal session during the time the memory is bound to it.

-   Multiple programs can access the same memory area simultaneously without having to copy data to their own internal session.

Scenarios in which shared objects can be used efficiently include the following:

-   Usage as a shared buffer
    A shared buffer contains a large data set on which many consumers can perform reads but which is changed rarely and is usually provided by a single program.

-   Usage as an exclusive buffer
    An exclusive buffer contains data that are accessed by only one program but that is maintained for various programs across transaction boundaries.

The shared memory should not be used for different purposes, if, for example this results in many modifying accesses of parallel consumers, since the current locking concept does not support this.

Access to the shared memory should be encapsulated in specific classes, and application programs should access the shared memory using these classes only. Normally, there are two classes, which can also be combined into one class:

-   A loader for creating and changing area instances

-   A broker for reads on area instances

Such wrapping ensures the following:

-   Central management of the connection of the internal session to the shared objects memory and the associated locks

-   Central exception handling and respective fallback strategies (for example, if the shared objects memory overflows, it is possible to ensure that objects in the internal session are used without the using program having to be notified of this).

-   Potential authorization checks

This makes the application program more legible, more robust, and easier to maintain.

Bad Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the cross-transaction application buffer, is imported to a program. To store it locally, a local data object is required. Tasks like these can be performed more efficiently by using shared objects.

"Get index page from data cluster
IMPORT index\_html = index\_html
       FROM SHARED MEMORY docutables(...) ID ...
ASSERT sy-subrc = 0.

Good Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the shared objects memory, can be accessed within program. By calling a get method, the corresponding broker ensures that its root attribute refers to a shared object that contains the table. A local data object is then not required to access the internal table in the program.

"Get index page from shared memory
cl\_docu\_tables\_broker=>get\_index\_table( ).
ASSERT cl\_docu\_tables\_broker=>root->index\_html
       IS NOT INITIAL.


### abenuse_shared_objects_guidl.htm

---
title: "Using Shared Objects"
description: |
  Background Access to shared objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when the
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_shared_objects_guidl.htm"
abapFile: "abenuse_shared_objects_guidl.htm"
keywords: ["do", "if", "case", "method", "class", "data", "abenuse", "shared", "objects", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_guidl.htm) → 

Using Shared Objects

Background

Access to [shared objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) is regulated by lock mechanisms. The individual locks are stored as administrative information with the area instances in the shared memory and are set and evaluated when they are accessed using area handles.

Rule

Shared buffer and exclusive buffer are suitable application scenarios for shared objects.

The access to shared objects should be wrapped in loader and broker classes.

Details

How locks work depends on how shared objects are used as follows:

-   Scenario 1 - Use as a shared buffer

A shared buffer is a data store that is rarely changed (once a day up to a maximum of once an hour), usually by a single consumer only. The amount of data can be very large. In general, many consumers can perform reads on a shared buffer at the same time. A typical use of a shared buffer is to store a catalog.

-   Scenario 2 - Use as an exclusive buffer

An exclusive buffer is a data store where only one consumer performs reads or writes or, in rare cases, where one consumer performs writes and another performs reads. The data stored in an exclusive buffer should be available longer term, that is, longer than a program’s lifetime. A typical use of an exclusive buffer is to store a shopping basket that is filled initially by the shopper and then read by the salesperson later.

General shared memory programming is not possible. The current lock logic does not enable you to set specific locks for the following requirements:

-   Many parallel reads and writes

-   Frequent writes

-   Split into modifiable and non-modifiable areas

Although the lock logic makes the first two points technically possible, they are not practical because most accesses would be rejected.

Wrapping

It is recommended that application programs do not access the shared objects memory directly. Instead reads on the shared objects should be wrapped in a wrapping class, whose methods are accessed by the individual programs. The [area constructor class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_constructor_class.htm) can be used as the wrapping class, for example.

Wrapping has the following advantages:

-   Central administration of an area in the shared memory

-   An application program does not need to worry about area handles and locks.

-   Central administration of locks

-   Option to implement central authorization checks
