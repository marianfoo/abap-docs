---
title: "FORM, DEFINITION, IMPLEMENTATION - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_definition.htm) Syntax FORM subr DEFINITION  ... . FORM subr IMPLEMENTATION. ... ENDFORM. Effect Obsolete: Defines a subroutine subr. The definition of the subroutine is shared between a declaration part and an i
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_definition_shortref.htm"
abapFile: "abapform_definition_shortref.htm"
keywords: ["do", "if", "abapform", "definition", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FORM, DEFINITION, IMPLEMENTATION, ABAPFORM_DEFINITION_SHORTREF, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

FORM, DEFINITION, IMPLEMENTATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_definition.htm)

Syntax

FORM subr DEFINITION *\[* ... *\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The definition of the subroutine is shared between a declaration part and an implementation part.

Additions   

-   [DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_definition.htm)
    Declaration part of the subroutine. The declaration of the parameter interface is the same as in [FORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_shortref.htm).
-   [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_definition.htm)
    Implementation part of the subroutine. The implementation takes place between FORM and ENDFORM.