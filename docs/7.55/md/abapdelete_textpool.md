  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) →  [Internal Statement for Editing Text Elements](javascript:call_link\('abengeneric_text_internal.htm'\)) → 

DELETE TEXTPOOL

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE TEXTPOOL prog LANGUAGE lg.

Addition:

[... STATE state](#!ABAP_ONE_ADD@1@)

Effect

[All](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") text elements in the program whose name is in the field prog are deleted from the library in the specified language lg.
If the value '\*' is used for lg, the text elements of all languages are deleted.

Example

Deletes all text elements of the program "PROGNAME" in the language "English".

DATA PROGRAM LIKE SY-REPID VALUE 'PROGNAME'.
DELETE TEXTPOOL PROGRAM LANGUAGE 'E'.

Addition

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE