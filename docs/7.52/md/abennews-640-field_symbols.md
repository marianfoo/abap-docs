  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Field Symbols in Release 6.40

[1\. Reference to a type description object in ASSIGN](#!ABAP_MODIFICATION_1@1@)

Modification 1

Reference to a type description object in ASSIGN

The new addition [HANDLE](javascript:call_link\('abapassign_casting.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) can be used to refer to the [RTTS](javascript:call_link\('abenrtts_glosry.htm'\) "Glossary Entry") [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") when [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") field symbols.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.