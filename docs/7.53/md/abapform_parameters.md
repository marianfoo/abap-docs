  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Subroutines](javascript:call_link\('abenabap_subroutines.htm'\)) →  [FORM](javascript:call_link\('abapform.htm'\)) → 

FORM - parameters

[Quick Reference](javascript:call_link\('abapform_shortref.htm'\))

Obsolete Syntax

... *{* VALUE(p1) *|* p1 *}* *\[* [typing](javascript:call_link\('abentyping_syntax.htm'\))*|*[structure](javascript:call_link\('abapform_structure.htm'\))*\]*
    *{* VALUE(p2) *|* p2 *}* *\[* [typing](javascript:call_link\('abentyping_syntax.htm'\))*|*[structure](javascript:call_link\('abapform_structure.htm'\))*\]*
    ...

Effect

Defines the formal parameters p1 p2 ... for subroutines.

The addition typing types a formal parameter p1 p2 .... The syntax of typing is described in [Typing](javascript:call_link\('abentyping_syntax.htm'\)). The typing of a formal parameter causes the data type to be [checked](javascript:call_link\('abentyping_check.htm'\)) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type any.

VALUE can be used to specify how [values are passed](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") for a formal parameter p1 p2 .... If VALUE is not specified, values are [passed by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").

The addition [structure](javascript:call_link\('abapform_structure.htm'\)) can also be used to implement an obsolete form of typing.

Note

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.