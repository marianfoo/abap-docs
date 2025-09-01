  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLEAR%2C%20WITH%20NULL%2C%20ABAPCLEAR_WITH_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLEAR, WITH NULL

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_shortref.htm)

Obsolete Syntax

CLEAR dobj WITH NULL.

Effect

This variant of the statement [CLEAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm), which is not allowed in ABAP Objects, replaces all bytes in dobj with the value hexadecimal 0. In this case, the data object dobj must be flat.

Hint

The addition WITH NULL should only be used for byte-like data objects and should therefore be replaced by the addition CLEAR WITH val, which offers a higher degree of security in this context.

Bad Example

CLEAR f WITH NULL.

Good Example

CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL.
CLEAR f WITH hex.