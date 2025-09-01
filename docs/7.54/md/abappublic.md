---
title: "PUBLIC SECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_shortref.htm) Syntax PUBLIC SECTION. Effect This statement can only be used in the declaration part(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) of a class. It defines the
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abappublic.htm"
abapFile: "abappublic.htm"
keywords: ["select", "do", "try", "method", "class", "abappublic"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm) →  [CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) → 

PUBLIC SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_shortref.htm)

Syntax

PUBLIC SECTION.

Effect

This statement can only be used in the [declaration part](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) of a class. It defines the public [visibility section](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of the class class. All components of the class that are declared after the statement PUBLIC SECTION are accessible from outside the class, in their subclasses, and in the class itself as long as this permitted by the [package concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpackage_concept_glosry.htm "Glossary Entry"). Public methods in particular can be redefined in subclasses.

Example

Declares a public constant const and accesses it from outside of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CONSTANTS const TYPE string VALUE \`I'm public\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( cls=>const ).