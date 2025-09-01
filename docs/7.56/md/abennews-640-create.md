  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Creating Objects in Release 6.40

[1\. Reference to a Type Description Object in CREATE DATA](#!ABAP_MODIFICATION_1@1@)
[2\. Any Reference Type in CREATE DATA](#!ABAP_MODIFICATION_2@2@)
[3\. Reference to a Generic Table Type in CREATE DATA](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference to a Type Description Object in CREATE DATA

The new addition [HANDLE](javascript:call_link\('abapcreate_data_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) makes it possible to reference [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") when data objects are created.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))). Together with the addition HANDLE, this allows the dynamic construction of any type of data objects for the program runtime.

Modification 2   

Any Reference Type in CREATE DATA

In the statement
[CREATE DATA dref TYPE REF TO (name).](javascript:call_link\('abapcreate_data_reference.htm'\))
it is now also possible to specify a data type in name. Previously, it was only possible to specify classes and interfaces.

Hint

This change was also transported to Release 6.20.

Modification 3   

Reference to a Generic Table Type in CREATE DATA

Previously, only non-generic table types could be specified in [CREATE DATA - TYPE](javascript:call_link\('abapcreate_data_existing.htm'\)). As of Release 6.40, table types with generic keys can also be specified. In this case, a new linked table type with a standard key is created and used.