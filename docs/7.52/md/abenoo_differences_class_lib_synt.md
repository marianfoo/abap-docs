  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Statements in ABAP Objects](javascript:call_link\('abenabap_objects_differences.htm'\)) → 

Statements for Defining Classes and Interfaces

The following statements are used to define classes and interfaces and their components. They can be used in any ABAP program where class and interface definitions are allowed.

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

In interfaces, the same statements can be used to declare both components as used in the declaration part of classes.

Note

The components of classes or interfaces (their attributes, methods, and events) are declared in their declaration parts. TYPES can also be used to declare local data types. ALIASES can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must belong to one of the four [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") introduced by the relevant statements.

The implementation part of a class can only contain method implementations between METHOD - ENDMETHOD blocks. In methods, only the [statements for method implementations](javascript:call_link\('abenoo_differences_methods.htm'\)) can be used.

No statements other than those specified above are necessary for defining classes or interfaces. Consequently, no other statements are allowed between CLASS - ENDCLASS or INTERFACE - ENDINTERFACE, except in methods.

The [stricter syntax](javascript:call_link\('abenoo_differences_obsolete.htm'\)) in ABAP Objects applies to all class and interface definitions.