  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FORM%2C%20DEFINITION%2C%20IMPLEMENTATION%2C%20ABAPFORM_DEFINITION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FORM, DEFINITION, IMPLEMENTATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform_definition.htm)

Syntax

FORM subr DEFINITION *\[* ... *\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The definition of the subroutine is shared between a declaration part and an implementation part.

Additions   

-   [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform_definition.htm)
    Declaration part of the subroutine. The declaration of the parameter interface is the same as in [FORM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform_shortref.htm).
-   [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapform_definition.htm)
    Implementation part of the subroutine. The implementation takes place between FORM and ENDFORM.