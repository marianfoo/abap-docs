  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

sharing

When [assignments](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry") are made between [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") ([strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") and [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") of the same type) and if these data types are [passed by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), for performance reasons, only the required internal administrative entries for the string or [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") are passed ([table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") possible only if the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") itself does not contain any [table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry")). Sharing is kept until one of the data objects involved is accessed and changed. At this point, the actual copy process takes place. See also [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

[→ More about](javascript:call_link\('abenmemory_consumption_3.htm'\))