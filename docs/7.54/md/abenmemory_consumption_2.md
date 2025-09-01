  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

Maximum Size of Dynamic Data Objects

In addition to the maximum memory size that the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") can request for [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), their maximum size is also limited by the following factors:

-   An upper limit for the amount of places in strings or rows of internal tables results from the fact that 4 byte integers are used to address them internally and in ABAP statements. This limits them to 2147483647.

-   The size of strings and hash tables is limited by the biggest memory block that can be requested in one chunk. This is a maximum of 2 GB and is usually further limited using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB. For strings, the value of the profile parameter directly represents the maximum size that can be occupied. The maximum amount of rows in hash tables depends on the required size of the hash administration that has to be stored there. Currently, it can be calculated from the largest power of two that fits into the value of the profile parameter divided by 8. For example, if the profile parameter specifies 250 MB, a hashed table can contain a maximum of roughly 16 million entries (128 times 1024 to the power of two divided by 8).

The actual maximum size is generally smaller than given by the above limits, since the overall available memory is normally not only used by a string or an internal table.

Note

If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.