  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Named Includes in Release 4.6A

The statements [INCLUDE STRUCTURE rec.](javascript:call_link\('abapinclude_type.htm'\)) and [INCLUDE TYPE type.](javascript:call_link\('abapinclude_type.htm'\)) were enhanced so that symbolic accesses to groups of fields in structures are possible.

Variants:

-   The addition AS name causes the components of a type or structure inserted with INCLUDE to be accessed as a whole under the alias name.
    
-   The addition RENAMING WITH SUFFIX suff renames the component names by appending the ID suff. The structure type can then be included more than once.
    

Advantages:

-   [Flat</ structures and hierarchy views can be defined simultaneously.](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry")
    
-   There are no problems in [alignment](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") because the flat structure is automatically aligned so that it can carry the hierarhic structure.
    
-   Flat and hierarchic views use the same storage space, so no exchange between the different storage areas is necessary.
    
-   Existing structures can be extended compatibly and are completely integrated in the ABAP Dictionary.