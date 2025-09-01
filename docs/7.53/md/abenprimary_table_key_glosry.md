  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

primary table key

Each [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") has a primary [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") that is either a self-defined key or the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"). In [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), the primary key is a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") and in [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the primary key is a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"). Both of these table categories are [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry") for which key access is optimized and where the primary key has its own administration. The key fields of these tables are read-only when individual rows are accessed. [Standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not read-only.

[→ More](javascript:call_link\('abenitab_key_primary.htm'\))