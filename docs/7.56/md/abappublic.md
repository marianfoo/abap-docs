  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) →  [CLASS, DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) → 

PUBLIC SECTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_shortref.htm)

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) of a class and defines the public [visibility section](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class that are declared in the area after the statement PUBLIC SECTION can be addressed from outside the class, in their subclasses, and in the class itself, provided this is allowed by the [package concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declaration of a public constant const and accesses it from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls=>const ).