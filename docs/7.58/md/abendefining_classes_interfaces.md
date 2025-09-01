  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Statements in ABAP Objects](javascript:call_link\('abenabap_objects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Statements%20for%20Defining%20Classes%20and%20Interfaces%2C%20ABENDEFINING_CLASSES_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion%20for%20improvement:)

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

The components of classes or interfaces, that is, their attributes, methods, and events) are declared in their declaration parts. TYPES can also be used to declare local data types. ALIASES can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must be assigned to one of the four [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") defined by the corresponding statements.

The implementation part of a class can only contain method implementations between METHOD - ENDMETHOD. In methods, only the [statements for method implementations](javascript:call_link\('abendefining_methods.htm'\)) can be used.

No statements other than those specified above are necessary for defining classes or interfaces and therefore no other statements are allowed between CLASS - ENDCLASS or INTERFACE - ENDINTERFACE outside of methods.

The [stricter syntax](javascript:call_link\('abenabap_objects_strict.htm'\)) in ABAP Objects applies to all statements for class and interface definitions.