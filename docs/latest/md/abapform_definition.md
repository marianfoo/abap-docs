---
title: "FORM, DEFINITION, IMPLEMENTATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_definition_shortref.htm) Obsolete Syntax FORM subr DEFINITION TABLES table_parameters(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_tables.htm) USING parameters(http
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_definition.htm"
abapFile: "abapform_definition.htm"
keywords: ["do", "if", "try", "abapform", "definition"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_subroutines.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FORM%2C%20DEFINITION%2C%20IMPLEMENTATION%2C%20ABAPFORM_DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FORM, DEFINITION, IMPLEMENTATION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_definition_shortref.htm)

Obsolete Syntax

FORM subr DEFINITION
          *\[*TABLES [table\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_tables.htm)*\]*
          *\[*USING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_parameters.htm)*\]*
          *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_parameters.htm)*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

In this variant of the statement [FORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform.htm) the definition of a subroutine subr is shared between a declaration part and an implementation part:

-   The statement FORM subr DEFINITION declares the subroutine and its parameter interface. The meaning of the additions is the same as in [FORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform.htm). A subroutine declaration of this type is part of the [global declaration part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program.
-   The subroutine is implemented between the statements FORM subr IMPLEMENTATION and ENDFORM. These statements define a processing block in the implementation part of the program.

Hint

This variant of defining a subroutine is not supported by all tools and should be avoided.