  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) →  [CLASS - DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) → 

PUBLIC SECTION

[Quick Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](javascript:call_link\('abapclass_definition.htm'\)) of a class. It defines the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the class class. All components of the class that are declared after the statement PUBLIC SECTION are accessible from outside the class, in their subclasses, and in the class itself as long as this permitted by the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declaration of a public constant const and access from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls=>const ).