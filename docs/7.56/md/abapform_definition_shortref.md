  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  F

FORM, DEFINITION, IMPLEMENTATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapform_definition.htm)

Syntax

FORM subr DEFINITION *\[* ... *\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The definition of the subroutine is shared between a declaration part and an implementation part.

Additions

-   [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapform_definition.htm)
    Declaration part of the subroutine. The declaration of the parameter interface is the same as in [FORM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapform_shortref.htm).
-   [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapform_definition.htm)
    Implementation part of the subroutine. The implementation takes place between FORM and ENDFORM.