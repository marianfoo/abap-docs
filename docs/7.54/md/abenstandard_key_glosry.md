  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

standard key

[Primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), whose [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") (if the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") is structured) are all table fields with [character-like data types](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry") and [byte-like data types](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry"). If the row type contains [substructures](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), these are broken down into elementary [components](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry"). The standard key for non-structured row types is the entire table row if the row type itself is not a table type. If there are no relevant table fields or if the row type is itself a table type, the standard key of [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") is empty or contains no key fields.

[→ More](javascript:call_link\('abenitab_standard_key.htm'\))