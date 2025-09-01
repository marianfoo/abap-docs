  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLEAR, WITH NULL, ABAPCLEAR_WITH_NULL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CLEAR, WITH NULL

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear_shortref.htm)

Obsolete Syntax

CLEAR dobj WITH NULL.

Effect

This variant of the statement [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm), which is not allowed in ABAP Objects, replaces all bytes in dobj with the value hexadecimal 0. In this case, the data object dobj must be flat.

Hint

The addition WITH NULL should only be used for byte-like data objects and should therefore be replaced by the addition CLEAR WITH val, which offers a higher degree of security in this context.

Bad Example

CLEAR f WITH NULL.

Good Example

CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL.
CLEAR f WITH hex.