  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

FORM - DEFINITION, IMPLEMENTATION - Quick reference

[Reference](javascript:call_link\('abapform_definition.htm'\))

Syntax

FORM subr DEFINITION *\[* ... *\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The definition of the subroutine is shared between a declaration part and an implementation part.

Additions

-   [DEFINITION](javascript:call_link\('abapform_definition.htm'\))
    Declaration part of the subroutine. The declaration of the parameter interface is the same as in [FORM](javascript:call_link\('abapform_shortref.htm'\)).
    
-   [IMPLEMENTATION](javascript:call_link\('abapform_definition.htm'\))
    Implementation part of the subroutine. The implementation takes place between FORM and ENDFORM.