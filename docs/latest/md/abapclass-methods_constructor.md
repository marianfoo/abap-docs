---
title: "Syntax"
description: |
  CLASS-METHODS class_constructor. Effect This statement declares the static constructor class_constructor of a class. It can only be used in the public(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm 'Glossary Entry') visibility section(https://help.sap.com
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_constructor.htm"
abapFile: "abapclass-methods_constructor.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abapclass", "methods", "constructor"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20class_constructor%2C%20ABAPCLASS-METHODS_CONSTRUCTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-METHODS, class\_constructor

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS class\_constructor.

Effect

This statement declares the static constructor class\_constructor of a class. It can only be used in the [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the declaration part of a class.

Each class has a predefined method class\_constructor in its public visibility section. Its functions can be implemented class-specifically by explicit declaration. Without explicit declaration, the static constructor is empty.

The static constructor is called automatically exactly once per class and [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") before the class is first accessed. Access to a class is the generation of an instance of the class or a static component using the class component selector, with the exception of is addressing a type or a constant of the class.

When a subclass is first accessed, the inheritance tree is searched for the next-highest superclass whose static constructor was not yet called. Afterwards, the static constructor of this superclass is called followed by those of all subsequent subclasses up to the addressed subclass. The static constructor must be fully executed, otherwise a runtime error occurs.

Like all static methods, the static constructor can only access the static components of its class. Furthermore, the static constructor must not explicitly address its own class.

Hints

-   Like instance constructors, static constructors are also an exception to the rule that all public components along a path in the inheritance tree are in one namespace.
-   The time of execution of the static constructor is not fixed, but it is definitely called before the class is first accessed.
-   A static constructor can call static methods of its class. Such a method must be implemented accordingly and must not rely on the static constructor being executed completely.
-   It is not necessary to execute the static constructor to access a type or a constant of a class. This type of access therefore does not result in a call.
-   The execution order of static constructors is dependent on the program flow. Static constructors must be implemented so that they can be executed in any order.
-   In static constructors, class-based exceptions cannot be declared using RAISING, since it is generally not determined whether the user of a class is the first user and whether or not this user must handle exceptions propagated by the static constructor.
-   If a [static component of a superclass](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninheritance_statical.htm) is addressed using the name of a subclass, the superclass is addressed and its static constructor is executed, but not the static constructor of the subclass.
-   An unsuccessful dynamic access to a nonexistent component of a class does not count as an access to the class and the static constructor is not executed in this case.
-   The static constructor should only be used according to its purpose to initialize global class data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions.

Example

When a class is first accessed, the static constructor of the class sets static attributes to the current date and time.

CLASS some\_class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      start\_time TYPE t,
      start\_date TYPE d.
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
  METHOD class\_constructor.
    CONVERT UTCLONG utclong\_current( )
            INTO DATE start\_date
                 TIME start\_time
            TIME ZONE 'UTC'.
  ENDMETHOD.
ENDCLASS.