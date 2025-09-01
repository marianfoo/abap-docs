---
title: "FORM, parameters"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_shortref.htm) Obsolete Syntax ...  VALUE(p1)  p1   typing(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm)structure(https://help.sap.com/doc/abapdocu_l
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_parameters.htm"
abapFile: "abapform_parameters.htm"
keywords: ["do", "if", "try", "data", "types", "abapform", "parameters"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FORM%2C%20parameters%2C%20ABAPFORM_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FORM, parameters

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_shortref.htm)

Obsolete Syntax

... *{* VALUE(p1) *|* p1 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_structure.htm)*\]*
    *{* VALUE(p2) *|* p2 *}* *\[* [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm)*|*[structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_structure.htm)*\]*
    ...

Effect

Defines the formal parameters p1 p2 ... for subroutines.

The addition typing types a formal parameter p1 p2 .... The syntax of typing is described in [Typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm). The typing of a formal parameter causes the data type to be [checked](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_check.htm) against the typing when an actual parameter is passed. In addition, the typing specifies at which operand positions the formal parameter can be used in the subroutine. If no explicit typing is specified, a formal parameter is typed with the fully generic type any.

VALUE can be used to specify how [values are passed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") for a formal parameter p1 p2 .... If VALUE is not specified, values are [passed by reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

The addition [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapform_structure.htm) can also be used to implement an obsolete form of typing.

Hint

Without an explicit typing, a formal parameter is typed implicitly with the fully generic type any.