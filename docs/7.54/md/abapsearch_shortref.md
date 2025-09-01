  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SEARCH - Quick reference

[Reference](javascript:call_link\('abapsearch-.htm'\))

Syntax

SEARCH dobj*|*itab FOR pattern
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
      *\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*
      *\[*ABBREVIATED*\]*
      *\[*AND MARK*\]*.

Effect

Obsolete: Searches the data object dobj or the internal table itab for the search pattern specified in pattern.

Additions

-   [IN *{*CHARACTER*|*BYTE*}* MODE](javascript:call_link\('abapsearch-.htm'\))
    Specifies character string or byte string processing.
    
-   [*\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*](javascript:call_link\('abapsearch_itab.htm'\))
    Restricts the search to the subarea between the positions p1 and p2 of dobj or to the rows between p1 and p2 in itab.
    
-   [ABBREVIATED](javascript:call_link\('abapsearch-.htm'\))
    Allows an abbreviated pattern to be specified in pattern.
    
-   [AND MARK](javascript:call_link\('abapsearch-.htm'\))
    Converts a found pattern in dobj or itab to uppercase.