---
title: "PUBLIC SECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_shortref.htm) Syntax PUBLIC SECTION. Effect This statement can only be used in the declaration part(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) of a class and d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abappublic.htm"
abapFile: "abappublic.htm"
keywords: ["do", "if", "try", "method", "class", "abappublic"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass.htm) →  [CLASS, DEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PUBLIC%20SECTION%2C%20ABAPPUBLIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PUBLIC SECTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_shortref.htm)

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) of a class and defines the public [visibility section](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class that are declared in the area after the statement PUBLIC SECTION can be addressed from outside the class, in their subclasses, and in the class itself, provided this is allowed by the [package concept](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declaration of a public constant const and accesses it from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display( cls=>const ).
  ENDMETHOD.
ENDCLASS.