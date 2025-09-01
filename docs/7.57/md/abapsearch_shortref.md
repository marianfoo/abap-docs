  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SEARCH, ABAPSEARCH_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

SEARCH - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm)

Syntax

SEARCH dobj*|*itab FOR pattern
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
      *\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*
      *\[*ABBREVIATED*\]*
      *\[*AND MARK*\]*.

Effect

Obsolete: Searches the data object dobj or the internal table itab for the search pattern specified in pattern.

Additions   

-   [IN *{*CHARACTER*|*BYTE*}* MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm)
    Specifies character string or byte string processing.
-   [*\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch_itab.htm)
    Restricts the search to the subarea between the positions p1 and p2 of dobj or to the lines between p1 and p2 in itab.
-   [ABBREVIATED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm)
    Allows an abbreviated pattern to be specified in pattern.
-   [AND MARK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm)
    Converts a found pattern in dobj or itab to uppercase.