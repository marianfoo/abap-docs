  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

RAP persistent table

[DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is based on. For transactional changes of RAP persistent table data, the data is loaded into the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). At the end of a [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), changes in the transactional buffer are either written back to the persistent table (commit) or discarded (rollback).

[→ More about](javascript:call_link\('abenbdl_persistent_table.htm'\))