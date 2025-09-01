  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Subroutines](javascript:call_link\('abenabap_subroutines.htm'\)) →  [FORM](javascript:call_link\('abapform.htm'\)) → 

FORM, STRUCTURE

[Short Reference](javascript:call_link\('abapform_shortref.htm'\))

Obsolete Syntax

... STRUCTURE struc ...

Effect

A formal parameter p1 p2 ... of a subroutine can be specified with the addition STRUCTURE instead of [typing](javascript:call_link\('abentyping_syntax.htm'\)), where struc must be a program-local structure (data object, no data type) or a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") from ABAP Dictionary. This structure is then applied to the formal parameter ([casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry")) and individual components can be accessed in the subroutine.

When an actual parameter is passed to a formal parameter typed using STRUCTURE, the actual parameter must be at least as long as the formal parameter:

-   In the case of a structured actual parameter, its [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must match the fragment view of the corresponding initial part of struc.

-   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.

Hint

Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE or LIKE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) and the addition CASTING.

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