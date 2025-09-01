  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) →  [CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_definition.htm) → 

PUBLIC SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_shortref.htm)

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_definition.htm) of a class. It defines the public [visibility section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class that are declared after the statement PUBLIC SECTION are accessible from outside the class, in their subclasses, and in the class itself as long as this permitted by the [package concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declaration of a public constant const and access from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls=>const ).