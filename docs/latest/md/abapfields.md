  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Declaration and Loading](javascript:call_link\('abenaddress_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELDS%2C%20ABAPFIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIELDS

[Short Reference](javascript:call_link\('abapfields_shortref.htm'\))

Obsolete Syntax

FIELDS dobj.

Effect

This statement, which is forbidden in classes, addresses a data object dobj of the program. A warning from the extended program check can be avoided if the data object dobj is addressed in the program dynamically and not statically.

Hint

This statement, which is forbidden in classes, is replaced by the [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry") ##NEEDED.