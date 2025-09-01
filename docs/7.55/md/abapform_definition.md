---
title: "FORM, DEFINITION, IMPLEMENTATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_definition_shortref.htm) Obsolete Syntax FORM subr DEFINITION TABLES table_parameters(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_tables.htm) USING parameters(https://help.s
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_definition.htm"
abapFile: "abapform_definition.htm"
keywords: ["do", "try", "abapform", "definition"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_subroutines.htm) → 

FORM, DEFINITION, IMPLEMENTATION

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_definition_shortref.htm)

Obsolete Syntax

FORM subr DEFINITION
          *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

In this variant of the statement [FORM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform.htm) the definition of a subroutine subr is shared between a declaration part and an implementation part:

-   The statement FORM subr DEFINITION declares the subroutine and its parameter interface. The meaning of the additions is the same as in [FORM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform.htm). A subroutine declaration of this type is part of the [global declaration part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program.
    

-   The subroutine is implemented between the statements FORM subr IMPLEMENTATION and ENDFORM. These statements define a processing block in the implementation part of the program.

Hint

This variant of defining a subroutine is not supported by all tools and should be avoided.