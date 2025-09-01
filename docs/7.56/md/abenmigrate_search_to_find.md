  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [SEARCH](javascript:call_link\('abapsearch-.htm'\)) → 

Migrating SEARCH to FIND

When migrating from the obsolete [SEARCH](javascript:call_link\('abapsearch-.htm'\)) to the [FIND](javascript:call_link\('abapfind.htm'\)) statement, the following points should be respected:

-   With ENDING AT a position greater than the length of the data object to be searched can be specified for SEARCH. This is not possible for the addition SECTION OF of FIND and an exception is raised.
-   A position greater than the length of the data object to be searched specified behind STARTING AT for SEARCH sets sy-subrc to 4. Such a specification for SECTION OF of FIND raises an exception.
-   A position 0 specified behind STARTING AT for SEARCH sets sy-subrc to 4. Setting the respective offset to -1 for SECTION OF of FIND raises an exception.
-   SEARCH sets the system field sy-fdpos, even if a search is not successful. FIND does not affect the system field sy-fdpos. The system field sy-fdpos must not be evaluated after FIND.

When migrating to [string functions](javascript:call_link\('abenstring_functions.htm'\)) used in operand positions, different rules apply. Especially, system fields cannot be evaluated after using a function.