  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

CLEAR - WITH NULL

[Quick Reference](javascript:call_link\('abapclear_shortref.htm'\))

Obsolete Syntax

CLEAR dobj WITH NULL.

Effect

This variant of the statement [CLEAR](javascript:call_link\('abapclear.htm'\)), which is not allowed in ABAP Objects, replaces all bytes in dobj with the value hexadecimal 0. In this case, the data object dobj must be flat.

Note

The addition WITH NULL should only be used for byte-like data objects and should therefore be replaced by the addition CLEAR WITH val, which offers a higher degree of security in this context.

Bad Example

CLEAR f WITH NULL.

Good Example

CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL.
CLEAR f WITH hex.