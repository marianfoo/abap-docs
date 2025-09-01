  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Statements in ABAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_statements.htm) → 

ABAP Objects - Statements for Defining Classes and Interfaces

These statements are used to define classes and interfaces and their components. They can be used in any ABAP program where classes and interfaces can be defined.

Statements for Defining Classes

Defining the Declaration Part

CLASS ... DEFINITION ...
...
ENDCLASS ...

Defining the Implementation Part

CLASS ... IMPLEMENTATION ...
...
ENDCLASS ...

Statements for Defining Components of Classes

Statements in the Declaration Part

PUBLIC SECTION.
PROTECTED SECTION.
PRIVATE SECTION.
TYPES ...
INTERFACES ...
ALIASES ...
CONSTANTS ...
CLASS-DATA ...
DATA ...
CLASS-METHODS ...
METHODS ...
CLASS-EVENTS ...
EVENTS ...

Statements in the Implementation Part

METHOD ...
...
ENDMETHOD.

Statements for Defining Interfaces

Declaring the Interface

INTERFACE ...
...
ENDINTERFACE ...

Statements for Declaring Components of Interfaces

The same statements can be used to declare components in interfaces as in the declaration part of classes.

Note

The components of classes or interfaces, that is, their attributes, methods, and events) are declared in their declaration parts. TYPES can also be used to declare local data types. ALIASES can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must be assigned to one of the four [visibility sections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvisibility_section_glosry.htm "Glossary Entry") defined by the corresponding statements.

The implementation part of a class can only contain method implementations between METHOD - ENDMETHOD. In methods, only the [statements for method implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendefining_methods.htm) can be used.

No statements other than those specified above are necessary for defining classes or interfaces and therefore no other statements are allowed between CLASS - ENDCLASS or INTERFACE - ENDINTERFACE outside of methods.

The [stricter syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_strict.htm) in ABAP Objects applies to all statements for class and interface definitions.