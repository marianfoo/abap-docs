  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Subroutines](javascript:call_link\('abenabap_subroutines.htm'\)) → 

FORM, DEFINITION, IMPLEMENTATION

[Short Reference](javascript:call_link\('abapform_definition_shortref.htm'\))

Obsolete Syntax

FORM subr DEFINITION
          *\[*TABLES [table\_parameters](javascript:call_link\('abapform_tables.htm'\))*\]*
          *\[*USING [parameters](javascript:call_link\('abapform_parameters.htm'\))*\]*
          *\[*CHANGING [parameters](javascript:call_link\('abapform_parameters.htm'\))*\]*
          *\[*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*\]*.
FORM subr IMPLEMENTATION.
  ...
ENDFORM.

Effect

In this variant of the statement [FORM](javascript:call_link\('abapform.htm'\)) the definition of a subroutine subr is shared between a declaration part and an implementation part:

-   The statement FORM subr DEFINITION declares the subroutine and its parameter interface. The meaning of the additions is the same as in [FORM](javascript:call_link\('abapform.htm'\)). A subroutine declaration of this type is part of the [global declaration part](javascript:call_link\('abenglobal_declaration_sect_glosry.htm'\) "Glossary Entry") of a program.
    

-   The subroutine is implemented between the statements FORM subr IMPLEMENTATION and ENDFORM. These statements define a processing block in the implementation part of the program.

Hint

This variant of defining a subroutine is not supported by all tools and should be avoided.