  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensyntax_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Statement%20Structuring%2C%20ABENTOKENIZATION_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.