---
title: "FORM, STRUCTURE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_shortref.htm) Obsolete Syntax ... STRUCTURE struc ... Effect A formal parameter p1 p2 ... of a subroutine can be specified with the addition STRUCTURE instead of typing(https://help.sap.com/doc/abapdocu_757_index
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_structure.htm"
abapFile: "abapform_structure.htm"
keywords: ["do", "if", "case", "try", "data", "field-symbol", "abapform", "structure"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FORM, STRUCTURE, ABAPFORM_STRUCTURE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

FORM, STRUCTURE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_shortref.htm)

Obsolete Syntax

... STRUCTURE struc ...

Effect

A formal parameter p1 p2 ... of a subroutine can be specified with the addition STRUCTURE instead of [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_syntax.htm), where struc must be a program-local structure (data object, no data type) or a [flat structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_structure_glosry.htm "Glossary Entry") from the ABAP Dictionary. This structure is then applied to the formal parameter ([casting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencast_casting_glosry.htm "Glossary Entry")) and individual components can be accessed in the subroutine.

When an actual parameter is passed to a formal parameter typed using STRUCTURE, the actual parameter must be at least as long as the formal parameter:

-   In the case of a structured actual parameter, its [fragment view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match the fragment view of the corresponding initial part of struc.
-   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.

Hint

Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE or LIKE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) and the addition CASTING.

Example

This example assigns the character string text the structure line.

DATA: BEGIN OF line,
        col1 TYPE c LENGTH 1,
        col2 TYPE c LENGTH 1,
      END OF line.
DATA text LENGTH 2 TYPE c VALUE 'XY'.
PERFORM demo USING text.
FORM demo USING p STRUCTURE line.
  cl\_demo\_output=>display\_data( p ).
ENDFORM.