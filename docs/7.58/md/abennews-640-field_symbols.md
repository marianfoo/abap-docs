  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for ABAP Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-FIELD_SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Field Symbols in ABAP Release 6.40

Modification

Reference to a Type Description Object in ASSIGN

The new addition [HANDLE](javascript:call_link\('abapassign_casting.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) can be used to refer to the [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") when [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") field symbols.

From ABAP release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for ABAP release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.