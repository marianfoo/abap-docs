  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Named Includes in Release 4.6A

The statements [INCLUDE STRUCTURE rec.](javascript:call_link\('abapinclude_type.htm'\)) and [INCLUDE TYPE type.](javascript:call_link\('abapinclude_type.htm'\)) were enhanced so that symbolic accesses to groups of fields in structures are possible.

Variants:

-   The addition AS name causes the components of a type or structure included using INCLUDE to be accessed as a whole under the alias name.

-   The addition RENAMING WITH SUFFIX suff renames the component names by appending the ID suff. The structure type can then be included more than once.

Advantages:

-   [Flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structures and hierarchy views can be defined simultaneously.

-   There are no problems in [alignment](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") because the flat structure is aligned automatically so that it can carry the hierarchical structure.

-   Flat and hierarchical views use the same memory, so that no exchange between the different memory areas is necessary.

-   Existing structures can be enhanced compatibly and are integrated in full into ABAP Dictionary.