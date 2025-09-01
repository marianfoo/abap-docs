  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Extended Concept for Field Symbols in Release 4.0

The extended field symbol concept can be summarized as follows:

-   The behavior of [typed and untyped field symbols](javascript:call_link\('abapfield-symbols.htm'\)) has been standardized.
    

-   New predicate expression [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\))
    

-   New statement [UNASSIGN <fs>](javascript:call_link\('abapunassign.htm'\))
    

Like typed field symbols, untyped field symbols are now, by default, not assigned. This means that writes in either case (like <fs> = f.) produce a runtime error.
At the same time, reads cannot be performed on typed unassigned field symbols.
Reads on untyped unassigned field symbols are only allowed for the sake of compatibility (default value SPACE).
Unassigned field symbols, however, should no longer be accessed.

The new predicate expression [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) can be used to query whether a field has already been assigned to the field symbol <fs>.

The new statement [UNASSIGN <fs>](javascript:call_link\('abapunassign.htm'\)) sets the field symbol <fs> so that it is not pointing to a field.

The expression [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)), and the [ASSIGN](javascript:call_link\('abapassign.htm'\)) and [UNASSIGN](javascript:call_link\('abapunassign.htm'\)) statements enable the state of a field symbol to be established and modified at any time. This makes ABAP programs simpler and less error-prone.

Further changes:

-   Dynamic ASSIGN (ASSIGN (f) TO <fs>.):
    If <fs> is an untyped field symbol and the contents of f are invalid, ,the field symbol is not set.
    

-   ASSIGN with offset and length for VALUE parameters in FORMS and FUNCTIONS:
    A runtime error is produced if ASSIGN f+off(len) TO <fs> is used to address areas beyond the range of the VALUE parameter f.
    

-   Non-assigned field symbols in INSERT, SORT, and AT:
    If the field symbol <fs> was not yet assigned (using [ASSIGN](javascript:call_link\('abapassign.htm'\))), it is ignored in the following statements:
    [INSERT <fs> INTO fg.](javascript:call_link\('abapinsert_fg.htm'\))
    [SORT BY <fs>.](javascript:call_link\('abapsort_extract.htm'\))
    [SORT itab BY <fs>.](javascript:call_link\('abapsort_itab.htm'\))
    [AT NEW <fs>.](javascript:call_link\('abapat_extract.htm'\))
    [AT END OF <fs>.](javascript:call_link\('abapat_extract.htm'\))