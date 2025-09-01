  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform.htm) → 

FORM, parameters

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_shortref.htm)

Obsolete Syntax

... *{* VALUE(p1) *|* p1 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_structure.htm)*\]*
    *{* VALUE(p2) *|* p2 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_structure.htm)*\]*
    ...

Effect

Defines the formal parameters p1 p2 ... for subroutines.

The addition typing types a formal parameter p1 p2 .... The syntax of typing is described in [Typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_syntax.htm). The typing of a formal parameter causes the data type to be [checked](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_check.htm) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type any.

VALUE can be used to specify how [values are passed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm "Glossary Entry") for a formal parameter p1 p2 .... If VALUE is not specified, values are [passed by reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

The addition [structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapform_structure.htm) can also be used to implement an obsolete form of typing.

Hint

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.