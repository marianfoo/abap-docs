  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Declaration and Loading](javascript:call_link\('abenaddress_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FIELDS, ABAPFIELDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

FIELDS

[Short Reference](javascript:call_link\('abapfields_shortref.htm'\))

Obsolete Syntax

FIELDS dobj.

Effect

This statement, which is forbidden in classes, addresses a data object dobj of the program. A warning from the extended program check can be avoided if the data object dobj is addressed in the program dynamically and not statically.

Hint

This statement, which is forbidden in classes, is replaced by the [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry") ##NEEDED.