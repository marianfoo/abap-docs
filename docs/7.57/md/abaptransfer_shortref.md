  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  T

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRANSFER, ABAPTRANSFER_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

TRANSFER - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptransfer.htm)

Syntax

TRANSFER dobj TO dset *\[*LENGTH len*\]*
                      *\[*NO END OF LINE*\]*.

Effect

Transfers the data of the data object dobj to the file specified in dset.

Additions   

-   LENGTH len
    Restricts the number of characters or bytes to be transferred to len.
-   NO END OF LINE
    Prevents the attachment of an end-of-line marker for text files or legacy text files.