  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [text element](javascript:call_link\('abentextpool.htm'\)) →  [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)) → 

READ TEXTPOOL - Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

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

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE