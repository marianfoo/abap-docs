  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS, DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

PUBLIC SECTION

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class and defines the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class. All components of the class that are declared in the area after the statement PUBLIC SECTION can be addressed from outside the class, in their subclasses, and in the class itself, provided this is allowed by the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declaration of a public constant const and accesses it from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls=>const ).