  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods.htm) → 

CLASS-METHODS - class\_constructor

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS class\_constructor.

Effect

This statement declares the static constructor class\_constructor of a class. It can only be used in the [public](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the declaration part of a class.

Each class has a predefined method class\_constructor in its public visibility section. Its functions can be implemented class-specifically by explicit declaration. Without explicit declaration, the static constructor is empty.

The static constructor is called automatically exactly once per class and [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") before the class is first accessed. The class is accessed when an instance of the class is created or a static component is addressed using the class component selector. The exception here is addressing a type or a constant of the class.

When a subclass is first accessed, the inheritance tree is searched for the next-highest superclass whose static constructor was not yet called. Then the static constructor of this superclass is executed followed by those of all subsequent subclasses up to the subclass in question. The static constructor must be fully executed, otherwise a runtime error occurs.

Like all static methods, the static constructor can only access the static components of its class. Furthermore, the static constructor cannot explicitly address its own class.

Notes

-   Like instance constructors, static constructors are also an exception to the rule that all public components along a path in the inheritance tree are in one namespace.
    
-   The point at which the static constructor is called has not yet been finalized. It is only possible to ensure that it is called before the class is accessed for the first time.
    
-   A static constructor can call static methods of its class. A method of this type must be implemented accordingly and cannot just rely on the static constructor being executed in full.
    
-   It is not necessary to execute the static constructor to access a type or a constant of a class. This type of access does not result in a call.
    
-   The execution order of static constructors is dependent on the program flow. Static constructors must be implemented so that they can be executed in any order.
    
-   In static constructors, class-based exceptions cannot be declared using RAISING, since it is generally not specified whether the consumer of a class is the first consumer and whether or not this consumer must handle exceptions propagated by the static constructor.
    
-   If a [static component of a superclass](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninheritance_statical.htm) is addressed using the name of a subclass, the superclass is addressed and its static constructor is executed, but not the static constructor of the subclass.
    
-   An unsuccessful dynamic access to a nonexistent component of a class does not count as an access to the class and the static constructor is not executed in this case.
    

Example

When a class is first accessed, the static constructor of this class uses the system field sy-repid to set the static attribute access\_program for the name of the program of an internal session that uses the class first.

CLASS some\_class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA access\_program TYPE sy-repid.
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
  METHOD class\_constructor.
    access\_program = sy-repid.
  ENDMETHOD.
ENDCLASS.